// --- NOTE: 'germanWords' and 'japaneseWords' are loaded from their respective .js files ---

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

const playAgainBtn = document.getElementById("play-again-btn");
const quitQuizBtn = document.getElementById("quit-quiz-btn");
const backToHomeBtn = document.getElementById("back-to-home-btn");

const scoreDisplay = document.getElementById("score-display");
const questionCountEl = document.getElementById("question-count");
const questionTextEl = document.getElementById("question-text");
const mcqOptionsContainer = document.getElementById("mcq-options");
const finalScoreEl = document.getElementById("final-score");
const historyListEl = document.getElementById("history-list");
const wordProgressTableBody = document.getElementById(
  "word-progress-table-body"
);
const masteryProgressBar = document.getElementById("mastery-progress-bar");
const progressLangDisplay = document.getElementById("progress-lang-display");
const historyQuizTypeDisplay = document.getElementById(
  "history-quiz-type-display"
);
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

// --- Functions ---

function getActiveWordData() {
    return quizSettings.quizType.startsWith('de') ? germanWords : japaneseWords;
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
  return (
    JSON.parse(localStorage.getItem(`supplementalQuizWordProgress_${type}`)) || {}
  );
}

function updateWordProgress(wordIndex, isCorrect, type) {
  const progress = getWordProgress(type);
  if (!progress[wordIndex]) {
    progress[wordIndex] = { correct: 0, incorrect: 0 };
  }
  isCorrect ? progress[wordIndex].correct++ : progress[wordIndex].incorrect++;
  localStorage.setItem(
    `supplementalQuizWordProgress_${type}`,
    JSON.stringify(progress)
  );
}

function updateSettings(type, value) {
  quizSettings[type] = value;
  wordData = getActiveWordData();

  if (type === "quizType") {
    const typeTextMap = {
      "de-en": "German → English",
      "en-de": "English → German",
      "jp-en": "Japanese → English",
      "en-jp": "English → Japanese",
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
        .replace("JP", "Japanese");

      if (value === pair) btn.textContent = typeTextMap[pair];
      else if (value === `${p2}-${p1}`)
        btn.textContent = typeTextMap[`${p2}-${p1}`];
      else btn.textContent = defaultText;
    });
    
    slider.max = wordData.length;
    if(parseInt(slider.value) > wordData.length) {
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
    const isSequential = value === "sequential";
    progressViewContainer.classList.toggle("hidden", !isSequential);
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
    button.addEventListener("click", (e) => startQuiz({ startIndex: index }));
    progressViewContainer.appendChild(button);
  });
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
    return {
      ...word,
      index,
      correct: stats.correct,
      incorrect: stats.incorrect,
    };
  });
  
  displayData.sort((a, b) => {
    const dir = sortState.direction === "asc" ? 1 : -1;
    if (sortState.column === "number") return (a.index - b.index) * dir;
    if (sortState.column === "mistakes")
      return (a.incorrect - b.incorrect) * dir;
    return 0;
  });

  wordProgressTableBody.innerHTML = "";
  displayData.forEach((word) => {
    const row = document.createElement("tr");
    let questionText;
    if(typeof word.question === 'string') {
        questionText = word.question;
    } else {
        questionText = generateRubyHTML(word.question);
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
    const totalAttempts = stats.correct + stats.incorrect;
    if (totalAttempts > 0 && stats.correct / totalAttempts >= 0.8)
      masteredWords++;
  });

  const masteryPercent =
    currentWordData.length > 0 ? (masteredWords / currentWordData.length) * 100 : 0;
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

function startQuiz({ startIndex, numQuestions }) {
  if (!quizSettings.quizType) {
    alert("Please select a quiz type first!");
    return;
  }
  
  wordData = getActiveWordData();

  if (quizSettings.mode === "random") {
    quizState.questions = [...wordData]
      .sort(() => 0.5 - Math.random())
      .slice(0, numQuestions);
  } else { // sequential
    quizState.questions = wordData.slice(startIndex);
  }

  if (quizState.questions.length === 0) return;
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

  // Determine question and answer values
  const questionValue = qLang === 'en' ? currentWord.answer : currentWord.question;
  const answerValue = aLang === 'en' ? currentWord.answer : currentWord.question;
  
  // Display question
  questionTextEl.className = "font-bold text-gray-900"; // Reset
  if (typeof questionValue === 'string') {
      questionTextEl.innerHTML = `<span>${questionValue}</span>`;
      questionTextEl.classList.add("text-4xl", "md:text-5xl");
  } else { // Japanese with furigana
      questionTextEl.innerHTML = generateRubyHTML(questionValue);
      questionTextEl.classList.add("text-4xl", "md:text-5xl");
  }

  // Generate options
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

    if (typeof optionValue === 'string') {
        button.innerHTML = `<span class="text-lg">${optionValue}</span>`;
    } else { // Japanese with furigana
        button.innerHTML = `<span class="text-lg">${generateRubyHTML(optionValue)}</span>`;
    }
    
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
    (w) => w.answer === currentQuestion.answer
  );

  updateWordProgress(wordIndex, isCorrect, quizSettings.quizType);

  if (isCorrect) {
    quizState.score++;
    updateScoreDisplay();
  }

  document.querySelectorAll(".mcq-option").forEach((btn) => {
    btn.disabled = true;
    if (btn.dataset.correct === "true") {
      btn.classList.add("correct-answer");
    } else {
      btn.classList.add("wrong-answer");
    }
  });

  setTimeout(() => {
    if (quizState.currentQuestionIndex < quizState.questions.length - 1) {
      quizState.currentQuestionIndex++;
      renderQuestion();
    } else {
      showResults();
    }
  }, 1200);
}

