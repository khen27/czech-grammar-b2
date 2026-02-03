# Czech B2 Genitive Practice Worksheet

An interactive web application for mastering the Czech genitive case (2. pád) with 248 exercises, study plans, and instant feedback.

## Features

- **248 Exercises** across 9 sections (Parts A-I)
- **4 Study Plans**: Quick 10 min, Medium 30 min, Deep dive 1hr, Test 1.5 hr
- **5 Levels**: A1, A2, B1, B2, C1 - exercises filter based on selection
- **Session Tracking**: Timer, progress bar, answer counting
- **Instant Feedback**: Review answers with green/red highlighting
- **Results Modal**: Accuracy percentage, breakdown by section
- **Progress Persistence**: Answers save to localStorage
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Print-Ready**: Optimized print styles for worksheets

## Getting Started

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/czech-grammar-b2.git
   cd czech-grammar-b2
   ```

2. Start a local server (required for loading JSON data):
   ```bash
   # Using Python
   python3 -m http.server 8080
   
   # Or using Node.js
   npx serve
   
   # Or using PHP
   php -S localhost:8080
   ```

3. Open in browser:
   ```
   http://localhost:8080
   ```

### Project Structure

```
czech-grammar-b2/
├── index.html                 # Main HTML file
├── css/
│   ├── reset.css             # CSS reset
│   ├── variables.css         # Design tokens
│   ├── typography.css        # Font styles
│   ├── layout.css            # Page layout
│   ├── components.css        # UI components
│   ├── hero.css              # Hero section
│   ├── worksheet.css         # Worksheet styles
│   ├── responsive.css        # Media queries
│   └── print.css             # Print styles
├── js/
│   ├── config.js             # Configuration
│   ├── data.js               # Data loading
│   ├── filters.js            # Filtering logic
│   ├── ui.js                 # UI rendering
│   ├── session.js            # Session management
│   ├── validation.js         # Answer checking
│   ├── storage.js            # localStorage
│   ├── print.js              # Print utilities
│   └── main.js               # App entry point
├── data/
│   └── exercises.json        # Exercise data
└── README.md
```

## Usage

1. **Select a Study Plan**: Choose how long you want to practice
   - Quick 10 min: Parts A, B, D (Original only) ~50 exercises
   - Medium 30 min: Parts A-E (all subsections) ~100 exercises
   - Deep dive 1hr: Parts A-G (all subsections) ~160 exercises
   - Test 1.5 hr: All Parts A-I, all 248 exercises

2. **Select Your Level**: Filter exercises by difficulty
   - A1-A2: Fewer exercises per section
   - B1-C1: Full exercise sets

3. **Start Study Session**: Click "Start My Study"
   - Hero collapses to sticky header
   - Timer starts counting
   - Progress tracks answered exercises

4. **Fill in Answers**: Type your answers in Czech

5. **Review**: Click "Review" to check your answers
   - Green = Correct
   - Red = Incorrect (shows correct answer)
   - Yellow = Unanswered

6. **View Results**: Modal shows accuracy and breakdown by section

## Exercise Types

- **Part A**: Translate phrases to Czech (e.g., "without sugar" → "bez cukru")
- **Part B**: Fill correct preposition (bez/do/z/od/u)
- **Part C**: Identify movement vs. location
- **Part D**: Fill correct noun forms with numbers/quantities
- **Part E**: Build full phrases (e.g., "a bottle of water")
- **Part F**: Translate full sentences
- **Part G**: Advanced sentence translation
- **Part H**: Phrases with adjectives
- **Part I**: Genitive pronouns (personal, demonstrative, interrogative)

## Keyboard Shortcuts

- `Ctrl/Cmd + Enter`: Review answers
- `Tab`: Navigate between inputs
- `Escape`: Close results modal

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Deployment

### GitHub Pages

1. Push to GitHub
2. Go to Settings → Pages
3. Select main branch, root folder
4. Site live at `username.github.io/czech-grammar-b2`

### Netlify

1. Drag and drop project folder to [netlify.com/drop](https://netlify.com/drop)
2. Get instant live URL

### Vercel

```bash
npx vercel
```

## Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, Glassmorphism
- **Vanilla JavaScript**: ES6+, no frameworks
- **Lucide Icons**: Via CDN
- **Google Fonts**: Inter

## License

MIT License - feel free to use, modify, and distribute.

## Credits

- Exercise content: Czech B2 grammar curriculum
- Design: Figma mockup with dark theme
- Icons: [Lucide](https://lucide.dev/)
