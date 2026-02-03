/**
 * UI Rendering and Updates
 */

/**
 * Render all parts to the worksheet container
 * @param {Array} parts - Parts to render
 */
function renderWorksheet(parts) {
  const container = document.getElementById('worksheet-container');
  if (!container) {
    console.error('Worksheet container not found');
    return;
  }
  
  container.innerHTML = '';
  
  if (!parts || parts.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <svg><use href="#icon-inbox"></use></svg>
        <h3>No exercises found</h3>
        <p>Try selecting a different study plan or level.</p>
      </div>
    `;
    return;
  }
  
  parts.forEach(part => {
    const partElement = renderPart(part);
    container.appendChild(partElement);
  });
  
  // Reinitialize Lucide icons for dynamically added content
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

/**
 * Render a single part (section card)
 * @param {Object} part - Part data
 * @returns {HTMLElement} Section card element
 */
function renderPart(part) {
  const section = document.createElement('article');
  section.className = 'section-card fade-in';
  section.id = `part-${part.id.toLowerCase()}`;
  section.dataset.partId = part.id;
  
  const icon = CONFIG.PART_ICONS[part.id] || 'book';
  
  let html = `
    <header class="section-header">
      <span class="section-number">${part.id}</span>
      <div class="section-header-content">
        <i data-lucide="${icon}" class="section-icon"></i>
        <h2>${part.title}</h2>
      </div>
    </header>
  `;
  
  if (part.hint) {
    html += `<p class="section-hint">${part.hint}</p>`;
  }
  
  part.subsections.forEach(subsection => {
    html += renderSubsection(subsection, part.id);
  });
  
  section.innerHTML = html;
  return section;
}

/**
 * Render a subsection
 * @param {Object} subsection - Subsection data
 * @param {string} partId - Parent part ID
 * @returns {string} HTML string
 */
function renderSubsection(subsection, partId) {
  const layout = subsection.layout || 'grid-1col';
  
  let html = `
    <div class="subsection" data-subsection="${subsection.title}">
      <h3 class="subsection-title">${subsection.title}</h3>
      <div class="exercise-grid ${layout}">
  `;
  
  subsection.exercises.forEach(exercise => {
    html += renderExercise(exercise, partId);
  });
  
  html += `
      </div>
    </div>
  `;
  
  return html;
}

/**
 * Render a single exercise
 * @param {Object} exercise - Exercise data
 * @param {string} partId - Parent part ID
 * @returns {string} HTML string
 */
function renderExercise(exercise, partId) {
  const inputClass = getInputClass(exercise.inputType);
  const savedAnswer = getAnswer(exercise.id) || '';
  
  // Build the prompt HTML, replacing ___ with inline inputs if needed
  let promptHtml = escapeHtml(exercise.prompt);
  
  // For inline input types, render the input within the prompt
  if (exercise.inputType === 'inline' || exercise.inputType === 'small') {
    if (promptHtml.includes('___')) {
      const inputHtml = `<input type="text" 
        id="${exercise.id}" 
        class="exercise-input ${inputClass}" 
        data-exercise-id="${exercise.id}"
        data-part-id="${partId}"
        value="${escapeHtml(savedAnswer)}"
        placeholder="...">`;
      promptHtml = promptHtml.replace('___', inputHtml);
    }
  }
  
  let html = `
    <div class="exercise-item" data-exercise-id="${exercise.id}">
      <label for="${exercise.id}">
        <span class="exercise-number">${exercise.number})</span>
        <span class="exercise-prompt">${promptHtml}</span>
        ${exercise.hint ? `<span class="exercise-hint">${escapeHtml(exercise.hint)}</span>` : ''}
      </label>
  `;
  
  // If not inline, add input after the label
  if (exercise.inputType !== 'inline' && exercise.inputType !== 'small') {
    html += `
      <input type="text" 
        id="${exercise.id}" 
        class="exercise-input ${inputClass}" 
        data-exercise-id="${exercise.id}"
        data-part-id="${partId}"
        value="${escapeHtml(savedAnswer)}"
        placeholder="...">
    `;
  } else if (!exercise.prompt.includes('___')) {
    // If small/inline but no placeholder in prompt, add input after
    html += `
      <input type="text" 
        id="${exercise.id}" 
        class="exercise-input ${inputClass}" 
        data-exercise-id="${exercise.id}"
        data-part-id="${partId}"
        value="${escapeHtml(savedAnswer)}"
        placeholder="...">
    `;
  }
  
  // Add result icons (hidden by default)
  html += `
      <i data-lucide="check-circle" class="result-icon correct-icon"></i>
      <i data-lucide="x-circle" class="result-icon incorrect-icon"></i>
    </div>
    <div class="correct-answer" data-for="${exercise.id}">
      Correct: <strong>${escapeHtml(exercise.answer)}</strong>
    </div>
  `;
  
  return html;
}

/**
 * Get input class based on input type
 * @param {string} inputType - Input type from data
 * @returns {string} CSS class
 */
function getInputClass(inputType) {
  switch (inputType) {
    case 'small':
      return 'small';
    case 'inline':
      return 'inline';
    default:
      return '';
  }
}

/**
 * Escape HTML to prevent XSS
 * @param {string} str - String to escape
 * @returns {string} Escaped string
 */
function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/**
 * Clear the worksheet container
 */
function clearWorksheet() {
  const container = document.getElementById('worksheet-container');
  if (container) {
    container.innerHTML = '';
  }
}

/**
 * Show loading state
 */
function showLoading() {
  const container = document.getElementById('worksheet-container');
  if (container) {
    container.innerHTML = `
      <div class="loading">
        <div class="spinner"></div>
        <p>Loading exercises...</p>
      </div>
    `;
  }
}

/**
 * Show error state
 * @param {string} message - Error message
 */
function showError(message) {
  const container = document.getElementById('worksheet-container');
  if (container) {
    container.innerHTML = `
      <div class="empty-state">
        <i data-lucide="alert-circle"></i>
        <h3>Error Loading Exercises</h3>
        <p>${escapeHtml(message)}</p>
        <button class="btn" onclick="location.reload()">
          <i data-lucide="refresh-cw"></i>
          Retry
        </button>
      </div>
    `;
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }
}

/**
 * Update study plan button states
 * @param {string} selectedPlanId - Selected plan ID
 */
function updatePlanSelection(selectedPlanId) {
  document.querySelectorAll('.plan-card').forEach(card => {
    card.classList.toggle('selected', card.dataset.plan === selectedPlanId);
  });
}

/**
 * Update level badge states
 * @param {string} selectedLevelId - Selected level ID
 */
function updateLevelSelection(selectedLevelId) {
  document.querySelectorAll('.level-badge').forEach(badge => {
    badge.classList.toggle('selected', badge.dataset.level === selectedLevelId);
  });
}

/**
 * Show/hide parts based on visibility
 * @param {string} planId - Current plan ID
 * @param {string} levelId - Current level ID
 */
function updateVisibility(planId, levelId) {
  const filteredParts = applyFilters(planId, levelId);
  renderWorksheet(filteredParts);
  attachInputListeners();
}

/**
 * Attach input listeners for answer tracking
 */
function attachInputListeners() {
  document.querySelectorAll('.exercise-input').forEach(input => {
    input.addEventListener('input', handleAnswerInput);
    input.addEventListener('blur', handleAnswerInput);
  });
}

/**
 * Handle answer input event
 * @param {Event} event - Input event
 */
function handleAnswerInput(event) {
  const input = event.target;
  const exerciseId = input.dataset.exerciseId;
  const value = input.value.trim();
  
  saveAnswer(exerciseId, value);
  updateProgress();
}

/**
 * Update the sticky header
 * @param {boolean} visible - Whether to show the header
 */
function updateStickyHeader(visible) {
  const header = document.getElementById('sticky-header');
  if (header) {
    header.classList.toggle('visible', visible);
    document.body.classList.toggle('session-active', visible);
  }
}

/**
 * Update progress display in sticky header
 */
function updateProgressDisplay() {
  const progressText = document.getElementById('progress-text');
  const progressFill = document.getElementById('progress-fill');
  
  if (!progressText || !progressFill) return;
  
  const session = getSessionData();
  if (!session) return;
  
  const answered = countAnsweredExercises();
  const total = session.totalExercises;
  const percent = total > 0 ? (answered / total) * 100 : 0;
  
  progressText.textContent = `${answered}/${total}`;
  progressFill.style.width = `${percent}%`;
}

/**
 * Update timer display
 * @param {string} timeString - Formatted time string
 */
function updateTimerDisplay(timeString) {
  const timerElement = document.getElementById('timer-display');
  if (timerElement) {
    timerElement.textContent = timeString;
  }
}
