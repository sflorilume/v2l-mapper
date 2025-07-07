// --- NOTE: The 'wordData' constant is now loaded from data.js ---

// --- DOM Elements ---
const settingsScreen = document.getElementById("settings-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");
const historyScreen = document.getElementById("history-screen");

const quizTypeSelector = document.getElementById("quiz-type-selector");
const quizModeContainer = document.getElementById("quiz-mode-container");
const quizModeSelector = document.getElementById("quiz-mode-selector");
const slider = document.getElementById("random-quiz-slider");
const sliderValue = document.getElementById("slider-value");
const progressViewContainer = document.getElementById("progress-view");
const pinnedQuizControls = document.getElementById("pinned-quiz-controls");
const pinnedCountEl = document.getElementById("pinned-count");
const startPinnedQuizBtn = document.getElementById("start-pinned-quiz-btn");

const playAgainBtn = document.getElementById("play-again-btn");
const quitQuizBtn = document.getElementById("quit-quiz-btn");

const scoreDisplay = document.getElementById("score-display");
const questionCountEl = document.getElementById("question-count");
const questionTextEl = document.getElementById("question-text");
const englishHintContainer = document.getElementById("english-hint-container");
const mcqOptionsContainer = document.getElementById("mcq-options");
const finalScoreEl = document.getElementById("final-score");
// const historyListEl = document.getElementById("history-list"); // REMOVED
const wordProgressTableBody = document.getElementById(
  "word-progress-table-body"
);
const masteryProgressBar = document.getElementById("mastery-progress-bar");
const progressLangDisplay = document.getElementById("progress-lang-display");
const historyQuizTypeDisplay = document.getElementById(
  "history-quiz-type-display"
);
const progressTableHeader = document.getElementById("progress-table-header");
const wordProgressSection = document.getElementById("word-progress-section");

// --- State ---
let quizSettings = { quizType: "ar-de", mode: "random" };
let quizState = {
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  answered: false,
};
let sortState = { column: "number", direction: "asc" };
let pinnedWords = [];
let historyViewType = "ar-de";
const availableHistoryTypes = ["ar-de", "ar-jp", "de-jp"];
let historyChart = null; // For the daily progress line chart
let languageComparisonChart = null; // For the overall progress doughnut chart

// --- Functions ---
function getNormalizedQuizType(type) {
  if (type === "chaos") return "chaos";
  const parts = type.split('-');
  return parts.sort().join('-');
}

