/**
 * LocalStorage Persistence
 */

/**
 * Save session to localStorage
 */
function saveSessionToStorage() {
  if (!currentSession) return;
  
  try {
    const sessionData = {
      ...currentSession,
      elapsedTime: Date.now() - currentSession.startTime
    };
    localStorage.setItem(CONFIG.STORAGE_KEYS.session, JSON.stringify(sessionData));
    
    // Also save answers separately for redundancy
    saveAnswersToStorage(currentSession.answers);
  } catch (error) {
    console.error('Failed to save session:', error);
  }
}

/**
 * Load session from localStorage
 * @returns {Object|null} Session data
 */
function loadSessionFromStorage() {
  try {
    const data = localStorage.getItem(CONFIG.STORAGE_KEYS.session);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Failed to load session:', error);
    return null;
  }
}

/**
 * Save answers to localStorage
 * @param {Object} answers - Answers object
 */
function saveAnswersToStorage(answers) {
  try {
    localStorage.setItem(CONFIG.STORAGE_KEYS.answers, JSON.stringify(answers));
  } catch (error) {
    console.error('Failed to save answers:', error);
  }
}

/**
 * Load answers from localStorage
 * @returns {Object|null} Answers object
 */
function loadSavedAnswers() {
  try {
    const data = localStorage.getItem(CONFIG.STORAGE_KEYS.answers);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Failed to load answers:', error);
    return null;
  }
}

/**
 * Clear answers from localStorage
 */
function clearAnswersFromStorage() {
  try {
    localStorage.removeItem(CONFIG.STORAGE_KEYS.answers);
  } catch (error) {
    console.error('Failed to clear answers:', error);
  }
}

/**
 * Clear all stored data
 */
function clearAllStorage() {
  try {
    localStorage.removeItem(CONFIG.STORAGE_KEYS.session);
    localStorage.removeItem(CONFIG.STORAGE_KEYS.answers);
    localStorage.removeItem(CONFIG.STORAGE_KEYS.settings);
    console.log('All storage cleared');
  } catch (error) {
    console.error('Failed to clear storage:', error);
  }
}

/**
 * Export progress as JSON file
 */
function exportProgress() {
  const session = getSessionData();
  const answers = loadSavedAnswers() || {};
  
  const exportData = {
    exportDate: new Date().toISOString(),
    session: session ? {
      planId: session.planId,
      levelId: session.levelId,
      startTime: session.startTime,
      totalExercises: session.totalExercises
    } : null,
    answers: answers,
    results: session ? scoreAllExercises() : null
  };
  
  const blob = new Blob([JSON.stringify(exportData, null, 2)], {
    type: 'application/json'
  });
  
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `czech-genitive-progress-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Import progress from JSON file
 * @param {File} file - JSON file to import
 */
async function importProgress(file) {
  try {
    const text = await file.text();
    const data = JSON.parse(text);
    
    if (data.answers) {
      saveAnswersToStorage(data.answers);
      
      // Reload answers into inputs
      document.querySelectorAll('.exercise-input').forEach(input => {
        const id = input.dataset.exerciseId;
        if (data.answers[id]) {
          input.value = data.answers[id];
        }
      });
      
      alert('Progress imported successfully!');
      updateProgressDisplay();
    } else {
      alert('Invalid progress file format.');
    }
  } catch (error) {
    console.error('Failed to import progress:', error);
    alert('Failed to import progress. Please check the file format.');
  }
}

/**
 * Check if there's saved progress
 * @returns {boolean}
 */
function hasSavedProgress() {
  const answers = loadSavedAnswers();
  return answers && Object.keys(answers).length > 0;
}

/**
 * Get count of saved answers
 * @returns {number}
 */
function countSavedAnswers() {
  const answers = loadSavedAnswers();
  if (!answers) return 0;
  return Object.keys(answers).filter(id => answers[id]?.trim()).length;
}
