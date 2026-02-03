Czech Genitive Worksheet - Complete Design Specifications
1. Color System (Hex Codes)
Base Colors
/* Pure Colors */
--color-white: #FFFFFF;
--color-black: #000000;
Background Colors
/* Main Backgrounds */
--bg-primary-start: #1A1A2E;      /* Dark navy blue */
--bg-primary-end: #16213E;        /* Deeper navy */
--bg-gradient: linear-gradient(135deg, #1A1A2E 0%, #16213E 100%);

/* Card Backgrounds */
--bg-card: rgba(255, 255, 255, 0.03);           /* 3% white opacity */
--bg-card-hover: rgba(255, 255, 255, 0.05);     /* 5% white opacity */
--bg-input: rgba(0, 0, 0, 0.3);                 /* 30% black opacity */
--bg-input-focus: rgba(148, 75, 236, 0.1);      /* 10% purple opacity */
Glassmorphism
--glass-bg: rgba(255, 255, 255, 0.05);          /* 5% white opacity */
--glass-border: rgba(255, 255, 255, 0.1);       /* 10% white opacity */
--glass-backdrop-blur: blur(10px);
Primary Accent Colors
/* Blue */
--accent-blue: #415BD2;           /* Primary blue */
--accent-blue-light: #7B9EFF;     /* Light blue (for text) */
--accent-blue-bg: rgba(65, 91, 210, 0.2);      /* 20% opacity bg */
--accent-blue-border: rgba(65, 91, 210, 0.4);  /* 40% opacity border */

/* Purple */
--accent-purple: #944BEC;         /* Primary purple */
--accent-purple-light: #B985FF;   /* Light purple */
--accent-purple-bg: rgba(148, 75, 236, 0.1);   /* 10% opacity bg */
--accent-purple-border: rgba(148, 75, 236, 0.3); /* 30% opacity border */

/* Cyan */
--accent-cyan: #4BBFEC;           /* Primary cyan */
--accent-cyan-light: #7FD9FF;     /* Light cyan */
--accent-cyan-bg: rgba(75, 191, 236, 0.1);     /* 10% opacity bg */
--accent-cyan-border: rgba(75, 191, 236, 0.3); /* 30% opacity border */

/* Pink */
--accent-pink: #EC4B9B;           /* Primary pink */
--accent-pink-light: #FF8BB8;     /* Light pink */
--accent-pink-bg: rgba(236, 75, 148, 0.2);     /* 20% opacity bg */
--accent-pink-border: rgba(236, 75, 148, 0.4); /* 40% opacity border */

/* Yellow/Gold */
--accent-yellow: #ECB94B;         /* Primary yellow */
--accent-yellow-light: #FFD17B;   /* Light yellow */
--accent-yellow-bg: rgba(236, 191, 75, 0.1);   /* 10% opacity bg */
--accent-yellow-border: rgba(236, 191, 75, 0.3); /* 30% opacity border */
Gradient Colors
/* Primary Gradients */
--gradient-primary: linear-gradient(135deg, #415BD2 0%, #944BEC 100%);
--gradient-secondary: linear-gradient(135deg, #4BBFEC 0%, #944BEC 100%);
--gradient-accent: linear-gradient(135deg, #EC4B9B 0%, #EC5B7B 100%);
--gradient-warm: linear-gradient(135deg, #ECB94B 0%, #EC4B9B 100%);

/* Subtle Background Gradients */
--gradient-card-blue: linear-gradient(135deg, rgba(65, 91, 210, 0.15) 0%, rgba(148, 75, 236, 0.15) 100%);
--gradient-card-cyan: linear-gradient(135deg, rgba(75, 191, 236, 0.15) 0%, rgba(148, 75, 236, 0.15) 100%);
Text Colors
/* White-based Text */
--text-primary: #FFFFFF;                    /* 100% white */
--text-secondary: rgba(255, 255, 255, 0.85); /* 85% white */
--text-muted: rgba(255, 255, 255, 0.6);     /* 60% white */
--text-hint: rgba(255, 255, 255, 0.4);      /* 40% white */
--text-disabled: rgba(255, 255, 255, 0.3);  /* 30% white */
--text-very-subtle: rgba(255, 255, 255, 0.2); /* 20% white */
Badge/Label Colors (Gender-based)
/* Masculine Badge */
--badge-masculine-bg: rgba(65, 91, 210, 0.2);
--badge-masculine-border: rgba(65, 91, 210, 0.4);
--badge-masculine-text: #7B9EFF;

/* Feminine Badge */
--badge-feminine-bg: rgba(236, 75, 148, 0.2);
--badge-feminine-border: rgba(236, 75, 148, 0.4);
--badge-feminine-text: #FF8BB8;

/* Neuter Badge */
--badge-neuter-bg: rgba(75, 191, 236, 0.2);
--badge-neuter-border: rgba(75, 191, 236, 0.4);
--badge-neuter-text: #7FD9FF;
Semantic Colors
/* Success */
--success: #4BEC9B;
--success-bg: rgba(75, 236, 155, 0.1);
--success-border: rgba(75, 236, 155, 0.3);

/* Warning */
--warning: #ECB94B;
--warning-bg: rgba(236, 191, 75, 0.1);
--warning-border: rgba(236, 191, 75, 0.3);

/* Error */
--error: #EC4B5B;
--error-bg: rgba(236, 75, 91, 0.1);
--error-border: rgba(236, 75, 91, 0.3);

/* Info */
--info: #4BBFEC;
--info-bg: rgba(75, 191, 236, 0.1);
--info-border: rgba(75, 191, 236, 0.3);
Border Colors
--border-base: rgba(255, 255, 255, 0.1);        /* 10% white */
--border-subtle: rgba(255, 255, 255, 0.05);     /* 5% white */
--border-medium: rgba(255, 255, 255, 0.15);     /* 15% white */
--border-strong: rgba(255, 255, 255, 0.2);      /* 20% white */
Hover States
--hover-overlay: rgba(255, 255, 255, 0.03);     /* Subtle hover effect */
--hover-overlay-strong: rgba(255, 255, 255, 0.05);
Focus States
--focus-ring: rgba(148, 75, 236, 0.2);          /* Purple focus ring */
--focus-border: #944BEC;                        /* Solid purple border */
2. Typography System
Font Family
--font-family-primary: 'Clash Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
--font-family-mono: 'SF Mono', 'Monaco', 'Cascadia Code', 'Consolas', monospace;
Font Sizes (Exact Pixels)
/* Base Scale */
--text-xs: 12px;       /* Extra small - copyright, fine print */
--text-sm: 13px;       /* Small - hints, captions */
--text-base: 14px;     /* Base - body text, inputs */
--text-md: 15px;       /* Medium - emphasized body */
--text-lg: 16px;       /* Large - large body text */
--text-xl: 18px;       /* Extra large - small headings */
--text-2xl: 22px;      /* 2X large - section titles */
--text-3xl: 28px;      /* 3X large - card headers */
--text-4xl: 42px;      /* 4X large - hero title (mobile) */
--text-5xl: 56px;      /* 5X large - hero title (tablet) */
--text-6xl: 72px;      /* 6X large - hero title (desktop) */
Font Weights
--weight-normal: 400;      /* Regular text */
--weight-medium: 500;      /* Slightly emphasized */
--weight-semibold: 600;    /* Medium headings */
--weight-bold: 700;        /* Strong headings */
Line Heights
--line-height-tight: 1.2;    /* Headings */
--line-height-snug: 1.4;     /* Compact text */
--line-height-normal: 1.5;   /* Default */
--line-height-relaxed: 1.6;  /* Body text */
--line-height-loose: 1.7;    /* Spacious reading */
Letter Spacing
--letter-spacing-tight: -0.02em;   /* Large headings */
--letter-spacing-normal: 0;        /* Default */
--letter-spacing-wide: 0.02em;     /* All caps text */
Typography Component Specs
Hero Title
font-size: 72px;           /* Desktop */
font-weight: 700;
line-height: 1.2;
letter-spacing: -0.02em;
background: linear-gradient(135deg, #415BD2 0%, #944BEC 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

/* Responsive */
@media (max-width: 1024px) { font-size: 56px; }
@media (max-width: 768px) { font-size: 42px; }
Hero Subtitle
font-size: 28px;
font-weight: 500;
line-height: 1.4;
color: rgba(255, 255, 255, 0.85);

/* Responsive */
@media (max-width: 768px) { font-size: 22px; }
Section Headings (H2)
font-size: 28px;
font-weight: 700;
line-height: 1.2;
color: #FFFFFF;

/* Responsive */
@media (max-width: 768px) { font-size: 22px; }
Subsection Titles (H3)
font-size: 18px;
font-weight: 600;
line-height: 1.4;
color: rgba(255, 255, 255, 0.85);
Body Text
font-size: 14px;
font-weight: 400;
line-height: 1.6;
color: rgba(255, 255, 255, 0.85);
Hints/Captions
font-size: 13px;
font-weight: 400;
line-height: 1.5;
color: rgba(255, 255, 255, 0.4);
Exercise Numbers
font-size: 13px;
font-weight: 400;
color: rgba(255, 255, 255, 0.4);
3. Spacing System
Base Unit: 4px
/* Spacing Scale */
--space-0: 0px;
--space-1: 4px;       /* 1 unit */
--space-2: 8px;       /* 2 units */
--space-3: 12px;      /* 3 units */
--space-4: 16px;      /* 4 units */
--space-5: 20px;      /* 5 units */
--space-6: 24px;      /* 6 units */
--space-8: 32px;      /* 8 units */
--space-10: 40px;     /* 10 units */
--space-12: 48px;     /* 12 units */
--space-16: 64px;     /* 16 units */
--space-20: 80px;     /* 20 units */
--space-24: 96px;     /* 24 units */
--space-32: 128px;    /* 32 units */
Component-Specific Spacing
Page Container
max-width: 1200px;
margin: 0 auto;
padding-top: 80px;      /* --space-20 */
padding-bottom: 80px;   /* --space-20 */
padding-left: 24px;     /* --space-6 */
padding-right: 24px;    /* --space-6 */

/* Mobile */
@media (max-width: 768px) {
  padding-top: 32px;    /* --space-8 */
  padding-bottom: 32px; /* --space-8 */
  padding-left: 16px;   /* --space-4 */
  padding-right: 16px;  /* --space-4 */
}
Hero Section
padding-top: 80px;      /* --space-20 */
padding-bottom: 80px;   /* --space-20 */
margin-bottom: 48px;    /* --space-12 */

/* Mobile */
@media (max-width: 768px) {
  padding-top: 48px;    /* --space-12 */
  padding-bottom: 48px; /* --space-12 */
  margin-bottom: 32px;  /* --space-8 */
}
Section Card
padding: 40px;          /* --space-10 */
margin-bottom: 40px;    /* --space-10 */

/* Mobile */
@media (max-width: 768px) {
  padding: 24px;        /* --space-6 */
  margin-bottom: 32px;  /* --space-8 */
}
Section Header
gap: 20px;              /* --space-5 */
margin-bottom: 32px;    /* --space-8 */
padding-bottom: 20px;   /* --space-5 */
Section Number Badge
width: 56px;
height: 56px;
padding: 0;             /* Centered text */

/* Mobile */
@media (max-width: 480px) {
  width: 48px;
  height: 48px;
}
Subsection
margin-bottom: 40px;    /* --space-10 */

/* Mobile */
@media (max-width: 768px) {
  margin-bottom: 32px;  /* --space-8 */
}
Subsection Title
margin-bottom: 24px;    /* --space-6 */
padding-left: 16px;     /* --space-4 */
Exercise Grid
gap: 16px;              /* --space-4 */
Exercise Item
padding: 12px 16px;     /* --space-3 --space-4 */
gap: 12px;              /* --space-3 */
Input Fields
padding: 8px 12px;      /* --space-2 --space-3 */

/* Small variant */
padding: 4px 8px;       /* --space-1 --space-2 */
Personal Notes
margin-top: 32px;       /* --space-8 */
padding: 24px;          /* --space-6 */
Examples Row
gap: 12px;              /* --space-3 */
margin-bottom: 24px;    /* --space-6 */
Mini Example Cards
padding: 16px 20px;     /* --space-4 --space-5 */
gap: 8px;               /* --space-2 */
Callout Boxes (Exam Tips, Key Insights)
padding: 20px;          /* --space-5 */
gap: 12px;              /* --space-3 */
margin-bottom: 24px;    /* --space-6 */
Tables
/* Header */
padding: 16px 20px;     /* --space-4 --space-5 */

/* Cell */
padding: 14px 20px;     /* between --space-3 and --space-4 */
Footer
margin-top: 80px;       /* --space-20 */
padding-top: 40px;      /* --space-10 */
4. Border Radius System
/* Border Radius Scale */
--radius-none: 0px;
--radius-sm: 8px;       /* Small elements (inputs, badges) */
--radius-md: 12px;      /* Medium elements (cards, buttons) */
--radius-lg: 16px;      /* Large elements (section cards) */
--radius-xl: 20px;      /* Extra large (main cards) */
--radius-2xl: 24px;     /* Very large containers */
--radius-full: 9999px;  /* Fully rounded (pills, circles) */
Component Applications
/* Section Cards */
border-radius: 20px;    /* --radius-xl */

/* Guide Cards */
border-radius: 20px;    /* --radius-xl */

/* Section Number Badge */
border-radius: 12px;    /* --radius-md */

/* Exercise Items */
border-radius: 8px;     /* --radius-sm */

/* Input Fields */
border-radius: 8px;     /* --radius-sm */

/* Buttons */
border-radius: 12px;    /* --radius-md */

/* Badges */
border-radius: 9999px;  /* --radius-full (pill shape) */

/* Mini Examples */
border-radius: 12px;    /* --radius-md */

/* Callout Boxes */
border-radius: 12px;    /* --radius-md */

/* Tables */
border-radius: 12px;    /* --radius-md */

/* Personal Notes */
border-radius: 12px;    /* --radius-md */

/* Chunks Grid Items */
border-radius: 8px;     /* --radius-sm */

/* Hero Accent Bar */
border-radius: 9999px;  /* --radius-full */

/* Footer Accent Bar */
border-radius: 9999px;  /* --radius-full */
5. Shadows & Elevation
/* Shadow Scale */
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.15);
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.2);
--shadow-xl: 0 16px 64px rgba(0, 0, 0, 0.25);

/* Glow Effects */
--shadow-glow-purple: 0 0 20px rgba(148, 75, 236, 0.3);
--shadow-glow-blue: 0 0 20px rgba(65, 91, 210, 0.3);
--shadow-glow-cyan: 0 0 20px rgba(75, 191, 236, 0.3);

/* Focus Ring */
--shadow-focus: 0 0 0 3px rgba(148, 75, 236, 0.2);
Component Applications
/* Card Hover */
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15); /* --shadow-md */

/* Button Hover */
box-shadow: 0 0 20px rgba(148, 75, 236, 0.3); /* --shadow-glow-purple */

/* Input Focus */
box-shadow: 0 0 0 3px rgba(148, 75, 236, 0.2); /* --shadow-focus */

/* Elevated Cards (Study Guide) */
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2); /* --shadow-lg */
6. Transitions & Animations
Transition Durations
--transition-fast: 150ms;
--transition-base: 200ms;
--transition-slow: 300ms;
--transition-slower: 500ms;
Transition Timing Functions
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);
Component Transitions
/* Default Card Transition */
transition: all 200ms ease;

/* Input Transition */
transition: all 200ms ease;

/* Button Transition */
transition: all 200ms ease;

/* Hover Transform */
transition: transform 200ms ease;
Keyframe Animations
Float Animation (Background Orbs)
@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-30px, 30px) scale(0.9);
  }
}