function getTodayDateString() {
  const today = new Date();
  const year = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${year}-${mm}-${dd}`;
}

function generateRubyHTML(jpData) {
  if (!Array.isArray(jpData)) return `<span>${jpData}</span>`;
  return jpData
    .map((part) =>
      part.furigana
        ? `<ruby>${part.text}<rt>${part.furigana}</rt></ruby>`
        : `<span>${part.text}</span>`
    )
    .join("");
}

function getWordProgress(type) {
  if (!type) return {};
  const normalizedType = getNormalizedQuizType(type);
  return (
    JSON.parse(localStorage.getItem(`quranQuizWordProgress_${normalizedType}`)) || {}
  );
}

function updateWordProgress(wordIndex, isCorrect, type) {
  if (type === "chaos") return;
  const normalizedType = getNormalizedQuizType(type);
  const progress = getWordProgress(normalizedType);
  const wasAlreadyCorrect = progress[wordIndex] && progress[wordIndex].correct > 0;

  if (!progress[wordIndex]) {
    progress[wordIndex] = { correct: 0, incorrect: 0 };
  }
  isCorrect ? progress[wordIndex].correct++ : progress[wordIndex].incorrect++;
  localStorage.setItem(
    `quranQuizWordProgress_${normalizedType}`,
    JSON.stringify(progress)
  );

  if (isCorrect && !wasAlreadyCorrect) {
    const today = getTodayDateString();
    const dailyProgressKey = `quranQuizDailyProgress_${normalizedType}`;
    const dailyProgress = JSON.parse(localStorage.getItem(dailyProgressKey)) || {};
    if (!dailyProgress[today]) {
      dailyProgress[today] = [];
    }
    if (!dailyProgress[today].includes(wordIndex)) {
      dailyProgress[today].push(wordIndex);
    }
    localStorage.setItem(dailyProgressKey, JSON.stringify(dailyProgress));
  }
}

function getModeMastery(type) {
  const progress = getWordProgress(type);
  let masteredWords = 0;
  wordData.forEach((_, index) => {
    const stats = progress[index] || { correct: 0, incorrect: 0 };
    const total = stats.correct + stats.incorrect;
    if (total > 0 && stats.correct / total >= 0.8) {
      masteredWords++;
    }
  });
  return wordData.length > 0 ? (masteredWords / wordData.length) * 100 : 0;
}

function showAchievementPopup(message) {
  const popup = document.getElementById("achievement-popup");
  const messageEl = document.getElementById("achievement-message");

  messageEl.textContent = message;
  popup.classList.remove("hidden");
  setTimeout(() => {
    popup.classList.add("popup-visible");
  }, 10);

  setTimeout(() => {
    popup.classList.remove("popup-visible");
    setTimeout(() => {
      popup.classList.add("hidden");
    }, 500);
  }, 4000);
}

function getUnlockState() {
  return (
    JSON.parse(localStorage.getItem("quranQuizUnlocks")) || {
      reverseDe: false,
      reverseJp: false,
      deJp: false,
      chaos: false,
    }
  );
}

function saveUnlockState(state) {
  localStorage.setItem("quranQuizUnlocks", JSON.stringify(state));
}

function checkUnlocks() {
  const masteryDe = getModeMastery("ar-de");
  const masteryJp = getModeMastery("ar-jp");
  const unlockState = getUnlockState();
  let stateChanged = false;

  if (!unlockState.reverseDe && masteryDe >= 20) {
    showAchievementPopup("Reverse German mode unlocked!");
    unlockState.reverseDe = true;
    stateChanged = true;
  }

  if (!unlockState.reverseJp && masteryJp >= 20) {
    showAchievementPopup("Reverse Japanese mode unlocked!");
    unlockState.reverseJp = true;
    stateChanged = true;
  }

  const deJpUnlocked = masteryDe >= 80 && masteryJp >= 80;
  if (!unlockState.deJp && deJpUnlocked) {
    showAchievementPopup("German ↔ Japanese mode unlocked!");
    unlockState.deJp = true;
    stateChanged = true;
  }
  const deJpButton = document.querySelector('[data-type-pair="de-jp"]');
  deJpButton.disabled = !deJpUnlocked;
  if (deJpUnlocked) {
    deJpButton.textContent = "German ↔ Japanese";
  } else {
    deJpButton.textContent = `??? Mode (80%)`;
  }

  const chaosUnlocked = masteryDe >= 40 && masteryJp >= 40;
  if (!unlockState.chaos && chaosUnlocked) {
    showAchievementPopup("Chaos Mode unlocked!");
    unlockState.chaos = true;
    stateChanged = true;
  }
  const chaosButton = document.querySelector('[data-type-pair="chaos"]');
  chaosButton.disabled = !chaosUnlocked;
  if (chaosUnlocked) {
    chaosButton.textContent = "Chaos Mode";
  } else {
    chaosButton.textContent = `??? Mode (40%)`;
  }

  if (stateChanged) {
    saveUnlockState(unlockState);
  }
}

function updateSettings(type, value) {
  const previousMode = quizSettings.mode;
  quizSettings[type] = value;

  if (type === "quizType") {
    const normalizedType = getNormalizedQuizType(value);
    const key = `quranQuizPinnedWords_${normalizedType}`;
    pinnedWords = JSON.parse(localStorage.getItem(key)) || [];

    const typeTextMap = {
      "ar-de": "Arabic → German",
      "de-ar": "German → Arabic",
      "ar-jp": "Arabic → Japanese",
      "jp-ar": "Japanese → Arabic",
      "de-jp": "German → Japanese",
      "jp-de": "Japanese → German",
      chaos: "Chaos Mode",
    };

    document.querySelectorAll(".type-option").forEach((btn) => {
      const pair = btn.dataset.typePair;
      const isSelected =
        value === pair ||
        value === `${pair.split("-")[1]}-${pair.split("-")[0]}` ||
        (value === "chaos" && pair === "chaos");
      btn.classList.toggle("bg-blue-100", isSelected);
      btn.classList.toggle("border-blue-500", isSelected);

      if (pair !== "chaos" && !btn.disabled) {
        const [p1, p2] = pair.split("-");
        const defaultText = `${p1.toUpperCase()} ↔ ${p2.toUpperCase()}`
          .replace("DE", "German")
          .replace("AR", "Arabic")
          .replace("JP", "Japanese");
        if (value === pair) btn.textContent = typeTextMap[pair];
        else if (value === `${p2}-${p1}`)
          btn.textContent = typeTextMap[`${p2}-${p1}`];
        else btn.textContent = defaultText;
      }
    });

    const isChaos = value === "chaos";
    wordProgressSection.classList.toggle("hidden", isChaos);
    quizModeContainer.classList.toggle("hidden", isChaos);

    renderWordProgress(value);
    populateProgressView(value);
  }

  if (type === "mode") {
    document.querySelectorAll(".mode-option").forEach((opt) => {
      opt.classList.toggle("mode-active", opt.id === `mode-${value}`);
    });

    if (previousMode === "sequential" && value !== "sequential") {
      pinnedWords = [];
      const normalizedType = getNormalizedQuizType(quizSettings.quizType);
      const key = `quranQuizPinnedWords_${normalizedType}`;
      localStorage.removeItem(key);
    }
    const isSequential = value === "sequential";
    progressViewContainer.classList.toggle("hidden", !isSequential);
    updatePinnedUI();
  }
}

function populateProgressView(type) {
  progressViewContainer.innerHTML = "";
  if (!type || type === "chaos") return;

  const progress = getWordProgress(type);

  wordData.forEach((word, index) => {
    const button = document.createElement("button");
    button.textContent = index + 1;
    button.dataset.index = index;

    let colorClass =
      "bg-gray-100 border-gray-300 hover:bg-blue-100 hover:border-blue-500";
    const stats = progress[index] || { correct: 0, incorrect: 0 };
    const totalAttempts = stats.correct + stats.incorrect;

    if (totalAttempts >= 5) {
      const ratio = stats.correct / totalAttempts;
      if (ratio >= 0.76)
        colorClass = "bg-green-400 border-green-600 text-white";
      else if (ratio >= 0.5) colorClass = "bg-green-200 border-green-400";
      else if (ratio >= 0.25) colorClass = "bg-orange-200 border-orange-400";
      else colorClass = "bg-red-200 border-red-400";
    }

    button.className = `progress-word-btn h-10 w-10 flex items-center justify-center rounded-md border-2 font-semibold transition-all ${colorClass}`;

    if (pinnedWords.includes(index)) {
      button.classList.add("word-pinned");
    }

    button.addEventListener("click", handleSequentialClick);
    progressViewContainer.appendChild(button);
  });
  updatePinnedUI();
}

function handleSequentialClick(e) {
  const button = e.currentTarget;
  const index = parseInt(button.dataset.index);

  if (pinnedWords.length > 0) {
    togglePin(index, button);
  } else {
    togglePin(index, button);
  }
}

function togglePin(index, buttonEl) {
  const pinIndex = pinnedWords.indexOf(index);
  if (pinIndex > -1) {
    pinnedWords.splice(pinIndex, 1);
    buttonEl.classList.remove("word-pinned");
  } else {
    if (pinnedWords.length < 20) {
      pinnedWords.push(index);
      buttonEl.classList.add("word-pinned");
    } else {
      alert("You can only pin up to 20 words.");
    }
  }

  const normalizedType = getNormalizedQuizType(quizSettings.quizType);
  const key = `quranQuizPinnedWords_${normalizedType}`;
  localStorage.setItem(key, JSON.stringify(pinnedWords));

  updatePinnedUI();
}

function updatePinnedUI() {
  pinnedCountEl.textContent = pinnedWords.length;
  if (pinnedWords.length > 0 && quizSettings.mode === "sequential") {
    pinnedQuizControls.classList.remove("hidden");
  } else {
    pinnedQuizControls.classList.add("hidden");
  }
}

function renderWordProgress(type) {
  const typeText = quizSettings.quizType
    ? document.querySelector(`[data-type-pair="${quizSettings.quizType}"]`)
        ?.textContent ||
      document.querySelector(
        `[data-type-pair="${quizSettings.quizType
          .split("-")
          .reverse()
          .join("-")}"]`
      )?.textContent ||
      "N/A"
    : "...";

  if (!type || type === "chaos") {
    wordProgressTableBody.innerHTML = `<tr><td colspan="4" class="text-center p-4 text-gray-500">Select a standard quiz type to see progress.</td></tr>`;
    masteryProgressBar.style.width = "0%";
    masteryProgressBar.textContent = "";
    progressLangDisplay.textContent = "...";
    return;
  }

  progressLangDisplay.textContent = typeText;
  const progress = getWordProgress(type);
  let masteredWords = 0;

  let displayData = wordData.map((word, index) => {
    const stats = progress[index] || { correct: 0, incorrect: 0 };
    return {
      ...word,
      index,
      correct: stats.correct,
      incorrect: stats.incorrect,
    };
  });

  // This sorting logic correctly re-orders the data before rendering
  displayData.sort((a, b) => {
    const dir = sortState.direction === "asc" ? 1 : -1;
    if (sortState.column === "number") return (a.index - b.index) * dir;
    if (sortState.column === "correct") return (a.correct - b.correct) * dir;
    if (sortState.column === "mistakes")
      return (a.incorrect - b.incorrect) * dir;
    return 0;
  });

  wordProgressTableBody.innerHTML = "";
  displayData.forEach((word) => {
    const row = document.createElement("tr");
    // This HTML structure is correct, creating one row with four cells
    row.innerHTML = `
      <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">${
        word.index + 1
      }</td>
      <td class="px-4 py-2 whitespace-nowrap text-lg font-arabic">${
        word.arabic
      }</td>
      <td class="px-4 py-2 whitespace-nowrap text-sm text-green-600 font-semibold">${
        word.correct
      }</td>
      <td class="px-4 py-2 whitespace-nowrap text-sm text-red-600 font-semibold">${
        word.incorrect
      }</td>
    `;
    wordProgressTableBody.appendChild(row);
  });

  wordData.forEach((_, index) => {
    const stats = progress[index] || { correct: 0, incorrect: 0 };
    const totalAttempts = stats.correct + stats.incorrect;
    if (totalAttempts > 0 && stats.correct / totalAttempts >= 0.8)
      masteredWords++;
  });

  const masteryPercent =
    wordData.length > 0 ? (masteredWords / wordData.length) * 100 : 0;
  masteryProgressBar.style.width = `${masteryPercent}%`;
  masteryProgressBar.textContent = `${masteryPercent.toFixed(0)}%`;

  document
    .querySelectorAll(".sort-indicator")
    .forEach((el) => (el.textContent = ""));
  const activeHeader = document.querySelector(
    `th[data-sort="${sortState.column}"] .sort-indicator`
  );
  if (activeHeader)
    activeHeader.textContent = sortState.direction === "asc" ? " ▲" : " ▼";
}

