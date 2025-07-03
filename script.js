// --- NOTE: The 'wordData' constant is now loaded from data.js ---

// --- DOM Elements ---
const settingsScreen = document.getElementById("settings-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");
const historyScreen = document.getElementById("history-screen");

const langOptionsContainer = document.getElementById("settings-lang");
const quizModeSelector = document.getElementById("quiz-mode-selector");
const modeRandom = document.getElementById("mode-random");
const modeSequential = document.getElementById("mode-sequential");
const slider = document.getElementById("random-quiz-slider");
const sliderValue = document.getElementById("slider-value");
const progressViewContainer = document.getElementById("progress-view");

const viewHistoryBtn = document.getElementById("view-history-btn");
const backToSettingsBtn = document.getElementById("back-to-settings-btn");
const playAgainBtn = document.getElementById("play-again-btn");
const quitQuizBtn = document.getElementById("quit-quiz-btn");

const scoreDisplay = document.getElementById("score-display");
const questionCountEl = document.getElementById("question-count");
const arabicTextEl = document.getElementById("arabic-text");
const englishTextEl = document.getElementById("english-text");
const mcqOptionsContainer = document.getElementById("mcq-options");
const finalScoreEl = document.getElementById("final-score");
const historyListEl = document.getElementById("history-list");
const wordProgressTableBody = document.getElementById(
  "word-progress-table-body"
);
const masteryProgressBar = document.getElementById("mastery-progress-bar");
const progressLangDisplay = document.getElementById("progress-lang-display");
const historyLangDisplay = document.getElementById("history-lang-display");
const progressTableHeader = document.getElementById("progress-table-header");

// --- State ---
let quizSettings = { language: null, mode: "random" };
let quizState = {
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  answered: false,
};
let sortState = { column: "number", direction: "asc" };

// --- Functions ---

function generateRubyHTML(jpData) {
  if (!Array.isArray(jpData)) return `<span>${jpData}</span>`; // Fallback for non-array data
  return jpData
    .map((part) => {
      if (part.furigana) {
        return `<ruby>${part.text}<rt>${part.furigana}</rt></ruby>`;
      }
      return `<span>${part.text}</span>`;
    })
    .join("");
}

function getWordProgress(lang) {
  if (!lang) return {};
  return (
    JSON.parse(localStorage.getItem(`quranQuizWordProgress_${lang}`)) || {}
  );
}

function updateWordProgress(wordIndex, isCorrect, lang) {
  const progress = getWordProgress(lang);
  if (!progress[wordIndex]) {
    progress[wordIndex] = { correct: 0, incorrect: 0 };
  }
  if (isCorrect) {
    progress[wordIndex].correct++;
  } else {
    progress[wordIndex].incorrect++;
  }
  localStorage.setItem(
    `quranQuizWordProgress_${lang}`,
    JSON.stringify(progress)
  );
}

function updateSettings(type, value) {
  quizSettings[type] = value;
  if (type === "language") {
    document.querySelectorAll(".lang-option").forEach((btn) => {
      btn.classList.toggle("bg-blue-100", btn.dataset.lang === value);
      btn.classList.toggle("border-blue-500", btn.dataset.lang === value);
    });
    renderWordProgress(value);
    populateProgressView(value);
  }
  if (type === "mode") {
    document.querySelectorAll(".mode-option").forEach((opt) => {
      opt.classList.toggle("mode-active", opt.id === `mode-${value}`);
    });
    progressViewContainer.classList.toggle("hidden", value !== "sequential");
  }
}

function populateProgressView(lang) {
  progressViewContainer.innerHTML = "";
  const progress = getWordProgress(lang);

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
    button.addEventListener("click", () => startQuiz({ startIndex: index }));
    progressViewContainer.appendChild(button);
  });
}

