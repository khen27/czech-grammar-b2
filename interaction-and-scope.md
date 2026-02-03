Interactive Behavior Specification - Czech Genitive Worksheet
Current Implementation vs. Intended Behavior
I'll describe both the current static implementation and the intended interactive behavior for full conversion to a dynamic web application.

🎯 Study Plan Selection Behavior
Current Implementation (Static)
The study plan buttons are purely visual/cosmetic right now:

Clicking them applies a visual "selected" state (border highlight, glow effect)
No content filtering or hiding occurs
All exercises remain visible regardless of selection
It's a UI mockup of the intended functionality
Intended Behavior (Dynamic)
When a user selects a study plan, it should filter and show a subset of exercises based on:

Quick Review (10 min)
{
  duration: "10 minutes",
  exerciseCount: "~30 exercises",
  sectionsShown: ["A", "B", "D"],
  subsectionsFilter: "Original (1–10) only",
  difficulty: "Basic",
  description: "Core prepositions and simple quantity expressions"
}
What shows:

Part A: Translate to Czech - Original (1-20) only
Part B: Fill the Correct Preposition - Original (1-10) only
Part D: Fill the Correct Form - Original (1-20) only
Hides: Parts C, E, F, G, H, I (movement/location, phrases, translations, adjectives, pronouns)
Deep Dive (1 hour)
{
  duration: "1 hour",
  exerciseCount: "~120 exercises",
  sectionsShown: ["A", "B", "C", "D", "E", "F", "G"],
  subsectionsFilter: "Both Original + Tricky",
  difficulty: "Comprehensive",
  description: "All sections except advanced pronouns"
}
What shows:

Parts A-G: All subsections (Original + Tricky)
Hides: Part H (adjectives), Part I (pronouns)
Complete Practice (2+ hours)
{
  duration: "2+ hours",
  exerciseCount: "248 exercises",
  sectionsShown: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
  subsectionsFilter: "All",
  difficulty: "Complete mastery",
  description: "Every single exercise including pronouns and adjective agreement"
}
What shows:

Everything - all 9 parts, all subsections, all 248 exercises
Focused Practice (Custom)
{
  duration: "Flexible",
  exerciseCount: "Variable",
  sectionsShown: "User selects",
  subsectionsFilter: "User chooses",
  difficulty: "Targeted",
  description: "User picks specific weak areas (e.g., only Part D + Part I)"
}
What shows:

Modal/dropdown appears asking "Which sections do you want to practice?"
User checks boxes for Parts A-I
Only selected sections appear
🎓 Level Selection Behavior
Current Implementation (Static)
Level badges (A1, A2, B1, B2, C1) are decorative indicators only:

They show visual selection state
No content filtering occurs
All exercises remain visible
Intended Behavior (Dynamic)
Level selection should adjust difficulty and filter exercises:

A1 (Beginner)
{
  sectionsShown: ["A", "B"],
  subsectionsFilter: "Original (1-10) only",
  exercisesShown: ["a1-a10", "b1-b5"],
  totalExercises: "~15 exercises",
  complexity: "Basic prepositions only",
  vocabulary: "Common words (práce, doktor, káva, město)"
}
Shown:

Part A: #1-10 (without sugar, from Prague, to work)
Part B: #1-5 (basic preposition fills)
Hidden: Everything else
Hints:

More detailed hints appear
English translations show for all Czech words
A2 (Elementary)
{
  sectionsShown: ["A", "B", "C", "D"],
  subsectionsFilter: "Original sections only",
  exercisesShown: "Original (1-20) from parts A-D",
  totalExercises: "~60 exercises",
  complexity: "Basic prepositions + quantity",
  vocabulary: "Everyday vocabulary"
}
Shown:

Parts A-D: Original subsections
Hidden: Parts E-I, all "Tricky" subsections
B1 (Intermediate)
{
  sectionsShown: ["A", "B", "C", "D", "E", "F"],
  subsectionsFilter: "Original + some Tricky",
  exercisesShown: "All Original, Tricky 21-30",
  totalExercises: "~100 exercises",
  complexity: "Full prepositions + phrases + basic sentences",
  vocabulary: "Expanded vocabulary"
}
Shown:

Parts A-F: All Original + first half of Tricky
Hidden: Parts G-I, second half of Tricky subsections
B2 (Upper-Intermediate)
{
  sectionsShown: ["A", "B", "C", "D", "E", "F", "G", "H"],
  subsectionsFilter: "All Original + Tricky",
  exercisesShown: "All except Part I (pronouns)",
  totalExercises: "~200 exercises",
  complexity: "Full grammar + adjectives",
  vocabulary: "Advanced vocabulary"
}
Shown:

Parts A-H: Everything
Hidden: Part I (Pronouns - most advanced)
C1 (Advanced)
{
  sectionsShown: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
  subsectionsFilter: "All",
  exercisesShown: "All 248 exercises",
  totalExercises: "248 exercises",
  complexity: "Complete mastery including pronouns",
  vocabulary: "Full vocabulary range"
}
Shown:

Everything - all 248 exercises including pronouns
🚀 "Start My Study" Button Behavior
Current Implementation (Static)
Button is visible but does nothing (or scrolls to exercises).

Intended Behavior (Dynamic)
When clicked:

// 1. Collect user selections
const studySession = {
  plan: selectedPlan,        // e.g., "Deep Dive (1 hour)"
  level: selectedLevel,      // e.g., "B2"
  startTime: new Date(),
  exercises: filteredExercises // Based on plan + level
};

// 2. Visual changes
// - Hero section collapses/minimizes to sticky header
// - Study plan info shows in compact header
// - Timer starts (for timed plans)
// - Progress bar appears: "12 / 120 exercises completed"

// 3. Scroll behavior
window.scrollTo({
  top: document.querySelector('.practice-worksheet').offsetTop - 100,
  behavior: 'smooth'
});

// 4. Enable answer tracking
enableAnswerTracking(studySession);

// 5. Show controls
showControls(['Save Progress', 'Review Answers', 'Reset All']);
Visual Changes After "Start My Study":
Before Click:
┌─────────────────────────────────────┐
│  CZECH GENITIVE PRACTICE            │
│  [Study Plan Buttons]               │
│  [Level Badges]                     │
│  [Start My Study] ← Large button    │
└─────────────────────────────────────┘
After Click:
┌─────────────────────────────────────┐ (Sticky Header)
│ 🎯 Deep Dive | B2 | ⏱️ 42:18 | 34/120 ✓ │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  📝 Part A: Translate to Czech      │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  1) without sugar: [bez cukru    ]✓ │
│  2) without salt:  [____________ ]  │
│  ...                                │
└─────────────────────────────────────┘

[Save Progress] [Review Answers] [Reset]
🔍 "Review My Answers" Button Behavior
Current Implementation (Static)
Button doesn't exist or does nothing.

Intended Behavior (Dynamic)
When clicked:

// 1. Calculate results
const results = {
  total: 120,
  answered: 87,
  correct: 73,
  incorrect: 14,
  unanswered: 33,
  accuracy: 83.9%, // correct / answered
  completion: 72.5%, // answered / total
  timeSpent: "42 minutes 18 seconds"
};

// 2. Visual feedback on each exercise
applyAnswerFeedback(results);

// 3. Show results modal/section
showResultsModal(results);

// 4. Generate report
generateStudyReport(results);
Visual Feedback Applied:
Correct Answer:
.exercise-item.correct {
  background: rgba(75, 236, 155, 0.1);
  border: 1px solid rgba(75, 236, 155, 0.3);
}

.exercise-item.correct input {
  border-color: #4BEC9B;
  background: rgba(75, 236, 155, 0.05);
}

/* Checkmark icon appears */
.exercise-item.correct::after {
  content: "✓";
  color: #4BEC9B;
}
Incorrect Answer:
.exercise-item.incorrect {
  background: rgba(236, 75, 91, 0.1);
  border: 1px solid rgba(236, 75, 91, 0.3);
}

.exercise-item.incorrect input {
  border-color: #EC4B5B;
  background: rgba(236, 75, 91, 0.05);
}

/* Show correct answer below */
.exercise-item.incorrect::after {
  content: "✗ Correct: [correct answer]";
  color: #EC4B5B;
}
Unanswered:
.exercise-item.unanswered {
  background: rgba(236, 191, 75, 0.05);
  border: 1px solid rgba(236, 191, 75, 0.2);
}
Results Modal:
┌────────────────────────────────────────┐
│  📊 Study Session Results              │
│                                        │
│  🎯 Study Plan: Deep Dive (1 hour)    │
│  📚 Level: B2                          │
│  ⏱️  Time: 42 minutes 18 seconds       │
│                                        │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│                                        │
│  ✅ Correct:     73 (83.9%)           │
│  ❌ Incorrect:   14 (16.1%)           │
│  ⚪ Unanswered:  33 (27.5%)           │
│                                        │
│  📈 Overall: 73/120 (60.8%)           │
│                                        │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│                                        │
│  💪 Strengths:                         │
│  • Part A: Prepositions (95%)         │
│  • Part D: Quantities (88%)           │
│                                        │
│  📚 Areas to Review:                   │
│  • Part F: Translations (62%)         │
│  • Part G: Complex verbs (58%)        │
│                                        │
│  [Review Incorrect] [Start New] [Close]│
└────────────────────────────────────────┘
Per-Section Breakdown:
Part A: Translate to Czech
━━━━━━━━━━━━━━━━━━━━━ 95% (19/20)

Part B: Fill the Correct Preposition  
━━━━━━━━━━━━━━━━━━━━━ 85% (17/20)

Part C: Movement or Location?
━━━━━━━━━━━━━━━━━━━━━ 80% (16/20)

Part D: Fill the Correct Form
━━━━━━━━━━━━━━━━━━━━━ 88% (35/40)

