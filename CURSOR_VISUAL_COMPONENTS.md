# Visual Component Specifications for Cursor

## Component Library

### 1. Hero Components

#### Study Guide Hero
```jsx
<div className="study-hero">
  <div className="study-hero-icon">
    <BookOpen size={64} />
  </div>
  <h1 className="study-hero-title">Complete Study Guide</h1>
  <p className="study-hero-subtitle">Master Your Grammar. Czech B2.</p>
  <div className="hero-accent"></div>
</div>
```

**Visual Specs:**
- Icon container: 120px × 120px, gradient background, 32px border-radius
- Title: 40-72px responsive, gradient text fill, weight 600
- Subtitle: 18-28px responsive, 70% opacity, weight 400
- Accent line: 120px wide, 4px tall, gradient, centered

---

#### Worksheet Hero
```jsx
<header className="worksheet-hero">
  <h1 className="hero-title">Czech B2</h1>
  <h2 className="hero-subtitle">Genitive Practice Worksheet</h2>
  <div className="hero-accent"></div>
</header>
```

**Visual Specs:**
- Title: 48-96px responsive, gradient text fill, weight 600
- Subtitle: 24-42px responsive, 75% opacity, weight 400
- Accent line: 120px wide, 4px tall, blue-purple gradient

---

### 2. Section Headers

#### Guide Section Header
```jsx
<div className="guide-header">
  <Info size={24} />
  <h2>What is the Genitive Case?</h2>
</div>
```

**Visual Specs:**
- Display: flex, align center, gap 20px
- Icon: 24px, white 70% opacity
- Title: 28-36px responsive, weight 600
- Border bottom: 1px solid white 10% opacity
- Padding bottom: 24px
- Margin bottom: 40px

---

#### Worksheet Section Header
```jsx
<div className="section-header">
  <span className="section-number">A</span>
  <div className="section-header-content">
    <Languages className="section-icon" size={24} />
    <h2>Translate to Czech</h2>
  </div>
</div>
```

**Visual Specs:**
- Section number badge: 56px square, gradient background, 16px radius
- Number font: 28px, weight 700
- Icon: 24px, white 70% opacity
- Title: 24-32px responsive, weight 600

---

### 3. Card Components

#### Base Section Card
```jsx
<section className="section-card">
  {/* Content */}
</section>
```

**CSS:**
```css
.section-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 40px;
  margin-bottom: 40px;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
}

.section-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.12);
  transform: translateY(-2px);
}
```

---

#### Highlight Card (Purple)
```jsx
<div className="guide-card highlight-card">
  {/* Content */}
</div>
```

**CSS:**
```css
.guide-card.highlight-card {
  background: linear-gradient(
    135deg,
    rgba(65, 91, 210, 0.08) 0%,
    rgba(148, 75, 236, 0.08) 100%
  );
  border-color: rgba(148, 75, 236, 0.3);
}
```

---

#### Warning Card (Red/Orange)
```jsx
<div className="guide-card warning-card">
  {/* Content */}
</div>
```

**CSS:**
```css
.guide-card.warning-card {
  background: linear-gradient(
    135deg,
    rgba(236, 75, 75, 0.05) 0%,
    rgba(236, 135, 75, 0.05) 100%
  );
  border-color: rgba(236, 75, 75, 0.2);
}
```

---

#### Method Card (Green/Cyan)
```jsx
<div className="guide-card method-card">
  {/* Content */}
</div>
```

**CSS:**
```css
.guide-card.method-card {
  background: linear-gradient(
    135deg,
    rgba(75, 236, 148, 0.05) 0%,
    rgba(75, 191, 236, 0.05) 100%
  );
  border-color: rgba(75, 236, 148, 0.2);
}
```

---

#### Cheatsheet Card (Yellow/Orange)
```jsx
<div className="guide-card cheatsheet-card">
  {/* Content */}
</div>
```

**CSS:**
```css
.guide-card.cheatsheet-card {
  background: linear-gradient(
    135deg,
    rgba(236, 191, 75, 0.05) 0%,
    rgba(236, 148, 75, 0.05) 100%
  );
  border-color: rgba(236, 191, 75, 0.2);
}
```

---

### 4. Use Case Cards (Study Guide)

```jsx
<div className="use-cases-grid">
  <div className="use-case">
    <div className="use-case-icon possession">
      <User size={28} />
    </div>
    <h4>Possession</h4>
    <div className="example-box">
      <p>Nominative: To je auto.</p>
      <p className="czech-example">
        Genitive: To je auto mého bratra.
      </p>
      <p>(my brother's car)</p>
    </div>
  </div>
</div>
```

