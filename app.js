// ============================================================
// Suomi Oppi — Application Logic (v2 with auth & cloud sync)
// ============================================================

const API = "";  // same origin

// ── State ──
let state = {
  lang: "fi",
  currentView: "auth",
  currentModuleId: null,
  currentLessonId: null,
  exerciseIndex: 0,
  exercises: [],
  exerciseResults: [],
  score: 0,
  totalAnswered: 0,
  correctAnswered: 0,
  lessonStartTime: 0,
  // Auth
  token: null,
  user: null,
  isGuest: false,
  // Progress (synced or local)
  completed: {},
  xp: 0,
  streak: 0,
  todayXp: 0,
  dailyGoal: 50,
  // UI
  matchState: null,
  bookmarks: new Set(),
  viewHistory: [],
};

// ── Init ──
function init() {
  // Restore session
  const saved = localStorage.getItem("suomioppi_session");
  if (saved) {
    try {
      const s = JSON.parse(saved);
      state.token = s.token;
      state.user = s.user;
      state.isGuest = s.isGuest || false;
      state.lang = s.lang || "fi";
      if (state.lang === "en") {
        document.getElementById("lang-toggle").classList.add("en-active");
      }
    } catch (e) {}
  }

  if (state.token || state.isGuest) {
    enterApp();
  } else {
    showView("auth");
  }
}

async function enterApp() {
  if (state.token) {
    // Load profile from server
    try {
      const profile = await apiCall("profile");
      state.user = profile.user;
      state.xp = profile.stats.total_xp;
      state.streak = profile.stats.streak;
      state.todayXp = profile.stats.today_xp;
      state.dailyGoal = profile.user.daily_goal;
      state.lang = profile.user.preferred_lang || "fi";
      if (state.lang === "en") {
        document.getElementById("lang-toggle").classList.add("en-active");
      }

      // Load progress
      const prog = await apiCall("get-progress");
      state.completed = {};
      for (const [lid, data] of Object.entries(prog.completed)) {
        state.completed[lid] = true;
      }

      // Load bookmarks
      const bm = await apiCall("bookmarks");
      state.bookmarks = new Set(bm.bookmarks.map(b => `${b.lesson_id}:${b.exercise_index}`));

      // Check review count
      loadReviewBadge();
    } catch (e) {
      console.error("Failed to load profile:", e);
    }
  } else {
    // Guest mode - load from localStorage
    loadGuestState();
  }

  document.getElementById("streak-display").classList.remove("hidden");
  document.getElementById("xp-display").classList.remove("hidden");
  document.getElementById("daily-goal-display").classList.remove("hidden");
  if (state.token) {
    document.getElementById("user-menu-btn").classList.remove("hidden");
    document.getElementById("quick-actions").classList.remove("hidden");
  }

  updateTopBar();
  showView("home");
  renderHome();
}

// ── Guest state (localStorage) ──
function loadGuestState() {
  try {
    const s = JSON.parse(localStorage.getItem("suomioppi_guest"));
    if (s) {
      state.xp = s.xp || 0;
      state.streak = s.streak || 0;
      state.completed = s.completed || {};
      state.todayXp = s.todayXp || 0;
      state.dailyGoal = s.dailyGoal || 50;
      const today = new Date().toDateString();
      if (s.lastActiveDate !== today) {
        state.todayXp = 0;
        if (s.lastActiveDate) {
          const diff = Math.floor((new Date(today) - new Date(s.lastActiveDate)) / 86400000);
          if (diff > 1) state.streak = 0;
        }
      }
      state.lastActiveDate = s.lastActiveDate;
    }
  } catch (e) {}
}

function saveGuestState() {
  localStorage.setItem("suomioppi_guest", JSON.stringify({
    xp: state.xp, streak: state.streak, completed: state.completed,
    todayXp: state.todayXp, dailyGoal: state.dailyGoal,
    lastActiveDate: new Date().toDateString()
  }));
}

// ── API Helper ──
async function apiCall(route, data = {}, method = "POST") {
  const res = await fetch(`${API}/api/${route}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${state.token}`
    },
    body: method === "POST" ? JSON.stringify(data) : undefined
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || "API error");
  return json;
}

// ── Auth ──
function switchAuthTab(tab) {
  document.querySelectorAll(".auth-tab").forEach(t => t.classList.remove("active"));
  event.target.classList.add("active");
  document.getElementById("login-form").classList.toggle("hidden", tab !== "login");
  document.getElementById("register-form").classList.toggle("hidden", tab !== "register");
  document.getElementById("auth-error").classList.add("hidden");
}

async function doLogin(e) {
  e.preventDefault();
  const errEl = document.getElementById("auth-error");
  errEl.classList.add("hidden");

  try {
    const res = await apiCall("login", {
      username: document.getElementById("login-username").value,
      password: document.getElementById("login-password").value
    });
    state.token = res.token;
    state.user = res.user;
    state.isGuest = false;
    saveSession();
    enterApp();
  } catch (err) {
    errEl.textContent = err.message;
    errEl.classList.remove("hidden");
  }
}

async function doRegister(e) {
  e.preventDefault();
  const errEl = document.getElementById("auth-error");
  errEl.classList.add("hidden");

  try {
    const res = await apiCall("register", {
      display_name: document.getElementById("reg-display").value,
      username: document.getElementById("reg-username").value,
      password: document.getElementById("reg-password").value
    });
    state.token = res.token;
    state.user = res.user;
    state.isGuest = false;
    saveSession();
    enterApp();
  } catch (err) {
    errEl.textContent = err.message;
    errEl.classList.remove("hidden");
  }
}

function skipAuth() {
  state.isGuest = true;
  state.token = null;
  state.user = { display_name: "Vieras / Guest" };
  saveSession();
  enterApp();
}

function doLogout() {
  state.token = null;
  state.user = null;
  state.isGuest = false;
  state.completed = {};
  state.xp = 0;
  state.streak = 0;
  state.todayXp = 0;
  localStorage.removeItem("suomioppi_session");
  closeUserMenu();
  document.getElementById("streak-display").classList.add("hidden");
  document.getElementById("xp-display").classList.add("hidden");
  document.getElementById("daily-goal-display").classList.add("hidden");
  document.getElementById("user-menu-btn").classList.add("hidden");
  document.getElementById("quick-actions").classList.add("hidden");
  showView("auth");
}

function saveSession() {
  localStorage.setItem("suomioppi_session", JSON.stringify({
    token: state.token,
    user: state.user,
    isGuest: state.isGuest,
    lang: state.lang
  }));
}

// ── User Menu ──
function toggleUserMenu() {
  const menu = document.getElementById("user-menu");
  menu.classList.toggle("hidden");
  if (!menu.classList.contains("hidden")) {
    document.getElementById("user-menu-header").textContent =
      state.user ? state.user.display_name : "";
    // Close on outside click
    setTimeout(() => {
      document.addEventListener("click", closeMenuOnOutsideClick);
    }, 0);
  }
}

function closeUserMenu() {
  document.getElementById("user-menu").classList.add("hidden");
  document.removeEventListener("click", closeMenuOnOutsideClick);
}

function closeMenuOnOutsideClick(e) {
  if (!document.getElementById("user-menu").contains(e.target) &&
      e.target.id !== "user-menu-btn") {
    closeUserMenu();
  }
}

// ── Language Toggle ──
function toggleLanguage() {
  state.lang = state.lang === "fi" ? "en" : "fi";
  document.getElementById("lang-toggle").classList.toggle("en-active", state.lang === "en");
  saveSession();
  if (state.token && !state.isGuest) {
    apiCall("settings", { preferred_lang: state.lang }).catch(() => {});
  }
  updateTranslations();
}

function t(obj) {
  if (!obj) return "";
  if (typeof obj === "string") return obj;
  return obj[state.lang] || obj.fi || "";
}