function startQuiz({ startIndex, numQuestions, customQuestions }) {
  if (!quizSettings.quizType) {
    alert("Please select a quiz type first!");
    return;
  }

  if (customQuestions) {
    quizState.questions = [...customQuestions].sort(() => 0.5 - Math.random());
  } else if (
    quizSettings.quizType !== "chaos" &&
    quizSettings.mode === "random"
  ) {
    quizState.questions = [...wordData]
      .sort(() => 0.5 - Math.random())
      .slice(0, numQuestions);
  } else if (quizSettings.quizType === "chaos") {
    quizState.questions = [...wordData]
      .sort(() => 0.5 - Math.random())
      .slice(0, 20); // Chaos mode is always random 20
  } else { // Sequential mode (unpinned)
    quizState.questions = wordData.slice(startIndex);
  }

  if (quizState.questions.length === 0) return;
  quizState.currentQuestionIndex = 0;
  quizState.score = 0;

  settingsScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  resultsScreen.classList.add("hidden");
  historyScreen.classList.add("hidden");

  renderQuestion();
}

function renderQuestion() {
  quizState.answered = false;
  const question = quizState.questions[quizState.currentQuestionIndex];
  let [qLang, aLang] = quizSettings.quizType.split("-");

  if (quizSettings.quizType === "chaos") {
    const langs = ["ar", "de", "jp"];
    qLang = langs[Math.floor(Math.random() * langs.length)];
    do {
      aLang = langs[Math.floor(Math.random() * langs.length)];
    } while (aLang === qLang);
  }

  let questionHTML = "";
  questionTextEl.className = "font-bold text-gray-900";
  if (qLang === "ar") {
    questionHTML = question.arabic;
    questionTextEl.classList.add("font-arabic", "text-6xl", "md:text-7xl");
  } else if (qLang === "de") {
    questionHTML = question.answer.du;
    questionTextEl.classList.add("text-4xl", "md:text-5xl");
  } else if (qLang === "jp") {
    questionHTML = generateRubyHTML(question.answer.jp);
    questionTextEl.classList.add("text-4xl", "md:text-5xl");
  }
  questionTextEl.innerHTML = questionHTML;

  englishHintContainer.innerHTML = "";
  if (quizSettings.quizType !== "chaos") {
    englishHintContainer.innerHTML = `<button id="show-hint-btn" class="text-sm text-blue-600 border border-blue-600 rounded-full px-4 py-1 hover:bg-blue-50 transition-all">Show English Hint</button>`;
    document.getElementById("show-hint-btn").addEventListener("click", () => {
      englishHintContainer.innerHTML = `<p>${question.english}</p>`;
    });
  }

  const correctAnswer = question.answer;
  let distractors = [];
  while (distractors.length < 3) {
    const randomWord = wordData[Math.floor(Math.random() * wordData.length)];
    if (
      randomWord.arabic !== question.arabic &&
      !distractors.some((d) => d.du === randomWord.answer.du)
    ) {
      distractors.push(randomWord.answer);
    }
  }

  const options = [correctAnswer, ...distractors].sort(
    () => 0.5 - Math.random()
  );

  mcqOptionsContainer.innerHTML = "";
  options.forEach((option) => {
    const isCorrect = option.du === correctAnswer.du;
    const button = document.createElement("button");
    button.className =
      "mcq-option p-4 rounded-lg border-2 text-center font-semibold transition-all duration-200 hover:bg-gray-100 flex items-center justify-center min-h-[4rem]";
    button.dataset.correct = isCorrect;

    let answerHTML = "";
    if (aLang === "ar") {
      answerHTML = `<span class="font-arabic text-2xl">${
        option.ar || wordData.find((w) => w.answer.du === option.du).arabic
      }</span>`;
    } else if (aLang === "de") {
      answerHTML = `<span class="text-lg">${option.du}</span>`;
    } else if (aLang === "jp") {
      answerHTML = `<span class="text-lg">${generateRubyHTML(
        option.jp
      )}</span>`;
    }
    button.innerHTML = answerHTML;

    button.addEventListener("click", handleAnswer);
    mcqOptionsContainer.appendChild(button);
  });
}

