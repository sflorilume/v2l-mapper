// --- DOM Elements ---
const settingsScreen = document.getElementById("settings-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");
const historyScreen = document.getElementById("history-screen");

const quizTypeSelector = document.getElementById("quiz-type-selector");
const quizModeSelector = document.getElementById("quiz-mode-selector");
const slider = document.getElementById("random-quiz-slider");
const sliderValue = document.getElementById("slider-value");
const progressViewContainer = document.getElementById("progress-view");
const pinnedQuizControls = document.getElementById("pinned-quiz-controls");
const pinnedCountEl = document.getElementById("pinned-count");
const startPinnedQuizBtn = document.getElementById("start-pinned-quiz-btn");

const playAgainBtn = document.getElementById("play-again-btn");
const quitQuizBtn = document.getElementById("quit-quiz-btn");
const backToHomeBtn = document.getElementById("back-to-home-btn");
const backToSettingsBtn = document.getElementById("back-to-settings-btn");

const scoreDisplay = document.getElementById("score-display");
const questionCountEl = document.getElementById("question-count");
const questionTextEl = document.getElementById("question-text");
const mcqOptionsContainer = document.getElementById("mcq-options");
const finalScoreEl = document.getElementById("final-score");
const historyListEl = document.getElementById("history-list");
const wordProgressTableBody = document.getElementById("word-progress-table-body");
const masteryProgressBar = document.getElementById("mastery-progress-bar");
const progressLangDisplay = document.getElementById("progress-lang-display");
const historyQuizTypeDisplay = document.getElementById("history-quiz-type-display");
const progressTableHeader = document.getElementById("progress-table-header");

// --- State ---
let wordData = [];
let quizSettings = { quizType: "de-en", mode: "random" };
let quizState = {
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  answered: false,
};
let sortState = { column: "number", direction: "asc" };

// Pinned Words State for language --causing redundancy
// const PINNED_WORDS_STORAGE_KEY = "supplementalQuizPinnedWords";
// let pinnedWords = JSON.parse(localStorage.getItem(PINNED_WORDS_STORAGE_KEY)) || [];
// ADD THIS LINE
let pinnedWords = []; // we simplify this

// --- Functions ---
function getNormalizedQuizType(type) {
  const parts = type.split('-');
  return parts.sort().join('-');
}

function getTodayDateString() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function getActiveWordData() {
  if (quizSettings.quizType.includes("de")) {
    return germanWords;
  } else if (quizSettings.quizType.includes("jp")) {
    return japaneseWords;
  } else if (quizSettings.quizType.includes("ar")) {
    return arabicWords;
  }
  // Default fallback
  return germanWords;
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
    JSON.parse(localStorage.getItem(`supplementalQuizWordProgress_${normalizedType}`)) || {}
  );
}