function updateTranslations() {
  document.querySelectorAll("[data-fi]").forEach(el => {
    el.textContent = state.lang === "en" ? el.dataset.en : el.dataset.fi;
  });
  if (state.currentView === "home") renderHome();
  else if (state.currentView === "module") renderModuleView();
  else if (state.currentView === "lesson") renderExercise();
}

// ── Navigation ──
function showView(viewId) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  // Handle view IDs that have -view suffix in the element id
  let elId = viewId + "-view";
  let el = document.getElementById(elId);
  if (!el) {
    // Try with -view-view (for achievements-view, bookmarks-view)
    el = document.getElementById(viewId + "-view-view");
    if (!el) el = document.getElementById(elId);
  }
  if (el) el.classList.add("active");

  const prevView = state.currentView;
  state.currentView = viewId;

  if (prevView !== viewId && prevView !== "auth") {
    state.viewHistory.push(prevView);
  }

  const backBtn = document.getElementById("back-btn");
  const progressBar = document.getElementById("lesson-progress-bar");

  if (viewId === "home" || viewId === "auth") {
    backBtn.classList.add("hidden");
    progressBar.classList.add("hidden");
  } else if (viewId === "lesson") {
    backBtn.classList.remove("hidden");
    progressBar.classList.remove("hidden");
  } else if (viewId === "complete") {
    backBtn.classList.add("hidden");
    progressBar.classList.add("hidden");
  } else {
    backBtn.classList.remove("hidden");
    progressBar.classList.add("hidden");
  }

  // Load view content
  if (viewId === "stats") loadStats();
  else if (viewId === "achievements-view") loadAchievements();
  else if (viewId === "review") loadReview();
  else if (viewId === "bookmarks-view") loadBookmarks();
  else if (viewId === "leaderboard") loadLeaderboard();
  else if (viewId === "settings") loadSettings();
}

function goHome() {
  state.viewHistory = [];
  showView("home");
  renderHome();
}

function goBack() {
  if (state.viewHistory.length > 0) {
    const prev = state.viewHistory.pop();
    showView(prev);
    if (prev === "home") renderHome();
    else if (prev === "module") renderModuleView();
  } else {
    goHome();
  }
}

function goToModule() {
  state.viewHistory = ["home"];
  showView("module");
  renderModuleView();
}

// ── Top Bar ──
function updateTopBar() {
  document.getElementById("streak-count").textContent = state.streak;
  document.getElementById("xp-count").textContent = state.xp;
  updateDailyGoalRing();
}

function updateDailyGoalRing() {
  const pct = Math.min(state.todayXp / state.dailyGoal, 1);
  const circumference = 94.2;
  const offset = circumference * (1 - pct);
  const circle = document.getElementById("daily-goal-circle");
  if (circle) {
    circle.setAttribute("stroke-dashoffset", offset);
    circle.setAttribute("stroke", pct >= 1 ? "var(--gold)" : "var(--green)");
  }
}

// ── Review Badge ──
async function loadReviewBadge() {
  if (!state.token) return;
  try {
    const res = await apiCall("review");
    const count = res.review_exercises.length;
    const badge = document.getElementById("review-badge");
    if (badge) {
      if (count > 0) {
        badge.textContent = count;
        badge.classList.remove("hidden");
      } else {
        badge.classList.add("hidden");
      }
    }
  } catch (e) {}
}

// ── Home View ──
function renderHome() {
  const grid = document.getElementById("modules-grid");
  grid.innerHTML = "";

  const totalLessons = MODULES.reduce((sum, m) => sum + m.lessons.length, 0);
  const completedLessons = MODULES.reduce((sum, m) =>
    sum + m.lessons.filter(l => state.completed[l.id]).length, 0);

  document.getElementById("overall-progress-fill").style.width =
    totalLessons > 0 ? (completedLessons / totalLessons * 100) + "%" : "0%";
  document.getElementById("overall-progress-text").textContent =
    `${completedLessons} / ${totalLessons} ${state.lang === "fi" ? "oppituntia suoritettu" : "lessons completed"}`;

  // Daily goal banner
  if (state.token || state.isGuest) {
    const banner = document.getElementById("daily-goal-banner");
    banner.classList.remove("hidden");
    document.getElementById("daily-goal-text").textContent =
      `${state.todayXp} / ${state.dailyGoal} XP`;
    const pct = Math.min(state.todayXp / state.dailyGoal * 100, 100);
    document.getElementById("daily-goal-fill").style.width = pct + "%";
  }

  // Quick actions
  if (state.token) {
    document.getElementById("quick-actions").classList.remove("hidden");
  }

  MODULES.forEach((mod, idx) => {
    const item = document.createElement("div");
    item.className = "module-item";

    const modCompleted = mod.lessons.every(l => state.completed[l.id]);
    const modStarted = mod.lessons.some(l => state.completed[l.id]);
    const isLocked = idx > 0 && !MODULES[idx - 1].lessons.some(l => state.completed[l.id]) && idx > 1;

    let statusClass = "available";
    if (modCompleted) statusClass = "completed";
    else if (modStarted) statusClass = "started";
    if (isLocked) statusClass = "locked";

    const connectorClass = (idx > 0 && !isLocked) ? "active" : "";

    item.innerHTML = `
      ${idx > 0 ? `<div class="module-connector ${connectorClass}"></div>` : ""}
      <div class="module-item-inner">
        <div class="module-node ${statusClass}" data-module-id="${mod.id}" style="border-color: ${isLocked ? '' : mod.color}">
          ${modCompleted ? '<div class="module-crown">👑</div>' : ''}
          <div class="module-ring"></div>
          ${mod.icon}
        </div>
        <div class="module-label">${t(mod.title)}</div>
      </div>
    `;

    if (!isLocked) {
      item.querySelector(".module-node").addEventListener("click", () => {
        state.currentModuleId = mod.id;
        state.viewHistory = ["home"];
        showView("module");
        renderModuleView();
      });
    }

    grid.appendChild(item);
  });
}

// ── Module View ──
function renderModuleView() {
  const mod = MODULES.find(m => m.id === state.currentModuleId);
  if (!mod) return;

  document.getElementById("module-title").textContent = t(mod.title);
  document.getElementById("module-desc").textContent = t(mod.desc);

  const completed = mod.lessons.filter(l => state.completed[l.id]).length;
  const total = mod.lessons.length;
  document.getElementById("module-progress-fill").style.width =
    total > 0 ? (completed / total * 100) + "%" : "0%";
  document.getElementById("module-progress-text").textContent = `${completed} / ${total}`;

  const list = document.getElementById("lessons-list");
  list.innerHTML = "";

  mod.lessons.forEach((lesson, idx) => {
    const isDone = state.completed[lesson.id];
    const isLocked = idx > 0 && !state.completed[mod.lessons[idx - 1].id];

    const card = document.createElement("div");
    card.className = `lesson-card ${isDone ? "completed" : ""} ${isLocked ? "locked" : ""}`;

    let statusHtml;
    if (isDone) statusHtml = `<span class="lesson-status done">✓</span>`;
    else if (isLocked) statusHtml = `<span class="lesson-status locked-badge">🔒</span>`;
    else statusHtml = `<span class="lesson-status new">${state.lang === "fi" ? "Aloita" : "Start"}</span>`;

    card.innerHTML = `
      <div class="lesson-icon" style="background: ${mod.color}22; color: ${mod.color}">
        ${lesson.icon}
      </div>
      <div class="lesson-info">
        <h3>${t(lesson.title)}</h3>
        <p>${lesson.exercises.length} ${state.lang === "fi" ? "harjoitusta" : "exercises"}</p>
      </div>
      ${statusHtml}
    `;

    if (!isLocked) {
      card.addEventListener("click", () => startLesson(lesson.id));
    }

    list.appendChild(card);
  });
}