function handleAnswer(e) {
  if (quizState.answered) return;
  quizState.answered = true;
  const isCorrect = e.currentTarget.dataset.correct === "true";

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  const wordIndex = wordData.findIndex(
    (w) => w.arabic === currentQuestion.arabic
  );

  updateWordProgress(wordIndex, isCorrect, quizSettings.quizType);

  if (isCorrect) quizState.score++;

  document.querySelectorAll(".mcq-option").forEach((btn) => {
    btn.disabled = true;
    if (btn.dataset.correct === "true") {
      btn.classList.add("correct-answer");
    }
  });
    if (!isCorrect) {
    e.currentTarget.classList.add("wrong-answer");
  }

  setTimeout(() => {
    if (quizState.currentQuestionIndex < quizState.questions.length - 1) {
      quizState.currentQuestionIndex++;
      renderQuestion();
    } else {
      showResults();
    }
  }, 600);
}

function showResults() {
  quizScreen.classList.add("hidden");
  resultsScreen.classList.remove("hidden");
  const finalScoreText = `${quizState.score} / ${quizState.questions.length}`;
  finalScoreEl.textContent = finalScoreText;
}

function getLearnedCountPerLanguage() {
    const results = {
        labels: [],
        data: []
    };
    const typeTextMap = { "ar-de": "Arabic-German", "ar-jp": "Arabic-Japanese", "de-jp": "German-Japanese" };

    availableHistoryTypes.forEach(type => {
        const progress = getWordProgress(type);
        const learnedCount = Object.values(progress).filter(p => p.correct > 0).length;
        results.labels.push(typeTextMap[type]);
        results.data.push(learnedCount);
    });
    return results;
}

