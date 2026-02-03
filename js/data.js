/**
 * Exercise Data Management
 */

let exerciseData = null;

/**
 * Load exercises from JSON file
 * @returns {Promise<Object>} Exercise data
 */
async function loadExercises() {
  try {
    const response = await fetch('data/exercises.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    exerciseData = await response.json();
    console.log(`Loaded ${exerciseData.metadata.totalExercises} exercises`);
    return exerciseData;
  } catch (error) {
    console.error('Failed to load exercises:', error);
    throw error;
  }
}

/**
 * Get all exercise data
 * @returns {Object|null} Full exercise data
 */
function getExerciseData() {
  return exerciseData;
}

/**
 * Get all parts
 * @returns {Array} Array of parts
 */
function getAllParts() {
  return exerciseData?.parts || [];
}

/**
 * Get a specific part by ID
 * @param {string} partId - Part ID (e.g., 'A', 'B')
 * @returns {Object|undefined} Part object
 */
function getPartById(partId) {
  return exerciseData?.parts.find(part => part.id === partId);
}

/**
 * Get a specific exercise by ID
 * @param {string} exerciseId - Exercise ID (e.g., 'a1', 'b15')
 * @returns {Object|undefined} Exercise object
 */
function getExerciseById(exerciseId) {
  if (!exerciseData) return undefined;
  
  for (const part of exerciseData.parts) {
    for (const subsection of part.subsections) {
      const exercise = subsection.exercises.find(ex => ex.id === exerciseId);
      if (exercise) {
        return { ...exercise, partId: part.id, subsectionTitle: subsection.title };
      }
    }
  }
  return undefined;
}

/**
 * Get all exercise IDs
 * @returns {Array<string>} Array of exercise IDs
 */
function getAllExerciseIds() {
  const ids = [];
  if (!exerciseData) return ids;
  
  for (const part of exerciseData.parts) {
    for (const subsection of part.subsections) {
      for (const exercise of subsection.exercises) {
        ids.push(exercise.id);
      }
    }
  }
  return ids;
}

/**
 * Count total exercises
 * @returns {number} Total number of exercises
 */
function countExercises() {
  return exerciseData?.metadata.totalExercises || 0;
}

/**
 * Get exercises count by part
 * @param {string} partId - Part ID
 * @returns {number} Number of exercises in part
 */
function countExercisesInPart(partId) {
  const part = getPartById(partId);
  if (!part) return 0;
  
  return part.subsections.reduce((total, sub) => total + sub.exercises.length, 0);
}