// ── Lesson Logic ──
function startLesson(lessonId) {
  state.currentLessonId = lessonId;
  state.exerciseIndex = 0;
  state.score = 0;
  state.totalAnswered = 0;
  state.correctAnswered = 0;
  state.exerciseResults = [];
  state.lessonStartTime = Date.now();

  let exercises = null;
  for (const mod of MODULES) {
    const lesson = mod.lessons.find(l => l.id === lessonId);
    if (lesson) {
      exercises = [...lesson.exercises];
      break;
    }
  }
  if (!exercises) return;

  state.exercises = exercises;

  // Show tips first if available
  if (typeof LESSON_TIPS !== "undefined" && LESSON_TIPS[lessonId]) {
    showTips(lessonId);
  } else {
    showView("lesson");
    renderExercise();
  }
}

function renderExercise() {
  const container = document.getElementById("exercise-container");
  const ex = state.exercises[state.exerciseIndex];

  if (!ex) {
    finishLesson();
    return;
  }

  const progress = (state.exerciseIndex / state.exercises.length) * 100;
  document.getElementById("lesson-progress-fill").style.width = progress + "%";

  const oldFeedback = document.querySelector(".feedback-banner");
  if (oldFeedback) oldFeedback.remove();

  container.innerHTML = "";
  container.className = "pop-in";
  setTimeout(() => container.className = "", 300);

  // Add bookmark button
  const bmKey = `${state.currentLessonId}:${state.exerciseIndex}`;
  const isBookmarked = state.bookmarks.has(bmKey);

  switch (ex.type) {
    case "multiple-choice": renderMultipleChoice(container, ex); break;
    case "true-false": renderTrueFalse(container, ex); break;
    case "fill-blank": renderFillBlank(container, ex); break;
    case "matching": renderMatching(container, ex); break;
    case "reading": renderReadingComprehension(container, ex); break;
  }

  // Insert bookmark button at top of container
  if (state.token && !state.isGuest) {
    const bmBtn = document.createElement("button");
    bmBtn.className = `bookmark-btn ${isBookmarked ? "active" : ""}`;
    bmBtn.innerHTML = isBookmarked ? "🔖" : "🏷️";
    bmBtn.title = state.lang === "fi" ? "Kirjanmerkki" : "Bookmark";
    bmBtn.onclick = () => toggleBookmark(bmKey, bmBtn);
    container.insertBefore(bmBtn, container.firstChild);
  }
}

async function toggleBookmark(key, btn) {
  const [lessonId, exerciseIndex] = key.split(":");
  try {
    const res = await apiCall("bookmark", {
      lesson_id: lessonId,
      exercise_index: parseInt(exerciseIndex)
    });
    if (res.action === "added") {
      state.bookmarks.add(key);
      btn.classList.add("active");
      btn.innerHTML = "🔖";
    } else {
      state.bookmarks.delete(key);
      btn.classList.remove("active");
      btn.innerHTML = "🏷️";
    }
    if (res.new_achievements) {
      res.new_achievements.forEach(showAchievementToast);
    }
  } catch (e) {}
}

// ── Multiple Choice ──
function renderMultipleChoice(container, ex) {
  const keys = ["A", "B", "C", "D"];
  container.innerHTML += `
    <div class="exercise-type-label">${state.lang === "fi" ? "Valitse oikea vastaus" : "Choose the correct answer"}</div>
    <div class="exercise-question">${t(ex.question)}</div>
    <div class="choices">
      ${ex.choices.map((c, i) => `
        <button class="choice-btn" data-index="${i}">
          <span class="choice-key">${keys[i]}</span>
          <span>${t(c)}</span>
        </button>
      `).join("")}
    </div>
  `;

  container.querySelectorAll(".choice-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index);
      const correct = idx === ex.correct;
      handleAnswer(correct, ex, container, () => {
        container.querySelectorAll(".choice-btn").forEach(b => {
          b.classList.add("disabled");
          const bIdx = parseInt(b.dataset.index);
          if (bIdx === ex.correct) b.classList.add("correct");
          if (bIdx === idx && !correct) b.classList.add("incorrect");
        });
      });
    });
  });
}

// ── True/False ──
function renderTrueFalse(container, ex) {
  container.innerHTML += `
    <div class="exercise-type-label">${state.lang === "fi" ? "Totta vai tarua?" : "True or false?"}</div>
    <div class="exercise-question">${t(ex.question)}</div>
    <div class="tf-buttons">
      <button class="tf-btn true-btn" data-value="true">${state.lang === "fi" ? "Totta" : "True"} ✓</button>
      <button class="tf-btn false-btn" data-value="false">${state.lang === "fi" ? "Tarua" : "False"} ✗</button>
    </div>
  `;

  container.querySelectorAll(".tf-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const answer = btn.dataset.value === "true";
      const correct = answer === ex.correct;
      handleAnswer(correct, ex, container, () => {
        container.querySelectorAll(".tf-btn").forEach(b => b.classList.add("disabled"));
        if (correct) {
          btn.classList.add("correct");
        } else {
          btn.classList.add("incorrect");
          const correctVal = ex.correct ? "true" : "false";
          container.querySelector(`[data-value="${correctVal}"]`).classList.add("correct");
        }
      });
    });
  });
}

// ── Fill in the Blank ──
function renderFillBlank(container, ex) {
  const sentenceHtml = t(ex.sentence).replace("___", `<span class="blank-slot" id="blank-display"></span>`);

  container.innerHTML += `
    <div class="exercise-type-label">${state.lang === "fi" ? "Täytä puuttuva sana" : "Fill in the missing word"}</div>
    <div class="fill-blank-sentence">${sentenceHtml}</div>
    <input type="text" class="fill-input" id="fill-input"
           placeholder="${state.lang === "fi" ? "Kirjoita vastaus..." : "Type your answer..."}"
           autocomplete="off" autocapitalize="off" spellcheck="false">
    <div class="exercise-actions">
      <button class="btn btn-skip" id="skip-btn">${state.lang === "fi" ? "Ohita" : "Skip"}</button>
      <button class="btn btn-primary" id="check-btn">${state.lang === "fi" ? "Tarkista" : "Check"}</button>
    </div>
  `;

  const input = document.getElementById("fill-input");
  const checkBtn = document.getElementById("check-btn");
  const skipBtn = document.getElementById("skip-btn");

  input.focus();

  input.addEventListener("input", () => {
    document.getElementById("blank-display").textContent = input.value;
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") checkBtn.click();
  });

  checkBtn.addEventListener("click", () => {
    const userAnswer = input.value.trim().toLowerCase();
    const correctAnswers = [ex.answer.toLowerCase(), ...(ex.alternatives || []).map(a => a.toLowerCase())];
    const correct = correctAnswers.includes(userAnswer);

    handleAnswer(correct, ex, container, () => {
      input.disabled = true;
      input.classList.add(correct ? "correct" : "incorrect");
      checkBtn.style.display = "none";
      skipBtn.style.display = "none";
      if (!correct) {
        document.getElementById("blank-display").textContent = ex.answer;
        document.getElementById("blank-display").style.color = "var(--green)";
      }
    });
  });

  skipBtn.addEventListener("click", () => {
    handleAnswer(false, ex, container, () => {
      input.disabled = true;
      document.getElementById("blank-display").textContent = ex.answer;
      document.getElementById("blank-display").style.color = "var(--green)";
      checkBtn.style.display = "none";
      skipBtn.style.display = "none";
    });
  });
}