function calculateTotalWordsLearned() {
  const learnedWordIndices = new Set();
  availableHistoryTypes.forEach(type => {
      const dailyProgressKey = `quranQuizDailyProgress_${getNormalizedQuizType(type)}`;
      const dailyProgress = JSON.parse(localStorage.getItem(dailyProgressKey)) || {};
      Object.values(dailyProgress).forEach(wordArray => {
          wordArray.forEach(wordIndex => {
              learnedWordIndices.add(wordIndex);
          });
      });
  });
  return learnedWordIndices.size;
}

function renderHistory() {
  settingsScreen.classList.add("hidden");
  historyScreen.classList.remove("hidden");
  
  document.getElementById("history-total-all-time").textContent = calculateTotalWordsLearned();

  if (languageComparisonChart) {
    languageComparisonChart.destroy();
  }
  const comparisonData = getLearnedCountPerLanguage();
  const comparisonCtx = document.getElementById('language-comparison-chart').getContext('2d');
  languageComparisonChart = new Chart(comparisonCtx, {
      type: 'doughnut',
      data: {
          labels: comparisonData.labels,
          datasets: [{
              label: 'Words Learned',
              data: comparisonData.data,
              backgroundColor: [
                  'rgba(59, 130, 246, 0.7)',
                  'rgba(239, 68, 68, 0.7)',
                  'rgba(245, 158, 11, 0.7)',
              ],
              borderColor: [
                'rgba(59, 130, 246, 1)',
                'rgba(239, 68, 68, 1)',
                'rgba(245, 158, 11, 1)',
              ],
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              legend: {
                  position: 'top',
              }
          }
      }
  });

  const normalizedType = getNormalizedQuizType(historyViewType);
  const typeTextMap = { "ar-de": "Arabic ↔ German", "ar-jp": "Arabic ↔ Japanese", "de-jp": "German ↔ Japanese" };
  historyQuizTypeDisplay.textContent = typeTextMap[normalizedType] || "N/A";

  const dailyProgressKey = `quranQuizDailyProgress_${normalizedType}`;
  const dailyProgress = JSON.parse(localStorage.getItem(dailyProgressKey)) || {};
  
  const chartLabels = [];
  const chartData = [];

  for (let i = 0; i < 15; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateString = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    const wordsMemorized = dailyProgress[dateString]?.length || 0;
    
    chartLabels.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
    chartData.push(wordsMemorized);
  }

  chartLabels.reverse();
  chartData.reverse();
  
  if (historyChart) {
    historyChart.destroy();
  }
  const ctx = document.getElementById('history-chart').getContext('2d');
  historyChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: chartLabels,
      datasets: [{
        label: 'Words Learned',
        data: chartData,
        fill: true,
        backgroundColor: 'rgba(59, 130, 246, 0.2)', 
        borderColor: 'rgba(59, 130, 246, 1)',
        tension: 0.1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } }
    }
  });
}

