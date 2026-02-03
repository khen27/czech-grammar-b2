/**
 * Answer Validation and Scoring
 */

/**
 * Normalize answer for comparison
 * @param {string} answer - Answer string
 * @returns {string} Normalized answer
 */
function normalizeAnswer(answer) {
  if (!answer) return '';
  return answer
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' '); // Normalize whitespace
}

/**
 * Check if user answer matches correct answer
 * @param {string} userAnswer - User's answer
 * @param {string} correctAnswer - Correct answer
 * @returns {boolean} Whether answer is correct
 */
function checkAnswer(userAnswer, correctAnswer) {
  const normalizedUser = normalizeAnswer(userAnswer);
  const normalizedCorrect = normalizeAnswer(correctAnswer);
  
  // Exact match
  if (normalizedUser === normalizedCorrect) {
    return true;
  }
  
  // Handle common variations (e.g., with/without punctuation)
  const cleanUser = normalizedUser.replace(/[.,!?;:'"]/g, '');
  const cleanCorrect = normalizedCorrect.replace(/[.,!?;:'"]/g, '');
  
  return cleanUser === cleanCorrect;
}

/**
 * Score a single exercise
 * @param {string} exerciseId - Exercise ID
 * @returns {Object} Score result { correct, userAnswer, correctAnswer }
 */
function scoreExercise(exerciseId) {
  const exercise = getExerciseById(exerciseId);
  const userAnswer = getAnswer(exerciseId) || '';
  
  if (!exercise) {
    return { correct: false, userAnswer, correctAnswer: '', error: 'Exercise not found' };
  }
  
  const isCorrect = checkAnswer(userAnswer, exercise.answer);
  
  return {
    exerciseId,
    correct: isCorrect,
    userAnswer: userAnswer,
    correctAnswer: exercise.answer,
    answered: !!userAnswer.trim()
  };
}

/**
 * Score all exercises in current session
 * @returns {Object} Full results
 */
function scoreAllExercises() {
  const session = getSessionData();
  if (!session) {
    console.error('No active session');
    return null;
  }
  
  const results = {
    sessionId: session.sessionId,
    planId: session.planId,
    levelId: session.levelId,
    timestamp: Date.now(),
    timeSpent: Date.now() - session.startTime,
    exercises: [],
    summary: {
      total: session.totalExercises,
      answered: 0,
      correct: 0,
      incorrect: 0,
      unanswered: 0,
      accuracy: 0,
      completion: 0
    },
    byPart: {}
  };
  
  // Score each exercise
  for (const exerciseId of session.exerciseIds) {
    const score = scoreExercise(exerciseId);
    results.exercises.push(score);
    
    // Get part for this exercise
    const exercise = getExerciseById(exerciseId);
    const partId = exercise?.partId || 'unknown';
    
    // Initialize part stats if needed
    if (!results.byPart[partId]) {
      results.byPart[partId] = {
        total: 0,
        answered: 0,
        correct: 0,
        incorrect: 0
      };
    }
    
    results.byPart[partId].total++;
    
    if (score.answered) {
      results.summary.answered++;
      results.byPart[partId].answered++;
      
      if (score.correct) {
        results.summary.correct++;
        results.byPart[partId].correct++;
      } else {
        results.summary.incorrect++;
        results.byPart[partId].incorrect++;
      }
    } else {
      results.summary.unanswered++;
    }
  }
  
  // Calculate percentages
  if (results.summary.answered > 0) {
    results.summary.accuracy = Math.round((results.summary.correct / results.summary.answered) * 100);
  }
  
  if (results.summary.total > 0) {
    results.summary.completion = Math.round((results.summary.answered / results.summary.total) * 100);
  }
  
  // Calculate per-part percentages
  for (const partId in results.byPart) {
    const part = results.byPart[partId];
    part.accuracy = part.answered > 0 ? Math.round((part.correct / part.answered) * 100) : 0;
  }
  
  return results;
}

/**
 * Apply visual feedback to exercises based on results
 * @param {Object} results - Scoring results
 */
function applyFeedback(results) {
  if (!results || !results.exercises) return;
  
  results.exercises.forEach(score => {
    const item = document.querySelector(`.exercise-item[data-exercise-id="${score.exerciseId}"]`);
    if (!item) return;
    
    // Remove existing states
    item.classList.remove('correct', 'incorrect', 'unanswered');
    
    // Apply new state
    if (!score.answered) {
      item.classList.add('unanswered');
    } else if (score.correct) {
      item.classList.add('correct');
    } else {
      item.classList.add('incorrect');
    }
  });
  
  // Reinitialize icons for result icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

/**
 * Clear all feedback from exercises
 */
function clearFeedback() {
  document.querySelectorAll('.exercise-item').forEach(item => {
    item.classList.remove('correct', 'incorrect', 'unanswered');
  });
}

/**
 * Show results modal with scoring
 * @param {Object} results - Scoring results
 */
function showResultsModal(results) {
  const modal = document.getElementById('results-modal');
  if (!modal) return;
  
  // Update summary stats
  document.getElementById('result-correct').textContent = results.summary.correct;
  document.getElementById('result-incorrect').textContent = results.summary.incorrect;
  document.getElementById('result-unanswered').textContent = results.summary.unanswered;
  document.getElementById('result-accuracy').textContent = `${results.summary.accuracy}%`;
  
  // Update session info
  document.getElementById('result-plan').textContent = CONFIG.STUDY_PLANS[results.planId]?.name || results.planId;
  document.getElementById('result-level').textContent = CONFIG.LEVELS[results.levelId]?.name || results.levelId;
  document.getElementById('result-time').textContent = formatTime(results.timeSpent);
  
  // Update breakdown by part
  const breakdownContainer = document.getElementById('results-breakdown');
  if (breakdownContainer) {
    let breakdownHtml = '';
    
    for (const partId in results.byPart) {
      const part = results.byPart[partId];
      const partData = getPartById(partId);
      const partTitle = partData?.title || `Part ${partId}`;
      const percent = part.accuracy;
      
      breakdownHtml += `
        <div class="breakdown-item">
          <span class="breakdown-label">Part ${partId}: ${partTitle}</span>
          <div class="breakdown-bar">
            <div class="bar-fill" style="width: ${percent}%"></div>
          </div>
          <span class="breakdown-percent">${percent}%</span>
        </div>
      `;
    }
    
    breakdownContainer.innerHTML = breakdownHtml;
  }
  
  // Update accuracy ring
  updateAccuracyRing(results.summary.accuracy);
  
  // Show modal
  modal.classList.add('visible');
}

/**
 * Hide results modal
 */
function hideResultsModal() {
  const modal = document.getElementById('results-modal');
  if (modal) {
    modal.classList.remove('visible');
  }
}

/**
 * Update accuracy ring visualization
 * @param {number} percent - Accuracy percentage
 */
function updateAccuracyRing(percent) {
  const ring = document.querySelector('.ring-fill');
  const value = document.querySelector('.accuracy-value');
  
  if (ring) {
    // Circumference = 2 * PI * radius = 2 * 3.14159 * 54 = ~339.292
    const circumference = 339.292;
    const offset = circumference - (percent / 100) * circumference;
    ring.style.strokeDashoffset = offset;
  }
  
  if (value) {
    value.textContent = `${percent}%`;
  }
}

/**
 * Review (score and show results)
 */
function reviewAnswers() {
  const results = scoreAllExercises();
  if (!results) {
    alert('Please start a study session first.');
    return;
  }
  
  applyFeedback(results);
  showResultsModal(results);
}
