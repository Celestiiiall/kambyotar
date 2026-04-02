const STORAGE_KEY = "radtech-bit203-study-progress-v1";

const state = {
  mode: "plain",
  unitIndex: 0,
  query: "",
  progress: loadProgress()
};

const unitNav = document.querySelector("#unitNav");
const modeSwitcher = document.querySelector("#modeSwitcher");
const unitDetail = document.querySelector("#unitDetail");
const glossaryList = document.querySelector("#glossaryList");
const revisionChecklist = document.querySelector("#revisionChecklist");
const masterySnapshot = document.querySelector("#masterySnapshot");
const searchInput = document.querySelector("#searchInput");
const jumpToQuizButton = document.querySelector("#jumpToQuizButton");
const jumpToGlossaryButton = document.querySelector("#jumpToGlossaryButton");
const resetProgressButton = document.querySelector("#resetProgressButton");
const unitCount = document.querySelector("#unitCount");
const termCount = document.querySelector("#termCount");
const masteryCount = document.querySelector("#masteryCount");

initialize();

function initialize() {
  const preferredUnit = findBestInitialUnit();
  if (preferredUnit >= 0) {
    state.unitIndex = preferredUnit;
  }

  renderStaticCounts();
  renderModeSwitcher();
  renderUnitNav();
  renderMainView();
  renderGlossary();
  renderChecklist();
  renderSnapshot();
  wireEvents();
}