// ── Matching ──
function renderMatching(container, ex) {
  const pairs = ex.pairs;
  const rightOrder = [...Array(pairs.length).keys()];
  shuffleArray(rightOrder);

  container.innerHTML += `
    <div class="exercise-type-label">${t(ex.instruction) || (state.lang === "fi" ? "Yhdistä parit" : "Match the pairs")}</div>
    <div class="matching-container">
      <div class="match-column match-left">
        ${pairs.map((p, i) => `<div class="match-item match-left-item" data-pair-index="${i}">${t(p.left)}</div>`).join("")}
      </div>
      <div class="match-column match-right">
        ${rightOrder.map(i => `<div class="match-item match-right-item" data-pair-index="${i}">${t(pairs[i].right)}</div>`).join("")}
      </div>
    </div>
  `;

  state.matchState = { selectedLeft: null, selectedRight: null, matchedCount: 0, totalPairs: pairs.length, mistakes: 0 };

  container.querySelectorAll(".match-left-item").forEach(item => {
    item.addEventListener("click", () => {
      if (item.classList.contains("matched")) return;
      container.querySelectorAll(".match-left-item").forEach(i => i.classList.remove("selected"));
      item.classList.add("selected");
      state.matchState.selectedLeft = parseInt(item.dataset.pairIndex);
      checkMatch(container, ex);
    });
  });

  container.querySelectorAll(".match-right-item").forEach(item => {
    item.addEventListener("click", () => {
      if (item.classList.contains("matched")) return;
      container.querySelectorAll(".match-right-item").forEach(i => i.classList.remove("selected"));
      item.classList.add("selected");
      state.matchState.selectedRight = parseInt(item.dataset.pairIndex);
      checkMatch(container, ex);
    });
  });
}

function checkMatch(container, ex) {
  const ms = state.matchState;
  if (ms.selectedLeft === null || ms.selectedRight === null) return;

  const leftEl = container.querySelector(`.match-left-item[data-pair-index="${ms.selectedLeft}"]`);
  const rightEl = container.querySelector(`.match-right-item[data-pair-index="${ms.selectedRight}"]`);

  if (ms.selectedLeft === ms.selectedRight) {
    leftEl.classList.remove("selected"); rightEl.classList.remove("selected");
    leftEl.classList.add("matched"); rightEl.classList.add("matched");
    ms.matchedCount++;
  } else {
    leftEl.classList.add("wrong"); rightEl.classList.add("wrong");
    ms.mistakes++;
    setTimeout(() => {
      leftEl.classList.remove("wrong", "selected");
      rightEl.classList.remove("wrong", "selected");
    }, 600);
  }

  ms.selectedLeft = null;
  ms.selectedRight = null;

  if (ms.matchedCount === ms.totalPairs) {
    setTimeout(() => handleAnswer(ms.mistakes <= 1, ex, container, () => {}), 400);
  }
}

// ── Answer Handling ──
function handleAnswer(correct, ex, container, updateUI) {
  state.totalAnswered++;
  if (correct) { state.correctAnswered++; state.score += 10; }

  state.exerciseResults.push({
    exercise_index: state.exerciseIndex,
    correct: correct
  });

  updateUI();
  showFeedback(correct, ex);
}

function showFeedback(correct, ex) {
  const oldBanner = document.querySelector(".feedback-banner");
  if (oldBanner) oldBanner.remove();

  const banner = document.createElement("div");
  banner.className = `feedback-banner ${correct ? "correct-banner" : "incorrect-banner"}`;

  const explanationText = t(ex.explanation);
  const correctLabel = state.lang === "fi" ? "Oikein!" : "Correct!";
  const incorrectLabel = state.lang === "fi" ? "Väärin" : "Incorrect";
  const continueLabel = state.lang === "fi" ? "Jatka" : "Continue";

  banner.innerHTML = `
    <div class="feedback-text">
      <h3>${correct ? correctLabel : incorrectLabel}</h3>
      <p>${explanationText}</p>
    </div>
    <button class="btn ${correct ? "btn-primary" : "btn-secondary"}" id="continue-btn">${continueLabel}</button>
  `;

  document.body.appendChild(banner);

  const advance = () => {
    banner.remove();
    state.exerciseIndex++;
    renderExercise();
    document.removeEventListener("keydown", keyHandler);
  };

  document.getElementById("continue-btn").addEventListener("click", advance);
  const keyHandler = (e) => { if (e.key === "Enter") advance(); };
  document.addEventListener("keydown", keyHandler);
}

// ── Lesson Complete ──
async function finishLesson() {
  const xpEarned = state.correctAnswered * 10;
  const accuracy = state.totalAnswered > 0
    ? Math.round((state.correctAnswered / state.totalAnswered) * 100) : 0;
  const timeSpent = Math.round((Date.now() - state.lessonStartTime) / 1000);

  state.xp += xpEarned;
  state.todayXp += xpEarned;
  state.completed[state.currentLessonId] = true;

  document.getElementById("lesson-progress-fill").style.width = "100%";

  let newAchievements = [];

  if (state.token && !state.isGuest) {
    try {
      const res = await apiCall("save-progress", {
        lesson_id: state.currentLessonId,
        score: state.score,
        accuracy: accuracy,
        time_spent: timeSpent,
        xp_earned: xpEarned,
        exercise_results: state.exerciseResults
      });
      newAchievements = res.new_achievements || [];

      // Refresh profile
      const profile = await apiCall("profile");
      state.xp = profile.stats.total_xp;
      state.streak = profile.stats.streak;
      state.todayXp = profile.stats.today_xp;
    } catch (e) {
      console.error("Failed to save progress:", e);
    }
  } else {
    // Guest mode
    const today = new Date().toDateString();
    if (state.lastActiveDate !== today) {
      if (state.lastActiveDate) {
        const diff = Math.floor((new Date(today) - new Date(state.lastActiveDate)) / 86400000);
        if (diff === 1) state.streak++;
        else if (diff > 1) state.streak = 1;
      } else {
        state.streak = 1;
      }
    }
    state.lastActiveDate = today;
    saveGuestState();
  }

  updateTopBar();

  document.getElementById("complete-stats").innerHTML = `
    <div class="stat-item">
      <div class="stat-value">${xpEarned}</div>
      <div class="stat-label">XP ${state.lang === "fi" ? "ansaittu" : "earned"}</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">${accuracy}%</div>
      <div class="stat-label">${state.lang === "fi" ? "Tarkkuus" : "Accuracy"}</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">${state.correctAnswered}/${state.totalAnswered}</div>
      <div class="stat-label">${state.lang === "fi" ? "Oikein" : "Correct"}</div>
    </div>
  `;

  // Show new achievements
  const achDisplay = document.getElementById("new-achievements-display");
  if (newAchievements.length > 0) {
    achDisplay.innerHTML = newAchievements.map(a => `
      <div class="achievement-card unlocked pop-in" style="display: inline-block; margin: 8px;">
        <div class="ach-icon">${a.icon}</div>
        <div class="ach-name">${state.lang === "fi" ? a.fi : a.en}</div>
      </div>
    `).join("");
    newAchievements.forEach(a => showAchievementToast(a));
  } else {
    achDisplay.innerHTML = "";
  }

  showView("complete");
}

// ── Achievement Toast ──
function showAchievementToast(achievement) {
  const toast = document.getElementById("achievement-toast");
  toast.querySelector(".achievement-toast-icon").textContent = achievement.icon;
  toast.querySelector(".achievement-toast-text").textContent =
    `${state.lang === "fi" ? "Saavutus: " : "Achievement: "}${state.lang === "fi" ? achievement.fi : achievement.en}`;
  toast.classList.remove("hidden");
  setTimeout(() => toast.classList.add("hidden"), 4000);
}