function resetAppView() {
  quizScreen.classList.add("hidden");
  resultsScreen.classList.add("hidden");
  historyScreen.classList.add("hidden");
  settingsScreen.classList.remove("hidden");
  checkUnlocks();
  renderWordProgress(quizSettings.quizType);
  populateProgressView(quizSettings.quizType);
  updatePinnedUI();
}

// --- Event Listeners ---
quizTypeSelector.addEventListener("click", (e) => {
  const button = e.target.closest(".type-option");
  if (!button || button.disabled) return;

  const pair = button.dataset.typePair;
  if (pair === "chaos") {
    updateSettings("quizType", "chaos");
    startQuiz({});
    return;
  }

  const [p1, p2] = pair.split("-");
  const currentType = quizSettings.quizType;

  let reverseUnlocked = false;
  const unlockState = getUnlockState();

  if (pair === "ar-de" || pair === "de-ar") {
    reverseUnlocked = unlockState.reverseDe;
  } else if (pair === "ar-jp" || pair === "jp-ar") {
    reverseUnlocked = unlockState.reverseJp;
  } else if (pair === "de-jp" || pair === "jp-de") {
    reverseUnlocked = true;
  }

  if (currentType === pair && reverseUnlocked) {
    updateSettings("quizType", `${p2}-${p1}`);
  } else {
    updateSettings("quizType", pair);
  }
});

