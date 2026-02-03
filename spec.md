Czech Genitive Learning Platform - Plain HTML/CSS/JS Specification
1. Project Overview
Name: Czech Genitive Master
Type: Static Educational Website
Purpose: Interactive study guide and practice worksheet for mastering Czech genitive case (2. pád)
Target Users: B2-level Czech language learners
Tech Stack: Plain HTML5 + CSS3 + Vanilla JavaScript

2. Technical Stack
- HTML5 (semantic markup)
- CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript (ES6+)
- Lucide Icons (CDN)
- Google Fonts (Clash Grotesk)
No Build Tools Required
Direct browser loading
No compilation needed
No package managers
Easy to host anywhere
3. Project Structure
czech-genitive/
├── index.html                  # Main entry point
├── css/
│   ├── reset.css              # CSS reset/normalize
│   ├── variables.css          # CSS custom properties
│   ├── typography.css         # Font styles
│   ├── layout.css             # Page layout
│   ├── components.css         # Reusable components
│   ├── study-guide.css        # Study guide styles
│   ├── worksheet.css          # Practice worksheet styles
│   ├── print.css              # Print-specific styles
│   └── responsive.css         # Media queries
├── js/
│   ├── main.js                # Main application logic
│   ├── notes.js               # Note-taking functionality
│   └── print.js               # Print utilities
├── images/                     # Optional images/graphics
├── fonts/                      # Optional local fonts
└── README.md                   # Documentation
4. HTML Structure
4.1 index.html - Complete Structure
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Comprehensive Czech genitive case study guide and practice worksheet for B2 learners. Master the 2nd case with 250+ exercises.">
  <meta name="keywords" content="Czech, genitive case, 2. pád, Czech grammar, B2 Czech, language learning">
  <title>Czech Genitive Master - B2 Practice Worksheet & Study Guide</title>
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Clash+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- CSS Files -->
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/typography.css">
  <link rel="stylesheet" href="css/layout.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/study-guide.css">
  <link rel="stylesheet" href="css/worksheet.css">
  <link rel="stylesheet" href="css/print.css" media="print">
  <link rel="stylesheet" href="css/responsive.css">
  
  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>
</head>

<body>
  <!-- Main Wrapper -->
  <div class="wrapper">
    
    <!-- Background Decoration -->
    <div class="background-decoration">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
    </div>
    
    <!-- Study Guide Section -->
    <section id="study-guide" class="study-guide">
      <!-- Study guide content here -->
    </section>
    
    <!-- Practice Worksheet Section -->
    <section id="practice-worksheet" class="practice-worksheet">
      
      <!-- Hero Header -->
      <header class="hero">
        <h1 class="hero-title">Czech B2</h1>
        <h2 class="hero-subtitle">Genitive Practice Worksheet</h2>
        <div class="hero-accent"></div>
      </header>
      
      <!-- Part A: Translate to Czech -->
      <article class="section-card" id="part-a">
        <header class="section-header">
          <span class="section-number">A</span>
          <div class="section-header-content">
            <i data-lucide="languages" class="section-icon"></i>
            <h2>Translate to Czech</h2>
          </div>
        </header>
        
        <div class="subsection">
          <h3 class="subsection-title">Original (1–20)</h3>
          <div class="exercise-grid grid-2col">
            <!-- Exercise items -->
            <div class="exercise-item">
              <label for="a1">
                <span class="exercise-number">1)</span>
                without sugar
              </label>
              <input type="text" id="a1" class="exercise-input">
            </div>
            <!-- Repeat for all exercises -->
          </div>
        </div>
        
        <div class="subsection">
          <h3 class="subsection-title">Tricky (21–40)</h3>
          <div class="exercise-grid grid-2col">
            <!-- More exercises -->
          </div>
        </div>
      </article>
      
      <!-- Part B through I follow same structure -->
      <!-- ... -->
      
      <!-- Footer -->
      <footer class="worksheet-footer">
        <div class="footer-accent"></div>
        <p>Czech B2 Grammar Review — Genitive Case Practice</p>
        <p class="powered-by">Powered by AppBlitz</p>
      </footer>
      
    </section>
    
  </div>
  
  <!-- JavaScript -->
  <script src="js/notes.js"></script>
  <script src="js/print.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
