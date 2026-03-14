#!/usr/bin/env python3
"""
Suomi Oppi — Backend Server
Zero-dependency Python server with SQLite auth & progress tracking.
"""

import hashlib
import http.server
import json
import os
import secrets
import sqlite3
import time
import urllib.parse
from datetime import datetime, timedelta
from pathlib import Path

DB_PATH = Path(os.environ.get("DB_PATH", str(Path(__file__).parent / "suomioppi.db")))
PORT = int(os.environ.get("PORT", 8080))

# ── Database Setup ──

def get_db():
    conn = sqlite3.connect(str(DB_PATH))
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode=WAL")
    conn.execute("PRAGMA foreign_keys=ON")
    return conn

def init_db():
    conn = get_db()
    conn.executescript("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            display_name TEXT NOT NULL,
            password_hash TEXT NOT NULL,
            salt TEXT NOT NULL,
            created_at TEXT DEFAULT (datetime('now')),
            daily_goal INTEGER DEFAULT 50,
            preferred_lang TEXT DEFAULT 'fi'
        );

        CREATE TABLE IF NOT EXISTS sessions (
            token TEXT PRIMARY KEY,
            user_id INTEGER NOT NULL,
            created_at TEXT DEFAULT (datetime('now')),
            expires_at TEXT NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users(id)
        );

        CREATE TABLE IF NOT EXISTS progress (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            lesson_id TEXT NOT NULL,
            completed_at TEXT DEFAULT (datetime('now')),
            score INTEGER DEFAULT 0,
            accuracy REAL DEFAULT 0,
            time_spent INTEGER DEFAULT 0,
            FOREIGN KEY (user_id) REFERENCES users(id),
            UNIQUE(user_id, lesson_id)
        );

        CREATE TABLE IF NOT EXISTS exercise_results (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            lesson_id TEXT NOT NULL,
            exercise_index INTEGER NOT NULL,
            correct INTEGER NOT NULL,
            attempts INTEGER DEFAULT 1,
            last_attempted TEXT DEFAULT (datetime('now')),
            next_review TEXT,
            review_interval INTEGER DEFAULT 1,
            FOREIGN KEY (user_id) REFERENCES users(id),
            UNIQUE(user_id, lesson_id, exercise_index)
        );

        CREATE TABLE IF NOT EXISTS bookmarks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            lesson_id TEXT NOT NULL,
            exercise_index INTEGER NOT NULL,
            created_at TEXT DEFAULT (datetime('now')),
            FOREIGN KEY (user_id) REFERENCES users(id),
            UNIQUE(user_id, lesson_id, exercise_index)
        );

        CREATE TABLE IF NOT EXISTS daily_activity (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            date TEXT NOT NULL,
            xp_earned INTEGER DEFAULT 0,
            lessons_done INTEGER DEFAULT 0,
            exercises_done INTEGER DEFAULT 0,
            correct_answers INTEGER DEFAULT 0,
            FOREIGN KEY (user_id) REFERENCES users(id),
            UNIQUE(user_id, date)
        );

        CREATE TABLE IF NOT EXISTS achievements (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            achievement_id TEXT NOT NULL,
            unlocked_at TEXT DEFAULT (datetime('now')),
            FOREIGN KEY (user_id) REFERENCES users(id),
            UNIQUE(user_id, achievement_id)
        );

        CREATE TABLE IF NOT EXISTS vocab_progress (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            word_id TEXT NOT NULL,
            correct INTEGER DEFAULT 0,
            incorrect INTEGER DEFAULT 0,
            ease_factor REAL DEFAULT 2.5,
            interval_days INTEGER DEFAULT 0,
            next_review TEXT DEFAULT (datetime('now')),
            last_reviewed TEXT,
            FOREIGN KEY (user_id) REFERENCES users(id),
            UNIQUE(user_id, word_id)
        );

        CREATE TABLE IF NOT EXISTS practice_test_results (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            taken_at TEXT DEFAULT (datetime('now')),
            total_questions INTEGER NOT NULL,
            correct_answers INTEGER NOT NULL,
            score REAL NOT NULL,
            time_spent INTEGER DEFAULT 0,
            module_scores TEXT DEFAULT '{}',
            FOREIGN KEY (user_id) REFERENCES users(id)
        );
    """)
    conn.commit()
    conn.close()

# ── Auth Helpers ──

def hash_password(password, salt=None):
    if salt is None:
        salt = secrets.token_hex(32)
    h = hashlib.pbkdf2_hmac("sha256", password.encode(), salt.encode(), 100000)
    return h.hex(), salt

def create_session(user_id):
    token = secrets.token_urlsafe(48)
    expires = (datetime.now() + timedelta(days=30)).isoformat()
    conn = get_db()
    conn.execute("INSERT INTO sessions (token, user_id, expires_at) VALUES (?, ?, ?)",
                 (token, user_id, expires))
    conn.commit()
    conn.close()
    return token

def get_user_from_token(token):
    if not token:
        return None
    conn = get_db()
    row = conn.execute(
        "SELECT u.* FROM sessions s JOIN users u ON s.user_id = u.id "
        "WHERE s.token = ? AND s.expires_at > datetime('now')", (token,)
    ).fetchone()
    conn.close()
    return dict(row) if row else None

# ── Achievement Checker ──

ACHIEVEMENTS = {
    "first_lesson": {"fi": "Ensimmäinen oppitunti", "en": "First Lesson", "icon": "🌱", "desc_fi": "Suorita ensimmäinen oppitunti", "desc_en": "Complete your first lesson"},
    "streak_3": {"fi": "3 päivän putki", "en": "3-Day Streak", "icon": "🔥", "desc_fi": "Opiskele 3 päivää peräkkäin", "desc_en": "Study 3 days in a row"},
    "streak_7": {"fi": "Viikon putki", "en": "Week Streak", "icon": "💪", "desc_fi": "Opiskele 7 päivää peräkkäin", "desc_en": "Study 7 days in a row"},
    "streak_30": {"fi": "Kuukauden putki", "en": "Month Streak", "icon": "🏆", "desc_fi": "Opiskele 30 päivää peräkkäin", "desc_en": "Study 30 days in a row"},
    "perfect_lesson": {"fi": "Täydellinen oppitunti", "en": "Perfect Lesson", "icon": "⭐", "desc_fi": "Suorita oppitunti 100 % tarkkuudella", "desc_en": "Complete a lesson with 100% accuracy"},
    "module_complete": {"fi": "Moduuli suoritettu", "en": "Module Complete", "icon": "🎓", "desc_fi": "Suorita kokonainen moduuli", "desc_en": "Complete an entire module"},
    "xp_100": {"fi": "100 XP", "en": "100 XP", "icon": "💯", "desc_fi": "Ansaitse 100 XP yhteensä", "desc_en": "Earn 100 XP total"},
    "xp_500": {"fi": "500 XP", "en": "500 XP", "icon": "🌟", "desc_fi": "Ansaitse 500 XP yhteensä", "desc_en": "Earn 500 XP total"},
    "xp_1000": {"fi": "1000 XP", "en": "1000 XP", "icon": "👑", "desc_fi": "Ansaitse 1000 XP yhteensä", "desc_en": "Earn 1000 XP total"},
    "bookworm": {"fi": "Kirjamato", "en": "Bookworm", "icon": "📚", "desc_fi": "Tallenna 5 harjoitusta kirjanmerkkeihin", "desc_en": "Bookmark 5 exercises"},
    "reviewer": {"fi": "Kertaaja", "en": "Reviewer", "icon": "🔄", "desc_fi": "Suorita 10 kertausharjoitusta", "desc_en": "Complete 10 review exercises"},
    "halfway": {"fi": "Puolivälissä", "en": "Halfway There", "icon": "🎯", "desc_fi": "Suorita 50 % kaikista oppitunneista", "desc_en": "Complete 50% of all lessons"},
    "graduate": {"fi": "Valmistunut", "en": "Graduate", "icon": "🎉", "desc_fi": "Suorita kaikki oppitunnit", "desc_en": "Complete all lessons"},
}

def check_achievements(user_id):
    conn = get_db()
    new_achievements = []
    existing = {r["achievement_id"] for r in conn.execute(
        "SELECT achievement_id FROM achievements WHERE user_id = ?", (user_id,)).fetchall()}

    # Count completed lessons
    completed = conn.execute("SELECT COUNT(*) as c FROM progress WHERE user_id = ?", (user_id,)).fetchone()["c"]
    # Total XP
    total_xp = conn.execute("SELECT COALESCE(SUM(xp_earned),0) as x FROM daily_activity WHERE user_id = ?", (user_id,)).fetchone()["x"]
    # Streak
    streak = calculate_streak(conn, user_id)
    # Perfect lessons
    perfect = conn.execute("SELECT COUNT(*) as c FROM progress WHERE user_id = ? AND accuracy >= 100", (user_id,)).fetchone()["c"]
    # Bookmarks
    bookmarks = conn.execute("SELECT COUNT(*) as c FROM bookmarks WHERE user_id = ?", (user_id,)).fetchone()["c"]
    # Review exercises done
    reviews = conn.execute("SELECT COALESCE(SUM(attempts)-COUNT(*),0) as c FROM exercise_results WHERE user_id = ? AND attempts > 1", (user_id,)).fetchone()["c"]

    checks = {
        "first_lesson": completed >= 1,
        "streak_3": streak >= 3,
        "streak_7": streak >= 7,
        "streak_30": streak >= 30,
        "perfect_lesson": perfect >= 1,
        "xp_100": total_xp >= 100,
        "xp_500": total_xp >= 500,
        "xp_1000": total_xp >= 1000,
        "bookworm": bookmarks >= 5,
        "reviewer": reviews >= 10,
        "halfway": completed >= 8,  # ~50% of ~16 lessons
        "graduate": completed >= 16,
    }

    for aid, condition in checks.items():
        if condition and aid not in existing:
            conn.execute("INSERT OR IGNORE INTO achievements (user_id, achievement_id) VALUES (?, ?)", (user_id, aid))
            new_achievements.append({"id": aid, **ACHIEVEMENTS[aid]})

    conn.commit()
    conn.close()
    return new_achievements

def calculate_streak(conn, user_id):
    rows = conn.execute(
        "SELECT DISTINCT date FROM daily_activity WHERE user_id = ? ORDER BY date DESC", (user_id,)
    ).fetchall()
    if not rows:
        return 0
    streak = 0
    today = datetime.now().strftime("%Y-%m-%d")
    expected = today
    for row in rows:
        if row["date"] == expected:
            streak += 1
            expected = (datetime.strptime(expected, "%Y-%m-%d") - timedelta(days=1)).strftime("%Y-%m-%d")
        elif row["date"] < expected:
            break
    return streak

# ── API Handlers ──

def api_register(data):
    username = data.get("username", "").strip().lower()
    display_name = data.get("display_name", "").strip()
    password = data.get("password", "")

    if not username or not password:
        return 400, {"error": "Käyttäjänimi ja salasana vaaditaan / Username and password required"}
    if len(username) < 3:
        return 400, {"error": "Käyttäjänimen pitää olla vähintään 3 merkkiä / Username must be at least 3 characters"}
    if len(password) < 6:
        return 400, {"error": "Salasanan pitää olla vähintään 6 merkkiä / Password must be at least 6 characters"}

    if not display_name:
        display_name = username

    pw_hash, salt = hash_password(password)
    conn = get_db()
    try:
        conn.execute("INSERT INTO users (username, display_name, password_hash, salt) VALUES (?, ?, ?, ?)",
                     (username, display_name, pw_hash, salt))
        conn.commit()
        user_id = conn.execute("SELECT id FROM users WHERE username = ?", (username,)).fetchone()["id"]
        token = create_session(user_id)
        conn.close()
        return 200, {"token": token, "user": {"id": user_id, "username": username, "display_name": display_name, "daily_goal": 50, "preferred_lang": "fi"}}
    except sqlite3.IntegrityError:
        conn.close()
        return 409, {"error": "Käyttäjänimi on jo käytössä / Username already taken"}

def api_login(data):
    username = data.get("username", "").strip().lower()
    password = data.get("password", "")

    conn = get_db()
    user = conn.execute("SELECT * FROM users WHERE username = ?", (username,)).fetchone()
    conn.close()

    if not user:
        return 401, {"error": "Väärä käyttäjänimi tai salasana / Invalid username or password"}

    pw_hash, _ = hash_password(password, user["salt"])
    if pw_hash != user["password_hash"]:
        return 401, {"error": "Väärä käyttäjänimi tai salasana / Invalid username or password"}

    token = create_session(user["id"])
    return 200, {"token": token, "user": {
        "id": user["id"], "username": user["username"],
        "display_name": user["display_name"],
        "daily_goal": user["daily_goal"],
        "preferred_lang": user["preferred_lang"]
    }}

def api_logout(user, data):
    # We don't have the token easily here, but we can clean up
    return 200, {"ok": True}

def api_get_profile(user, data):
    conn = get_db()
    total_xp = conn.execute("SELECT COALESCE(SUM(xp_earned),0) as x FROM daily_activity WHERE user_id = ?", (user["id"],)).fetchone()["x"]
    streak = calculate_streak(conn, user["id"])
    completed = conn.execute("SELECT COUNT(*) as c FROM progress WHERE user_id = ?", (user["id"],)).fetchone()["c"]
    total_exercises = conn.execute("SELECT COUNT(*) as c FROM exercise_results WHERE user_id = ?", (user["id"],)).fetchone()["c"]
    correct_exercises = conn.execute("SELECT COUNT(*) as c FROM exercise_results WHERE user_id = ? AND correct = 1", (user["id"],)).fetchone()["c"]
    achievements = [dict(r) for r in conn.execute("SELECT achievement_id, unlocked_at FROM achievements WHERE user_id = ?", (user["id"],)).fetchall()]
    today = datetime.now().strftime("%Y-%m-%d")
    today_xp = conn.execute("SELECT COALESCE(xp_earned, 0) as x FROM daily_activity WHERE user_id = ? AND date = ?", (user["id"], today)).fetchone()
    today_xp = today_xp["x"] if today_xp else 0
    conn.close()

    return 200, {
        "user": {
            "id": user["id"], "username": user["username"],
            "display_name": user["display_name"],
            "daily_goal": user["daily_goal"],
            "preferred_lang": user["preferred_lang"]
        },
        "stats": {
            "total_xp": total_xp,
            "streak": streak,
            "lessons_completed": completed,
            "total_exercises": total_exercises,
            "correct_exercises": correct_exercises,
            "accuracy": round(correct_exercises / total_exercises * 100) if total_exercises > 0 else 0,
            "today_xp": today_xp,
        },
        "achievements": achievements
    }

def api_update_settings(user, data):
    conn = get_db()
    if "daily_goal" in data:
        conn.execute("UPDATE users SET daily_goal = ? WHERE id = ?", (int(data["daily_goal"]), user["id"]))
    if "display_name" in data:
        conn.execute("UPDATE users SET display_name = ? WHERE id = ?", (data["display_name"].strip(), user["id"]))
    if "preferred_lang" in data:
        conn.execute("UPDATE users SET preferred_lang = ? WHERE id = ?", (data["preferred_lang"], user["id"]))
    if "password" in data and len(data["password"]) >= 6:
        pw_hash, salt = hash_password(data["password"])
        conn.execute("UPDATE users SET password_hash = ?, salt = ? WHERE id = ?", (pw_hash, salt, user["id"]))
    conn.commit()
    conn.close()
    return 200, {"ok": True}

def api_save_progress(user, data):
    lesson_id = data.get("lesson_id")
    score = data.get("score", 0)
    accuracy = data.get("accuracy", 0)
    time_spent = data.get("time_spent", 0)
    xp_earned = data.get("xp_earned", 0)
    exercise_results = data.get("exercise_results", [])

    conn = get_db()

    # Upsert lesson progress
    conn.execute("""
        INSERT INTO progress (user_id, lesson_id, score, accuracy, time_spent)
        VALUES (?, ?, ?, ?, ?)
        ON CONFLICT(user_id, lesson_id) DO UPDATE SET
            score = MAX(score, excluded.score),
            accuracy = MAX(accuracy, excluded.accuracy),
            time_spent = time_spent + excluded.time_spent,
            completed_at = datetime('now')
    """, (user["id"], lesson_id, score, accuracy, time_spent))

    # Save individual exercise results with spaced repetition
    for er in exercise_results:
        idx = er.get("exercise_index", 0)
        correct = 1 if er.get("correct") else 0

        existing = conn.execute(
            "SELECT * FROM exercise_results WHERE user_id = ? AND lesson_id = ? AND exercise_index = ?",
            (user["id"], lesson_id, idx)).fetchone()

        if existing:
            new_attempts = existing["attempts"] + 1
            if correct:
                new_interval = min(existing["review_interval"] * 2, 30)
            else:
                new_interval = 1
            next_review = (datetime.now() + timedelta(days=new_interval)).isoformat()
            conn.execute("""
                UPDATE exercise_results SET correct = ?, attempts = ?, last_attempted = datetime('now'),
                next_review = ?, review_interval = ? WHERE id = ?
            """, (correct, new_attempts, next_review, new_interval, existing["id"]))
        else:
            next_review = (datetime.now() + timedelta(days=1 if correct else 0)).isoformat()
            conn.execute("""
                INSERT INTO exercise_results (user_id, lesson_id, exercise_index, correct, next_review, review_interval)
                VALUES (?, ?, ?, ?, ?, ?)
            """, (user["id"], lesson_id, idx, correct, next_review, 1))

    # Update daily activity
    today = datetime.now().strftime("%Y-%m-%d")
    correct_count = sum(1 for er in exercise_results if er.get("correct"))
    conn.execute("""
        INSERT INTO daily_activity (user_id, date, xp_earned, lessons_done, exercises_done, correct_answers)
        VALUES (?, ?, ?, 1, ?, ?)
        ON CONFLICT(user_id, date) DO UPDATE SET
            xp_earned = xp_earned + excluded.xp_earned,
            lessons_done = lessons_done + 1,
            exercises_done = exercises_done + excluded.exercises_done,
            correct_answers = correct_answers + excluded.correct_answers
    """, (user["id"], today, xp_earned, len(exercise_results), correct_count))

    conn.commit()
    conn.close()

    # Check achievements
    new_achievements = check_achievements(user["id"])
    return 200, {"ok": True, "new_achievements": new_achievements}

def api_get_progress(user, data):
    conn = get_db()
    lessons = [dict(r) for r in conn.execute(
        "SELECT lesson_id, score, accuracy, completed_at, time_spent FROM progress WHERE user_id = ?",
        (user["id"],)).fetchall()]
    conn.close()
    return 200, {"completed": {l["lesson_id"]: l for l in lessons}}

def api_get_review(user, data):
    """Get exercises due for spaced repetition review."""
    conn = get_db()
    due = [dict(r) for r in conn.execute("""
        SELECT lesson_id, exercise_index, correct, attempts, review_interval
        FROM exercise_results
        WHERE user_id = ? AND (next_review <= datetime('now') OR correct = 0)
        ORDER BY correct ASC, next_review ASC
        LIMIT 20
    """, (user["id"],)).fetchall()]
    conn.close()
    return 200, {"review_exercises": due}

def api_toggle_bookmark(user, data):
    lesson_id = data.get("lesson_id")
    exercise_index = data.get("exercise_index", 0)

    conn = get_db()
    existing = conn.execute(
        "SELECT id FROM bookmarks WHERE user_id = ? AND lesson_id = ? AND exercise_index = ?",
        (user["id"], lesson_id, exercise_index)).fetchone()

    if existing:
        conn.execute("DELETE FROM bookmarks WHERE id = ?", (existing["id"],))
        action = "removed"
    else:
        conn.execute("INSERT INTO bookmarks (user_id, lesson_id, exercise_index) VALUES (?, ?, ?)",
                     (user["id"], lesson_id, exercise_index))
        action = "added"
    conn.commit()

    # Check bookworm achievement
    new_achievements = check_achievements(user["id"])
    conn.close()
    return 200, {"action": action, "new_achievements": new_achievements}

def api_get_bookmarks(user, data):
    conn = get_db()
    bookmarks = [dict(r) for r in conn.execute(
        "SELECT lesson_id, exercise_index, created_at FROM bookmarks WHERE user_id = ? ORDER BY created_at DESC",
        (user["id"],)).fetchall()]
    conn.close()
    return 200, {"bookmarks": bookmarks}

def api_get_stats(user, data):
    conn = get_db()
    # Daily activity for last 30 days
    activity = [dict(r) for r in conn.execute("""
        SELECT date, xp_earned, lessons_done, exercises_done, correct_answers
        FROM daily_activity WHERE user_id = ?
        ORDER BY date DESC LIMIT 30
    """, (user["id"],)).fetchall()]

    # Per-module accuracy
    module_stats = [dict(r) for r in conn.execute("""
        SELECT
            SUBSTR(lesson_id, 1, INSTR(lesson_id, '-') - 1) as module_prefix,
            COUNT(*) as exercises,
            SUM(CASE WHEN correct = 1 THEN 1 ELSE 0 END) as correct,
            ROUND(AVG(CASE WHEN correct = 1 THEN 100.0 ELSE 0 END), 1) as accuracy
        FROM exercise_results WHERE user_id = ?
        GROUP BY module_prefix
    """, (user["id"],)).fetchall()]

    # Weak areas (exercises with low accuracy)
    weak = [dict(r) for r in conn.execute("""
        SELECT lesson_id, exercise_index, attempts,
            CASE WHEN correct = 0 THEN 0 ELSE 100 END as last_correct
        FROM exercise_results WHERE user_id = ? AND correct = 0
        ORDER BY attempts DESC LIMIT 10
    """, (user["id"],)).fetchall()]

    conn.close()
    return 200, {"activity": activity, "module_stats": module_stats, "weak_areas": weak}

def api_get_leaderboard(user, data):
    conn = get_db()
    leaders = [dict(r) for r in conn.execute("""
        SELECT u.display_name, u.username,
            COALESCE(SUM(d.xp_earned), 0) as total_xp,
            COUNT(DISTINCT p.lesson_id) as lessons_done
        FROM users u
        LEFT JOIN daily_activity d ON u.id = d.user_id
        LEFT JOIN progress p ON u.id = p.user_id
        GROUP BY u.id
        ORDER BY total_xp DESC
        LIMIT 20
    """).fetchall()]
    conn.close()
    return 200, {"leaderboard": leaders}

def api_get_achievements(user, data):
    conn = get_db()
    unlocked = {r["achievement_id"]: r["unlocked_at"] for r in conn.execute(
        "SELECT achievement_id, unlocked_at FROM achievements WHERE user_id = ?", (user["id"],)).fetchall()}
    conn.close()

    all_achievements = []
    for aid, info in ACHIEVEMENTS.items():
        all_achievements.append({
            "id": aid,
            "unlocked": aid in unlocked,
            "unlocked_at": unlocked.get(aid),
            **info
        })
    return 200, {"achievements": all_achievements}

# ── Vocabulary API ──

def api_get_vocab_progress(user, data):
    conn = get_db()
    rows = [dict(r) for r in conn.execute(
        "SELECT word_id, correct, incorrect, ease_factor, interval_days, next_review FROM vocab_progress WHERE user_id = ?",
        (user["id"],)).fetchall()]
    conn.close()
    return 200, {"vocab": {r["word_id"]: r for r in rows}}

def api_get_vocab_review(user, data):
    conn = get_db()
    due = [dict(r) for r in conn.execute("""
        SELECT word_id, correct, incorrect, interval_days
        FROM vocab_progress
        WHERE user_id = ? AND next_review <= datetime('now')
        ORDER BY next_review ASC LIMIT 30
    """, (user["id"],)).fetchall()]
    # Also get words never studied
    known = {r["word_id"] for r in conn.execute(
        "SELECT word_id FROM vocab_progress WHERE user_id = ?", (user["id"],)).fetchall()}
    conn.close()
    return 200, {"due": due, "known_ids": list(known)}

def api_save_vocab_result(user, data):
    word_id = data.get("word_id")
    correct = data.get("correct", False)

    conn = get_db()
    existing = conn.execute(
        "SELECT * FROM vocab_progress WHERE user_id = ? AND word_id = ?",
        (user["id"], word_id)).fetchone()

    if existing:
        ef = existing["ease_factor"]
        interval = existing["interval_days"]
        if correct:
            if interval == 0:
                interval = 1
            elif interval == 1:
                interval = 6
            else:
                interval = round(interval * ef)
            ef = max(1.3, ef + 0.1 - (5 - 4) * (0.08 + (5 - 4) * 0.02))
            conn.execute("""
                UPDATE vocab_progress SET correct = correct + 1, ease_factor = ?,
                interval_days = ?, next_review = datetime('now', '+' || ? || ' days'),
                last_reviewed = datetime('now') WHERE id = ?
            """, (ef, interval, interval, existing["id"]))
        else:
            interval = 0
            ef = max(1.3, ef - 0.2)
            conn.execute("""
                UPDATE vocab_progress SET incorrect = incorrect + 1, ease_factor = ?,
                interval_days = 0, next_review = datetime('now'),
                last_reviewed = datetime('now') WHERE id = ?
            """, (ef, existing["id"]))
    else:
        interval = 1 if correct else 0
        next_days = 1 if correct else 0
        conn.execute("""
            INSERT INTO vocab_progress (user_id, word_id, correct, incorrect, interval_days, next_review, last_reviewed)
            VALUES (?, ?, ?, ?, ?, datetime('now', '+' || ? || ' days'), datetime('now'))
        """, (user["id"], word_id, 1 if correct else 0, 0 if correct else 1, interval, next_days))

    # Update daily XP
    xp = 5 if correct else 1
    today = datetime.now().strftime("%Y-%m-%d")
    conn.execute("""
        INSERT INTO daily_activity (user_id, date, xp_earned, exercises_done, correct_answers)
        VALUES (?, ?, ?, 1, ?)
        ON CONFLICT(user_id, date) DO UPDATE SET
            xp_earned = xp_earned + excluded.xp_earned,
            exercises_done = exercises_done + 1,
            correct_answers = correct_answers + excluded.correct_answers
    """, (user["id"], today, xp, 1 if correct else 0))

    conn.commit()
    conn.close()
    return 200, {"ok": True, "xp": xp}

# ── Practice Test API ──

def api_save_test_result(user, data):
    conn = get_db()
    conn.execute("""
        INSERT INTO practice_test_results (user_id, total_questions, correct_answers, score, time_spent, module_scores)
        VALUES (?, ?, ?, ?, ?, ?)
    """, (user["id"], data.get("total_questions", 0), data.get("correct_answers", 0),
          data.get("score", 0), data.get("time_spent", 0),
          json.dumps(data.get("module_scores", {}))))
    conn.commit()
    conn.close()
    new_achievements = check_achievements(user["id"])
    return 200, {"ok": True, "new_achievements": new_achievements}

def api_get_test_history(user, data):
    conn = get_db()
    tests = [dict(r) for r in conn.execute("""
        SELECT taken_at, total_questions, correct_answers, score, time_spent, module_scores
        FROM practice_test_results WHERE user_id = ? ORDER BY taken_at DESC LIMIT 20
    """, (user["id"],)).fetchall()]
    conn.close()
    for t in tests:
        t["module_scores"] = json.loads(t["module_scores"]) if t["module_scores"] else {}
    return 200, {"tests": tests}

# ── Route Dispatch ──

PUBLIC_ROUTES = {"register": api_register, "login": api_login}
AUTH_ROUTES = {
    "logout": api_logout,
    "profile": api_get_profile,
    "settings": api_update_settings,
    "save-progress": api_save_progress,
    "get-progress": api_get_progress,
    "review": api_get_review,
    "bookmark": api_toggle_bookmark,
    "bookmarks": api_get_bookmarks,
    "stats": api_get_stats,
    "leaderboard": api_get_leaderboard,
    "achievements": api_get_achievements,
    "vocab-progress": api_get_vocab_progress,
    "vocab-review": api_get_vocab_review,
    "vocab-result": api_save_vocab_result,
    "test-result": api_save_test_result,
    "test-history": api_get_test_history,
}

# ── HTTP Handler ──

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(Path(__file__).parent), **kwargs)

    def do_POST(self):
        if not self.path.startswith("/api/"):
            self.send_error(404)
            return

        route = self.path[5:]  # strip "/api/"
        content_len = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(content_len) if content_len else b"{}"

        try:
            data = json.loads(body)
        except json.JSONDecodeError:
            data = {}

        # Public routes
        if route in PUBLIC_ROUTES:
            status, response = PUBLIC_ROUTES[route](data)
            self.send_json(status, response)
            return

        # Auth routes
        if route in AUTH_ROUTES:
            token = self.headers.get("Authorization", "").replace("Bearer ", "")
            user = get_user_from_token(token)
            if not user:
                self.send_json(401, {"error": "Kirjaudu sisään / Please log in"})
                return
            status, response = AUTH_ROUTES[route](user, data)
            self.send_json(status, response)
            return

        self.send_error(404)

    def do_GET(self):
        if self.path.startswith("/api/"):
            # Support GET for some routes
            route = self.path[5:].split("?")[0]
            if route in AUTH_ROUTES:
                token = self.headers.get("Authorization", "").replace("Bearer ", "")
                user = get_user_from_token(token)
                if not user:
                    self.send_json(401, {"error": "Kirjaudu sisään / Please log in"})
                    return
                status, response = AUTH_ROUTES[route](user, {})
                self.send_json(status, response)
                return
            self.send_error(404)
            return
        super().do_GET()

    def send_json(self, status, data):
        body = json.dumps(data, ensure_ascii=False).encode()
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.end_headers()

    def log_message(self, format, *args):
        if "/api/" in (args[0] if args else ""):
            print(f"[API] {args[0]}")

if __name__ == "__main__":
    init_db()
    print(f"🟢 Suomi Oppi server running at http://0.0.0.0:{PORT}")
    print(f"   Local:   http://localhost:{PORT}")
    print(f"   Network: http://192.168.1.145:{PORT}")
    server = http.server.HTTPServer(("0.0.0.0", PORT), Handler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n🔴 Server stopped")
        server.server_close()
