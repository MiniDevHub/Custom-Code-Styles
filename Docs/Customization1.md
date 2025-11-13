# 🎨 Customization Guide

## Quick Customizations

### 🎭 Change Welcome Message

Edit `styles/CustomJavascript.js`:

```javascript
const GLITCH_CONFIG = {
  message: "⚡ Welcome back, YOUR_NAME ⚡",
  // Add custom messages for different times
  // morning: "☕ Good morning, YOUR_NAME ☕",
  // evening: "🌙 Good evening, YOUR_NAME 🌙",
};
```

### 🌈 Modify Color Scheme

Edit `styles/CustomCSS.css` - Add at the top:

```css
:root {
  --glow-green: #00ff00; /* Matrix green */
  --glow-cyan: #00ffff; /* Cyan highlights */
  --glow-purple: #ff00ff; /* Purple accents */
  --glow-gold: #ffd700; /* Golden hover */
  --glow-red: #ff0000; /* Error/danger */
}
```

### 🖼️ Change Background Wallpaper

1. Add your image to `assets/` folder
2. Update in `CustomCSS.css`:

```css
.monaco-workbench::before {
  background-image: url("/path/to/your/wallpaper.jpg") !important;
  opacity: 0.3 !important; /* Adjust transparency */
}
```

### 👤 Personalize Activity Bar Icons

Replace profile picture:

```css
.codicon-accounts-view-bar-icon:before {
  background-image: url("/path/to/your/photo.jpg") !important;
}
```

---

## Advanced Customizations

### 🌧️ Matrix Rain Configuration

Adjust the matrix effect in `CustomJavascript.js`:

```javascript
const MATRIX_CONFIG = {
  charCount: 200, // Number of falling characters
  minDelay: 0, // Start delay (seconds)
  maxDelay: 4, // Max delay before falling
  minDuration: 3, // Min fall time (seconds)
  maxDuration: 5, // Max fall time
  charRange: 96, // Character variety
  baseChar: 0x30a0, // Starting Unicode point

  // Custom character sets
  customChars: "01アカサタナハマヤラワ",

  // Special characters that appear rarely
  specialChars: ["⚡", "🔥", "💀", "👾", "🎯", "💚", "🚀"],
  specialChance: 0.1, // 10% chance for special char
};
```

### ⚡ Animation Timings

Control animation speeds:

```css
/* Tab slide animation */
@keyframes tabSlideIn {
  0% {
    opacity: 0;
    transform: translateX(-30rem); /* Distance */
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Adjust animation duration */
.monaco-workbench .tabs-container {
  animation: tabSlideIn 2s !important; /* Change from 3s */
}
```

### 🔮 Command Palette Style

Customize the command palette appearance:

```css
.quick-input-widget {
  /* Size */
  min-width: 50vw !important; /* Smaller width */
  min-height: 40vh !important; /* Smaller height */

  /* Colors */
  background: rgba(0, 0, 0, 0.9) !important;
  border: 2px solid #00ff00 !important;

  /* Effects */
  backdrop-filter: blur(10px) !important; /* More blur */
  box-shadow: 0 0 30px #00ff00 !important; /* Green glow */
}
```

### 📁 File Explorer Themes

Different hover effects for files:

```css
/* Rainbow hover */
.monaco-list-row:hover {
  background: linear-gradient(
    90deg,
    rgba(255, 0, 0, 0.3),
    rgba(255, 255, 0, 0.3),
    rgba(0, 255, 0, 0.3),
    rgba(0, 255, 255, 0.3),
    rgba(255, 0, 255, 0.3)
  ) !important;
}

/* Pulse effect */
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.monaco-list-row:hover {
  animation: pulse 1s infinite;
}
```

---

## Creating Your Own Theme Variant

### 1. Cyberpunk Theme

```css
:root {
  --primary: #ff0099;
  --secondary: #00ffff;
  --background: #0a0a0a;
  --neon-glow: 0 0 20px;
}

/* Apply theme */
.monaco-workbench {
  --vscode-editor-background: var(--background);
  filter: saturate(1.2) contrast(1.1);
}
```

### 2. Nature Theme

```css
:root {
  --primary: #4caf50;
  --secondary: #8bc34a;
  --background: #1a1a1a;
  --soft-glow: 0 0 10px;
}

/* Soft green glow */
.monaco-editor .cursor {
  box-shadow: var(--soft-glow) var(--primary) !important;
}
```

### 3. Minimalist Theme

```css
/* Remove animations */
* {
  animation: none !important;
  transition: none !important;
}

/* Simple colors */
:root {
  --primary: #ffffff;
  --secondary: #666666;
}

/* Clean borders */
.monaco-workbench * {
  border-radius: 0 !important;
  box-shadow: none !important;
}
```

---

## Performance Modes

### 🚀 High Performance Mode

Reduce visual effects for better performance:

```javascript
// In CustomJavascript.js

// Minimal matrix rain
const MATRIX_CONFIG = {
  charCount: 50,
  maxDelay: 2,
  maxDuration: 3,
};

// Disable welcome animation
// Comment out the entire splash screen section
```

### 🎨 Ultra Mode

Maximum visual effects (requires good GPU):

```javascript
// Maximum matrix rain
const MATRIX_CONFIG = {
  charCount: 500,
  specialChance: 0.3, // More special characters
};

// Add more particles
for (let i = 0; i < MATRIX_CONFIG.charCount; i++) {
  // Existing code
}
```

### 🔋 Battery Saver Mode

For laptop users:

```css
/* Disable all animations */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}

/* Reduce blur effects */
.monaco-workbench * {
  backdrop-filter: none !important;
  filter: none !important;
}
```

---

## Custom Snippets

Add your own snippets to `snippets/` folder:

```json
{
  "Custom Welcome": {
    "prefix": "welcome",
    "body": ["console.log('⚡ Welcome to the Matrix, ${1:Neo} ⚡');"],
    "description": "Matrix welcome message"
  }
}
```

---

## Sharing Your Customization

1. Fork the repository
2. Make your changes
3. Update README with your variant
4. Submit a Pull Request

---

## FAQ

**Q: Can I use multiple themes?**
A: Yes! Create theme files and switch between them by changing imports in settings.json

**Q: How do I backup my settings?**
A: Copy your entire Custom-Code-Styles folder and settings.json

**Q: Can I disable specific effects?**
A: Yes, comment out sections in CSS/JS files or use configuration objects

**Q: Will this slow down my VS Code?**
A: Depends on your hardware. Use Performance Mode if needed

Happy customizing! 🎨✨

---