5. CSS Architecture
5.1 reset.css
/* Modern CSS Reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  line-height: 1.5;
  font-family: system-ui, -apple-system, sans-serif;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

ul, ol {
  list-style: none;
}

button {
  cursor: pointer;
  border: none;
  background: none;
}
5.2 variables.css
:root {
  /* Color System */
  --color-white: #ffffff;
  --color-black: #000000;
  
  /* Primary Colors */
  --color-blue: #415BD2;
  --color-purple: #944BEC;
  --color-cyan: #4BBFEC;
  --color-pink: #EC4B9B;
  --color-yellow: #ECB94B;
  
  /* Background Colors */
  --bg-primary: #1a1a2e;
  --bg-secondary: #16213e;
  --bg-card: rgba(255, 255, 255, 0.03);
  --bg-card-hover: rgba(255, 255, 255, 0.05);
  
  /* Glassmorphism */
  --glass-bg: rgba(255, 255, 255, 0.05);
  --glass-border: rgba(255, 255, 255, 0.1);
  
  /* Text Colors */
  --text-primary: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.85);
  --text-muted: rgba(255, 255, 255, 0.6);
  --text-hint: rgba(255, 255, 255, 0.4);
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #415BD2 0%, #944BEC 100%);
  --gradient-secondary: linear-gradient(135deg, #4BBFEC 0%, #944BEC 100%);
  --gradient-accent: linear-gradient(135deg, #EC4B9B 0%, #EC5B7B 100%);
  --gradient-bg: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  
  /* Spacing Scale (4px base) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  
  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-full: 9999px;
  
  /* Typography */
  --font-family: 'Clash Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  
  /* Font Sizes */
  --text-xs: 12px;
  --text-sm: 13px;
  --text-base: 14px;
  --text-md: 15px;
  --text-lg: 16px;
  --text-xl: 18px;
  --text-2xl: 22px;
  --text-3xl: 28px;
  --text-4xl: 42px;
  --text-5xl: 56px;
  --text-6xl: 72px;
  
  /* Font Weights */
  --weight-normal: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;
  
  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.15);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.2);
  --shadow-glow: 0 0 20px rgba(148, 75, 236, 0.3);
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;
  
  /* Z-index Scale */
  --z-base: 1;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-modal: 300;
  --z-tooltip: 400;
}
5.3 typography.css
body {
  font-family: var(--font-family);
  font-size: var(--text-base);
  font-weight: var(--weight-normal);
  color: var(--text-primary);
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: var(--weight-bold);
  line-height: 1.2;
  margin-bottom: var(--space-4);
}

h1 { font-size: var(--text-6xl); }
h2 { font-size: var(--text-3xl); }
h3 { font-size: var(--text-2xl); }
h4 { font-size: var(--text-xl); }
h5 { font-size: var(--text-lg); }
h6 { font-size: var(--text-base); }

p {
  margin-bottom: var(--space-4);
}

strong {
  font-weight: var(--weight-semibold);
}

.text-gradient {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-muted {
  color: var(--text-muted);
}

.text-hint {
  color: var(--text-hint);
  font-size: var(--text-sm);
}
5.4 layout.css
html {
  scroll-behavior: smooth;
}

body {
  background: var(--gradient-bg);
  min-height: 100vh;
  overflow-x: hidden;
}

.wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
}

/* Background Decoration */
.background-decoration {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  animation: float 20s ease-in-out infinite;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: var(--gradient-primary);
  top: -200px;
  right: -200px;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: var(--gradient-secondary);
  bottom: -150px;
  left: -150px;
  animation-delay: -7s;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: var(--gradient-accent);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: -14s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.1); }
  66% { transform: translate(-30px, 30px) scale(0.9); }
}

/* Main Content Container */
.study-guide,
.practice-worksheet {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-10) var(--space-6);
}

@media (max-width: 768px) {
  .study-guide,
  .practice-worksheet {
    padding: var(--space-8) var(--space-4);
  }
}
5.5 components.css
/* Card Component */
.card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  backdrop-filter: blur(10px);
  transition: all var(--transition-base);
}

.card:hover {
  background: var(--bg-card-hover);
  box-shadow: var(--shadow-md);
}

/* Section Card */
.section-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  padding: var(--space-10);
  margin-bottom: var(--space-10);
  backdrop-filter: blur(10px);
}

/* Section Header */
.section-header {
  display: flex;
  align-items: center;
  gap: var(--space-5);
  margin-bottom: var(--space-8);
  padding-bottom: var(--space-5);
  border-bottom: 1px solid var(--glass-border);
}

.section-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: var(--gradient-primary);
  border-radius: var(--radius-md);
  font-size: var(--text-3xl);
  font-weight: var(--weight-bold);
  color: var(--color-white);
  flex-shrink: 0;
}

.section-header-content {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex: 1;
}

.section-icon {
  width: 24px;
  height: 24px;
  color: var(--text-muted);
  flex-shrink: 0;
}

.section-header h2 {
  margin: 0;
  color: var(--text-primary);
  font-size: var(--text-3xl);
}

/* Section Hint */
.section-hint {
  padding: var(--space-4) var(--space-5);
  background: rgba(75, 191, 236, 0.1);
  border: 1px solid rgba(75, 191, 236, 0.3);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-6);
  color: var(--text-secondary);
  font-size: var(--text-base);
}

/* Subsection */
.subsection {
  margin-bottom: var(--space-10);
}

.subsection:last-child {
  margin-bottom: 0;
}

.subsection-title {
  font-size: var(--text-xl);
  font-weight: var(--weight-semibold);
  color: var(--text-secondary);
  margin-bottom: var(--space-6);
  padding-left: var(--space-4);
  border-left: 3px solid var(--color-purple);
}

/* Exercise Grid Layouts */
.exercise-grid {
  display: grid;
  gap: var(--space-4);
}

.grid-1col {
  grid-template-columns: 1fr;
}

