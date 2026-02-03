/**
 * Configuration and Constants
 */

const CONFIG = {
  // Study plan definitions
  STUDY_PLANS: {
    'quick-10-min': {
      id: 'quick-10-min',
      name: 'Quick 10 min',
      icon: 'zap',
      parts: ['A', 'B', 'D'],
      subsections: 'original', // Only "Original" subsections
      estimatedCount: 50,
      description: 'Core prepositions and simple quantity expressions'
    },
    'medium-30-min': {
      id: 'medium-30-min',
      name: 'Medium 30 min',
      icon: 'book-open',
      parts: ['A', 'B', 'C', 'D', 'E'],
      subsections: 'all', // Both Original and Tricky
      estimatedCount: 100,
      description: 'Comprehensive prepositions and phrases'
    },
    'deep-dive-1hr': {
      id: 'deep-dive-1hr',
      name: 'Deep dive 1hr',
      icon: 'brain',
      parts: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      subsections: 'all',
      estimatedCount: 160,
      description: 'Full grammar coverage except pronouns'
    },
    'test-1.5hr': {
      id: 'test-1.5hr',
      name: 'Test 1.5 hr',
      icon: 'check-circle',
      parts: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
      subsections: 'all',
      estimatedCount: 248,
      description: 'Complete mastery test - all 248 exercises'
    }
  },

  // Level definitions with filtering rules
  LEVELS: {
    'A1': {
      id: 'A1',
      name: 'A1',
      color: 'blue',
      maxExercisesPerSubsection: 10,
      description: 'Beginner - Basic prepositions only'
    },
    'A2': {
      id: 'A2',
      name: 'A2',
      color: 'purple',
      maxExercisesPerSubsection: 15,
      description: 'Elementary - Everyday vocabulary'
    },
    'B1': {
      id: 'B1',
      name: 'B1',
      color: 'pink',
      maxExercisesPerSubsection: 20,
      description: 'Intermediate - Expanded coverage'
    },
    'B2': {
      id: 'B2',
      name: 'B2',
      color: 'cyan',
      maxExercisesPerSubsection: null, // No limit
      description: 'Upper-Intermediate - Full coverage'
    },
    'C1': {
      id: 'C1',
      name: 'C1',
      color: 'yellow',
      maxExercisesPerSubsection: null, // No limit
      description: 'Advanced - Complete mastery'
    }
  },

  // Default selections
  DEFAULTS: {
    plan: 'deep-dive-1hr',
    level: 'B2'
  },

  // Auto-save debounce delay (ms)
  AUTOSAVE_DELAY: 500,

  // localStorage keys
  STORAGE_KEYS: {
    session: 'czech-genitive-session',
    answers: 'czech-genitive-answers',
    settings: 'czech-genitive-settings'
  },

  // Part icons mapping
  PART_ICONS: {
    'A': 'languages',
    'B': 'route',
    'C': 'shuffle',
    'D': 'calculator',
    'E': 'package',
    'F': 'message-square',
    'G': 'message-square',
    'H': 'users',
    'I': 'sticky-note'
  }
};

// Freeze config to prevent accidental modification
Object.freeze(CONFIG);
Object.freeze(CONFIG.STUDY_PLANS);
Object.freeze(CONFIG.LEVELS);
Object.freeze(CONFIG.DEFAULTS);
Object.freeze(CONFIG.STORAGE_KEYS);
Object.freeze(CONFIG.PART_ICONS);