// ── Stats View ──
async function loadStats() {
  const content = document.getElementById("stats-content");

  if (!state.token || state.isGuest) {
    content.innerHTML = `
      <div class="stats-grid">
        <div class="stats-card"><div class="stat-value">${state.xp}</div><div class="stat-label">XP</div></div>
        <div class="stats-card"><div class="stat-value">${state.streak}</div><div class="stat-label">${state.lang === "fi" ? "Putki" : "Streak"}</div></div>
        <div class="stats-card"><div class="stat-value">${Object.keys(state.completed).length}</div><div class="stat-label">${state.lang === "fi" ? "Oppituntia" : "Lessons"}</div></div>
        <div class="stats-card"><div class="stat-value">${state.todayXp}</div><div class="stat-label">${state.lang === "fi" ? "Tänään" : "Today"}</div></div>
      </div>
      <p style="text-align:center; color: var(--text-muted); margin-top: 20px;">${state.lang === "fi" ? "Kirjaudu sisään nähdäksesi tarkemmat tilastot" : "Log in to see detailed statistics"}</p>
    `;
    return;
  }

  content.innerHTML = `<p style="text-align:center; color: var(--text-muted);">${state.lang === "fi" ? "Ladataan..." : "Loading..."}</p>`;

  try {
    const [profile, stats] = await Promise.all([
      apiCall("profile"),
      apiCall("stats")
    ]);

    const s = profile.stats;
    content.innerHTML = `
      <div class="stats-grid">
        <div class="stats-card"><div class="stat-value" style="color:var(--gold)">${s.total_xp}</div><div class="stat-label">XP</div></div>
        <div class="stats-card"><div class="stat-value" style="color:var(--orange)">${s.streak}</div><div class="stat-label">${state.lang === "fi" ? "Putki" : "Streak"}</div></div>
        <div class="stats-card"><div class="stat-value" style="color:var(--green)">${s.lessons_completed}</div><div class="stat-label">${state.lang === "fi" ? "Oppituntia" : "Lessons"}</div></div>
        <div class="stats-card"><div class="stat-value" style="color:var(--blue)">${s.accuracy}%</div><div class="stat-label">${state.lang === "fi" ? "Tarkkuus" : "Accuracy"}</div></div>
      </div>

      <div class="activity-chart">
        <h3>${state.lang === "fi" ? "Aktiivisuus (30 päivää)" : "Activity (30 days)"}</h3>
        <div class="heatmap" id="heatmap"></div>
      </div>

      ${stats.weak_areas.length > 0 ? `
        <div class="weak-areas">
          <h3>${state.lang === "fi" ? "Vaikeat alueet" : "Weak areas"}</h3>
          ${stats.weak_areas.map(w => {
            const lessonTitle = findLessonTitle(w.lesson_id);
            return `<div class="weak-item">
              <span>${lessonTitle} #${w.exercise_index + 1}</span>
              <span class="weak-badge">${w.attempts} ${state.lang === "fi" ? "yritystä" : "attempts"}</span>
            </div>`;
          }).join("")}
        </div>
      ` : ""}
    `;

    // Render heatmap
    const heatmap = document.getElementById("heatmap");
    const activityMap = {};
    stats.activity.forEach(a => activityMap[a.date] = a.xp_earned);

    for (let i = 29; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = d.toISOString().split("T")[0];
      const xp = activityMap[key] || 0;
      let level = 0;
      if (xp > 0) level = 1;
      if (xp >= 30) level = 2;
      if (xp >= 60) level = 3;
      if (xp >= 100) level = 4;
      const div = document.createElement("div");
      div.className = `heatmap-day level-${level}`;
      div.title = `${key}: ${xp} XP`;
      heatmap.appendChild(div);
    }
  } catch (e) {
    content.innerHTML = `<p style="color: var(--red)">Error loading stats</p>`;
  }
}

function findLessonTitle(lessonId) {
  for (const mod of MODULES) {
    const lesson = mod.lessons.find(l => l.id === lessonId);
    if (lesson) return t(lesson.title);
  }
  return lessonId;
}

// ── Achievements View ──
async function loadAchievements() {
  const content = document.getElementById("achievements-content");

  if (!state.token || state.isGuest) {
    content.innerHTML = `<p style="text-align:center; color: var(--text-muted); padding: 40px;">${state.lang === "fi" ? "Kirjaudu sisään nähdäksesi saavutukset" : "Log in to see achievements"}</p>`;
    return;
  }

  content.innerHTML = `<p style="text-align:center; color: var(--text-muted);">${state.lang === "fi" ? "Ladataan..." : "Loading..."}</p>`;

  try {
    const res = await apiCall("achievements");
    const unlocked = res.achievements.filter(a => a.unlocked).length;
    const total = res.achievements.length;

    content.innerHTML = `
      <p style="text-align:center; color: var(--text-muted); margin: 10px 0 20px;">${unlocked} / ${total} ${state.lang === "fi" ? "avattu" : "unlocked"}</p>
      <div class="achievements-grid">
        ${res.achievements.map(a => `
          <div class="achievement-card ${a.unlocked ? "unlocked" : "locked"}">
            <div class="ach-icon">${a.icon}</div>
            <div class="ach-name">${state.lang === "fi" ? a.fi : a.en}</div>
            <div class="ach-desc">${state.lang === "fi" ? a.desc_fi : a.desc_en}</div>
          </div>
        `).join("")}
      </div>
    `;
  } catch (e) {
    content.innerHTML = `<p style="color: var(--red)">Error loading achievements</p>`;
  }
}

// ── Review View ──
async function loadReview() {
  const content = document.getElementById("review-content");

  if (!state.token || state.isGuest) {
    content.innerHTML = `<p style="text-align:center; color: var(--text-muted); padding: 40px;">${state.lang === "fi" ? "Kirjaudu sisään käyttääksesi kertausta" : "Log in to use review mode"}</p>`;
    return;
  }

  content.innerHTML = `<p style="text-align:center; color: var(--text-muted);">${state.lang === "fi" ? "Ladataan..." : "Loading..."}</p>`;

  try {
    const res = await apiCall("review");
    if (res.review_exercises.length === 0) {
      content.innerHTML = `
        <div class="review-empty">
          <div class="empty-icon">✨</div>
          <p>${state.lang === "fi" ? "Ei kertaavia harjoituksia juuri nyt! Jatka uusien oppituntien tekemistä." : "No exercises to review right now! Keep doing new lessons."}</p>
        </div>
      `;
      return;
    }

    content.innerHTML = `
      <p style="text-align:center; margin-bottom: 20px; color: var(--text-muted);">
        ${res.review_exercises.length} ${state.lang === "fi" ? "harjoitusta kertaattavana" : "exercises to review"}
      </p>
      <button class="btn btn-primary btn-full" onclick="startReviewSession()" style="max-width: 300px; margin: 0 auto; display: block;">
        ${state.lang === "fi" ? "Aloita kertaus" : "Start review"}
      </button>
      <div style="margin-top: 20px;">
        ${res.review_exercises.map(r => {
          const title = findLessonTitle(r.lesson_id);
          return `<div class="weak-item">
            <span>${title} #${r.exercise_index + 1}</span>
            <span class="weak-badge">${r.correct ? "✓" : "✗"} (${r.attempts}x)</span>
          </div>`;
        }).join("")}
      </div>
    `;
  } catch (e) {
    content.innerHTML = `<p style="color: var(--red)">Error loading review</p>`;
  }
}

async function startReviewSession() {
  if (!state.token || state.isGuest) return;

  try {
    const res = await apiCall("review");
    if (res.review_exercises.length === 0) return;

    // Collect actual exercises
    const exercises = [];
    for (const r of res.review_exercises.slice(0, 10)) {
      for (const mod of MODULES) {
        const lesson = mod.lessons.find(l => l.id === r.lesson_id);
        if (lesson && lesson.exercises[r.exercise_index]) {
          exercises.push(lesson.exercises[r.exercise_index]);
          break;
        }
      }
    }

    if (exercises.length === 0) return;

    state.currentLessonId = "review-session";
    state.exerciseIndex = 0;
    state.score = 0;
    state.totalAnswered = 0;
    state.correctAnswered = 0;
    state.exerciseResults = [];
    state.lessonStartTime = Date.now();
    state.exercises = exercises;

    showView("lesson");
    renderExercise();
  } catch (e) {}
}