.grid-2col {
  grid-template-columns: repeat(2, 1fr);
}

.grid-3col {
  grid-template-columns: repeat(3, 1fr);
}

/* Exercise Item */
.exercise-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.exercise-item:hover {
  background: rgba(0, 0, 0, 0.3);
  border-color: rgba(148, 75, 236, 0.3);
}

.exercise-item label {
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--text-secondary);
  font-size: var(--text-base);
  cursor: pointer;
}

.exercise-number {
  color: var(--text-hint);
  font-size: var(--text-sm);
  min-width: 32px;
}

/* Input Styles */
.exercise-input {
  flex: 1;
  min-width: 200px;
  padding: var(--space-2) var(--space-3);
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-sm);
  color: var(--text-primary);
  font-size: var(--text-base);
  transition: all var(--transition-base);
}

.exercise-input:focus {
  outline: none;
  background: rgba(148, 75, 236, 0.1);
  border-color: var(--color-purple);
  box-shadow: 0 0 0 3px rgba(148, 75, 236, 0.2);
}

.exercise-input::placeholder {
  color: var(--text-hint);
}

/* Small Input Variant */
.exercise-input.small {
  min-width: 120px;
  max-width: 150px;
}

/* Inline Input Variant */
.exercise-input.inline {
  min-width: 80px;
  max-width: 100px;
  padding: var(--space-1) var(--space-2);
}

/* Button Styles */
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  background: var(--gradient-primary);
  color: var(--color-white);
  border-radius: var(--radius-md);
  font-weight: var(--weight-semibold);
  transition: all var(--transition-base);
  cursor: pointer;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}

/* Badge */
.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
}

.badge.masculine {
  background: rgba(65, 91, 210, 0.2);
  border: 1px solid rgba(65, 91, 210, 0.4);
  color: #7B9EFF;
}

.badge.feminine {
  background: rgba(236, 75, 148, 0.2);
  border: 1px solid rgba(236, 75, 148, 0.4);
  color: #FF8BB8;
}

.badge.neuter {
  background: rgba(75, 191, 236, 0.2);
  border: 1px solid rgba(75, 191, 236, 0.4);
  color: #7FD9FF;
}
5.6 worksheet.css
/* Hero Section */
.hero {
  text-align: center;
  padding: var(--space-20) var(--space-6);
  margin-bottom: var(--space-12);
  position: relative;
}

.hero-title {
  font-size: var(--text-6xl);
  font-weight: var(--weight-bold);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--space-4);
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: var(--text-3xl);
  font-weight: var(--weight-medium);
  color: var(--text-secondary);
  margin-bottom: var(--space-6);
}

.hero-accent {
  width: 120px;
  height: 4px;
  background: var(--gradient-accent);
  margin: 0 auto;
  border-radius: var(--radius-full);
}

/* Footer */
.worksheet-footer {
  text-align: center;
  margin-top: var(--space-20);
  padding-top: var(--space-10);
  border-top: 1px solid var(--glass-border);
}

.footer-accent {
  width: 80px;
  height: 3px;
  background: var(--gradient-primary);
  margin: 0 auto var(--space-6);
  border-radius: var(--radius-full);
}

.worksheet-footer p {
  font-size: var(--text-base);
  color: var(--text-hint);
  margin-bottom: var(--space-2);
}

.powered-by {
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.3);
}
5.7 study-guide.css
/* Study Guide Hero */
.study-guide-hero {
  text-align: center;
  padding: var(--space-16) var(--space-6);
  margin-bottom: var(--space-12);
}

.study-guide-hero h1 {
  font-size: var(--text-5xl);
  background: var(--gradient-secondary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--space-3);
}

.study-guide-hero p {
  font-size: var(--text-xl);
  color: var(--text-muted);
}

/* Guide Card */
.guide-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  padding: var(--space-10);
  margin-bottom: var(--space-10);
  backdrop-filter: blur(10px);
}

.guide-header {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
  padding-bottom: var(--space-6);
  border-bottom: 2px solid var(--glass-border);
}

.guide-header svg {
  width: 32px;
  height: 32px;
  color: var(--color-purple);
}

.guide-header h2 {
  font-size: var(--text-3xl);
  color: var(--text-primary);
  margin: 0;
}

/* Trigger Section */
.trigger-section {
  margin-bottom: var(--space-10);
}

.trigger-title {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-2xl);
  font-weight: var(--weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--space-5);
}

.trigger-title svg {
  width: 24px;
  height: 24px;
  color: var(--color-cyan);
}

.trigger-desc {
  font-size: var(--text-md);
  color: var(--text-muted);
  margin-bottom: var(--space-6);
  line-height: 1.7;
}

/* Examples */
.examples-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-bottom: var(--space-6);
}

.mini-example {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-4) var(--space-5);
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  flex: 1;
  min-width: 200px;
}

.mini-example strong {
  font-size: var(--text-lg);
  color: var(--text-primary);
}

.mini-example span {
  font-size: var(--text-sm);
  color: var(--text-muted);
}

