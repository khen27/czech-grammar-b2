/**
 * Main Application Entry Point
 */

// App state
let selectedPlan = CONFIG.DEFAULTS.plan;
let selectedLevel = CONFIG.DEFAULTS.level;

/**
 * Initialize the application
 */
async function initApp() {
  console.log('Initializing Czech Genitive Master...');
  
  // Show loading state
  showLoading();
  
  try {
    // Load exercise data
    await loadExercises();
    
    // Initialize UI
    initSelectionUI();
    initStickyHeader();
    initModalHandlers();
    
    // Check for saved progress
    const savedAnswerCount = countSavedAnswers();
    if (savedAnswerCount > 0) {
      console.log(`Found ${savedAnswerCount} saved answers`);
    }
    
    // Restore session if active
    const restored = restoreSession();
    if (restored) {
      // Update selections from session
      const session = getSessionData();
      if (session) {
        selectedPlan = session.planId;
        selectedLevel = session.levelId;
      }
    }
    
    // Update selection UI
    updatePlanSelection(selectedPlan);
    updateLevelSelection(selectedLevel);
    
    // Render exercises
    updateVisibility(selectedPlan, selectedLevel);
    
    // Initialize print functionality
    initPrint();
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
    
    console.log('App initialized successfully');
    
  } catch (error) {
    console.error('Failed to initialize app:', error);
    showError(error.message || 'Failed to load exercises. Please refresh the page.');
  }
}

/**
 * Initialize selection UI (study plans and levels)
 */
function initSelectionUI() {
  // Study plan buttons
  document.querySelectorAll('.plan-card').forEach(card => {
    card.addEventListener('click', () => {
      const planId = card.dataset.plan;
      selectPlan(planId);
    });
  });
  
  // Level badges
  document.querySelectorAll('.level-badge').forEach(badge => {
    badge.addEventListener('click', () => {
      const levelId = badge.dataset.level;
      selectLevel(levelId);
    });
  });
  
  // Start button
  const startBtn = document.getElementById('start-btn');
  if (startBtn) {
    startBtn.addEventListener('click', handleStart);
  }
}

/**
 * Initialize sticky header
 */
function initStickyHeader() {
  // Review button
  const reviewBtn = document.getElementById('review-btn');
  if (reviewBtn) {
    reviewBtn.addEventListener('click', reviewAnswers);
  }
  
  // Reset button
  const resetBtn = document.getElementById('reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetSession);
  }
  
  // End session button
  const endBtn = document.getElementById('end-btn');
  if (endBtn) {
    endBtn.addEventListener('click', handleEndSession);
  }
}

/**
 * Initialize modal handlers
 */
function initModalHandlers() {
  // Close modal button
  const closeBtn = document.getElementById('modal-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', hideResultsModal);
  }
  
  // Close on overlay click
  const overlay = document.getElementById('results-modal');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        hideResultsModal();
      }
    });
  }
  
  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hideResultsModal();
    }
  });
  
  // Review incorrect button
  const reviewIncorrectBtn = document.getElementById('review-incorrect-btn');
  if (reviewIncorrectBtn) {
    reviewIncorrectBtn.addEventListener('click', () => {
      hideResultsModal();
      scrollToFirstIncorrect();
    });
  }
  
  // Start new button
  const startNewBtn = document.getElementById('start-new-btn');
  if (startNewBtn) {
    startNewBtn.addEventListener('click', () => {
      hideResultsModal();
      handleNewSession();
    });
  }
}

/**
 * Select a study plan
 * @param {string} planId - Plan ID
 */
function selectPlan(planId) {
  selectedPlan = planId;
  updatePlanSelection(planId);
  
  // Update exercise count preview
  const count = countFilteredExercises(planId, selectedLevel);
  updateExerciseCountPreview(count);
  
  // If session not active, update visibility
  if (!isSessionActive()) {
    updateVisibility(selectedPlan, selectedLevel);
  }
}

/**
 * Select a level
 * @param {string} levelId - Level ID
 */
function selectLevel(levelId) {
  selectedLevel = levelId;
  updateLevelSelection(levelId);
  
  // Update exercise count preview
  const count = countFilteredExercises(selectedPlan, levelId);
  updateExerciseCountPreview(count);
  
  // If session not active, update visibility
  if (!isSessionActive()) {
    updateVisibility(selectedPlan, selectedLevel);
  }
}

/**
 * Update exercise count preview
 * @param {number} count - Exercise count
 */
function updateExerciseCountPreview(count) {
  const preview = document.getElementById('exercise-count-preview');
  if (preview) {
    preview.textContent = `${count} exercises`;
  }
}

/**
 * Handle start button click
 */
function handleStart() {
  if (!selectedPlan || !selectedLevel) {
    alert('Please select a study plan and level.');
    return;
  }
  
  // Clear previous feedback
  clearFeedback();
  
  // Start session
  startSession(selectedPlan, selectedLevel);
  
  // Focus first input
  setTimeout(() => {
    const firstInput = document.querySelector('.exercise-input');
    if (firstInput) {
      firstInput.focus();
    }
  }, 500);
}

/**
 * Handle end session
 */
function handleEndSession() {
  if (confirm('Are you sure you want to end this session? Your answers will be saved.')) {
    endSession();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

/**
 * Handle new session
 */
function handleNewSession() {
  endSession();
  clearFeedback();
  
  // Clear answers
  clearAnswersFromStorage();
  document.querySelectorAll('.exercise-input').forEach(input => {
    input.value = '';
  });
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Scroll to first incorrect answer
 */
function scrollToFirstIncorrect() {
  const firstIncorrect = document.querySelector('.exercise-item.incorrect');
  if (firstIncorrect) {
    firstIncorrect.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const input = firstIncorrect.querySelector('.exercise-input');
    if (input) {
      input.focus();
    }
  }
}

/**
 * Keyboard shortcuts
 */
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + Enter to review
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      if (isSessionActive()) {
        reviewAnswers();
      }
    }
  });
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initApp();
  initKeyboardShortcuts();
});