// ── Bookmarks View ──
async function loadBookmarks() {
  const content = document.getElementById("bookmarks-content");

  if (!state.token || state.isGuest) {
    content.innerHTML = `<p style="text-align:center; color: var(--text-muted); padding: 40px;">${state.lang === "fi" ? "Kirjaudu sisään käyttääksesi kirjanmerkkejä" : "Log in to use bookmarks"}</p>`;
    return;
  }

  content.innerHTML = `<p style="text-align:center; color: var(--text-muted);">${state.lang === "fi" ? "Ladataan..." : "Loading..."}</p>`;

  try {
    const res = await apiCall("bookmarks");
    if (res.bookmarks.length === 0) {
      content.innerHTML = `
        <div class="review-empty">
          <div class="empty-icon">🔖</div>
          <p>${state.lang === "fi" ? "Ei kirjanmerkkejä vielä. Lisää niitä harjoituksissa 🏷️-painikkeella." : "No bookmarks yet. Add them using the 🏷️ button during exercises."}</p>
        </div>
      `;
      return;
    }

    content.innerHTML = res.bookmarks.map(b => {
      const title = findLessonTitle(b.lesson_id);
      let exercisePreview = "";
      for (const mod of MODULES) {
        const lesson = mod.lessons.find(l => l.id === b.lesson_id);
        if (lesson && lesson.exercises[b.exercise_index]) {
          const ex = lesson.exercises[b.exercise_index];
          exercisePreview = t(ex.question || ex.instruction || ex.sentence) || "";
          break;
        }
      }
      return `
        <div class="lesson-card" onclick="jumpToExercise('${b.lesson_id}', ${b.exercise_index})">
          <div class="lesson-icon" style="background: rgba(255,200,0,0.1)">🔖</div>
          <div class="lesson-info">
            <h3>${title}</h3>
            <p>${exercisePreview.substring(0, 60)}${exercisePreview.length > 60 ? "..." : ""}</p>
          </div>
        </div>
      `;
    }).join("");
  } catch (e) {
    content.innerHTML = `<p style="color: var(--red)">Error loading bookmarks</p>`;
  }
}

function jumpToExercise(lessonId, exerciseIndex) {
  // Start lesson and jump to specific exercise
  state.currentLessonId = lessonId;
  let exercises = null;
  for (const mod of MODULES) {
    const lesson = mod.lessons.find(l => l.id === lessonId);
    if (lesson) { exercises = [...lesson.exercises]; break; }
  }
  if (!exercises) return;

  state.exercises = exercises;
  state.exerciseIndex = Math.min(exerciseIndex, exercises.length - 1);
  state.score = 0;
  state.totalAnswered = 0;
  state.correctAnswered = 0;
  state.exerciseResults = [];
  state.lessonStartTime = Date.now();

  showView("lesson");
  renderExercise();
}

// ── Leaderboard ──
async function loadLeaderboard() {
  const content = document.getElementById("leaderboard-content");

  if (!state.token || state.isGuest) {
    content.innerHTML = `<p style="text-align:center; color: var(--text-muted); padding: 40px;">${state.lang === "fi" ? "Kirjaudu sisään nähdäksesi tulostaulukko" : "Log in to see the leaderboard"}</p>`;
    return;
  }

  content.innerHTML = `<p style="text-align:center; color: var(--text-muted);">${state.lang === "fi" ? "Ladataan..." : "Loading..."}</p>`;

  try {
    const res = await apiCall("leaderboard");
    content.innerHTML = `
      <div class="leaderboard-list">
        ${res.leaderboard.map((l, i) => {
          const rankClass = i === 0 ? "gold" : i === 1 ? "silver" : i === 2 ? "bronze" : "";
          const isMe = state.user && l.username === state.user.username;
          return `
            <div class="leaderboard-item ${isMe ? "current-user" : ""}">
              <div class="lb-rank ${rankClass}">${i + 1}</div>
              <div class="lb-name">${l.display_name}${isMe ? " ← " + (state.lang === "fi" ? "sinä" : "you") : ""}</div>
              <div class="lb-xp">${l.total_xp} XP</div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  } catch (e) {
    content.innerHTML = `<p style="color: var(--red)">Error loading leaderboard</p>`;
  }
}

// ── Settings ──
function loadSettings() {
  const content = document.getElementById("settings-content");
  const isLoggedIn = state.token && !state.isGuest;

  content.innerHTML = `
    <div class="settings-section">
      <h3>${state.lang === "fi" ? "Päivätavoite" : "Daily Goal"}</h3>
      <div class="goal-options">
        ${[20, 50, 100, 150].map(g => `
          <button class="goal-option ${state.dailyGoal === g ? "active" : ""}" onclick="setDailyGoal(${g})">${g} XP</button>
        `).join("")}
      </div>
    </div>

    ${isLoggedIn ? `
      <div class="settings-section">
        <h3>${state.lang === "fi" ? "Profiili" : "Profile"}</h3>
        <div class="settings-row">
          <label>${state.lang === "fi" ? "Nimi" : "Name"}</label>
          <input type="text" id="settings-name" value="${state.user.display_name || ""}" placeholder="Display name">
        </div>
        <div class="settings-row">
          <label>${state.lang === "fi" ? "Uusi salasana" : "New password"}</label>
          <input type="password" id="settings-password" placeholder="${state.lang === "fi" ? "Jätä tyhjäksi" : "Leave empty"}">
        </div>
        <button class="btn btn-primary" onclick="saveSettings()" style="margin-top: 12px; width: 100%;">
          ${state.lang === "fi" ? "Tallenna" : "Save"}
        </button>
      </div>
    ` : `
      <div class="settings-section">
        <h3>${state.lang === "fi" ? "Tili" : "Account"}</h3>
        <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 12px;">
          ${state.lang === "fi" ? "Luo tili tallentaaksesi edistymisesi pilveen" : "Create an account to save your progress to the cloud"}
        </p>
        <button class="btn btn-primary" onclick="doLogout()" style="width: 100%;">
          ${state.lang === "fi" ? "Kirjaudu / Rekisteröidy" : "Log in / Register"}
        </button>
      </div>
    `}

    <div class="settings-section">
      <h3>${state.lang === "fi" ? "Tietoja" : "About"}</h3>
      <p style="color: var(--text-muted); font-size: 13px; line-height: 1.6;">
        Suomi Oppi — ${state.lang === "fi" ? "Yhteiskuntaorientaation oppimissovellus" : "Society orientation learning app"}<br>
        ${state.lang === "fi" ? "Sisältö perustuu" : "Content based on"} yhteiskuntaorientaatio.fi<br>
        ${state.lang === "fi" ? "Tavoitetaso" : "Target level"}: B1
      </p>
    </div>
  `;
}

async function setDailyGoal(goal) {
  state.dailyGoal = goal;
  if (state.token && !state.isGuest) {
    await apiCall("settings", { daily_goal: goal }).catch(() => {});
  } else {
    saveGuestState();
  }
  loadSettings();
  updateTopBar();
  renderHome();
}

async function saveSettings() {
  const name = document.getElementById("settings-name").value.trim();
  const password = document.getElementById("settings-password").value;

  const data = {};
  if (name) data.display_name = name;
  if (password && password.length >= 6) data.password = password;

  try {
    await apiCall("settings", data);
    if (name) state.user.display_name = name;
    document.getElementById("settings-password").value = "";
    // Show brief confirmation
    const btn = document.querySelector("#settings-content .btn-primary");
    const origText = btn.textContent;
    btn.textContent = "✓";
    btn.style.background = "var(--green)";
    setTimeout(() => { btn.textContent = origText; btn.style.background = ""; }, 1500);
  } catch (e) {
    alert(e.message);
  }
}

// ── Utilities ──
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ── Tips/Theory View ──
function showTips(lessonId) {
  const tips = LESSON_TIPS[lessonId];
  if (!tips) return;

  const content = document.getElementById("tips-content");
  content.innerHTML = `
    <div class="tips-container">
      <div class="tips-header">
        <h2>${t(tips.title)}</h2>
        <p>${state.lang === "fi" ? "Lue teoria ennen harjoituksia" : "Read the theory before exercises"}</p>
      </div>
      ${tips.sections.map(s => `
        <div class="tip-section">
          <h3>${t(s.heading)}</h3>
          <div class="tip-body">${t(s.content)}</div>
        </div>
      `).join("")}
      <div class="tips-actions">
        <button class="btn btn-primary" onclick="startExercisesAfterTips()">
          ${state.lang === "fi" ? "Aloita harjoitukset" : "Start exercises"} →
        </button>
      </div>
    </div>
  `;
  showView("tips");
}