/* Callout Boxes */
.exam-tip,
.key-insight {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-5);
  border-radius: var(--radius-md);
  margin-bottom: var(--space-6);
}

.exam-tip {
  background: rgba(236, 191, 75, 0.1);
  border: 1px solid rgba(236, 191, 75, 0.3);
}

.key-insight {
  background: rgba(148, 75, 236, 0.1);
  border: 1px solid rgba(148, 75, 236, 0.3);
}

.exam-tip svg,
.key-insight svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 2px;
}

/* Tables */
.data-table {
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-bottom: var(--space-6);
}

.data-table thead {
  background: rgba(65, 91, 210, 0.2);
  border-bottom: 1px solid var(--glass-border);
}

.data-table th {
  padding: var(--space-4) var(--space-5);
  text-align: left;
  font-weight: var(--weight-semibold);
  color: var(--text-primary);
  font-size: var(--text-base);
}

.data-table td {
  padding: var(--space-3) var(--space-5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  color: var(--text-secondary);
  font-size: var(--text-base);
}

.data-table tr:last-child td {
  border-bottom: none;
}

.data-table tr:hover {
  background: rgba(255, 255, 255, 0.03);
}

/* Personal Notes */
.personal-notes {
  margin-top: var(--space-8);
  padding: var(--space-6);
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(148, 75, 236, 0.2);
  border-radius: var(--radius-md);
}

.notes-header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-3);
  color: var(--text-secondary);
  font-size: var(--text-md);
  font-weight: var(--weight-semibold);
}

.notes-header svg {
  width: 18px;
  height: 18px;
}

.personal-notes textarea {
  width: 100%;
  min-height: 100px;
  padding: var(--space-4);
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-sm);
  color: var(--text-primary);
  font-family: var(--font-family);
  font-size: var(--text-base);
  resize: vertical;
  transition: all var(--transition-base);
}

.personal-notes textarea:focus {
  outline: none;
  background: rgba(148, 75, 236, 0.1);
  border-color: var(--color-purple);
  box-shadow: 0 0 0 3px rgba(148, 75, 236, 0.2);
}

.personal-notes textarea::placeholder {
  color: var(--text-hint);
}

/* Chunks Grid */
.chunks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: var(--space-3);
  margin-bottom: var(--space-6);
}

.chunk-item {
  padding: var(--space-3) var(--space-4);
  background: linear-gradient(135deg, rgba(65, 91, 210, 0.15) 0%, rgba(148, 75, 236, 0.15) 100%);
  border: 1px solid rgba(148, 75, 236, 0.3);
  border-radius: var(--radius-sm);
  text-align: center;
  font-size: var(--text-base);
  font-weight: var(--weight-medium);
  color: var(--text-primary);
  transition: all var(--transition-base);
}