**Visual Specs:**
- Grid: auto-fit, min 280px columns, 24px gap
- Icon container: 56px square, gradient background, 14px radius
- Icon size: 28px
- Title: 18px, weight 600, margin bottom 12px
- Example box: dark background, 12px radius, 16px padding
- Czech example: white, weight 600, 16px

**Icon Gradients:**
```css
.use-case-icon.possession {
  background: linear-gradient(135deg, #415BD2 0%, #5B6BD2 100%);
}
.use-case-icon.quantity {
  background: linear-gradient(135deg, #944BEC 0%, #A45BEC 100%);
}
.use-case-icon.preposition {
  background: linear-gradient(135deg, #EC4B9B 0%, #EC5B7B 100%);
}
.use-case-icon.numbers {
  background: linear-gradient(135deg, #4BBFEC 0%, #5BAFEC 100%);
}
.use-case-icon.verbs {
  background: linear-gradient(135deg, #EC944B 0%, #ECAF5B 100%);
}
```

---

### 5. Step Cards

```jsx
<div className="steps-grid">
  <div className="step-item">
    <div className="step-number">1</div>
    <div className="step-content">
      <h4>With Prepositions</h4>
      <p>bez, z, do, od, u, kolem, během, kromě, místo, podle, etc.</p>
      <span className="czech-example">Jdu do práce.</span>
    </div>
  </div>
</div>
```

**Visual Specs:**
- Grid: auto-fit, min 250px, 24px gap
- Background: white 3% opacity, 16px radius
- Padding: 20px
- Number badge: 40px square, gradient, 12px radius, font 20px weight 700
- Title: 16px, weight 600, white
- Description: 14px, white 60% opacity

---

### 6. Comparison Table

```jsx
<div className="comparison-table">
  <div className="comparison-row movement">
    <div className="comp-icon">
      <ArrowRight size={20} />
    </div>
    <div className="comp-content">
      <strong>MOVEMENT → DO + Genitive</strong>
      <p className="comp-example">Jdu do Prahy. (I'm going to Prague)</p>
    </div>
  </div>
</div>
```

**Visual Specs:**
- Row display: flex, gap 16px, padding 20px
- Border radius: 12px
- Movement row: blue background rgba(65, 91, 210, 0.1), blue border
- Location row: purple background rgba(148, 75, 236, 0.1), purple border
- Icon container: 40px square, white 10% background, 10px radius
- Strong text: 16px, white
- Example: 14px, white 70% opacity

---

### 7. Preposition Cards

```jsx
<div className="prepositions-showcase">
  <div className="prep-card">
    <div className="prep-header">bez</div>
    <div className="prep-meaning">without</div>
    <div className="prep-examples">
      <div>
        bez cukru
        <span>without sugar</span>
      </div>
      <div>
        bez tebe
        <span>without you</span>
      </div>
    </div>
  </div>
</div>
```

**Visual Specs:**
- Grid: auto-fill, min 200px, 16px gap
- Background: black 30% opacity
- Border: white 15% opacity, 12px radius
- Padding: 20px
- Header: 24px, weight 700, gradient text (blue to purple)
- Meaning: 13px, white 50% opacity, uppercase, letter-spacing 0.5px
- Example text: 14px, white, weight 500
- Translation: 12px, white 50% opacity, block, margin-top 4px

**Advanced Cards:**
```css
.prep-card.advanced {
  border-color: rgba(236, 191, 75, 0.3);
}

.prep-card.advanced .prep-header {
  background: linear-gradient(135deg, #ECBF4B 0%, #EC944B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

### 8. Input Components

#### Standard Input Field
```jsx
<div className="input-group">
  <span>1)</span>
  without sugar
  <input 
    type="text" 
    value={answer}
    onChange={handleChange}
  />
</div>
```

**Visual Specs:**
- Container: flex, align center, gap 8px
- Number label: white 50% opacity, min-width 32px
- Input: flex 1, black 30% background, white 15% border
- Border radius: 8px
- Padding: 10px 14px
- Font: 14px, white

**Focus State:**
```css
input[type="text"]:focus {
  background: rgba(65, 91, 210, 0.15);
  border-color: #415BD2;
  box-shadow: 0 0 0 3px rgba(65, 91, 210, 0.2);
}
```

---

#### Inline Input (Small)
```jsx
<div className="input-group">
  Jdu <input type="text" className="inline-input" /> práce.
</div>
```

**Visual Specs:**
- Width: fixed 80px
- Text-align: center
- Padding: 8px 12px

---

#### Answer States (After Checking)

**Correct Input:**
```jsx
<input type="text" className="correct" />
<Check className="status-icon correct-icon" size={16} />
```

**CSS:**
```css
input[type="text"].correct {
  background: rgba(75, 236, 155, 0.1);
  border-color: #4BEC9B;
  color: #4BEC9B;
  font-weight: 600;
}

