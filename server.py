#!/usr/bin/env python3
"""
Suomi Oppi — Backend Server
Supports both SQLite (local dev) and PostgreSQL (Railway production).
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

PORT = int(os.environ.get("PORT", 8080))
DATABASE_URL = os.environ.get("DATABASE_URL", "")
USE_PG = bool(DATABASE_URL)

# ── Database Abstraction ──

if USE_PG:
    import psycopg2
    import psycopg2.extras

def get_db():
    if USE_PG:
        conn = psycopg2.connect(DATABASE_URL)
        conn.autocommit = False
        return conn
    else:
        db_path = Path(os.environ.get("DB_PATH", str(Path(__file__).parent / "suomioppi.db")))
        conn = sqlite3.connect(str(db_path))
        conn.row_factory = sqlite3.Row
        conn.execute("PRAGMA journal_mode=WAL")
        conn.execute("PRAGMA foreign_keys=ON")
        return conn

def db_execute(conn, sql, params=()):
    """Execute SQL, adapting syntax for SQLite vs PostgreSQL."""
    if USE_PG:
        # Convert ? placeholders to %s
        sql = sql.replace("?", "%s")
        # Convert SQLite functions to PostgreSQL
        sql = sql.replace("datetime('now')", "NOW()")
        sql = sql.replace("datetime('now',", "(NOW() +")
        sql = sql.replace("'+' || ", "'")
        sql = sql.replace(" || ' days')", " days'::interval)")
        sql = sql.replace("INSERT OR IGNORE", "INSERT")
        sql = sql.replace("COALESCE(SUM(attempts)-COUNT(*),0)", "COALESCE(SUM(attempts)-COUNT(*)::bigint,0)")
        cur = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
    else:
        cur = conn.cursor()
    cur.execute(sql, params)
    return cur

def db_fetchone(conn, sql, params=()):
    cur = db_execute(conn, sql, params)
    row = cur.fetchone()
    if row is None:
        return None
    if USE_PG:
        return dict(row)
    else:
        return dict(row)

def db_fetchall(conn, sql, params=()):
    cur = db_execute(conn, sql, params)
    rows = cur.fetchall()
    if USE_PG:
        return [dict(r) for r in rows]
    else:
        return [dict(r) for r in rows]

def init_db():
    conn = get_db()
    if USE_PG:
        cur = conn.cursor()
        cur.execute("""
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username TEXT UNIQUE NOT NULL,
                display_name TEXT NOT NULL,
                password_hash TEXT NOT NULL,
                salt TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT NOW(),
                daily_goal INTEGER DEFAULT 50,
                preferred_lang TEXT DEFAULT 'fi'
            );
            CREATE TABLE IF NOT EXISTS sessions (
                token TEXT PRIMARY KEY,
                user_id INTEGER NOT NULL REFERENCES users(id),
                created_at TIMESTAMP DEFAULT NOW(),
                expires_at TIMESTAMP NOT NULL
            );
            CREATE TABLE IF NOT EXISTS progress (
                id SERIAL PRIMARY KEY,
                user_id INTEGER NOT NULL REFERENCES users(id),
                lesson_id TEXT NOT NULL,
                completed_at TIMESTAMP DEFAULT NOW(),
                score INTEGER DEFAULT 0,
                accuracy REAL DEFAULT 0,
                time_spent INTEGER DEFAULT 0,
                UNIQUE(user_id, lesson_id)
            );
            CREATE TABLE IF NOT EXISTS exercise_results (
                id SERIAL PRIMARY KEY,
                user_id INTEGER NOT NULL REFERENCES users(id),
                lesson_id TEXT NOT NULL,
                exercise_index INTEGER NOT NULL,
                correct INTEGER NOT NULL,
                attempts INTEGER DEFAULT 1,
                last_attempted TIMESTAMP DEFAULT NOW(),
                next_review TIMESTAMP,
                review_interval INTEGER DEFAULT 1,
                UNIQUE(user_id, lesson_id, exercise_index)
            );
            CREATE TABLE IF NOT EXISTS bookmarks (
                id SERIAL PRIMARY KEY,
                user_id INTEGER NOT NULL REFERENCES users(id),
                lesson_id TEXT NOT NULL,
                exercise_index INTEGER NOT NULL,
                created_at TIMESTAMP DEFAULT NOW(),
                UNIQUE(user_id, lesson_id, exercise_index)
            );
            CREATE TABLE IF NOT EXISTS daily_activity (
                id SERIAL PRIMARY KEY,
                user_id INTEGER NOT NULL REFERENCES users(id),
                date TEXT NOT NULL,
                xp_earned INTEGER DEFAULT 0,
                lessons_done INTEGER DEFAULT 0,
                exercises_done INTEGER DEFAULT 0,
                correct_answers INTEGER DEFAULT 0,
                UNIQUE(user_id, date)
            );
            CREATE TABLE IF NOT EXISTS achievements (
                id SERIAL PRIMARY KEY,
                user_id INTEGER NOT NULL REFERENCES users(id),
                achievement_id TEXT NOT NULL,
                unlocked_at TIMESTAMP DEFAULT NOW(),
                UNIQUE(user_id, achievement_id)
            );
            CREATE TABLE IF NOT EXISTS vocab_progress (
                id SERIAL PRIMARY KEY,
                user_id INTEGER NOT NULL REFERENCES users(id),
                word_id TEXT NOT NULL,
                correct INTEGER DEFAULT 0,
                incorrect INTEGER DEFAULT 0,
                ease_factor REAL DEFAULT 2.5,
                interval_days INTEGER DEFAULT 0,
                next_review TIMESTAMP DEFAULT NOW(),
                last_reviewed TIMESTAMP,
                UNIQUE(user_id, word_id)
            );
            CREATE TABLE IF NOT EXISTS practice_test_results (
                id SERIAL PRIMARY KEY,
                user_id INTEGER NOT NULL REFERENCES users(id),
                taken_at TIMESTAMP DEFAULT NOW(),
                total_questions INTEGER NOT NULL,
                correct_answers INTEGER NOT NULL,
                score REAL NOT NULL,
                time_spent INTEGER DEFAULT 0,
                module_scores TEXT DEFAULT '{}'
            );
        """)
        conn.commit()
    else:
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
    print(f"   Database: {'PostgreSQL' if USE_PG else 'SQLite'}")

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
    db_execute(conn, "INSERT INTO sessions (token, user_id, expires_at) VALUES (?, ?, ?)",
               (token, user_id, expires))
    conn.commit()
    conn.close()
    return token

def get_user_from_token(token):
    if not token:
        return None
    conn = get_db()
    now = datetime.now().isoformat()
    row = db_fetchone(conn,
        "SELECT u.* FROM sessions s JOIN users u ON s.user_id = u.id "
        "WHERE s.token = ? AND s.expires_at > ?", (token, now))
    conn.close()
    return row

# ── Achievement Checker ──

ACHIEVEMENTS = {
    "first_lesson": {"fi": "Ensimmäinen oppitunti", "en": "First Lesson", "ru": "Первый урок", "icon": "🌱", "desc_fi": "Suorita ensimmäinen oppitunti", "desc_en": "Complete your first lesson", "desc_ru": "Пройди первый урок"},
    "streak_3": {"fi": "3 päivän putki", "en": "3-Day Streak", "ru": "3 дня подряд", "icon": "🔥", "desc_fi": "Opiskele 3 päivää peräkkäin", "desc_en": "Study 3 days in a row", "desc_ru": "Учись 3 дня подряд"},
    "streak_7": {"fi": "Viikon putki", "en": "Week Streak", "ru": "Неделя подряд", "icon": "💪", "desc_fi": "Opiskele 7 päivää peräkkäin", "desc_en": "Study 7 days in a row", "desc_ru": "Учись 7 дней подряд"},
    "streak_30": {"fi": "Kuukauden putki", "en": "Month Streak", "ru": "Месяц подряд", "icon": "🏆", "desc_fi": "Opiskele 30 päivää peräkkäin", "desc_en": "Study 30 days in a row", "desc_ru": "Учись 30 дней подряд"},
    "perfect_lesson": {"fi": "Täydellinen oppitunti", "en": "Perfect Lesson", "ru": "Идеальный урок", "icon": "⭐", "desc_fi": "Suorita oppitunti 100 % tarkkuudella", "desc_en": "Complete a lesson with 100% accuracy", "desc_ru": "Пройди урок со 100% точностью"},
    "module_complete": {"fi": "Moduuli suoritettu", "en": "Module Complete", "ru": "Модуль пройден", "icon": "🎓", "desc_fi": "Suorita kokonainen moduuli", "desc_en": "Complete an entire module", "desc_ru": "Пройди целый модуль"},
    "xp_100": {"fi": "100 XP", "en": "100 XP", "ru": "100 XP", "icon": "💯", "desc_fi": "Ansaitse 100 XP yhteensä", "desc_en": "Earn 100 XP total", "desc_ru": "Заработай 100 XP"},
    "xp_500": {"fi": "500 XP", "en": "500 XP", "ru": "500 XP", "icon": "🌟", "desc_fi": "Ansaitse 500 XP yhteensä", "desc_en": "Earn 500 XP total", "desc_ru": "Заработай 500 XP"},
    "xp_1000": {"fi": "1000 XP", "en": "1000 XP", "ru": "1000 XP", "icon": "👑", "desc_fi": "Ansaitse 1000 XP yhteensä", "desc_en": "Earn 1000 XP total", "desc_ru": "Заработай 1000 XP"},
    "bookworm": {"fi": "Kirjamato", "en": "Bookworm", "ru": "Книжный червь", "icon": "📚", "desc_fi": "Tallenna 5 harjoitusta kirjanmerkkeihin", "desc_en": "Bookmark 5 exercises", "desc_ru": "Сохрани 5 упражнений в закладки"},
    "reviewer": {"fi": "Kertaaja", "en": "Reviewer", "ru": "Повторяющий", "icon": "🔄", "desc_fi": "Suorita 10 kertausharjoitusta", "desc_en": "Complete 10 review exercises", "desc_ru": "Пройди 10 упражнений на повторение"},
    "halfway": {"fi": "Puolivälissä", "en": "Halfway There", "ru": "Половина пути", "icon": "🎯", "desc_fi": "Suorita 50 % kaikista oppitunneista", "desc_en": "Complete 50% of all lessons", "desc_ru": "Пройди 50% всех уроков"},
    "graduate": {"fi": "Valmistunut", "en": "Graduate", "ru": "Выпускник", "icon": "🎉", "desc_fi": "Suorita kaikki oppitunnit", "desc_en": "Complete all lessons", "desc_ru": "Пройди все уроки"},
}

def check_achievements(user_id):
    conn = get_db()
    new_achievements = []
    existing = {r["achievement_id"] for r in db_fetchall(conn,
        "SELECT achievement_id FROM achievements WHERE user_id = ?", (user_id,))}

    completed = db_fetchone(conn, "SELECT COUNT(*) as c FROM progress WHERE user_id = ?", (user_id,))["c"]
    total_xp = db_fetchone(conn, "SELECT COALESCE(SUM(xp_earned),0) as x FROM daily_activity WHERE user_id = ?", (user_id,))["x"]
    streak = calculate_streak(conn, user_id)
    perfect = db_fetchone(conn, "SELECT COUNT(*) as c FROM progress WHERE user_id = ? AND accuracy >= 100", (user_id,))["c"]
    bookmarks = db_fetchone(conn, "SELECT COUNT(*) as c FROM bookmarks WHERE user_id = ?", (user_id,))["c"]
    reviews = db_fetchone(conn, "SELECT COALESCE(SUM(attempts)-COUNT(*),0) as c FROM exercise_results WHERE user_id = ? AND attempts > 1", (user_id,))["c"]

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
        "halfway": completed >= 8,
        "graduate": completed >= 16,
    }

    for aid, condition in checks.items():
        if condition and aid not in existing:
            try:
                db_execute(conn, "INSERT INTO achievements (user_id, achievement_id) VALUES (?, ?)", (user_id, aid))
            except Exception:
                pass  # ignore duplicates
            new_achievements.append({"id": aid, **ACHIEVEMENTS[aid]})

    conn.commit()
    conn.close()
    return new_achievements

def calculate_streak(conn, user_id):
    rows = db_fetchall(conn,
        "SELECT DISTINCT date FROM daily_activity WHERE user_id = ? ORDER BY date DESC", (user_id,))
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
        return 400, {"error": "Username and password required"}
    if len(username) < 3:
        return 400, {"error": "Username must be at least 3 characters"}
    if len(password) < 6:
        return 400, {"error": "Password must be at least 6 characters"}
    if not display_name:
        display_name = username

    pw_hash, salt = hash_password(password)
    conn = get_db()
    try:
        db_execute(conn, "INSERT INTO users (username, display_name, password_hash, salt) VALUES (?, ?, ?, ?)",
                   (username, display_name, pw_hash, salt))
        conn.commit()
        user_id = db_fetchone(conn, "SELECT id FROM users WHERE username = ?", (username,))["id"]
        token = create_session(user_id)
        conn.close()
        return 200, {"token": token, "user": {"id": user_id, "username": username, "display_name": display_name, "daily_goal": 50, "preferred_lang": "fi"}}
    except Exception:
        conn.rollback()
        conn.close()
        return 409, {"error": "Username already taken"}

def api_login(data):
    username = data.get("username", "").strip().lower()
    password = data.get("password", "")
    conn = get_db()
    user = db_fetchone(conn, "SELECT * FROM users WHERE username = ?", (username,))
    conn.close()
    if not user:
        return 401, {"error": "Invalid username or password"}
    pw_hash, _ = hash_password(password, user["salt"])
    if pw_hash != user["password_hash"]:
        return 401, {"error": "Invalid username or password"}
    token = create_session(user["id"])
    return 200, {"token": token, "user": {
        "id": user["id"], "username": user["username"],
        "display_name": user["display_name"],
        "daily_goal": user["daily_goal"],
        "preferred_lang": user["preferred_lang"]
    }}

def api_logout(user, data):
    return 200, {"ok": True}

def api_get_profile(user, data):
    conn = get_db()
    total_xp = db_fetchone(conn, "SELECT COALESCE(SUM(xp_earned),0) as x FROM daily_activity WHERE user_id = ?", (user["id"],))["x"]
    streak = calculate_streak(conn, user["id"])
    completed = db_fetchone(conn, "SELECT COUNT(*) as c FROM progress WHERE user_id = ?", (user["id"],))["c"]
    total_exercises = db_fetchone(conn, "SELECT COUNT(*) as c FROM exercise_results WHERE user_id = ?", (user["id"],))["c"]
    correct_exercises = db_fetchone(conn, "SELECT COUNT(*) as c FROM exercise_results WHERE user_id = ? AND correct = 1", (user["id"],))["c"]
    achievements = db_fetchall(conn, "SELECT achievement_id, unlocked_at FROM achievements WHERE user_id = ?", (user["id"],))
    today = datetime.now().strftime("%Y-%m-%d")
    today_xp = db_fetchone(conn, "SELECT COALESCE(xp_earned, 0) as x FROM daily_activity WHERE user_id = ? AND date = ?", (user["id"], today))
    today_xp = today_xp["x"] if today_xp else 0
    conn.close()
    # Convert timestamps to strings for JSON
    for a in achievements:
        if a.get("unlocked_at") and not isinstance(a["unlocked_at"], str):
            a["unlocked_at"] = str(a["unlocked_at"])
    return 200, {
        "user": {"id": user["id"], "username": user["username"], "display_name": user["display_name"], "daily_goal": user["daily_goal"], "preferred_lang": user["preferred_lang"]},
        "stats": {"total_xp": total_xp, "streak": streak, "lessons_completed": completed, "total_exercises": total_exercises, "correct_exercises": correct_exercises, "accuracy": round(correct_exercises / total_exercises * 100) if total_exercises > 0 else 0, "today_xp": today_xp},
        "achievements": achievements
    }

def api_update_settings(user, data):
    conn = get_db()
    if "daily_goal" in data:
        db_execute(conn, "UPDATE users SET daily_goal = ? WHERE id = ?", (int(data["daily_goal"]), user["id"]))
    if "display_name" in data:
        db_execute(conn, "UPDATE users SET display_name = ? WHERE id = ?", (data["display_name"].strip(), user["id"]))
    if "preferred_lang" in data:
        db_execute(conn, "UPDATE users SET preferred_lang = ? WHERE id = ?", (data["preferred_lang"], user["id"]))
    if "password" in data and len(data["password"]) >= 6:
        pw_hash, salt = hash_password(data["password"])
        db_execute(conn, "UPDATE users SET password_hash = ?, salt = ? WHERE id = ?", (pw_hash, salt, user["id"]))
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

    # Upsert progress
    existing = db_fetchone(conn, "SELECT id, score, accuracy, time_spent FROM progress WHERE user_id = ? AND lesson_id = ?", (user["id"], lesson_id))
    if existing:
        db_execute(conn, "UPDATE progress SET score = ?, accuracy = ?, time_spent = ?, completed_at = ? WHERE id = ?",
                   (max(existing["score"], score), max(existing["accuracy"], accuracy), existing["time_spent"] + time_spent, datetime.now().isoformat(), existing["id"]))
    else:
        db_execute(conn, "INSERT INTO progress (user_id, lesson_id, score, accuracy, time_spent) VALUES (?, ?, ?, ?, ?)",
                   (user["id"], lesson_id, score, accuracy, time_spent))

    # Exercise results
    for er in exercise_results:
        idx = er.get("exercise_index", 0)
        correct = 1 if er.get("correct") else 0
        ex = db_fetchone(conn, "SELECT * FROM exercise_results WHERE user_id = ? AND lesson_id = ? AND exercise_index = ?", (user["id"], lesson_id, idx))
        if ex:
            new_attempts = ex["attempts"] + 1
            new_interval = min(ex["review_interval"] * 2, 30) if correct else 1
            next_review = (datetime.now() + timedelta(days=new_interval)).isoformat()
            db_execute(conn, "UPDATE exercise_results SET correct = ?, attempts = ?, last_attempted = ?, next_review = ?, review_interval = ? WHERE id = ?",
                       (correct, new_attempts, datetime.now().isoformat(), next_review, new_interval, ex["id"]))
        else:
            next_review = (datetime.now() + timedelta(days=1 if correct else 0)).isoformat()
            db_execute(conn, "INSERT INTO exercise_results (user_id, lesson_id, exercise_index, correct, next_review, review_interval) VALUES (?, ?, ?, ?, ?, ?)",
                       (user["id"], lesson_id, idx, correct, next_review, 1))

    # Daily activity
    today = datetime.now().strftime("%Y-%m-%d")
    correct_count = sum(1 for er in exercise_results if er.get("correct"))
    day = db_fetchone(conn, "SELECT id, xp_earned, lessons_done, exercises_done, correct_answers FROM daily_activity WHERE user_id = ? AND date = ?", (user["id"], today))
    if day:
        db_execute(conn, "UPDATE daily_activity SET xp_earned = ?, lessons_done = ?, exercises_done = ?, correct_answers = ? WHERE id = ?",
                   (day["xp_earned"] + xp_earned, day["lessons_done"] + 1, day["exercises_done"] + len(exercise_results), day["correct_answers"] + correct_count, day["id"]))
    else:
        db_execute(conn, "INSERT INTO daily_activity (user_id, date, xp_earned, lessons_done, exercises_done, correct_answers) VALUES (?, ?, ?, 1, ?, ?)",
                   (user["id"], today, xp_earned, len(exercise_results), correct_count))

    conn.commit()
    conn.close()
    new_achievements = check_achievements(user["id"])
    return 200, {"ok": True, "new_achievements": new_achievements}

def api_get_progress(user, data):
    conn = get_db()
    lessons = db_fetchall(conn, "SELECT lesson_id, score, accuracy, completed_at, time_spent FROM progress WHERE user_id = ?", (user["id"],))
    conn.close()
    for l in lessons:
        if l.get("completed_at") and not isinstance(l["completed_at"], str):
            l["completed_at"] = str(l["completed_at"])
    return 200, {"completed": {l["lesson_id"]: l for l in lessons}}

def api_get_review(user, data):
    conn = get_db()
    now = datetime.now().isoformat()
    due = db_fetchall(conn, """
        SELECT lesson_id, exercise_index, correct, attempts, review_interval
        FROM exercise_results WHERE user_id = ? AND (next_review <= ? OR correct = 0)
        ORDER BY correct ASC, next_review ASC LIMIT 20
    """, (user["id"], now))
    conn.close()
    return 200, {"review_exercises": due}

def api_toggle_bookmark(user, data):
    lesson_id = data.get("lesson_id")
    exercise_index = data.get("exercise_index", 0)
    conn = get_db()
    existing = db_fetchone(conn, "SELECT id FROM bookmarks WHERE user_id = ? AND lesson_id = ? AND exercise_index = ?", (user["id"], lesson_id, exercise_index))
    if existing:
        db_execute(conn, "DELETE FROM bookmarks WHERE id = ?", (existing["id"],))
        action = "removed"
    else:
        db_execute(conn, "INSERT INTO bookmarks (user_id, lesson_id, exercise_index) VALUES (?, ?, ?)", (user["id"], lesson_id, exercise_index))
        action = "added"
    conn.commit()
    conn.close()
    new_achievements = check_achievements(user["id"])
    return 200, {"action": action, "new_achievements": new_achievements}

def api_get_bookmarks(user, data):
    conn = get_db()
    bookmarks = db_fetchall(conn, "SELECT lesson_id, exercise_index, created_at FROM bookmarks WHERE user_id = ? ORDER BY created_at DESC", (user["id"],))
    conn.close()
    for b in bookmarks:
        if b.get("created_at") and not isinstance(b["created_at"], str):
            b["created_at"] = str(b["created_at"])
    return 200, {"bookmarks": bookmarks}

def api_get_stats(user, data):
    conn = get_db()
    activity = db_fetchall(conn, "SELECT date, xp_earned, lessons_done, exercises_done, correct_answers FROM daily_activity WHERE user_id = ? ORDER BY date DESC LIMIT 30", (user["id"],))
    if USE_PG:
        module_stats = db_fetchall(conn, """
            SELECT SPLIT_PART(lesson_id, '-', 1) as module_prefix,
                COUNT(*) as exercises, SUM(CASE WHEN correct = 1 THEN 1 ELSE 0 END) as correct,
                ROUND(AVG(CASE WHEN correct = 1 THEN 100.0 ELSE 0 END)::numeric, 1) as accuracy
            FROM exercise_results WHERE user_id = ? GROUP BY module_prefix
        """, (user["id"],))
    else:
        module_stats = db_fetchall(conn, """
            SELECT SUBSTR(lesson_id, 1, INSTR(lesson_id, '-') - 1) as module_prefix,
                COUNT(*) as exercises, SUM(CASE WHEN correct = 1 THEN 1 ELSE 0 END) as correct,
                ROUND(AVG(CASE WHEN correct = 1 THEN 100.0 ELSE 0 END), 1) as accuracy
            FROM exercise_results WHERE user_id = ? GROUP BY module_prefix
        """, (user["id"],))
    weak = db_fetchall(conn, """
        SELECT lesson_id, exercise_index, attempts, CASE WHEN correct = 0 THEN 0 ELSE 100 END as last_correct
        FROM exercise_results WHERE user_id = ? AND correct = 0 ORDER BY attempts DESC LIMIT 10
    """, (user["id"],))
    conn.close()
    # Convert Decimal to float for JSON
    for ms in module_stats:
        if ms.get("accuracy") is not None:
            ms["accuracy"] = float(ms["accuracy"])
    return 200, {"activity": activity, "module_stats": module_stats, "weak_areas": weak}

def api_get_leaderboard(user, data):
    conn = get_db()
    leaders = db_fetchall(conn, """
        SELECT u.display_name, u.username,
            COALESCE(SUM(d.xp_earned), 0) as total_xp,
            COUNT(DISTINCT p.lesson_id) as lessons_done
        FROM users u LEFT JOIN daily_activity d ON u.id = d.user_id
        LEFT JOIN progress p ON u.id = p.user_id
        GROUP BY u.id, u.display_name, u.username ORDER BY total_xp DESC LIMIT 20
    """)
    conn.close()
    return 200, {"leaderboard": leaders}

def api_get_achievements(user, data):
    conn = get_db()
    unlocked = {}
    for r in db_fetchall(conn, "SELECT achievement_id, unlocked_at FROM achievements WHERE user_id = ?", (user["id"],)):
        unlocked[r["achievement_id"]] = str(r["unlocked_at"]) if r["unlocked_at"] and not isinstance(r["unlocked_at"], str) else r["unlocked_at"]
    conn.close()
    all_achievements = []
    for aid, info in ACHIEVEMENTS.items():
        all_achievements.append({"id": aid, "unlocked": aid in unlocked, "unlocked_at": unlocked.get(aid), **info})
    return 200, {"achievements": all_achievements}

# ── Vocabulary API ──

def api_get_vocab_progress(user, data):
    conn = get_db()
    rows = db_fetchall(conn, "SELECT word_id, correct, incorrect, ease_factor, interval_days, next_review FROM vocab_progress WHERE user_id = ?", (user["id"],))
    conn.close()
    return 200, {"vocab": {r["word_id"]: r for r in rows}}

def api_get_vocab_review(user, data):
    conn = get_db()
    now = datetime.now().isoformat()
    due = db_fetchall(conn, "SELECT word_id, correct, incorrect, interval_days FROM vocab_progress WHERE user_id = ? AND next_review <= ? ORDER BY next_review ASC LIMIT 30", (user["id"], now))
    known = {r["word_id"] for r in db_fetchall(conn, "SELECT word_id FROM vocab_progress WHERE user_id = ?", (user["id"],))}
    conn.close()
    return 200, {"due": due, "known_ids": list(known)}

def api_save_vocab_result(user, data):
    word_id = data.get("word_id")
    correct = data.get("correct", False)
    conn = get_db()
    existing = db_fetchone(conn, "SELECT * FROM vocab_progress WHERE user_id = ? AND word_id = ?", (user["id"], word_id))

    if existing:
        ef = existing["ease_factor"]
        interval = existing["interval_days"]
        if correct:
            interval = 1 if interval == 0 else (6 if interval == 1 else round(interval * ef))
            ef = max(1.3, ef + 0.1 - (5 - 4) * (0.08 + (5 - 4) * 0.02))
            next_review = (datetime.now() + timedelta(days=interval)).isoformat()
            db_execute(conn, "UPDATE vocab_progress SET correct = correct + 1, ease_factor = ?, interval_days = ?, next_review = ?, last_reviewed = ? WHERE id = ?",
                       (ef, interval, next_review, datetime.now().isoformat(), existing["id"]))
        else:
            ef = max(1.3, ef - 0.2)
            db_execute(conn, "UPDATE vocab_progress SET incorrect = incorrect + 1, ease_factor = ?, interval_days = 0, next_review = ?, last_reviewed = ? WHERE id = ?",
                       (ef, datetime.now().isoformat(), datetime.now().isoformat(), existing["id"]))
    else:
        interval = 1 if correct else 0
        next_review = (datetime.now() + timedelta(days=interval)).isoformat()
        db_execute(conn, "INSERT INTO vocab_progress (user_id, word_id, correct, incorrect, interval_days, next_review, last_reviewed) VALUES (?, ?, ?, ?, ?, ?, ?)",
                   (user["id"], word_id, 1 if correct else 0, 0 if correct else 1, interval, next_review, datetime.now().isoformat()))

    xp = 5 if correct else 1
    today = datetime.now().strftime("%Y-%m-%d")
    day = db_fetchone(conn, "SELECT id, xp_earned, exercises_done, correct_answers FROM daily_activity WHERE user_id = ? AND date = ?", (user["id"], today))
    if day:
        db_execute(conn, "UPDATE daily_activity SET xp_earned = ?, exercises_done = ?, correct_answers = ? WHERE id = ?",
                   (day["xp_earned"] + xp, day["exercises_done"] + 1, day["correct_answers"] + (1 if correct else 0), day["id"]))
    else:
        db_execute(conn, "INSERT INTO daily_activity (user_id, date, xp_earned, exercises_done, correct_answers) VALUES (?, ?, ?, 1, ?)",
                   (user["id"], today, xp, 1 if correct else 0))

    conn.commit()
    conn.close()
    return 200, {"ok": True, "xp": xp}

# ── Practice Test API ──

def api_save_test_result(user, data):
    conn = get_db()
    db_execute(conn, "INSERT INTO practice_test_results (user_id, total_questions, correct_answers, score, time_spent, module_scores) VALUES (?, ?, ?, ?, ?, ?)",
               (user["id"], data.get("total_questions", 0), data.get("correct_answers", 0), data.get("score", 0), data.get("time_spent", 0), json.dumps(data.get("module_scores", {}))))
    conn.commit()
    conn.close()
    return 200, {"ok": True, "new_achievements": check_achievements(user["id"])}

def api_get_test_history(user, data):
    conn = get_db()
    tests = db_fetchall(conn, "SELECT taken_at, total_questions, correct_answers, score, time_spent, module_scores FROM practice_test_results WHERE user_id = ? ORDER BY taken_at DESC LIMIT 20", (user["id"],))
    conn.close()
    for t in tests:
        t["module_scores"] = json.loads(t["module_scores"]) if t["module_scores"] else {}
        if t.get("taken_at") and not isinstance(t["taken_at"], str):
            t["taken_at"] = str(t["taken_at"])
    return 200, {"tests": tests}

# ── Route Dispatch ──

PUBLIC_ROUTES = {"register": api_register, "login": api_login}
AUTH_ROUTES = {
    "logout": api_logout, "profile": api_get_profile, "settings": api_update_settings,
    "save-progress": api_save_progress, "get-progress": api_get_progress, "review": api_get_review,
    "bookmark": api_toggle_bookmark, "bookmarks": api_get_bookmarks, "stats": api_get_stats,
    "leaderboard": api_get_leaderboard, "achievements": api_get_achievements,
    "vocab-progress": api_get_vocab_progress, "vocab-review": api_get_vocab_review,
    "vocab-result": api_save_vocab_result, "test-result": api_save_test_result, "test-history": api_get_test_history,
}

# ── HTTP Handler ──

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(Path(__file__).parent), **kwargs)

    def do_POST(self):
        if not self.path.startswith("/api/"):
            self.send_error(404); return
        route = self.path[5:]
        content_len = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(content_len) if content_len else b"{}"
        try: data = json.loads(body)
        except: data = {}
        if route in PUBLIC_ROUTES:
            status, response = PUBLIC_ROUTES[route](data)
            self.send_json(status, response); return
        if route in AUTH_ROUTES:
            token = self.headers.get("Authorization", "").replace("Bearer ", "")
            user = get_user_from_token(token)
            if not user:
                self.send_json(401, {"error": "Please log in"}); return
            status, response = AUTH_ROUTES[route](user, data)
            self.send_json(status, response); return
        self.send_error(404)

    def do_GET(self):
        if self.path.startswith("/api/"):
            route = self.path[5:].split("?")[0]
            if route in AUTH_ROUTES:
                token = self.headers.get("Authorization", "").replace("Bearer ", "")
                user = get_user_from_token(token)
                if not user:
                    self.send_json(401, {"error": "Please log in"}); return
                status, response = AUTH_ROUTES[route](user, {})
                self.send_json(status, response); return
            self.send_error(404); return
        super().do_GET()

    def send_json(self, status, data):
        body = json.dumps(data, ensure_ascii=False, default=str).encode()
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
    server = http.server.HTTPServer(("0.0.0.0", PORT), Handler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n🔴 Server stopped")
        server.server_close()