.chunk-item:hover {
  background: linear-gradient(135deg, rgba(65, 91, 210, 0.25) 0%, rgba(148, 75, 236, 0.25) 100%);
  border-color: rgba(148, 75, 236, 0.5);
  transform: translateY(-2px);
}
5.8 responsive.css
/* Tablet and Below */
@media (max-width: 1024px) {
  :root {
    --text-6xl: 56px;
    --text-5xl: 42px;
  }
  
  .grid-3col {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile */
@media (max-width: 768px) {
  :root {
    --text-6xl: 42px;
    --text-5xl: 32px;
    --text-3xl: 22px;
  }
  
  .grid-2col,
  .grid-3col {
    grid-template-columns: 1fr;
  }
  
  .section-card {
    padding: var(--space-6);
  }
  
  .section-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .hero {
    padding: var(--space-12) var(--space-4);
  }
  
  .exercise-input {
    min-width: 100%;
  }
  
  .data-table {
    display: block;
    overflow-x: auto;
  }
  
  .examples-row {
    flex-direction: column;
  }
  
  .chunks-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Small Mobile */
@media (max-width: 480px) {
  :root {
    --space-10: 32px;
    --space-12: 40px;
  }
  
  .section-number {
    width: 48px;
    height: 48px;
    font-size: var(--text-2xl);
  }
  
  .chunks-grid {
    grid-template-columns: 1fr;
  }
}
5.9 print.css
@media print {
  /* Reset backgrounds */
  body {
    background: white;
    color: black;
  }
  
  .wrapper {
    background: white;
  }
  
  .background-decoration {
    display: none;
  }
  
  /* Page setup */
  @page {
    margin: 0.75in;
    size: letter portrait;
  }
  
  /* Hide interactive elements */
  .personal-notes,
  button,
  .btn {
    display: none;
  }
  
  /* Optimize cards for print */
  .section-card,
  .guide-card {
    background: white;
    border: 1px solid #ddd;
    page-break-inside: avoid;
    box-shadow: none;
    margin-bottom: 20px;
  }
  
  /* Adjust colors */
  .section-header {
    background: #f5f5f5;
    border-bottom: 2px solid #333;
  }
  
  .section-number {
    background: #333;
    color: white;
  }
  
  .hero-title,
  .guide-header h2 {
    color: #333;
    -webkit-text-fill-color: #333;
  }
  
  /* Input fields */
  .exercise-input {
    background: white;
    border: none;
    border-bottom: 1px solid #333;
    color: black;
  }
  
  /* Text colors */
  h1, h2, h3, h4, h5, h6,
  p, span, label {
    color: black;
  }
  
  .text-hint,
  .text-muted {
    color: #666;
  }
  
  /* Tables */
  .data-table {
    border: 1px solid #333;
  }
  
  .data-table th {
    background: #f0f0f0;
    color: #333;
  }
  
  .data-table td {
    color: #333;
    border-bottom: 1px solid #ddd;
  }
  
  /* Remove transforms and transitions */
  * {
    transition: none !important;
    transform: none !important;
    animation: none !important;
  }
}
6. JavaScript Implementation
6.1 main.js
// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Initialize note saving
  initNotes();
  
  // Initialize print functionality
  initPrint();
  
  // Add smooth scrolling for internal links
  initSmoothScroll();
  
  // Save input progress to localStorage
  initProgressSaving();
  
  console.log('Czech Genitive Master initialized');
});

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Save progress to localStorage
function initProgressSaving() {
  const inputs = document.querySelectorAll('.exercise-input');
  
  // Load saved values
  inputs.forEach(input => {
    const savedValue = localStorage.getItem(input.id);
    if (savedValue) {
      input.value = savedValue;
    }
    
    // Save on change
    input.addEventListener('input', (e) => {
      localStorage.setItem(e.target.id, e.target.value);
    });
  });
}

// Clear all progress
function clearProgress() {
  if (confirm('Are you sure you want to clear all your answers?')) {
    localStorage.clear();
    document.querySelectorAll('.exercise-input').forEach(input => {
      input.value = '';
    });
    document.querySelectorAll('.personal-notes textarea').forEach(textarea => {
      textarea.value = '';
    });
  }
}

// Export progress as JSON
function exportProgress() {
  const data = {};
  document.querySelectorAll('.exercise-input').forEach(input => {
    if (input.value) {
      data[input.id] = input.value;
    }
  });
  
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: 'application/json'
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'czech-genitive-progress.json';
  a.click();
  URL.revokeObjectURL(url);
}
6.2 notes.js
// Note-taking functionality
function initNotes() {
  const textareas = document.querySelectorAll('.personal-notes textarea');
  
  textareas.forEach(textarea => {
    // Generate unique ID if not present
    if (!textarea.id) {
      textarea.id = 'note-' + Math.random().toString(36).substr(2, 9);
    }
    
    // Load saved note
    const savedNote = localStorage.getItem(textarea.id);
    if (savedNote) {
      textarea.value = savedNote;
    }
    
    // Auto-save on input with debounce
    let timeout;
    textarea.addEventListener('input', (e) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        localStorage.setItem(e.target.id, e.target.value);
      }, 500);
    });
  });
}