function updateScoreDisplay() {
    scoreDisplay.textContent = `Score: ${quizState.score}`;
}

function showResults() {
  quizScreen.classList.add("hidden");
  resultsScreen.classList.remove("hidden");
  const finalScoreText = `${quizState.score} / ${quizState.questions.length}`;
  finalScoreEl.textContent = finalScoreText;
  saveResultToHistory(finalScoreText);
}

function saveResultToHistory(scoreText) {
  const type = quizSettings.quizType;
  const history =
    JSON.parse(localStorage.getItem(`supplementalQuizHistory_${type}`)) || [];
  
  const typeText =
    document.querySelector(`button[data-type-pair="${type}"]`)?.textContent ||
    document.querySelector(
      `button[data-type-pair="${type.split("-").reverse().join("-")}"]`
    )?.textContent || "N/A";

  const newResult = {
    score: scoreText,
    date: new Date().toLocaleString(),
    type: typeText,
  };
  history.unshift(newResult);
  localStorage.setItem(
    `supplementalQuizHistory_${type}`,
    JSON.stringify(history.slice(0, 15)) // Keep last 15 results
  );
}

function renderHistory() {
  if (!quizSettings.quizType) {
    alert("Please select a quiz type to view its history.");
    return;
  }
  const type = quizSettings.quizType;
  const typeText =
    document.querySelector(`button[data-type-pair="${type}"]`)?.textContent ||
    document.querySelector(
      `button[data-type-pair="${type.split("-").reverse().join("-")}"]`
    )?.textContent;
    
  historyQuizTypeDisplay.textContent = typeText;
  settingsScreen.classList.add("hidden");
  historyScreen.classList.remove("hidden");
  
  const history =
    JSON.parse(localStorage.getItem(`supplementalQuizHistory_${type}`)) || [];
  historyListEl.innerHTML = "";

  if (history.length === 0) {
    historyListEl.innerHTML = `<li class="text-center text-gray-500">No history found for this quiz type.</li>`;
    return;
  }

  history.forEach((result) => {
    const li = document.createElement("li");
    li.className =
      "p-4 bg-gray-50 rounded-lg border flex justify-between items-center";
    li.innerHTML = `<div><p class="font-bold text-lg text-gray-800">${result.score}</p></div><p class="text-xs text-gray-400">${result.date}</p>`;
    historyListEl.appendChild(li);
  });
}

function resetAppView() {
  quizScreen.classList.add("hidden");
  resultsScreen.classList.add("hidden");
  historyScreen.classList.add("hidden");
  settingsScreen.classList.remove("hidden");
  
  renderWordProgress(quizSettings.quizType);
  populateProgressView(quizSettings.quizType);
}

// --- Event Listeners ---
quizTypeSelector.addEventListener("click", (e) => {
  const button = e.target.closest(".type-option");
  if (!button) return;

  const pair = button.dataset.typePair;
  const [p1, p2] = pair.split("-");
  const currentType = quizSettings.quizType;
  
  // Simple reverse on click
  if (currentType === pair) {
    updateSettings("quizType", `${p2}-${p1}`);
  } else {
    updateSettings("quizType", pair);
  }
});

quizModeSelector.addEventListener("click", (e) => {
  const modeOption = e.target.closest(".mode-option");
  if (modeOption) {
    updateSettings("mode", modeOption.id.replace("mode-", ""));
  }
});

slider.addEventListener("input", (e) => {
  sliderValue.textContent = e.target.value;
});

slider.addEventListener("mouseup", (e) => {
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

playAgainBtn.addEventListener("click", resetAppView);
quitQuizBtn.addEventListener("click", () => {
    window.location.href = 'index.html';
});
backToHomeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    resetAppView();
});

// --- Initial Load ---
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const view = urlParams.get('view');

    // Set a default type and mode on initial load
    updateSettings("quizType", "de-en"); 
    updateSettings("mode", "random");

    if (view === 'history') {
        renderHistory();
    } else {
        resetAppView();
    }
});