quizModeSelector.addEventListener("click", (e) => {
  const modeOption = e.target.closest(".mode-option");
  if (modeOption) {
    const newMode = modeOption.id.replace("mode-", "");
    updateSettings("mode", newMode);
  }
});

slider.addEventListener("input", (e) => {
  sliderValue.textContent = e.target.value;
});

slider.addEventListener("click", (e) => {
  if (quizSettings.mode === "random")
    startQuiz({ numQuestions: parseInt(e.target.value) });
});

progressTableHeader.addEventListener("click", (e) => {
  const header = e.target.closest(".sortable-header");
  if (!header) return;
  const column = header.dataset.sort;
  if (sortState.column === column) {
    sortState.direction = sortState.direction === "asc" ? "desc" : "asc";
  } else {
    sortState.column = column;
    sortState.direction = "asc";
  }
  renderWordProgress(quizSettings.quizType);
});

startPinnedQuizBtn.addEventListener("click", () => {
  if (pinnedWords.length > 0) {
    const customQuestions = pinnedWords.map((index) => wordData[index]);
    startQuiz({ customQuestions });
  }
});

playAgainBtn.addEventListener("click", resetAppView);

quitQuizBtn.addEventListener("click", () => {
    window.location.href = '../index.html';
});

document.getElementById('toggle-history-lang-btn').addEventListener('click', () => {
    const currentIndex = availableHistoryTypes.indexOf(getNormalizedQuizType(historyViewType));
    const nextIndex = (currentIndex + 1) % availableHistoryTypes.length;
    historyViewType = availableHistoryTypes[nextIndex];
    renderHistory();
});

// --- Initial Load ---
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const view = urlParams.get('view');

    updateSettings("quizType", "ar-de");
    updateSettings("mode", "random");
    checkUnlocks();
    
    if (view === 'history') {
        historyViewType = 'ar-de';
        renderHistory();
    }
});