.correct-icon {
  color: #4BEC9B;
}
```

---

**Incorrect Input:**
```jsx
<input type="text" className="incorrect" />
<X className="status-icon incorrect-icon" size={16} />
<span className="correct-answer-hint">✓ bez cukru</span>
```

**CSS:**
```css
input[type="text"].incorrect {
  background: rgba(236, 75, 91, 0.1);
  border-color: #EC4B5B;
  color: #EC4B5B;
  font-weight: 600;
}

.incorrect-icon {
  color: #EC4B5B;
}

.correct-answer-hint {
  display: block;
  font-size: 13px;
  color: #4BEC9B;
  margin-top: 4px;
  padding-left: 40px;
}
```

---

### 9. Button Components

#### Primary Button (Check Answers)
```jsx
<button onClick={handleCheck} className="btn-check">
  <Check size={20} />
  Check My Answers
</button>
```

**CSS:**
```css
.btn-check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 28px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #415BD2 0%, #944BEC 100%);
  box-shadow: 0 4px 16px rgba(148, 75, 236, 0.3);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-check:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(148, 75, 236, 0.4);
}
```

---

#### Secondary Button (Reset)
```jsx
<button onClick={handleReset} className="btn-reset">
  Reset All
</button>
```

**CSS:**
```css
.btn-reset {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 28px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.05);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-reset:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.25);
  color: #fff;
}
```

---

### 10. Results Summary

```jsx
<div className="results-summary">
  <div className="results-header">
    <AlertCircle size={24} />
    <h3>Your Results</h3>
  </div>
  <div className="results-stats">
    <div className="stat">
      <span className="stat-label">Answered</span>
      <span className="stat-value">73/248</span>
    </div>
    <div className="stat correct">
      <span className="stat-label">Correct</span>
      <span className="stat-value">58</span>
    </div>
    <div className="stat incorrect">
      <span className="stat-label">Incorrect</span>
      <span className="stat-value">15</span>
    </div>
    <div className="stat">
      <span className="stat-label">Accuracy</span>
      <span className="stat-value">79.5%</span>
    </div>
  </div>
</div>
```

**Visual Specs:**
- Container: white 5% background, white 10% border, 20px radius
- Padding: 32px
- Backdrop filter: blur(10px)
- Stats grid: auto-fit, min 140px, 20px gap
- Stat card: flex column, align center, white 3% background
- Stat card border: white 10% opacity, 12px radius
- Stat card padding: 16px
- Label: 13px, white 60% opacity, uppercase, letter-spacing 0.5px
- Value: 28px, weight 700, white

**Stat Variants:**
```css
.stat.correct {
  background: rgba(75, 236, 155, 0.1);
  border-color: rgba(75, 236, 155, 0.3);
}

.stat.correct .stat-value {
  color: #4BEC9B;
}

.stat.incorrect {
  background: rgba(236, 75, 91, 0.1);
  border-color: rgba(236, 75, 91, 0.3);
}

.stat.incorrect .stat-value {
  color: #EC4B5B;
}
```

---

### 11. Info Boxes

#### Key Insight Box
```jsx
<div className="key-insight">
  <Lightbulb size={20} />
  <p>
    Movement uses DO (to) + Genitive for direction.
    Location uses V/NA (in/at) + Locative for being somewhere.
  </p>
</div>
```

**CSS:**
```css
.key-insight {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 24px;
  background: linear-gradient(
    135deg,
    rgba(236, 191, 75, 0.15) 0%,
    rgba(236, 148, 75, 0.15) 100%
  );
  border: 1px solid rgba(236, 191, 75, 0.3);
  border-radius: 12px;
  color: #fff;
}

.key-insight p {
  font-size: 15px;
  line-height: 1.6;
  margin: 0;
}
```

---

#### Exam Tip Box
```jsx
<div className="exam-tip">
  <Award size={16} />
  <span>
    <strong>Exam Tip:</strong> Memorize these! B2 exams frequently
    test whether you know which verbs require genitive.
  </span>
</div>
```

**CSS:**
```css
.exam-tip {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  padding: 14px 20px;
  background: rgba(236, 191, 75, 0.1);
  border-left: 3px solid #ECBF4B;
  border-radius: 8px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
}

.exam-tip strong {
  color: #fff;
}
```

---

#### Warning/Forms Intro Box
```jsx
<div className="forms-intro">
  <AlertTriangle size={20} />
  <p>
    Genitive endings depend on gender (masculine/feminine/neuter)
    and whether the noun is "hard" or "soft".
  </p>