function startExercisesAfterTips() {
  showView("lesson");
  renderExercise();
}

// ── Reading Comprehension Exercise ──
function renderReadingComprehension(container, ex) {
  // ex has: passage (text), questions array with choices and correct index
  container.innerHTML += `
    <div class="exercise-type-label">${state.lang === "fi" ? "Luetunymmärtäminen" : "Reading comprehension"}</div>
    <div class="reading-passage">${t(ex.passage)}</div>
    <div class="reading-question-label">${state.lang === "fi" ? "Kysymys" : "Question"} ${(ex._qIndex || 0) + 1}</div>
    <div class="exercise-question">${t(ex.question)}</div>
    <div class="choices">
      ${ex.choices.map((c, i) => `
        <button class="choice-btn" data-index="${i}">
          <span class="choice-key">${["A","B","C","D"][i]}</span>
          <span>${t(c)}</span>
        </button>
      `).join("")}
    </div>
  `;

  container.querySelectorAll(".choice-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index);
      const correct = idx === ex.correct;
      handleAnswer(correct, ex, container, () => {
        container.querySelectorAll(".choice-btn").forEach(b => {
          b.classList.add("disabled");
          const bIdx = parseInt(b.dataset.index);
          if (bIdx === ex.correct) b.classList.add("correct");
          if (bIdx === idx && !correct) b.classList.add("incorrect");
        });
      });
    });
  });
}

// ── Vocabulary Flashcard System ──
function loadVocabView() {
  if (typeof VOCABULARY === "undefined") return;
  const content = document.getElementById("vocab-content");

  // Group by module
  const byModule = {};
  VOCABULARY.forEach(v => {
    if (!byModule[v.module]) byModule[v.module] = [];
    byModule[v.module].push(v);
  });

  const statsBar = document.getElementById("vocab-stats-bar");
  const total = VOCABULARY.length;
  statsBar.innerHTML = `
    <div class="vocab-stat"><div class="dot" style="background:var(--green)"></div> ${state.lang === "fi" ? "Osattu" : "Mastered"}: <span id="vocab-mastered-count">0</span></div>
    <div class="vocab-stat"><div class="dot" style="background:var(--orange)"></div> ${state.lang === "fi" ? "Opettelut" : "Learning"}: <span id="vocab-learning-count">0</span></div>
    <div class="vocab-stat"><div class="dot" style="background:var(--gray-400)"></div> ${state.lang === "fi" ? "Uudet" : "New"}: <span id="vocab-new-count">${total}</span></div>
  `;

  let html = `
    <div class="vocab-practice-actions">
      <button class="btn btn-primary" onclick="startVocabPractice('all')" style="flex:1">
        ${state.lang === "fi" ? "Harjoittele kaikkia" : "Practice all"} (${total})
      </button>
      <button class="btn btn-secondary" onclick="startVocabPractice('due')" style="flex:1">
        ${state.lang === "fi" ? "Kertaa" : "Review due"}
      </button>
    </div>
  `;

  for (const [modId, words] of Object.entries(byModule)) {
    const mod = MODULES.find(m => m.id === modId);
    const modTitle = mod ? t(mod.title) : modId;
    html += `
      <div class="vocab-module-section">
        <div class="vocab-module-title">${mod ? mod.icon : ""} ${modTitle} (${words.length})</div>
        <div class="vocab-card-list">
          ${words.map(w => `
            <div class="vocab-item" onclick="showVocabDetail('${w.id}')">
              <div>
                <div class="vocab-word">${w.fi}</div>
                <div class="vocab-translation">${w.en}</div>
              </div>
            </div>
          `).join("")}
        </div>
        <button class="btn btn-secondary" onclick="startVocabPractice('module', '${modId}')" style="width:100%; margin-top: 8px;">
          ${state.lang === "fi" ? "Harjoittele tätä aihetta" : "Practice this topic"}
        </button>
      </div>
    `;
  }

  content.innerHTML = html;
}

function showVocabDetail(wordId) {
  const word = VOCABULARY.find(v => v.id === wordId);
  if (!word) return;
  alert(`${word.fi} — ${word.en}\n\n${t({fi: word.definition_fi, en: word.definition_en})}\n\n${word.example_fi || ""}`);
}

function startVocabPractice(mode, moduleId) {
  let words;
  if (mode === "module") {
    words = VOCABULARY.filter(v => v.module === moduleId);
  } else {
    words = [...VOCABULARY];
  }
  shuffleArray(words);
  words = words.slice(0, 20); // max 20 per session

  state.vocabSession = { words, index: 0, correct: 0, total: words.length };
  showView("vocab-practice");
  renderFlashcard();
}

function renderFlashcard() {
  const session = state.vocabSession;
  if (!session || session.index >= session.words.length) {
    finishVocabSession();
    return;
  }

  const word = session.words[session.index];
  const content = document.getElementById("vocab-practice-content");

  content.innerHTML = `
    <div class="flashcard-progress">${session.index + 1} / ${session.total}</div>
    <div class="flashcard-container" onclick="document.querySelector('.flashcard').classList.toggle('flipped')">
      <div class="flashcard" id="current-flashcard">
        <div class="flashcard-face flashcard-front">
          <div class="flashcard-word">${word.fi}</div>
          <div class="flashcard-hint">${state.lang === "fi" ? "Napauta kääntääksesi" : "Tap to flip"}</div>
        </div>
        <div class="flashcard-face flashcard-back">
          <div class="flashcard-word" style="font-size:20px; color: var(--green);">${word.en}</div>
          <div class="flashcard-definition">${t({fi: word.definition_fi, en: word.definition_en})}</div>
          ${word.example_fi ? `<div class="flashcard-example">"${word.example_fi}"</div>` : ""}
        </div>
      </div>
    </div>
    <div class="flashcard-buttons">
      <button class="fc-btn fc-wrong" onclick="rateFlashcard(false)">
        ${state.lang === "fi" ? "En osannut" : "Didn't know"} ✗
      </button>
      <button class="fc-btn fc-correct" onclick="rateFlashcard(true)">
        ${state.lang === "fi" ? "Osasin" : "Got it"} ✓
      </button>
    </div>
  `;
}

async function rateFlashcard(correct) {
  const session = state.vocabSession;
  const word = session.words[session.index];
  if (correct) session.correct++;

  // Save to server
  if (state.token && !state.isGuest) {
    apiCall("vocab-result", { word_id: word.id, correct }).catch(() => {});
  }

  session.index++;
  renderFlashcard();
}

function finishVocabSession() {
  const session = state.vocabSession;
  const xp = session.correct * 5;
  state.xp += xp;
  state.todayXp += xp;
  updateTopBar();

  const content = document.getElementById("vocab-practice-content");
  const pct = Math.round((session.correct / session.total) * 100);

  content.innerHTML = `
    <div class="complete-content">
      <div class="complete-icon">📝</div>
      <h2>${state.lang === "fi" ? "Sanastoharjoitus valmis!" : "Vocabulary practice done!"}</h2>
      <div id="complete-stats" style="display:flex; justify-content:center; gap:32px; margin:24px 0;">
        <div class="stat-item">
          <div class="stat-value">${session.correct}/${session.total}</div>
          <div class="stat-label">${state.lang === "fi" ? "Oikein" : "Correct"}</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">${pct}%</div>
          <div class="stat-label">${state.lang === "fi" ? "Tarkkuus" : "Accuracy"}</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">+${xp}</div>
          <div class="stat-label">XP</div>
        </div>
      </div>
      <button class="btn btn-primary" onclick="showView('vocab')">
        ${state.lang === "fi" ? "Takaisin sanastoon" : "Back to vocabulary"}
      </button>
    </div>
  `;
}