/* Applied to orbs */
animation: float 20s ease-in-out infinite;
Fade In Animation
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Applied to sections */
animation: fadeIn 500ms ease-out;
7. Grid & Layout Specifications
Exercise Grids
1-Column Grid
.grid-1col {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px; /* --space-4 */
}
2-Column Grid
.grid-2col {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px; /* --space-4 */
}

@media (max-width: 768px) {
  grid-template-columns: 1fr;
}
3-Column Grid
.grid-3col {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px; /* --space-4 */
}

@media (max-width: 1024px) {
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 768px) {
  grid-template-columns: 1fr;
}
Flexbox Layouts
Section Header
display: flex;
align-items: center;
gap: 20px; /* --space-5 */
Exercise Item
display: flex;
align-items: center;
gap: 12px; /* --space-3 */
Examples Row
display: flex;
flex-wrap: wrap;
gap: 12px; /* --space-3 */
8. Component-Specific Detailed Specs
Section Number Badge
display: inline-flex;
align-items: center;
justify-content: center;
width: 56px;
height: 56px;
background: linear-gradient(135deg, #415BD2 0%, #944BEC 100%);
border-radius: 12px;
font-size: 28px;
font-weight: 700;
color: #FFFFFF;
flex-shrink: 0;

@media (max-width: 480px) {
  width: 48px;
  height: 48px;
  font-size: 22px;
}
Input Fields (Standard)
padding: 8px 12px;
background: rgba(0, 0, 0, 0.3);
border: 1px solid rgba(255, 255, 255, 0.15);
border-radius: 8px;
color: #FFFFFF;
font-size: 14px;
font-weight: 400;
line-height: 1.5;
transition: all 200ms ease;
min-width: 200px;
flex: 1;

/* Focus State */
&:focus {
  outline: none;
  background: rgba(148, 75, 236, 0.1);
  border-color: #944BEC;
  box-shadow: 0 0 0 3px rgba(148, 75, 236, 0.2);
}

/* Placeholder */
&::placeholder {
  color: rgba(255, 255, 255, 0.4);
}
Input Fields (Small)
padding: 4px 8px;
min-width: 120px;
max-width: 150px;
/* All other properties same as standard */
Input Fields (Inline)
padding: 4px 8px;
min-width: 80px;
max-width: 100px;
/* All other properties same as standard */
Buttons
display: inline-flex;
align-items: center;
justify-content: center;
gap: 8px;
padding: 12px 24px;
background: linear-gradient(135deg, #415BD2 0%, #944BEC 100%);
color: #FFFFFF;
border: none;
border-radius: 12px;
font-size: 14px;
font-weight: 600;
line-height: 1.5;
cursor: pointer;
transition: all 200ms ease;

/* Hover State */
&:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(148, 75, 236, 0.3);
}

/* Active State */
&:active {
  transform: translateY(0);
}
Badges (Masculine)
display: inline-flex;
align-items: center;
padding: 8px 16px;
background: rgba(65, 91, 210, 0.2);
border: 1px solid rgba(65, 91, 210, 0.4);
border-radius: 9999px;
color: #7B9EFF;
font-size: 13px;
font-weight: 500;
Badges (Feminine)
display: inline-flex;
align-items: center;
padding: 8px 16px;
background: rgba(236, 75, 148, 0.2);
border: 1px solid rgba(236, 75, 148, 0.4);
border-radius: 9999px;
color: #FF8BB8;
font-size: 13px;
font-weight: 500;
Badges (Neuter)
display: inline-flex;
align-items: center;
padding: 8px 16px;
background: rgba(75, 191, 236, 0.2);
border: 1px solid rgba(75, 191, 236, 0.4);
border-radius: 9999px;
color: #7FD9FF;
font-size: 13px;
font-weight: 500;
Exam Tip Box
display: flex;
align-items: flex-start;
gap: 12px;
padding: 20px;
background: rgba(236, 191, 75, 0.1);
border: 1px solid rgba(236, 191, 75, 0.3);
border-radius: 12px;
margin-bottom: 24px;

/* Icon */
svg {
  width: 20px;
  height: 20px;
  color: #ECB94B;
  flex-shrink: 0;
  margin-top: 2px;
}

/* Text */
color: rgba(255, 255, 255, 0.85);
font-size: 14px;
line-height: 1.6;
Key Insight Box
display: flex;
align-items: flex-start;
gap: 12px;
padding: 20px;
background: rgba(148, 75, 236, 0.1);
border: 1px solid rgba(148, 75, 236, 0.3);
border-radius: 12px;
margin-bottom: 24px;

/* Icon */
svg {
  width: 20px;
  height: 20px;
  color: #944BEC;
  flex-shrink: 0;
  margin-top: 2px;
}

/* Text */
color: rgba(255, 255, 255, 0.85);
font-size: 15px;
line-height: 1.6;
Data Tables
/* Table Container */
width: 100%;
background: rgba(0, 0, 0, 0.3);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 12px;
overflow: hidden;
margin-bottom: 24px;

/* Table Header */
thead {
  background: rgba(65, 91, 210, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

th {
  padding: 16px 20px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #FFFFFF;
}

/* Table Cells */
td {
  padding: 14px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 14px;
  color: rgba(255, 255, 255, 0.75);
}

/* Last Row */
tr:last-child td {
  border-bottom: none;
}

/* Hover State */
tr:hover {
  background: rgba(255, 255, 255, 0.03);
}
Personal Notes Textarea
width: 100%;
min-height: 100px;
padding: 14px 16px;
background: rgba(0, 0, 0, 0.3);
border: 1px solid rgba(255, 255, 255, 0.15);
border-radius: 8px;
color: #FFFFFF;
font-family: 'Clash Grotesk', sans-serif;
font-size: 14px;
line-height: 1.6;
resize: vertical;
transition: all 200ms ease;

/* Focus State */
&:focus {
  outline: none;
  background: rgba(148, 75, 236, 0.1);
  border-color: #944BEC;
  box-shadow: 0 0 0 3px rgba(148, 75, 236, 0.2);
}

/* Placeholder */
&::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
Chunks Grid Items
padding: 12px 16px;
background: linear-gradient(135deg, rgba(65, 91, 210, 0.15) 0%, rgba(148, 75, 236, 0.15) 100%);
border: 1px solid rgba(148, 75, 236, 0.3);
border-radius: 8px;
text-align: center;
font-size: 14px;
font-weight: 500;
color: #FFFFFF;
transition: all 200ms ease;

/* Hover State */
&:hover {
  background: linear-gradient(135deg, rgba(65, 91, 210, 0.25) 0%, rgba(148, 75, 236, 0.25) 100%);
  border-color: rgba(148, 75, 236, 0.5);
  transform: translateY(-2px);
}
9. Icon Specifications
/* Default Icon Size */
width: 24px;
height: 24px;
color: rgba(255, 255, 255, 0.7);
flex-shrink: 0;

/* Small Icons (callout boxes) */
width: 20px;
height: 20px;

/* Medium Icons (section headers) */
width: 24px;
height: 24px;

/* Large Icons (guide headers) */
width: 32px;
height: 32px;

/* Stroke Width */
stroke-width: 2px;
10. Background Orbs (Decorative Elements)
Orb 1
position: absolute;
width: 500px;
height: 500px;
background: linear-gradient(135deg, #415BD2 0%, #944BEC 100%);
border-radius: 50%;
filter: blur(80px);
opacity: 0.3;
top: -200px;
right: -200px;
animation: float 20s ease-in-out infinite;
Orb 2
position: absolute;
width: 400px;
height: 400px;
background: linear-gradient(135deg, #4BBFEC 0%, #944BEC 100%);
border-radius: 50%;
filter: blur(80px);
opacity: 0.3;
bottom: -150px;
left: -150px;
animation: float 20s ease-in-out infinite;
animation-delay: -7s;
Orb 3
position: absolute;
width: 300px;
height: 300px;
background: linear-gradient(135deg, #EC4B9B 0%, #EC5B7B 100%);
border-radius: 50%;
filter: blur(80px);
opacity: 0.3;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
animation: float 20s ease-in-out infinite;
animation-delay: -14s;
11. Responsive Breakpoints
/* Mobile Small */
@media (max-width: 480px) {
  /* Very small phones */
}

/* Mobile */
@media (max-width: 768px) {
  /* Phones */
}

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) {
  /* Tablets */
}

/* Desktop */
@media (min-width: 1025px) {
  /* Desktops and larger */
}

/* Large Desktop */
@media (min-width: 1440px) {
  /* Large screens */
}
12. Print Styles
Color Overrides for Print
@media print {
  /* Background */
  body { background: #FFFFFF; color: #000000; }
  
  /* Section Cards */
  .section-card {
    background: #FFFFFF;
    border: 1px solid #DDDDDD;
    box-shadow: none;
  }
  
  /* Section Header */
  .section-header {
    background: #F5F5F5;
    border-bottom: 2px solid #333333;
  }
  
  /* Section Number */
  .section-number {
    background: #333333;
    color: #FFFFFF;
  }
  
  /* Text */
  h1, h2, h3, h4, h5, h6, p, span, label {
    color: #000000;
  }
  
  /* Gradient Text */
  .hero-title, .guide-header h2 {
    -webkit-text-fill-color: #333333;
  }
  
  /* Inputs */
  input {
    background: #FFFFFF;
    border: none;
    border-bottom: 1px solid #333333;
    color: #000000;
  }
  
  /* Tables */
  .data-table {
    border: 1px solid #333333;
  }
  
  .data-table th {
    background: #F0F0F0;
    color: #333333;
  }
  
  .data-table td {
    color: #333333;
    border-bottom: 1px solid #DDDDDD;
  }
  
  /* Page Setup */
  @page {
    margin: 0.75in;
    size: letter portrait;
  }
}
13. Z-Index Scale
--z-base: 1;
--z-dropdown: 100;
--z-sticky: 200;
--z-fixed: 300;
--z-modal-backdrop: 400;
--z-modal: 500;
--z-popover: 600;
--z-tooltip: 700;
14. Complete CSS Variables (Copy-Paste Ready)
:root {
  /* Colors - Base */
  --color-white: #FFFFFF;
  --color-black: #000000;
  
  /* Colors - Background */
  --bg-primary-start: #1A1A2E;
  --bg-primary-end: #16213E;
  --bg-card: rgba(255, 255, 255, 0.03);
  --bg-card-hover: rgba(255, 255, 255, 0.05);
  --bg-input: rgba(0, 0, 0, 0.3);
  --bg-input-focus: rgba(148, 75, 236, 0.1);
  
  /* Colors - Glassmorphism */
  --glass-bg: rgba(255, 255, 255, 0.05);
  --glass-border: rgba(255, 255, 255, 0.1);
  
  /* Colors - Accents */
  --accent-blue: #415BD2;
  --accent-purple: #944BEC;
  --accent-cyan: #4BBFEC;
  --accent-pink: #EC4B9B;
  --accent-yellow: #ECB94B;
  
  /* Colors - Text */
  --text-primary: #FFFFFF;
  --text-secondary: rgba(255, 255, 255, 0.85);
  --text-muted: rgba(255, 255, 255, 0.6);
  --text-hint: rgba(255, 255, 255, 0.4);
  
  /* Typography */
  --font-family: 'Clash Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
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
  --weight-normal: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;
  
  /* Spacing */
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
  
  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.15);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.2);
  --shadow-glow: 0 0 20px rgba(148, 75, 236, 0.3);
  --shadow-focus: 0 0 0 3px rgba(148, 75, 236, 0.2);
  
  /* Transitions */
  --transition-fast: 150ms;
  --transition-base: 200ms;
  --transition-slow: 300ms;
}