function renderWordProgress(lang) {
  if (!lang) {
    wordProgressTableBody.innerHTML = `<tr><td colspan="4" class="text-center p-4 text-gray-500">Please select a language to see progress.</td></tr>`;
    masteryProgressBar.style.width = "0%";
    masteryProgressBar.textContent = "";
    progressLangDisplay.textContent = "...";
    return;
  }

  progressLangDisplay.textContent = lang === "du" ? "German" : "Japanese";
  const progress = getWordProgress(lang);
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

  wordData.forEach((word, index) => {
    const stats = progress[index] || { correct: 0, incorrect: 0 };
    const totalAttempts = stats.correct + stats.incorrect;
    if (totalAttempts > 0) {
      const wordMasteryRatio = stats.correct / totalAttempts;
      if (wordMasteryRatio >= 0.8) masteredWords++;
    }
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

function startQuiz({ startIndex = 0, numQuestions = 0 }) {
  if (!quizSettings.language) {
    alert("Please select a language first!");
    return;
  }

  if (quizSettings.mode === "random") {
    quizState.questions = [...wordData]
      .sort(() => 0.5 - Math.random())
      .slice(0, numQuestions);
  } else {
    quizState.questions = wordData.slice(startIndex);
  }

  if (quizState.questions.length === 0) return;
  quizState.currentQuestionIndex = 0;
  quizState.score = 0;

  settingsScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  renderQuestion();
}

function renderQuestion() {
  quizState.answered = false;
  const question = quizState.questions[quizState.currentQuestionIndex];

  scoreDisplay.textContent = `Score: ${quizState.score}`;
  const overallIndex = wordData.findIndex(
    (w) => w.arabic === question.arabic && w.english === question.english
  );
  questionCountEl.textContent = `Word ${overallIndex + 1} / ${wordData.length}`;
  arabicTextEl.textContent = question.arabic;
  englishTextEl.textContent = question.english;

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

    if (quizSettings.language === "jp") {
      button.innerHTML = `<span class="text-lg">${generateRubyHTML(
        option.jp
      )}</span>`;
    } else {
      button.textContent = option.du;
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
  const wordIndex = wordData.findIndex(
    (w) =>
      w.arabic === currentQuestion.arabic &&
      w.english === currentQuestion.english
  );

  updateWordProgress(wordIndex, isCorrect, quizSettings.language);

  if (isCorrect) quizState.score++;

  document.querySelectorAll(".mcq-option").forEach((btn) => {
    btn.classList.add("no-pointer-events");
    if (btn.dataset.correct === "true") btn.classList.add("correct-answer");
    else btn.classList.add("wrong-answer");
  });

  setTimeout(() => {
    if (quizState.currentQuestionIndex < quizState.questions.length - 1) {
      quizState.currentQuestionIndex++;
      renderQuestion();
    } else {
      showResults();
    }
  }, 800);
}

function showResults() {
  quizScreen.classList.add("hidden");
  resultsScreen.classList.remove("hidden");
  const finalScoreText = `${quizState.score} / ${quizState.questions.length}`;
  finalScoreEl.textContent = finalScoreText;
  saveResultToHistory(finalScoreText);
}

function saveResultToHistory(scoreText) {
  const lang = quizSettings.language;
  const history =
    JSON.parse(localStorage.getItem(`quranQuizHistory_${lang}`)) || [];
  const newResult = {
    score: scoreText,
    date: new Date().toLocaleString(),
    language: lang === "du" ? "German" : "Japanese",
  };
  history.unshift(newResult);
  localStorage.setItem(
    `quranQuizHistory_${lang}`,
    JSON.stringify(history.slice(0, 15))
  );
}

function renderHistory() {
  if (!quizSettings.language) {
    alert("Please select a language to view its history.");
    return;
  }
  const lang = quizSettings.language;
  historyLangDisplay.textContent = lang === "du" ? "German" : "Japanese";
  settingsScreen.classList.add("hidden");
  historyScreen.classList.remove("hidden");
  const history =
    JSON.parse(localStorage.getItem(`quranQuizHistory_${lang}`)) || [];
  historyListEl.innerHTML = "";

  if (history.length === 0) {
    historyListEl.innerHTML = `<li class="text-center text-gray-500">No history found for this language.</li>`;
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

function resetApp() {
  quizScreen.classList.add("hidden");
  resultsScreen.classList.add("hidden");
  historyScreen.classList.add("hidden");
  settingsScreen.classList.remove("hidden");
  renderWordProgress(quizSettings.language);
  populateProgressView(quizSettings.language);
}

// --- Event Listeners ---
langOptionsContainer.addEventListener("click", (e) => {
  if (e.target.matches(".lang-option"))
    updateSettings("language", e.target.dataset.lang);
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

slider.addEventListener("click", (e) => {
  if (quizSettings.mode === "random") {
    startQuiz({ numQuestions: parseInt(e.target.value) });
  }
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
  renderWordProgress(quizSettings.language);
});

viewHistoryBtn.addEventListener("click", renderHistory);
backToSettingsBtn.addEventListener("click", resetApp);
playAgainBtn.addEventListener("click", resetApp);
quitQuizBtn.addEventListener("click", resetApp);

// --- Initial Load ---
updateSettings("language", null);
updateSettings("mode", "random");
populateProgressView(null);
renderWordProgress(null);