function updateWordProgress(wordIndex, isCorrect, type) {
  const normalizedType = getNormalizedQuizType(type);
  const progress = getWordProgress(normalizedType);

  const wasAlreadyCorrect = progress[wordIndex] && progress[wordIndex].correct > 0;

  if (!progress[wordIndex]) {
    progress[wordIndex] = { correct: 0, incorrect: 0 };
  }
  isCorrect ? progress[wordIndex].correct++ : progress[wordIndex].incorrect++;
  localStorage.setItem(
    `supplementalQuizWordProgress_${normalizedType}`, // Key updated for supplemental
    JSON.stringify(progress)
  );

  if (isCorrect && !wasAlreadyCorrect) {
    const today = getTodayDateString();
    const dailyProgressKey = `supplementalQuizDailyProgress_${normalizedType}`; // Key updated for supplemental
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

function updateSettings(type, value) {
  // Capture the mode BEFORE it's updated to check if it changed.
  const previousMode = quizSettings.mode;
  quizSettings[type] = value;
  wordData = getActiveWordData();

  if (type === "quizType") {
    // Load the correct pinned words for the new language
    const normalizedType = getNormalizedQuizType(value);
    const key = `supplementalQuizPinnedWords_${normalizedType}`;
    pinnedWords = JSON.parse(localStorage.getItem(key)) || [];

    const typeTextMap = {
      "de-en": "German → English",
      "en-de": "English → German",
      "jp-en": "Japanese → English",
      "en-jp": "English → Japanese",
      "ar-en": "Arabic → English",
      "en-ar": "English → Arabic",
    };

    document.querySelectorAll(".type-option").forEach((btn) => {
      const pair = btn.dataset.typePair;
      const isSelected =
        value === pair ||
        value === `${pair.split("-")[1]}-${pair.split("-")[0]}`;

      btn.classList.toggle("bg-blue-100", isSelected);
      btn.classList.toggle("border-blue-500", isSelected);

      const [p1, p2] = pair.split("-");
      const defaultText = `${p1.toUpperCase()} ↔ ${p2.toUpperCase()}`
        .replace("DE", "German")
        .replace("EN", "English")
        .replace("JP", "Japanese")
        .replace("AR", "Arabic");

      if (value === pair) btn.textContent = typeTextMap[pair];
      else if (value === `${p2}-${p1}`)
        btn.textContent = typeTextMap[`${p2}-${p1}`];
      else btn.textContent = defaultText;
    });

    slider.max = wordData.length;
    if (parseInt(slider.value) > wordData.length) {
      slider.value = wordData.length;
      sliderValue.textContent = wordData.length;
    }

    renderWordProgress(value);
    populateProgressView(value);
  }

  if (type === "mode") {
    document.querySelectorAll(".mode-option").forEach((opt) => {
      opt.classList.toggle("mode-active", opt.id === `mode-${value}`);
    });

    // This new logic only clears pins if you switch FROM sequential TO another mode.
    if (previousMode === "sequential" && value !== "sequential") {
        pinnedWords = [];
        const normalizedType = getNormalizedQuizType(quizSettings.quizType);
        const key = `supplementalQuizPinnedWords_${normalizedType}`;
        localStorage.removeItem(key);
    }
    updatePinnedUI();
  }
}

function populateProgressView(type) {
  progressViewContainer.innerHTML = "";
  if (!type) return;

  const progress = getWordProgress(type);
  const currentWordData = getActiveWordData();

  currentWordData.forEach((word, index) => {
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
  togglePin(index, button);
}

function togglePin(index, buttonEl) {
  const pinIndex = pinnedWords.indexOf(index);
  if (pinIndex > -1) {
    pinnedWords.splice(pinIndex, 1); // Unpin
    buttonEl.classList.remove("word-pinned");
  } else {
    if (pinnedWords.length < 20) {
      pinnedWords.push(index); // Pin
      buttonEl.classList.add("word-pinned");
    } else {
      alert("You can only pin up to 20 words.");
    }
  }
  
  // Save to a dynamic, normalized key
  const normalizedType = getNormalizedQuizType(quizSettings.quizType);
  const key = `supplementalQuizPinnedWords_${normalizedType}`;
  localStorage.setItem(key, JSON.stringify(pinnedWords));
  
  updatePinnedUI();
}

function updatePinnedUI() {
  if (quizSettings.mode === "sequential") {
    pinnedCountEl.textContent = `${pinnedWords.length}`;
    pinnedQuizControls.classList.toggle("hidden", pinnedWords.length === 0);
    document.querySelectorAll('.progress-word-btn').forEach(btn => {
        const index = parseInt(btn.dataset.index);
        btn.classList.toggle('word-pinned', pinnedWords.includes(index));
    });
  } else {
    pinnedQuizControls.classList.add("hidden");
  }
}

function renderWordProgress(type) {
  const typeText =
    document.querySelector(`[data-type-pair="${quizSettings.quizType}"]`)?.textContent ||
    document.querySelector(
      `[data-type-pair="${quizSettings.quizType.split("-").reverse().join("-")}"]`
    )?.textContent ||
    "...";

  if (!type) {
    wordProgressTableBody.innerHTML = `<tr><td colspan="4" class="text-center p-4 text-gray-500">Select a quiz type to see progress.</td></tr>`;
    masteryProgressBar.style.width = "0%";
    masteryProgressBar.textContent = "";
    progressLangDisplay.textContent = "...";
    return;
  }

  progressLangDisplay.textContent = typeText;
  const progress = getWordProgress(type);
  const currentWordData = getActiveWordData();
  let masteredWords = 0;

  let displayData = currentWordData.map((word, index) => {
    const stats = progress[index] || { correct: 0, incorrect: 0 };
    return { ...word, index, correct: stats.correct, incorrect: stats.incorrect };
  });

  displayData.sort((a, b) => {
    const dir = sortState.direction === "asc" ? 1 : -1;
    if (sortState.column === "number") return (a.index - b.index) * dir;
    if (sortState.column === "mistakes") return (a.incorrect - b.incorrect) * dir;
    return 0;
  });

  wordProgressTableBody.innerHTML = "";
  displayData.forEach((word) => {
    const row = document.createElement("tr");
    let questionText;
    if (quizSettings.quizType.includes('jp') && typeof word.question === 'object') {
        questionText = generateRubyHTML(word.question);
    } else {
        questionText = word.question;
    }
    row.innerHTML = `
        <td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">${word.index + 1}</td>
        <td class="px-4 py-2 whitespace-nowrap text-lg">${questionText}</td>
        <td class="px-4 py-2 whitespace-nowrap text-sm text-green-600 font-semibold">${word.correct}</td>
        <td class="px-4 py-2 whitespace-nowrap text-sm text-red-600 font-semibold">${word.incorrect}</td>
    `;
    wordProgressTableBody.appendChild(row);
  });

  currentWordData.forEach((_, index) => {
    const stats = progress[index] || { correct: 0, incorrect: 0 };
    if (stats.correct > 0) masteredWords++;
  });

  const masteryPercent = currentWordData.length > 0 ? (masteredWords / currentWordData.length) * 100 : 0;
  masteryProgressBar.style.width = `${masteryPercent}%`;
  masteryProgressBar.textContent = `${masteryPercent.toFixed(0)}%`;

  document.querySelectorAll(".sort-indicator").forEach((el) => (el.textContent = ""));
  const activeHeader = document.querySelector(`th[data-sort="${sortState.column}"] .sort-indicator`);
  if (activeHeader) activeHeader.textContent = sortState.direction === "asc" ? " ▲" : " ▼";
}

function startQuiz({ numQuestions, customQuestions }) {
  if (!quizSettings.quizType) {
    alert("Please select a quiz type first!");
    return;
  }
  wordData = getActiveWordData();

  if (customQuestions) {
    quizState.questions = [...customQuestions].sort(() => 0.5 - Math.random());
  } else if (quizSettings.mode === "random") {
    quizState.questions = [...wordData].sort(() => 0.5 - Math.random()).slice(0, numQuestions);
  }

  if (quizState.questions.length === 0) {
    alert("No questions to start. Please select a valid mode.");
    return;
  }
  
  quizState.currentQuestionIndex = 0;
  quizState.score = 0;

  settingsScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  updateScoreDisplay();
  renderQuestion();
}

function renderQuestion() {
  quizState.answered = false;
  questionCountEl.textContent = `${quizState.currentQuestionIndex + 1} / ${quizState.questions.length}`;

  const currentWord = quizState.questions[quizState.currentQuestionIndex];
  const [qLang, aLang] = quizSettings.quizType.split("-");

  const questionValue = qLang === 'en' ? currentWord.answer : currentWord.question;
  
  questionTextEl.className = "font-bold text-gray-900";
  if (qLang === 'ar') {
    questionTextEl.classList.add("font-arabic", "text-6xl", "md:text-7xl");
  } else {
    questionTextEl.classList.add("text-4xl", "md:text-5xl");
  }

  if (qLang === 'jp' && typeof questionValue === 'object') {
    questionTextEl.innerHTML = generateRubyHTML(questionValue);
  } else {
    questionTextEl.innerHTML = `<span>${questionValue}</span>`;
  }
  
  let distractors = [];
  while (distractors.length < 3) {
    const randomWord = wordData[Math.floor(Math.random() * wordData.length)];
    if (randomWord.answer !== currentWord.answer && !distractors.some(d => d.answer === randomWord.answer)) {
      distractors.push(randomWord);
    }
  }

  const options = [currentWord, ...distractors].sort(() => 0.5 - Math.random());
  mcqOptionsContainer.innerHTML = "";

  options.forEach((option) => {
    const isCorrect = option.answer === currentWord.answer;
    const button = document.createElement("button");
    button.className = "mcq-option p-4 rounded-lg border-2 text-center font-semibold transition-all duration-200 hover:bg-gray-100 flex items-center justify-center min-h-[4rem]";
    button.dataset.correct = isCorrect;

    const optionValue = aLang === 'en' ? option.answer : option.question;

    if (aLang === 'ar') {
        button.innerHTML = `<span class="font-arabic text-2xl">${optionValue}</span>`;
    } else if (aLang === 'jp' && typeof optionValue === 'object') {
        button.innerHTML = `<span class="text-lg">${generateRubyHTML(optionValue)}</span>`;
    } else {
        button.innerHTML = `<span class="text-lg">${optionValue}</span>`;
    }

    button.addEventListener("click", handleAnswer);
    mcqOptionsContainer.appendChild(button);
  });
}

function handleAnswer(e) {
  if (quizState.answered) return;
  quizState.answered = true;
  
  const selectedButton = e.currentTarget;
  const isCorrect = selectedButton.dataset.correct === "true";

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  const wordIndex = wordData.findIndex((w) => w.answer === currentQuestion.answer);

  updateWordProgress(wordIndex, isCorrect, quizSettings.quizType);

  if (isCorrect) {
    quizState.score++;
    updateScoreDisplay();
  }

  document.querySelectorAll(".mcq-option").forEach((btn) => {
    btn.disabled = true;
    if (btn.dataset.correct === "true") {
      btn.classList.add("correct-answer");
    }
  });

  if (!isCorrect) {
    selectedButton.classList.add("wrong-answer");
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

function updateScoreDisplay() {
  scoreDisplay.textContent = `Score: ${quizState.score}`;
}

function showResults() {
  quizScreen.classList.add("hidden");
  resultsScreen.classList.remove("hidden");
  const finalScoreText = `${quizState.score} / ${quizState.questions.length}`;
  finalScoreEl.textContent = finalScoreText;
}

function renderHistory() {
  const type = quizSettings.quizType;
  if (!type) {
    alert("Please select a quiz type to view its history.");
    return;
  }
  const normalizedType = getNormalizedQuizType(type);
  const typeText = document.querySelector(`button[data-type-pair="${type}"]`)?.textContent || document.querySelector(`button[data-type-pair="${type.split("-").reverse().join("-")}"]`)?.textContent;
  historyQuizTypeDisplay.textContent = typeText;
  
  settingsScreen.classList.add("hidden");
  historyScreen.classList.remove("hidden");
  
  const dailyProgressKey = `supplementalQuizDailyProgress_${normalizedType}`; // Key updated for supplemental
  const dailyProgress = JSON.parse(localStorage.getItem(dailyProgressKey)) || {};
  let totalWords = 0;
  let listHTML = "";

  for (let i = 0; i < 15; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const dateString = `${yyyy}-${mm}-${dd}`;

    const wordsMemorized = dailyProgress[dateString]?.length || 0;
    totalWords += wordsMemorized;

    const formattedDate = date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    
    listHTML += `
      <li class="p-3 bg-gray-50 rounded-lg flex justify-between items-center text-sm">
        <span class="font-medium text-gray-700">${formattedDate} ${i === 0 ? '<span class="text-blue-500 font-bold">(Today)</span>' : ''}</span>
        <span class="font-bold text-lg ${wordsMemorized > 0 ? 'text-green-600' : 'text-gray-400'}">${wordsMemorized} words</span>
      </li>
    `;
  }

  const average = (totalWords / 15).toFixed(1);
  document.getElementById("history-average").textContent = average;
  historyListEl.innerHTML = listHTML;
}

function resetAppView() {
  quizScreen.classList.add("hidden");
  resultsScreen.classList.add("hidden");
  historyScreen.classList.add("hidden");
  settingsScreen.classList.remove("hidden");
  
  updateSettings("quizType", quizSettings.quizType);
  updateSettings("mode", quizSettings.mode);
}

// --- Event Listeners ---
quizTypeSelector.addEventListener("click", (e) => {
  const button = e.target.closest(".type-option");
  if (!button) return;
  const pair = button.dataset.typePair;
  const [p1, p2] = pair.split("-");
  updateSettings("quizType", quizSettings.quizType === pair ? `${p2}-${p1}` : pair);
});

quizModeSelector.addEventListener("click", (e) => {
  const modeOption = e.target.closest(".mode-option");
  if (modeOption) {
    updateSettings("mode", modeOption.id.replace("mode-", ""));
  }
});

slider.addEventListener("input", (e) => { sliderValue.textContent = e.target.value; });
slider.addEventListener("mouseup", (e) => {
  if (quizSettings.mode === "random") startQuiz({ numQuestions: parseInt(e.target.value) });
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
backToSettingsBtn.addEventListener("click", resetAppView);
backToHomeBtn.addEventListener("click", resetAppView);
quitQuizBtn.addEventListener("click", () => { window.location.href = '../index.html'; });

// --- Initial Load ---
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const view = urlParams.get("view");
  updateSettings("quizType", "de-en");
  updateSettings("mode", "random");
  if (view === "history") { renderHistory(); } 
  else { resetAppView(); }
});