function wireEvents() {
  searchInput.addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    renderMainView();
    renderGlossary();
  });

  jumpToQuizButton.addEventListener("click", () => {
    const quizSection = document.querySelector("#quizAnchor");
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  jumpToGlossaryButton.addEventListener("click", () => {
    document.querySelector("#translator").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  resetProgressButton.addEventListener("click", () => {
    if (!window.confirm("Reset your saved quiz answers and checklist progress for this browser?")) {
      return;
    }

    state.progress = createEmptyProgress();
    saveProgress();
    renderUnitNav();
    renderMainView();
    renderChecklist();
    renderSnapshot();
    renderStaticCounts();
  });

  unitNav.addEventListener("click", (event) => {
    const button = event.target.closest("[data-unit-index]");
    if (!button) {
      return;
    }

    state.unitIndex = Number(button.dataset.unitIndex);
    renderUnitNav();
    renderMainView();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  modeSwitcher.addEventListener("click", (event) => {
    const button = event.target.closest("[data-mode]");
    if (!button) {
      return;
    }

    state.mode = button.dataset.mode;
    renderModeSwitcher();
    renderMainView();
    renderGlossary();
  });

  unitDetail.addEventListener("click", (event) => {
    const answerButton = event.target.closest("[data-question-id]");
    if (!answerButton) {
      return;
    }

    const questionId = answerButton.dataset.questionId;
    const selectedIndex = Number(answerButton.dataset.optionIndex);
    state.progress.answers[questionId] = selectedIndex;
    saveProgress();
    renderUnitNav();
    renderMainView();
    renderSnapshot();
    renderStaticCounts();
  });

  revisionChecklist.addEventListener("change", (event) => {
    const checkbox = event.target.closest("[data-check-id]");
    if (!checkbox) {
      return;
    }

    state.progress.checklist[checkbox.dataset.checkId] = checkbox.checked;
    saveProgress();
    renderChecklist();
    renderSnapshot();
  });
}

function renderStaticCounts() {
  unitCount.textContent = String(window.STUDY_DATA.units.length);
  termCount.textContent = String(window.STUDY_DATA.glossary.length);
  masteryCount.textContent = `${getTotalMastery().percent}%`;
}

function renderModeSwitcher() {
  modeSwitcher.innerHTML = window.STUDY_DATA.modes.map((mode) => `
    <button
      type="button"
      class="mode-pill ${mode.id === state.mode ? "active" : ""}"
      data-mode="${mode.id}"
      aria-pressed="${mode.id === state.mode ? "true" : "false"}"
      title="${mode.description}"
    >
      ${mode.label}
    </button>
  `).join("");
}

function renderUnitNav() {
  unitNav.innerHTML = window.STUDY_DATA.units.map((unit, index) => {
    const score = getUnitScore(unit);

    return `
      <button
        type="button"
        class="unit-card ${index === state.unitIndex ? "active" : ""}"
        data-unit-index="${index}"
        aria-pressed="${index === state.unitIndex ? "true" : "false"}"
      >
        <span class="unit-card-label">${unit.label}</span>
        <strong>${unit.title}</strong>
        <span class="unit-card-meta">${unit.chapter}</span>
        <div class="progress-track" aria-hidden="true">
          <span class="progress-fill" style="width: ${score.percent}%;"></span>
        </div>
        <span class="unit-card-score">${score.correct}/${score.total} quiz correct</span>
      </button>
    `;
  }).join("");
}

function renderMainView() {
  const unit = window.STUDY_DATA.units[state.unitIndex];
  const concepts = unit.concepts.filter((concept) => matchesQuery([
    concept.term,
    concept.memoryHook,
    concept.plain,
    concept.radiology,
    concept.exam
  ]));
  const selectedMode = window.STUDY_DATA.modes.find((mode) => mode.id === state.mode);

  unitDetail.innerHTML = `
    <div class="unit-head">
      <div>
        <p class="eyebrow">${unit.label} - ${unit.chapter}</p>
        <h2>${unit.title}</h2>
        <p class="unit-summary">${highlight(unit.objective)}</p>
      </div>
      <div class="unit-focus">
        <div class="focus-chip">
          <span>Study mode</span>
          <strong>${selectedMode.label}</strong>
        </div>
        <div class="focus-chip">
          <span>Current search</span>
          <strong>${state.query ? `"${escapeHtml(state.query)}"` : "All topics"}</strong>
        </div>
      </div>
    </div>

    <div class="callout-grid">
      <section class="callout-card warm">
        <p class="eyebrow">Fast Translation</p>
        <p>${highlight(unit.quickWin)}</p>
      </section>
      <section class="callout-card cool">
        <p class="eyebrow">Exam Focus</p>
        <p>${highlight(unit.examFocus)}</p>
      </section>
    </div>

    <section class="content-block">
      <div class="section-head">
        <div>
          <p class="eyebrow">Core Ideas</p>
          <h3>${concepts.length} concept${concepts.length === 1 ? "" : "s"} in view</h3>
        </div>
      </div>
      <div class="concept-grid">
        ${concepts.length ? concepts.map(renderConceptCard).join("") : `
          <div class="empty-state">
            <h3>No concept cards match this search.</h3>
            <p>Try a broader keyword like "system", "database", or "cloud".</p>
          </div>
        `}
      </div>
    </section>

    <section class="content-block">
      <div class="section-head">
        <div>
          <p class="eyebrow">Radiology Scenarios</p>
          <h3>How the unit looks in real work</h3>
        </div>
      </div>
      <div class="scenario-grid">
        ${unit.scenarios.map(renderScenarioCard).join("")}
      </div>
    </section>

    <section class="content-block">
      <div class="section-head">
        <div>
          <p class="eyebrow">Common Mix-Ups</p>
          <h3>What to avoid in exams</h3>
        </div>
      </div>
      <ul class="pitfall-list">
        ${unit.pitfalls.map((pitfall) => `<li>${highlight(pitfall)}</li>`).join("")}
      </ul>
    </section>

    <section class="content-block" id="quizAnchor">
      <div class="section-head">
        <div>
          <p class="eyebrow">Mini Quiz</p>
          <h3>Check your understanding before moving on</h3>
        </div>
      </div>
      <div class="quiz-grid">
        ${unit.quiz.map(renderQuizCard).join("")}
      </div>
    </section>
  `;
}

function renderConceptCard(concept) {
  return `
    <article class="concept-card">
      <p class="concept-term">${highlight(concept.term)}</p>
      <h3>${highlight(concept.memoryHook)}</h3>
      <p>${highlight(concept[state.mode])}</p>
    </article>
  `;
}

function renderScenarioCard(scenario) {
  return `
    <article class="scenario-card">
      <p class="concept-term">${highlight(scenario.title)}</p>
      <p class="scenario-summary">${highlight(scenario.summary)}</p>
      <ol class="scenario-steps">
        ${scenario.steps.map((step) => `<li>${highlight(step)}</li>`).join("")}
      </ol>
      <p class="scenario-takeaway">${highlight(scenario.takeaway)}</p>
    </article>
  `;
}

function renderQuizCard(question) {
  const selected = state.progress.answers[question.id];
  const isAnswered = Number.isInteger(selected);
  const isCorrect = selected === question.answer;

  return `
    <article class="quiz-card ${isAnswered ? (isCorrect ? "correct" : "incorrect") : ""}">
      <p class="quiz-question">${highlight(question.prompt)}</p>
      <div class="option-list">
        ${question.options.map((option, index) => `
          <button
            type="button"
            class="option-button ${selected === index ? "selected" : ""} ${isAnswered && question.answer === index ? "answer" : ""}"
            data-question-id="${question.id}"
            data-option-index="${index}"
          >
            ${highlight(option)}
          </button>
        `).join("")}
      </div>
      <p class="quiz-feedback">
        ${isAnswered ? highlight(question.explain) : "Choose an answer to reveal the explanation."}
      </p>
    </article>
  `;
}

function renderGlossary() {
  const entries = window.STUDY_DATA.glossary.filter((entry) => matchesQuery([
    entry.term,
    entry.plain,
    entry.radiology
  ]));

  glossaryList.innerHTML = entries.length ? entries.map((entry) => `
    <article class="glossary-card">
      <p class="concept-term">${highlight(entry.term)}</p>
      <p>${highlight(entry.plain)}</p>
      <p class="glossary-radiology">${highlight(entry.radiology)}</p>
    </article>
  `).join("") : `
    <div class="empty-state">
      <h3>No glossary terms match this search.</h3>
      <p>Clear the search box to see the full translator.</p>
    </div>
  `;
}

function renderChecklist() {
  revisionChecklist.innerHTML = window.STUDY_DATA.checklist.map((item, index) => {
    const checkId = `check-${index}`;
    const checked = Boolean(state.progress.checklist[checkId]);

    return `
      <label class="check-row">
        <input type="checkbox" data-check-id="${checkId}" ${checked ? "checked" : ""}>
        <span>${highlight(item)}</span>
      </label>
    `;
  }).join("");
}

function renderSnapshot() {
  const totalMastery = getTotalMastery();
  const checkedItems = Object.values(state.progress.checklist).filter(Boolean).length;
  const nextTarget = getNextStudyTarget();

  masterySnapshot.innerHTML = `
    <div class="snapshot-metric">
      <strong>${totalMastery.correct}/${totalMastery.total}</strong>
      <span>Total quiz answers correct</span>
    </div>
    <div class="snapshot-metric">
      <strong>${totalMastery.percent}%</strong>
      <span>Mastery across all units</span>
    </div>
    <div class="snapshot-metric">
      <strong>${checkedItems}/${window.STUDY_DATA.checklist.length}</strong>
      <span>Checklist items ticked</span>
    </div>
    <div class="next-target">
      <p class="eyebrow">Next Target</p>
      <p>${nextTarget}</p>
    </div>
  `;
}

function getUnitScore(unit) {
  const correct = unit.quiz.reduce((total, question) => {
    return total + (state.progress.answers[question.id] === question.answer ? 1 : 0);
  }, 0);
  const total = unit.quiz.length;

  return {
    correct,
    total,
    percent: total ? Math.round((correct / total) * 100) : 0
  };
}

function getTotalMastery() {
  const totals = window.STUDY_DATA.units.reduce((accumulator, unit) => {
    const score = getUnitScore(unit);
    accumulator.correct += score.correct;
    accumulator.total += score.total;
    return accumulator;
  }, { correct: 0, total: 0 });

  return {
    ...totals,
    percent: totals.total ? Math.round((totals.correct / totals.total) * 100) : 0
  };
}

function findBestInitialUnit() {
  const firstIncompleteUnit = window.STUDY_DATA.units.findIndex((unit) => {
    const score = getUnitScore(unit);
    return score.correct < score.total;
  });

  return firstIncompleteUnit === -1 ? 0 : firstIncompleteUnit;
}

function getNextStudyTarget() {
  for (const unit of window.STUDY_DATA.units) {
    const score = getUnitScore(unit);
    if (score.correct < score.total) {
      return `${unit.label}: ${unit.title}`;
    }
  }

  return "All unit quizzes are correct. Use the checklist and glossary for final revision.";
}

function matchesQuery(values) {
  if (!state.query) {
    return true;
  }

  return values.some((value) => value.toLowerCase().includes(state.query));
}

function loadProgress() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return createEmptyProgress();
    }

    const parsed = JSON.parse(raw);
    return {
      answers: parsed.answers || {},
      checklist: parsed.checklist || {}
    };
  } catch (_error) {
    return createEmptyProgress();
  }
}

function saveProgress() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
  } catch (_error) {
    // Ignore storage failures so the study guide still works in restricted browsers.
  }
}

function createEmptyProgress() {
  return {
    answers: {},
    checklist: {}
  };
}

function highlight(text) {
  if (!state.query) {
    return escapeHtml(text);
  }

  const pattern = new RegExp(`(${escapeRegExp(state.query)})`, "ig");
  const segments = String(text).split(pattern);

  return segments.map((segment, index) => {
    const safeSegment = escapeHtml(segment);
    return index % 2 === 1 ? `<mark>${safeSegment}</mark>` : safeSegment;
  }).join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
