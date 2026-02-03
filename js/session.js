/**
 * Session Management
 */

let currentSession = null;
let timerInterval = null;

/**
 * Start a new study session
 * @param {string} planId - Selected plan ID
 * @param {string} levelId - Selected level ID
 */
function startSession(planId, levelId) {
  const visibleExercises = getVisibleExerciseIds(planId, levelId);
  
  currentSession = {
    sessionId: generateSessionId(),
    planId: planId,
    levelId: levelId,
    planName: CONFIG.STUDY_PLANS[planId]?.name || planId,
    levelName: CONFIG.LEVELS[levelId]?.name || levelId,
    startTime: Date.now(),
    totalExercises: visibleExercises.length,
    exerciseIds: visibleExercises,
    answers: loadSavedAnswers() || {},
    isActive: true
  };
  
  // Start timer
  startTimer();
  
  // Update UI
  updateStickyHeader(true);
  updateSessionInfo();
  updateProgressDisplay();
  
  // Minimize hero
  const hero = document.getElementById('hero');
  if (hero) {
    hero.classList.add('minimized');
  }
  
  // Scroll to exercises
  const worksheet = document.getElementById('worksheet-container');
  if (worksheet) {
    worksheet.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
  // Save session
  saveSessionToStorage();
  
  console.log('Session started:', currentSession);
}

/**
 * End current session
 */
function endSession() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  
  if (currentSession) {
    currentSession.isActive = false;
    currentSession.endTime = Date.now();
  }
  
  updateStickyHeader(false);
  
  const hero = document.getElementById('hero');
  if (hero) {
    hero.classList.remove('minimized');
  }
  
  document.body.classList.remove('session-active');
}

/**
 * Reset session (clear answers and restart)
 */
function resetSession() {
  if (!confirm('Are you sure you want to clear all your answers and start over?')) {
    return;
  }
  
  // Clear answers
  if (currentSession) {
    currentSession.answers = {};
  }
  
  // Clear from storage
  clearAnswersFromStorage();
  
  // Clear UI
  document.querySelectorAll('.exercise-input').forEach(input => {
    input.value = '';
  });
  
  // Clear result states
  document.querySelectorAll('.exercise-item').forEach(item => {
    item.classList.remove('correct', 'incorrect', 'unanswered');
  });
  
  updateProgressDisplay();
}

/**
 * Get current session data
 * @returns {Object|null} Session data
 */
function getSessionData() {
  return currentSession;
}

/**
 * Check if session is active
 * @returns {boolean}
 */
function isSessionActive() {
  return currentSession?.isActive || false;
}

/**
 * Generate unique session ID
 * @returns {string}
 */
function generateSessionId() {
  return 'session-' + Date.now().toString(36) + '-' + Math.random().toString(36).substr(2, 9);
}

/**
 * Start the session timer
 */
function startTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  
  updateTimerDisplay(formatTime(0));
  
  timerInterval = setInterval(() => {
    if (currentSession && currentSession.isActive) {
      const elapsed = Date.now() - currentSession.startTime;
      updateTimerDisplay(formatTime(elapsed));
    }
  }, 1000);
}

/**
 * Format milliseconds to MM:SS or HH:MM:SS
 * @param {number} ms - Milliseconds
 * @returns {string} Formatted time
 */
function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  
  const pad = (n) => n.toString().padStart(2, '0');
  
  if (hours > 0) {
    return `${hours}:${pad(minutes)}:${pad(seconds)}`;
  }
  return `${pad(minutes)}:${pad(seconds)}`;
}

/**
 * Update session info in sticky header
 */
function updateSessionInfo() {
  const planDisplay = document.getElementById('plan-display');
  const levelDisplay = document.getElementById('level-display');
  
  if (planDisplay && currentSession) {
    planDisplay.textContent = currentSession.planName;
  }
  
  if (levelDisplay && currentSession) {
    levelDisplay.textContent = currentSession.levelName;
  }
}

/**
 * Save answer to session
 * @param {string} exerciseId - Exercise ID
 * @param {string} answer - User's answer
 */
function saveAnswer(exerciseId, answer) {
  if (!currentSession) {
    // Even without active session, save answers
    const answers = loadSavedAnswers() || {};
    if (answer) {
      answers[exerciseId] = answer;
    } else {
      delete answers[exerciseId];
    }
    saveAnswersToStorage(answers);
    return;
  }
  
  if (answer) {
    currentSession.answers[exerciseId] = answer;
  } else {
    delete currentSession.answers[exerciseId];
  }
  
  // Auto-save with debounce
  debouncedSave();
}

/**
 * Get saved answer for an exercise
 * @param {string} exerciseId - Exercise ID
 * @returns {string|undefined} Saved answer
 */
function getAnswer(exerciseId) {
  if (currentSession) {
    return currentSession.answers[exerciseId];
  }
  const saved = loadSavedAnswers();
  return saved?.[exerciseId];
}

/**
 * Count answered exercises in current session
 * @returns {number}
 */
function countAnsweredExercises() {
  if (!currentSession) return 0;
  
  let count = 0;
  for (const id of currentSession.exerciseIds) {
    if (currentSession.answers[id]?.trim()) {
      count++;
    }
  }
  return count;
}

/**
 * Update progress count
 */
function updateProgress() {
  updateProgressDisplay();
  
  if (currentSession) {
    saveSessionToStorage();
  }
}

// Debounced save function
let saveTimeout = null;
function debouncedSave() {
  if (saveTimeout) {
    clearTimeout(saveTimeout);
  }
  saveTimeout = setTimeout(() => {
    saveSessionToStorage();
  }, CONFIG.AUTOSAVE_DELAY);
}

/**
 * Restore session from storage if exists
 */
function restoreSession() {
  const savedSession = loadSessionFromStorage();
  const savedAnswers = loadSavedAnswers();
  
  if (savedSession && savedSession.isActive) {
    currentSession = savedSession;
    currentSession.answers = { ...savedAnswers, ...savedSession.answers };
    
    // Recalculate start time to continue timer
    const elapsed = savedSession.elapsedTime || 0;
    currentSession.startTime = Date.now() - elapsed;
    
    startTimer();
    updateStickyHeader(true);
    updateSessionInfo();
    
    // Don't minimize hero on restore - let user see the state
    console.log('Session restored:', currentSession);
    return true;
  }
  
  return false;
}
