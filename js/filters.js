/**
 * Study Plan and Level Filtering Logic
 */

/**
 * Check if a subsection is "Original" (not "Tricky")
 * @param {string} title - Subsection title
 * @returns {boolean}
 */
function isOriginalSubsection(title) {
  return title.toLowerCase().includes('original') || 
         !title.toLowerCase().includes('tricky');
}

/**
 * Filter parts based on study plan
 * @param {Array} parts - All parts
 * @param {Object} plan - Study plan config
 * @returns {Array} Filtered parts
 */
function filterByPlan(parts, plan) {
  if (!plan) return parts;
  
  // Filter to only include specified parts
  let filteredParts = parts.filter(part => plan.parts.includes(part.id));
  
  // If plan specifies 'original' subsections only, filter those
  if (plan.subsections === 'original') {
    filteredParts = filteredParts.map(part => ({
      ...part,
      subsections: part.subsections.filter(sub => isOriginalSubsection(sub.title))
    }));
  }
  
  return filteredParts;
}

/**
 * Filter exercises based on level
 * @param {Array} parts - Parts to filter
 * @param {Object} level - Level config
 * @returns {Array} Filtered parts with limited exercises
 */
function filterByLevel(parts, level) {
  if (!level || level.maxExercisesPerSubsection === null) {
    return parts;
  }
  
  const maxExercises = level.maxExercisesPerSubsection;
  
  return parts.map(part => ({
    ...part,
    subsections: part.subsections.map(sub => ({
      ...sub,
      exercises: sub.exercises.slice(0, maxExercises)
    }))
  }));
}

/**
 * Apply all filters (plan + level) and return filtered parts
 * @param {string} planId - Study plan ID
 * @param {string} levelId - Level ID
 * @returns {Array} Filtered parts
 */
function applyFilters(planId, levelId) {
  const allParts = getAllParts();
  const plan = CONFIG.STUDY_PLANS[planId];
  const level = CONFIG.LEVELS[levelId];
  
  let filtered = filterByPlan(allParts, plan);
  filtered = filterByLevel(filtered, level);
  
  return filtered;
}

/**
 * Get visible exercise IDs based on current filters
 * @param {string} planId - Study plan ID
 * @param {string} levelId - Level ID
 * @returns {Array<string>} Array of visible exercise IDs
 */
function getVisibleExerciseIds(planId, levelId) {
  const filteredParts = applyFilters(planId, levelId);
  const ids = [];
  
  for (const part of filteredParts) {
    for (const subsection of part.subsections) {
      for (const exercise of subsection.exercises) {
        ids.push(exercise.id);
      }
    }
  }
  
  return ids;
}

/**
 * Count exercises after applying filters
 * @param {string} planId - Study plan ID
 * @param {string} levelId - Level ID
 * @returns {number} Count of visible exercises
 */
function countFilteredExercises(planId, levelId) {
  return getVisibleExerciseIds(planId, levelId).length;
}

/**
 * Check if a part should be visible based on current plan
 * @param {string} partId - Part ID
 * @param {string} planId - Study plan ID
 * @returns {boolean}
 */
function isPartVisible(partId, planId) {
  const plan = CONFIG.STUDY_PLANS[planId];
  if (!plan) return true;
  return plan.parts.includes(partId);
}

/**
 * Check if a subsection should be visible based on current plan
 * @param {string} subsectionTitle - Subsection title
 * @param {string} planId - Study plan ID
 * @returns {boolean}
 */
function isSubsectionVisible(subsectionTitle, planId) {
  const plan = CONFIG.STUDY_PLANS[planId];
  if (!plan) return true;
  if (plan.subsections === 'all') return true;
  return isOriginalSubsection(subsectionTitle);
}