Part F: Translate to Czech
━━━━━━━━━━━━━━━━━━━━━ 62% (12/20) ⚠️

Part G: Translate to Czech
━━━━━━━━━━━━━━━━━━━━━ 58% (11/20) ⚠️
📊 Interaction Between Study Plan + Level
Combined Filtering Logic
function getExercises(plan, level) {
  // 1. Get exercises based on plan
  let exercises = filterByPlan(plan);
  
  // 2. Further filter by level
  exercises = filterByLevel(exercises, level);
  
  // 3. Return final set
  return exercises;
}

// Example combinations:
Example Combinations:
Quick Review (10 min) + A1
Result: ~10 exercises
Parts shown: A (1-10 only)
Sections: Basic prepositions only
Total time: 5-10 minutes realistically
Quick Review (10 min) + C1
Result: ~30 exercises
Parts shown: A (1-20), B (1-10), D (1-20)
Sections: Same sections but harder vocabulary
Total time: 8-12 minutes
Deep Dive (1 hr) + A2
Result: ~60 exercises
Parts shown: A-D (Original only)
Sections: Prepositions, quantities, basic
Total time: 45-60 minutes
Deep Dive (1 hr) + B2
Result: ~120 exercises
Parts shown: A-G (Original + Tricky)
Sections: Everything except pronouns
Total time: 60-90 minutes
Complete Practice + C1
Result: All 248 exercises
Parts shown: A-I (Everything)
Sections: Full mastery test
Total time: 2-3 hours
🎨 Visual States Summary
Study Plan Buttons
/* Unselected */
.plan-button {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
}

/* Hovered */
.plan-button:hover {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
}

/* Selected */
.plan-button.selected {
  background: linear-gradient(135deg, #415BD2 0%, #944BEC 100%);
  border: 1px solid rgba(148, 75, 236, 0.5);
  color: #FFFFFF;
  box-shadow: 0 0 20px rgba(148, 75, 236, 0.3);
}
Level Badges
/* Unselected */
.level-badge {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.6);
  padding: 8px 20px;
  border-radius: 9999px;
}

/* Hovered */
.level-badge:hover {
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.85);
  transform: scale(1.05);
}

/* Selected */
.level-badge.selected {
  background: rgba(148, 75, 236, 0.2);
  border: 2px solid #944BEC;
  color: #B985FF;
  font-weight: 600;
  box-shadow: 0 0 12px rgba(148, 75, 236, 0.2);
}
📱 Complete User Flow
1. User arrives at page
   ↓
2. Sees hero section with study plans + levels
   ↓
3. Clicks "Deep Dive (1 hour)" → Button highlights
   ↓
4. Clicks "B2" badge → Badge highlights
   ↓
5. Clicks "Start My Study" →
   - Hero collapses to sticky header
   - Shows: "🎯 Deep Dive | B2 | ⏱️ 0:00 | 0/120"
   - Scrolls to exercises
   - Shows Parts A-H (filtered)
   - Hides Part I (pronouns - too advanced for plan)
   ↓
6. User fills in answers →
   - Auto-saves after each answer
   - Progress updates: "34/120"
   - Timer runs: "⏱️ 18:42"
   ↓
7. User clicks "Review My Answers" →
   - Each exercise gets ✓ or ✗
   - Shows correct answers for mistakes
   - Results modal appears
   - Shows accuracy: "73/87 answered (83.9%)"
   ↓
8. User can:
   - Review incorrect answers
   - Start new session
   - Export results
   - Continue practicing
🔧 Data Structure for Tracking
const studySession = {
  sessionId: "uuid-1234",
  timestamp: "2025-02-03T14:30:00Z",
  plan: "deep-dive",
  level: "B2",
  duration: 3600, // seconds
  
  exercises: [
    {
      id: "a1",
      part: "A",
      number: 1,
      prompt: "without sugar",
      correctAnswer: "bez cukru",
      userAnswer: "bez cukru",
      isCorrect: true,
      timeSpent: 8, // seconds
      timestamp: "2025-02-03T14:30:15Z"
    },
    {
      id: "a2",
      part: "A",
      number: 2,
      prompt: "without salt",
      correctAnswer: "bez soli",
      userAnswer: "bez solí", // wrong
      isCorrect: false,
      timeSpent: 12,
      timestamp: "2025-02-03T14:30:27Z"
    },
    // ... more exercises
  ],
  
  results: {
    totalExercises: 120,
    answered: 87,
    correct: 73,
    incorrect: 14,
    unanswered: 33,
    accuracy: 0.839,
    completion: 0.725,
    totalTime: 2538 // seconds
  }
};
Summary:

Study plans = Filter which sections/subsections show (Quick = fewer, Complete = all)
Levels = Further filter by difficulty (A1 = basics only, C1 = everything)
Combined = Intersection of both filters
Start button = Begins tracking, starts timer, scrolls to exercises
Review button = Checks answers, shows results, highlights correct/incorrect
The current implementation is static; this describes the full dynamic behavior needed for conversion! 🚀