</div>
```

**CSS:**
```css
.forms-intro {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 24px;
  background: rgba(236, 75, 75, 0.1);
  border: 1px solid rgba(236, 75, 75, 0.3);
  border-radius: 12px;
  margin-bottom: 32px;
  color: #fff;
}

.forms-intro p {
  font-size: 15px;
  margin: 0;
}
```

---

### 12. Gender Badges

```jsx
<div className="gender-badges">
  <div className="badge masculine">♂ Masculine</div>
  <div className="badge feminine">♀ Feminine</div>
  <div className="badge neuter">⚪ Neuter</div>
</div>
```

**CSS:**
```css
.gender-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.badge {
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid;
}

.badge.masculine {
  background: rgba(65, 91, 210, 0.15);
  border-color: rgba(65, 91, 210, 0.4);
  color: #8BA3FF;
}

.badge.feminine {
  background: rgba(236, 75, 148, 0.15);
  border-color: rgba(236, 75, 148, 0.4);
  color: #FF8BBF;
}

.badge.neuter {
  background: rgba(148, 75, 236, 0.15);
  border-color: rgba(148, 75, 236, 0.4);
  color: #B88BFF;
}
```

---

### 13. Personal Notes Textarea

```jsx
<div className="personal-notes">
  <div className="notes-header">
    <StickyNote size={18} />
    Your Personal Notes
  </div>
  <textarea 
    rows={4}
    placeholder="Write tricky patterns you notice..."
  />
</div>
```

**CSS:**
```css
.personal-notes {
  margin-top: 32px;
  padding: 24px;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(148, 75, 236, 0.2);
  border-radius: 12px;
}

.notes-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  font-weight: 600;
}

.personal-notes textarea {
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  padding: 14px 16px;
  color: #fff;
  font-family: 'Clash Grotesk', sans-serif;
  font-size: 14px;
  line-height: 1.6;
  resize: vertical;
}

.personal-notes textarea:focus {
  outline: none;
  background: rgba(148, 75, 236, 0.1);
  border-color: #944BEC;
  box-shadow: 0 0 0 3px rgba(148, 75, 236, 0.2);
}

.personal-notes textarea::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
```

---

### 14. Number Rules Visual

```jsx
<div className="numbers-visual">
  <div className="number-rule highlighted">
    <div className="num-box genitive">5+</div>
    <div className="num-result highlight">
      Genitive plural
      <span>mám pět koláčů (I have five cakes)</span>
    </div>
  </div>
</div>
```

**CSS:**
```css
.numbers-visual {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
  padding: 24px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
}

.number-rule {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

.number-rule.highlighted {
  background: linear-gradient(
    135deg,
    rgba(65, 91, 210, 0.15) 0%,
    rgba(148, 75, 236, 0.15) 100%
  );
  border-color: rgba(148, 75, 236, 0.4);
}

.num-box {
  min-width: 80px;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
}

.num-box.genitive {
  background: linear-gradient(135deg, #415BD2 0%, #944BEC 100%);
}

.num-result {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}

.num-result.highlight {
  color: #fff;
  font-weight: 700;
  font-size: 16px;
}
```

---

## Grid Layouts Summary

### 2-Column Grid (Exercises)
```css
.grid-2col {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px 24px;
}

/* Mobile */
@media (max-width: 768px) {
  .grid-2col {
    grid-template-columns: 1fr;
  }
}
```

### 3-Column Grid (Short Inputs)
```css
.grid-3col {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 14px 20px;
}
```

### Single Column (Full Width)
```css
.grid-1col {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
```

### Use Cases Grid
```css
.use-cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}
```

### Steps Grid
```css
.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}
```

---

## Animation & Transitions

### Hover Transitions
```css
/* Cards */
.section-card,
.use-case,
.prep-card,
.step-item {
  transition: all 0.3s ease;
}

.section-card:hover,
.use-case:hover,
.prep-card:hover {
  transform: translateY(-4px);
}

.step-item:hover {
  transform: translateY(-2px);
}

/* Buttons */
.btn-check,
.btn-reset {
  transition: all 0.2s ease;
}

.btn-check:hover {
  transform: translateY(-2px);
}

/* Inputs */
input[type="text"] {
  transition: all 0.2s ease;
}
```

---

## Print Styles

All components have print-ready alternatives that:
- Remove dark backgrounds
- Use black text
- Keep borders visible
- Preserve color on important elements (section numbers, accents)
- Hide interactive elements (buttons)

---

## Responsive Behavior

### Desktop (>768px)
- Full grid layouts
- 40px card padding
- All features visible

### Mobile (≤768px)
- Single column grids
- 24px card padding
- Smaller section number badges (48px)
- Stacked input fields
- Full-width buttons

---

This completes the visual component specifications. Every component shown above is implemented in your current codebase and ready to use!