// Export all notes
function exportNotes() {
  const notes = {};
  document.querySelectorAll('.personal-notes textarea').forEach(textarea => {
    if (textarea.value) {
      notes[textarea.id] = textarea.value;
    }
  });
  
  const blob = new Blob([JSON.stringify(notes, null, 2)], {
    type: 'application/json'
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'czech-genitive-notes.json';
  a.click();
  URL.revokeObjectURL(url);
}
6.3 print.js
// Print functionality
function initPrint() {
  // Add print button (optional)
  const printBtn = document.createElement('button');
  printBtn.className = 'btn print-btn no-print';
  printBtn.innerHTML = '<i data-lucide="printer"></i> Print Worksheet';
  printBtn.style.position = 'fixed';
  printBtn.style.bottom = '20px';
  printBtn.style.right = '20px';
  printBtn.style.zIndex = '1000';
  printBtn.onclick = () => window.print();
  
  document.body.appendChild(printBtn);
  
  // Reinitialize icons for dynamically added button
  lucide.createIcons();
}

// Before print - collapse sections if needed
window.addEventListener('beforeprint', () => {
  console.log('Preparing for print...');
});

// After print
window.addEventListener('afterprint', () => {
  console.log('Print complete');
});
7. HTML Content Structure (Detailed)
7.1 Study Guide Section Template
<section id="study-guide" class="study-guide">
  
  <!-- Hero -->
  <div class="study-guide-hero">
    <h1>Czech Genitive Study Guide</h1>
    <p>Complete B2-Level Resource</p>
  </div>
  
  <!-- Overview Card -->
  <article class="guide-card">
    <header class="guide-header">
      <i data-lucide="book-open"></i>
      <h2>What is Genitive Case?</h2>
    </header>
    
    <div class="trigger-section">
      <p class="trigger-desc">
        The genitive case (2. pád) answers questions "koho?" (whom?) and "čeho?" (what?).
        It's used for possession, quantity, after certain prepositions, and with negation.
      </p>
      
      <div class="key-insight">
        <i data-lucide="lightbulb"></i>
        <p>Master <strong>prepositions + quantity words + numbers 5+</strong> and you cover most exam-level genitive!</p>
      </div>
    </div>
    
    <!-- Personal Notes -->
    <div class="personal-notes">
      <div class="notes-header">
        <i data-lucide="pen-line"></i>
        <span>My Notes</span>
      </div>
      <textarea id="notes-overview" placeholder="Write your own observations, memory tricks, or examples here..."></textarea>
    </div>
  </article>
  
  <!-- Prepositions Card -->
  <article class="guide-card">
    <header class="guide-header">
      <i data-lucide="map-pin"></i>
      <h2>Prepositions Requiring Genitive</h2>
    </header>
    
    <div class="trigger-section">
      <h3 class="trigger-title">
        <i data-lucide="navigation"></i>
        Common Prepositions
      </h3>
      
      <div class="examples-row">
        <div class="mini-example">
          <strong>bez</strong>
          <span>without</span>
        </div>
        <div class="mini-example">
          <strong>od</strong>
          <span>from (person/place)</span>
        </div>
        <div class="mini-example">
          <strong>z/ze</strong>
          <span>from/out of</span>
        </div>
        <div class="mini-example">
          <strong>do</strong>
          <span>to/into (movement)</span>
        </div>
        <div class="mini-example">
          <strong>u</strong>
          <span>at (someone's place)</span>
        </div>
      </div>
      
      <div class="exam-tip">
        <i data-lucide="trophy"></i>
        <span>These 5 prepositions appear in 80% of B2 exam genitive questions!</span>
      </div>
    </div>
  </article>
  
  <!-- Noun Endings Card -->
  <article class="guide-card">
    <header class="guide-header">
      <i data-lucide="package"></i>
      <h2>Noun Endings</h2>
    </header>
    
    <div class="trigger-section">
      <h3 class="trigger-title">
        <i data-lucide="users"></i>
        Masculine Animate
      </h3>
      
      <table class="data-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Nominative</th>
            <th>Genitive SG</th>
            <th>Genitive PL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hard consonant</td>
            <td>student</td>
            <td>student<strong>a</strong></td>
            <td>student<strong>ů</strong></td>
          </tr>
          <tr>
            <td>Soft consonant</td>
            <td>učitel</td>
            <td>učitel<strong>e</strong></td>
            <td>učitel<strong>ů</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
  
  <!-- Pronouns Card -->
  <article class="guide-card">
    <header class="guide-header">
      <i data-lucide="user"></i>
      <h2>Genitive Pronouns</h2>
    </header>
    
    <div class="trigger-section">
      <h3 class="trigger-title">
        <i data-lucide="users"></i>
        Personal Pronouns
      </h3>
      
      <div class="exam-tip">
        <i data-lucide="lightbulb"></i>
        <span><strong>Short vs Long Forms:</strong> Use short forms in normal sentences. Use long forms for emphasis or after prepositions.</span>
      </div>
      
      <table class="data-table">
        <thead>
          <tr>
            <th>Meaning</th>
            <th>Genitive Form</th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>I / me</td>
            <td><strong>mě / mne</strong></td>
            <td>mě common; mne formal</td>
          </tr>
          <tr>
            <td>you (informal)</td>
            <td><strong>tě / tebe</strong></td>
            <td>tě clitic; tebe stressed</td>
          </tr>
          <tr>
            <td>he / him</td>
            <td><strong>ho / jeho / něj</strong></td>
            <td>ho clitic; (od) něj after prep</td>
          </tr>
          <tr>
            <td>she / her</td>
            <td><strong>jí</strong></td>
            <td>also after prepositions</td>
          </tr>
          <tr>
            <td>we / us</td>
            <td><strong>nás</strong></td>
            <td>stable form</td>
          </tr>
          <tr>
            <td>you (pl/formal)</td>
            <td><strong>vás</strong></td>
            <td>stable form</td>
          </tr>
          <tr>
            <td>they / them</td>
            <td><strong>jich / nich</strong></td>
            <td>jich often; (od) nich after prep</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="trigger-section">
      <h3 class="trigger-title">
        <i data-lucide="sparkles"></i>
        Common Genitive Chunks
      </h3>
      
      <div class="chunks-grid">
        <div class="chunk-item">bez toho</div>
        <div class="chunk-item">kromě toho</div>
        <div class="chunk-item">podle toho</div>
        <div class="chunk-item">z toho</div>
        <div class="chunk-item">od něj</div>
        <div class="chunk-item">u něj</div>
        <div class="chunk-item">bez nich</div>
        <div class="chunk-item">od nich</div>
      </div>
    </div>
  </article>
  
  <!-- Footer -->
  <footer class="worksheet-footer">
    <div class="footer-accent"></div>
    <p>Complete Czech Genitive Study Guide — Master the 2nd Case</p>
    <p class="powered-by">Powered by AppBlitz</p>
    <div style="display: flex; justify-content: center; gap: 16px; margin-top: 16px; opacity: 0.3;">
      <i data-lucide="trophy"></i>
      <i data-lucide="heart"></i>
      <i data-lucide="award"></i>
    </div>
  </footer>
  
</section>
7.2 Practice Section Template (Part A Example)
<article class="section-card" id="part-a">
  <header class="section-header">
    <span class="section-number">A</span>
    <div class="section-header-content">
      <i data-lucide="languages" class="section-icon"></i>
      <h2>Translate to Czech</h2>
    </div>
  </header>
  
  <!-- Subsection 1 -->
  <div class="subsection">
    <h3 class="subsection-title">Original (1–20)</h3>
    <div class="exercise-grid grid-2col">
      
      <div class="exercise-item">
        <label for="a1">
          <span class="exercise-number">1)</span>
          without sugar
        </label>
        <input type="text" id="a1" class="exercise-input" placeholder="...">
      </div>
      
      <div class="exercise-item">
        <label for="a2">
          <span class="exercise-number">2)</span>
          without salt
        </label>
        <input type="text" id="a2" class="exercise-input" placeholder="...">
      </div>
      
      <!-- Repeat for all 20 exercises -->
      
    </div>
  </div>
  
  <!-- Subsection 2 -->
  <div class="subsection">
    <h3 class="subsection-title">Tricky (21–40)</h3>
    <div class="exercise-grid grid-2col">
      <!-- 21-40 exercises -->
    </div>
  </div>
  
</article>
7.3 Part I (Pronouns) Template
<article class="section-card" id="part-i">
  <header class="section-header">
    <span class="section-number">I</span>
    <div class="section-header-content">
      <i data-lucide="sticky-note" class="section-icon"></i>
      <h2>Pronouns (Genitive)</h2>
    </div>
  </header>
  
  <p class="section-hint">
    Focus: pronouns with <strong>bez / od / z / do / u</strong>, 
    plus <strong>bát se / zeptat se</strong>, and demonstratives 
    (<strong>toho/té/těch</strong>). Fill blanks with the correct genitive pronoun form.
  </p>
  
  <!-- Subsection 1 -->
  <div class="subsection">
    <h3 class="subsection-title">Personal Pronouns After Prepositions (101–115)</h3>
    <div class="exercise-grid grid-1col">
      
      <div class="exercise-item">
        <label for="i101">
          <span class="exercise-number">101)</span>
          Bez <input type="text" id="i101" class="exercise-input small" placeholder="..."> to nejde.
          <span class="text-hint">(I / me)</span>
        </label>
      </div>
      
      <div class="exercise-item">
        <label for="i102">
          <span class="exercise-number">102)</span>
          Bez <input type="text" id="i102" class="exercise-input small" placeholder="..."> to nezvládneš.
          <span class="text-hint">(you - informal)</span>
        </label>
      </div>
      
      <!-- Continue for 101-115 -->
      
    </div>
  </div>
  
  <!-- Additional subsections: 116-125, 126-135, 136-145, 146-150 -->
  