// ── Practice Test System ──
function showPracticeTestIntro() {
  const content = document.getElementById("practice-test-content");
  content.innerHTML = `
    <div class="test-intro">
      <h2>${state.lang === "fi" ? "Harjoituskoe" : "Practice Test"}</h2>
      <p>${state.lang === "fi"
        ? "Testaa tietosi suomalaisesta yhteiskunnasta. Koe simuloi kansalaisuustestin kysymyksiä kaikilta aihealueilta."
        : "Test your knowledge of Finnish society. The test simulates citizenship test questions from all topics."}</p>
      <div class="test-info">
        <strong>${state.lang === "fi" ? "Kokeen tiedot:" : "Test info:"}</strong><br>
        • ${state.lang === "fi" ? "30 kysymystä kaikilta aihealueilta" : "30 questions from all topics"}<br>
        • ${state.lang === "fi" ? "Aikaraja: 30 minuuttia" : "Time limit: 30 minutes"}<br>
        • ${state.lang === "fi" ? "Läpäisy: 70 % oikein" : "Pass: 70% correct"}<br>
        • ${state.lang === "fi" ? "Sisältää monivalinta-, totta/tarua- ja luetunymmärtämistehtäviä" : "Includes multiple choice, true/false, and reading comprehension"}
      </div>
      <button class="btn btn-primary btn-full" onclick="startPracticeTest()" style="max-width: 300px; margin-top: 16px;">
        ${state.lang === "fi" ? "Aloita koe" : "Start test"}
      </button>
    </div>
  `;
  showView("practice-test");
}

function startPracticeTest() {
  // Collect exercises from all modules
  const allExercises = [];
  for (const mod of MODULES) {
    for (const lesson of mod.lessons) {
      for (let i = 0; i < lesson.exercises.length; i++) {
        allExercises.push({
          ...lesson.exercises[i],
          _module: mod.id,
          _lessonId: lesson.id,
          _exIndex: i
        });
      }
    }
  }

  // Add reading comprehension from READING_PASSAGES
  if (typeof READING_PASSAGES !== "undefined") {
    for (const passage of READING_PASSAGES) {
      for (let qi = 0; qi < passage.questions.length; qi++) {
        const q = passage.questions[qi];
        allExercises.push({
          type: "reading",
          passage: passage.text,
          question: q.question,
          choices: q.choices,
          correct: q.correct,
          explanation: { fi: "", en: "" },
          _module: passage.module,
          _qIndex: qi
        });
      }
    }
  }

  shuffleArray(allExercises);
  const selected = allExercises.slice(0, 30);

  state.practiceTest = {
    exercises: selected,
    index: 0,
    answers: [],
    startTime: Date.now(),
    timeLimit: 30 * 60 * 1000 // 30 minutes
  };

  state.currentLessonId = "practice-test";
  state.exerciseIndex = 0;
  state.score = 0;
  state.totalAnswered = 0;
  state.correctAnswered = 0;
  state.exerciseResults = [];
  state.exercises = selected;
  state.lessonStartTime = Date.now();

  // Start timer
  startTestTimer();

  showView("lesson");
  renderExercise();
}

let testTimerInterval = null;
function startTestTimer() {
  // Create timer element
  const existing = document.querySelector(".test-timer");
  if (existing) existing.remove();

  const timer = document.createElement("div");
  timer.className = "test-timer";
  timer.id = "test-timer";
  document.body.appendChild(timer);

  testTimerInterval = setInterval(() => {
    if (!state.practiceTest) {
      clearInterval(testTimerInterval);
      timer.remove();
      return;
    }
    const elapsed = Date.now() - state.practiceTest.startTime;
    const remaining = Math.max(0, state.practiceTest.timeLimit - elapsed);
    const mins = Math.floor(remaining / 60000);
    const secs = Math.floor((remaining % 60000) / 1000);
    timer.textContent = `${mins}:${secs.toString().padStart(2, "0")}`;

    if (remaining < 5 * 60000) timer.className = "test-timer warning";
    if (remaining < 60000) timer.className = "test-timer danger";
    if (remaining <= 0) {
      clearInterval(testTimerInterval);
      finishLesson(); // Auto-submit
    }
  }, 1000);
}

// Override finishLesson to handle practice test cleanup
const _originalFinishLesson = finishLesson;
finishLesson = async function() {
  // Clean up test timer
  if (testTimerInterval) {
    clearInterval(testTimerInterval);
    testTimerInterval = null;
  }
  const timerEl = document.getElementById("test-timer");
  if (timerEl) timerEl.remove();

  if (state.practiceTest) {
    await finishPracticeTest();
    return;
  }

  return _originalFinishLesson();
};

async function finishPracticeTest() {
  const test = state.practiceTest;
  const timeSpent = Math.round((Date.now() - test.startTime) / 1000);
  const total = state.totalAnswered;
  const correct = state.correctAnswered;
  const score = total > 0 ? Math.round((correct / total) * 100) : 0;
  const passed = score >= 70;

  // Calculate per-module scores
  const moduleScores = {};
  state.exerciseResults.forEach((er, i) => {
    const ex = test.exercises[i];
    if (ex && ex._module) {
      if (!moduleScores[ex._module]) moduleScores[ex._module] = { total: 0, correct: 0 };
      moduleScores[ex._module].total++;
      if (er.correct) moduleScores[ex._module].correct++;
    }
  });

  // Save to server
  if (state.token && !state.isGuest) {
    try {
      await apiCall("test-result", {
        total_questions: total,
        correct_answers: correct,
        score: score,
        time_spent: timeSpent,
        module_scores: moduleScores
      });
    } catch (e) {}
  }

  // Render results
  const content = document.getElementById("test-results-content");
  const mins = Math.floor(timeSpent / 60);
  const secs = timeSpent % 60;

  content.innerHTML = `
    <div class="test-results">
      <h2>${passed
        ? (state.lang === "fi" ? "Läpäisit kokeen!" : "You passed!")
        : (state.lang === "fi" ? "Et läpäissyt vielä" : "Not passed yet")}</h2>
      <div class="test-score-circle ${passed ? "pass" : "fail"}">
        <div class="test-score-number">${score}%</div>
        <div class="test-score-label">${correct}/${total}</div>
      </div>
      <p style="color: var(--text-muted); margin: 10px 0;">
        ${state.lang === "fi" ? "Aika" : "Time"}: ${mins}:${secs.toString().padStart(2, "0")} |
        ${state.lang === "fi" ? "Läpäisyraja" : "Pass threshold"}: 70%
      </p>

      <div class="test-module-breakdown">
        <h3 style="font-size:15px; margin-bottom:10px;">${state.lang === "fi" ? "Tulokset aiheittain" : "Results by topic"}</h3>
        ${Object.entries(moduleScores).map(([modId, ms]) => {
          const mod = MODULES.find(m => m.id === modId);
          const modTitle = mod ? t(mod.title) : modId;
          const pct = ms.total > 0 ? Math.round((ms.correct / ms.total) * 100) : 0;
          const color = pct >= 70 ? "var(--green)" : pct >= 50 ? "var(--orange)" : "var(--red)";
          return `
            <div class="test-module-row">
              <span>${mod ? mod.icon : ""} ${modTitle}</span>
              <span style="display:flex; align-items:center; gap:8px;">
                <div class="test-module-bar"><div class="test-module-bar-fill" style="width:${pct}%; background:${color}"></div></div>
                <span style="font-weight:700; color:${color}">${pct}%</span>
              </span>
            </div>
          `;
        }).join("")}
      </div>

      <div style="display:flex; gap:12px; margin-top:20px;">
        <button class="btn btn-secondary" onclick="goHome()" style="flex:1">
          ${state.lang === "fi" ? "Etusivulle" : "Home"}
        </button>
        <button class="btn btn-primary" onclick="showPracticeTestIntro()" style="flex:1">
          ${state.lang === "fi" ? "Yritä uudelleen" : "Try again"}
        </button>
      </div>
    </div>
  `;

  state.practiceTest = null;
  showView("test-results");
}

// ── Override showView for new views ──
const _originalShowView = showView;
showView = function(viewId) {
  _originalShowView(viewId);
  if (viewId === "vocab") loadVocabView();
};

// ── Start ──
init();