</article>
8. Icon Implementation
Using Lucide Icons CDN
<!-- In <head> -->
<script src="https://unpkg.com/lucide@latest"></script>

<!-- In HTML -->
<i data-lucide="book-open"></i>
<i data-lucide="languages"></i>
<i data-lucide="route"></i>

<!-- Initialize in JavaScript -->
<script>
  lucide.createIcons();
</script>
Icon Names Used
// Study Guide Icons
'book-open', 'target', 'lightbulb', 'check-circle-2', 'alert-circle',
'arrow-right', 'map-pin', 'users', 'package', 'calculator', 'zap',
'brain', 'trophy', 'trending-up', 'list-checks', 'sparkles',
'clock', 'award', 'badge-check', 'home', 'building-2', 'user',
'calendar', 'coffee', 'car', 'phone', 'shopping-bag', 'heart',
'school', 'briefcase', 'shuffle', 'route', 'navigation', 'pen-line'

// Worksheet Icons (Parts A-I)
'languages',      // Part A
'route',          // Part B
'shuffle',        // Part C
'calculator',     // Part D
'package',        // Part E
'messages-square',// Parts F & G
'users',          // Part H
'sticky-note'     // Part I
9. Data Content (All 248 Exercises)
Exercise Data Structure
You'll need to manually add all 248 exercises. Here's the breakdown:

Part A: 40 translation exercises (2-column grid)
Part B: 20 preposition exercises (2-column grid)
Part C: 20 movement/location exercises (2-column grid)
Part D: 40 number/quantity exercises (3-column grid)
Part E: 20 container phrase exercises (1-column)
Part F: 20 sentence translation exercises (1-column)
Part G: 20 advanced sentence exercises (1-column)
Part H: 18 adjective agreement exercises (1-column)
Part I: 50 pronoun exercises (1-column) - 5 subsections
10. Deployment Options
Option 1: GitHub Pages
# Create repository
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/czech-genitive.git
git push -u origin main

# Enable GitHub Pages in repository settings
# Choose main branch, root folder
# Site will be live at: https://username.github.io/czech-genitive
Option 2: Netlify Drop
Zip your project folder
Go to https://app.netlify.com/drop
Drag and drop your zip file
Get instant live URL
Option 3: Vercel
# Install Vercel CLI
npm i -g vercel

# Deploy
cd czech-genitive
vercel

# Follow prompts
Option 4: Simple Hosting
Upload files via FTP to any web host:

Bluehost
HostGator
SiteGround
GoDaddy
etc.
11. Performance Optimization
Images
<!-- Use WebP format -->
<img src="image.webp" alt="Description" loading="lazy">

<!-- Provide fallback -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description">
</picture>
CSS Optimization
/* Use contain for isolated sections */
.section-card {
  contain: layout style paint;
}

/* Use will-change sparingly */
.btn:hover {
  will-change: transform;
}
JavaScript Optimization
// Debounce input handlers
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Use for autosave
const saveProgress = debounce((id, value) => {
  localStorage.setItem(id, value);
}, 500);
12. Browser Support
Target Browsers
Chrome/Edge 90+
Firefox 88+
Safari 14+
Mobile browsers (iOS 14+, Android 8+)
Polyfills (if needed)
<!-- For older browser support -->
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
13. Accessibility Checklist
<!-- Use semantic HTML -->
<main>
  <article>
    <section>
      <header>
        <h1>...</h1>
      </header>
    </section>
  </article>
</main>

<!-- Add ARIA labels -->
<input 
  type="text" 
  id="a1" 
  aria-label="Answer for exercise 1: without sugar"
  aria-describedby="hint-a1"
>

<span id="hint-a1" class="text-hint">Translate to Czech</span>

<!-- Skip navigation -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- Focus visible -->
:focus-visible {
  outline: 2px solid var(--color-purple);
  outline-offset: 2px;
}
14. Testing Checklist
Visual Testing
 All sections render correctly
 Icons display properly (Lucide initialized)
 Gradients and colors correct
 Responsive layouts (mobile/tablet/desktop)
 Print layout optimized
Functional Testing
 All inputs work
 localStorage saves/loads
 Textarea autosave works
 Print button works
 Smooth scroll works
Browser Testing
 Chrome
 Firefox
 Safari
 Edge
 Mobile Safari
 Mobile Chrome
Performance
 Page loads < 3 seconds
 No layout shifts
 Smooth animations
 No console errors
15. File Checklist
☐ index.html
☐ css/reset.css
☐ css/variables.css
☐ css/typography.css
☐ css/layout.css
☐ css/components.css
☐ css/study-guide.css
☐ css/worksheet.css
☐ css/print.css
☐ css/responsive.css
☐ js/main.js
☐ js/notes.js
☐ js/print.js
☐ README.md
☐ favicon.ico (optional)
☐ images/ (optional)
16. Quick Start Template
Minimal Starter
# Create project folder
mkdir czech-genitive
cd czech-genitive

# Create structure
mkdir css js images
touch index.html
touch css/{reset,variables,typography,layout,components,study-guide,worksheet,print,responsive}.css
touch js/{main,notes,print}.js
touch README.md

# Open in browser
open index.html
17. Development Workflow
Local Development
Edit HTML/CSS/JS files in code editor
Open index.html in browser
Refresh browser to see changes
Use browser DevTools for debugging
Live Server (Optional)
# Install live-server globally
npm install -g live-server

# Run in project directory
live-server

# Auto-refreshes on file changes
VS Code Extension
Install "Live Server" extension
Right-click index.html → "Open with Live Server"
18. Future Enhancements
Phase 2
 Answer key toggle button
 Progress percentage indicator
 Export/import functionality
 Theme switcher (dark/light)
 Multiple language support
Phase 3
 Backend for user accounts
 Scoring system
 Leaderboard
 Community features
 Additional case worksheets
19. SEO Optimization
<head>
  <!-- Basic SEO -->
  <title>Czech Genitive Master - Free B2 Practice Worksheet & Study Guide</title>
  <meta name="description" content="Complete Czech genitive case (2. pád) study guide with 250+ practice exercises for B2 learners. Free printable worksheet.">
  <meta name="keywords" content="Czech grammar, genitive case, 2. pád, Czech B2, language learning, Czech worksheet">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Czech Genitive Master">
  <meta property="og:description" content="Master Czech genitive case with comprehensive study guide and 250+ practice exercises">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://your-domain.com">
  <meta property="og:image" content="https://your-domain.com/og-image.jpg">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Czech Genitive Master">
  <meta name="twitter:description" content="Master Czech genitive case with comprehensive study guide">
  
  <!-- Canonical -->
  <link rel="canonical" href="https://your-domain.com">
  
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
</head>
20. Summary
What You're Building
A beautiful, fully-functional educational website for learning Czech genitive case with:

Comprehensive study guide
248 practice exercises
Interactive note-taking
Print-ready format
Responsive design
Local progress saving
Tech Used
Plain HTML5 (semantic markup)
Custom CSS3 (no frameworks)
Vanilla JavaScript (no libraries except Lucide icons)
LocalStorage for data persistence
Print media queries
File Size Estimate
HTML: ~50-80 KB
CSS: ~30-40 KB
JS: ~5-10 KB
Total: ~100 KB (excluding images)
Time Estimate
Basic structure: 2-4 hours
Content entry: 4-6 hours
Styling: 2-4 hours
Testing: 1-2 hours
Total: 10-16 hours
