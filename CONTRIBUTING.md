<div align="center">

# 🤝 Contributing to MrDib's Custom Code Styles

**First off, thanks for considering contributing!** 🎉

Your contributions make the open-source community amazing!

</div>

---

## 📋 Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [How Can I Contribute?](#-how-can-i-contribute)
- [Contribution Workflow](#-contribution-workflow)
- [Style Guidelines](#-style-guidelines)
- [Commit Convention](#-commit-convention)
- [Pull Request Process](#-pull-request-process)

---

## 🌟 Code of Conduct

### MrDib's Golden Rules

1. **Be respectful** - We're all learning here
2. **Be constructive** - Criticism should help, not hurt
3. **Be inclusive** - Everyone's welcome, regardless of experience level
4. **Be patient** - MrDib reviews PRs when caffeinated ☕
5. **Have fun** - Coding should be enjoyable!

### What We Don't Tolerate

- ❌ Harassment or discriminatory behavior
- ❌ Trolling or insulting comments
- ❌ Political or off-topic discussions
- ❌ Spam or self-promotion
- ❌ Publishing others' private information

**Violations:** Will result in warnings or bans. Keep it professional!

---

## 💡 How Can I Contribute?

### 🐛 Found a Bug?

**Before submitting:**

1. Check [existing issues](https://github.com/MiniDevHub/Custom-Code-Styles/issues)
2. Make sure it's actually a bug (not a feature!)
3. Verify it's reproducible

**When submitting:**

**Title:** [BUG] Short description

**Description:**

- What happened?
- What did you expect?
- Steps to reproduce
- Screenshots (if applicable)

**Environment:**

- OS: macOS 14.0 / Windows 11 / Ubuntu 22.04
- VS Code Version: 1.85.0
- Extensions: List relevant ones

**Example:**

**Title:** [BUG] Matrix rain characters overlap on small screens

**Description:**
Matrix rain characters overlap and become unreadable on screens < 1366px width.

**Steps to reproduce:**

1. Open VS Code on 1280x720 screen
2. Wait for matrix rain
3. Characters overlap

**Expected:** Characters should distribute evenly
**Actual:** Characters cluster in center

**Environment:**

- OS: macOS 14.0
- VS Code: 1.85.0
- Screen: 1280x720

---

### ✨ Want to Add a Feature?

**Before coding:**

1. Open an issue to discuss the feature
2. Wait for MrDib's feedback (usually within 48 hours)
3. Get approval before investing time

**Feature request template:**

**Title:** [FEATURE] Short description

**Problem:**
What problem does this solve?

**Solution:**
How would it work?

**Alternatives:**
What alternatives did you consider?

**Additional Context:**
Mockups, screenshots, code examples

**Example:**

**Title:** [FEATURE] Add light mode theme variant

**Problem:**
Some users prefer light themes during daytime

**Solution:**
Create CustomCSS-Light.css with light color scheme

- White backgrounds
- Dark text
- Softer glows

**Alternatives:**

- Auto-switch based on time
- Toggle button in activity bar

**Additional Context:**
[Screenshot of mockup]

---

### 📝 Improving Documentation?

Documentation improvements are **always welcome!**

**Easy contributions:**

- Fix typos
- Clarify confusing sections
- Add examples
- Update outdated info
- Add screenshots/GIFs

**No issue needed for:**

- Typo fixes
- Small clarifications
- Link fixes
- Formatting improvements

**Just submit a PR!**

---

### 🎨 Want to Share Your Customization?

**We'd love to see it!**

**Create a showcase:**

1. Fork the repo
2. Create `Themes/YourTheme/` folder
3. Add your `CustomCSS.css` variant
4. Include screenshots
5. Add README explaining your theme
6. Submit PR to `Themes/` directory

**Example structure :**

```
Themes/
├── Ocean-Blue/
│   ├── CustomCSS.css
│   ├── README.md
│   └── screenshot.png
└── Sunset-Orange/
    ├── CustomCSS.css
    ├── README.md
    └── screenshot.png
```

---

## 🔄 Contribution Workflow

### Step-by-Step Guide

**1. Fork the Repository**

```bash
# Click "Fork" on GitHub
# Clone YOUR fork
git clone https://github.com/YOUR_USERNAME/Custom-Code-Styles.git
cd Custom-Code-Styles
```

**2. Create a Branch**

```bash
# Create feature branch
git checkout -b feature/awesome-feature

# Or bugfix branch
git checkout -b fix/bug-description
```

**Branch naming:**

- `feature/feature-name` - New features
- `fix/bug-description` - Bug fixes
- `docs/what-changed` - Documentation
- `style/what-improved` - Code style
- `refactor/what-refactored` - Refactoring
- `perf/what-optimized` - Performance

**3. Make Your Changes**

```bash
# Edit files
code .

# Test your changes
# - Apply Custom CSS
# - Restart VS Code
# - Verify everything works
# - Test on different screen sizes
```

**4. Commit Your Changes**

```bash
# Stage changes
git add .

# Commit with conventional commit format
git commit -m "feat(css): add ocean blue color scheme"
```

**5. Push to Your Fork**

```bash
git push origin feature/awesome-feature
```

**6. Open a Pull Request**

1. Go to original repo on GitHub
2. Click "Pull Requests" → "New Pull Request"
3. Click "Compare across forks"
4. Select your branch
5. Fill out PR template
6. Submit!

---

## 🎨 Style Guidelines

### CSS Guidelines

**Formatting:**

```css
/* ✅ GOOD: Organized, commented, consistent */

/* INFO: Purpose of this section */
.selector {
  property: value !important;
  another-property: value;
  /* Add !important only when necessary */
}

/* Consistent spacing */
.element {
  margin: 0 !important;
  padding: 10px !important;
}

/* Group related properties */
.component {
  /* Positioning */
  position: absolute;
  top: 0;
  left: 0;

  /* Box model */
  width: 100%;
  height: 100%;

  /* Visual */
  background: transparent;
  border-radius: 25px;

  /* Animation */
  transition: all 0.3s ease;
}
```

```css
/* ❌ BAD: No comments, inconsistent */
.x {
  background: red;
  margin: 0;
  padding: 0;
  border: none;
}
.y {
  background: blue;
  margin: 10px;
  padding: 5px;
}
```

**Best practices:**

- Use `!important` sparingly
- Add comments for complex selectors
- Group by section with headers
- Consistent indentation (2 spaces)
- One property per line

---

### JavaScript Guidelines

**Formatting:**

```javascript
// ✅ GOOD: Clear, documented, modular

// INFO: What this function does
function createEffect(element, config) {
  const { duration, delay, color } = config;

  // Clear variable names
  const effectElement = document.createElement("div");

  // Organized object assignment
  Object.assign(effectElement.style, {
    position: "absolute",
    opacity: "0",
    transition: `all ${duration}ms ease`,
  });

  return effectElement;
}

// Configuration objects
const CONFIG = {
  duration: 300,
  delay: 100,
  color: "#00ff00",
};
```

```javascript
// ❌ BAD: Unclear, no comments
function x(e, c) {
  let d = c.d;
  let y = c.y;
  const z = document.createElement("div");
  z.style.position = "absolute";
  z.style.opacity = "0";
  return z;
}
```

**Best practices:**

- Use `const` and `let`, never `var`
- Descriptive variable names
- Add INFO comments
- Use ES6+ features (arrow functions, destructuring)
- Handle errors gracefully

---

### Markdown Guidelines

**Formatting:**

✅ GOOD:

# Title (H1)

## Section (H2)

### Subsection (H3)

**Bold for emphasis**
_Italic for terms_

- Unordered list
- With items

1. Ordered list
2. Sequential items

`Inline code`

```bash
# Code blocks with language
command here
```

> Blockquote for important notes

❌ BAD:

Title
with random formatting
_everywhere_ and **no** structure

---

### Documentation Guidelines

**MrDib's Documentation Principles:**

1. **Explain why, not just what**

   ```markdown
   ❌ "Set opacity to 0.3"
   ✅ "Set opacity to 0.3 for subtle background that doesn't distract from code"
   ```

2. **Provide examples**

   ❌ "You can customize colors"
   ✅ "You can customize colors:

   ```css
   :root {
     --glow-green: #00ff00;
   }
   ```

3. **Use visuals when helpful**

   - Screenshots for UI changes
   - GIFs for animations
   - Diagrams for complex concepts

4. **Keep it friendly**
   - Use "you" not "the user"
   - Add emojis for personality 😊
   - Make it fun to read!

---

## 📝 Commit Convention

### Commit Message Format

```
<type>(<scope>): <subject>

<body> (optional)

<footer> (optional)
```

### Types

| Type       | When to Use   | Example                                   |
| ---------- | ------------- | ----------------------------------------- |
| `feat`     | New feature   | `feat(css): add ocean theme`              |
| `fix`      | Bug fix       | `fix(js): resolve matrix rain overlap`    |
| `docs`     | Documentation | `docs(readme): update installation steps` |
| `style`    | Code style    | `style(css): format with prettier`        |
| `refactor` | Refactoring   | `refactor(js): simplify glitch function`  |
| `perf`     | Performance   | `perf(css): reduce animation count`       |
| `test`     | Tests         | `test(unit): add animation tests`         |
| `chore`    | Maintenance   | `chore(deps): update dependencies`        |
| `build`    | Build system  | `build(vite): update build config`        |
| `ci`       | CI/CD         | `ci(github): add auto-deploy action`      |
| `revert`   | Revert        | `revert: revert feat(css) commit`         |

### Scope

Common scopes:

- `css` - CustomCSS.css changes
- `js` - CustomJavascript.js changes
- `config` - Settings, keybindings, extensions
- `docs` - Documentation
- `assets` - Images, visual resources
- `snippets` - Code snippets

### Examples

```bash
# Good commits ✅
git commit -m "feat(css): add purple glow theme variant"
git commit -m "fix(js): prevent matrix rain on mobile devices"
git commit -m "docs(readme): add screenshots of new features"
git commit -m "style(css): organize selectors by component"
git commit -m "perf(js): reduce matrix character count by 50%"
git commit -m "refactor(css): extract colors to CSS variables"
git commit -m "chore(assets): compress images to reduce file size"

# Bad commits ❌
git commit -m "update stuff"
git commit -m "fix"
git commit -m "changes"
git commit -m "wip"
git commit -m "asdfghjkl"
```

### Commit Message Body (Optional)

For complex changes:

```bash
git commit -m "feat(css): add dynamic color theme system

- Add CSS custom properties for colors
- Create theme variants (dark, light, cyberpunk)
- Add theme switcher in activity bar
- Update documentation with theme guide

Closes #123"
```

---

## 🔀 Pull Request Process

### Before Submitting

**Checklist:**

- [ ] Tested on your local VS Code
- [ ] No console errors
- [ ] Updated relevant documentation
- [ ] Added comments to code
- [ ] Follows style guidelines
- [ ] Screenshots added (if visual change)
- [ ] No merge conflicts
- [ ] Descriptive PR title and description

### PR Template

```markdown
## 🎯 What does this PR do?

Brief description of changes

## 🔗 Related Issue

Fixes #123
Closes #456

## 🎨 Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## 📸 Screenshots (if applicable)

**Before:**
[Image]

**After:**
[Image]

## ✅ Checklist

- [ ] Code follows style guidelines
- [ ] Self-reviewed my code
- [ ] Commented complex code
- [ ] Updated documentation
- [ ] No new warnings
- [ ] Tested on macOS/Windows/Linux (check applicable)
- [ ] Added screenshots for visual changes

## 💬 Additional Notes

Any other context or information
```

### Review Process

1. **MrDib reviews** (usually within 48 hours)
2. **Feedback provided** (if changes needed)
3. **You update** the PR
4. **Re-review**
5. **Merge!** 🎉

### After Merge

- Your contribution is live!
- You're added to contributors list
- Eternal gratitude from MrDib 💚

---

## 🎯 Contribution Ideas

### 🟢 Good First Issues

**Easy contributions for beginners:**

- Fix typos in documentation
- Add screenshots to README
- Improve comments in CSS/JS
- Add new color scheme variants
- Create new snippets
- Translate documentation (Hindi, Spanish, etc.)
- Add examples to customization guide

**Labels:** `good first issue`, `documentation`, `help wanted`

---

### 🟡 Intermediate Contributions

**For those with some experience:**

- Optimize CSS selectors
- Improve animation performance
- Add new visual effects
- Create alternative themes
- Enhance JavaScript features
- Add unit tests
- Improve error handling
- Create video tutorials

**Labels:** `enhancement`, `performance`, `feature`

---

### 🔴 Advanced Contributions

**For the pros:**

- Cross-platform compatibility fixes
- Performance profiling and optimization
- Advanced animation systems
- Theme engine refactoring
- Automated testing setup
- CI/CD pipeline
- Extension development
- WebGL effects

**Labels:** `advanced`, `architecture`, `performance`

---

## 🎨 Specific Contribution Areas

### 🌈 New Color Themes

**What we're looking for:**

- Complete color schemes
- Consistent styling
- Screenshots/preview
- Theme README

**Structure:**

```
Themes/YourThemeName/
├── CustomCSS.css       → Your variant
├── config.json         → Theme metadata
├── screenshot.png      → Preview image
└── README.md           → Theme documentation
```

**Theme config.json:**

```json
{
  "name": "Ocean Blue",
  "author": "YourName",
  "description": "Calm ocean-inspired theme",
  "primaryColor": "#0077be",
  "accentColor": "#00d4ff",
  "backgroundColor": "#001a33",
  "preview": "screenshot.png"
}
```

---

### ✂️ New Snippets

**What we need:**

- Language-specific snippets
- Clear, useful prefixes
- Good documentation

**File location:** `Snippets/[Language].json`

**Example snippet:**

```json
{
  "React Functional Component": {
    "prefix": "rfc",
    "body": [
      "import React from 'react';",
      "",
      "function ${1:ComponentName}() {",
      "  return (",
      "    <div>",
      "      $0",
      "    </div>",
      "  );",
      "}",
      "",
      "export default ${1:ComponentName};"
    ],
    "description": "Create React functional component"
  }
}
```

---

### 📚 Documentation Improvements

**We need help with:**

- Beginner-friendly explanations
- Step-by-step tutorials
- Video guides
- FAQ expansion
- Platform-specific guides
- Translation to other languages

**Documentation standards:**

- Clear headings
- Code examples
- Screenshots when helpful
- Friendly tone
- Emojis for visual scanning 👀

---

### 🔧 Code Improvements

**Areas needing work:**

**Performance:**

- Optimize matrix rain generation
- Reduce CSS specificity
- Lazy load assets
- Debounce event listeners

**Features:**

- Add theme switcher
- Create settings UI
- Add more animations
- Improve mobile support

**Code quality:**

- Add JSDoc comments
- Extract magic numbers to constants
- Improve error handling
- Add fallbacks for missing assets

---

## 🧪 Testing Guidelines

### Before Submitting PR

**Test on:**

- [ ] **macOS** (if possible)
- [ ] **Windows** (if possible)
- [ ] **Linux** (if possible)

**Test scenarios:**

- [ ] Fresh install
- [ ] Updating from previous version
- [ ] Different screen resolutions
- [ ] With/without recommended extensions
- [ ] Light and dark system themes

**Check for:**

- [ ] No console errors
- [ ] No broken images
- [ ] Animations work smoothly
- [ ] No performance degradation
- [ ] Works with latest VS Code

### Reporting Test Results

```markdown
**Tested on:**

- ✅ macOS 14.0 (Sonoma) - Works perfectly
- ✅ Windows 11 - Works with minor lag
- ⚠️ Ubuntu 22.04 - Matrix rain too fast (need to adjust timing)

**Issues found:**

- None on macOS
- Slight animation lag on Windows (acceptable)
- Matrix rain speed issue on Linux (will fix)
```

---

## 📦 File-Specific Guidelines

### CustomCSS.css

```css
/* ═══════════════════════════════════════════ */
/* Always add section headers                  */
/* ═══════════════════════════════════════════ */

/* INFO: Explain what this does and why */
.selector {
  property: value !important;
}

/* Group related selectors */
.selector-1,
.selector-2,
.selector-3 {
  shared-property: value;
}

/* Use consistent units */
margin: 10px; /* Not: margin: 10; */
opacity: 0.3; /* Not: opacity: .3; */
```

### CustomJavascript.js

```javascript
/* ═══════════════════════════════════════════ */
/* Use configuration objects                   */
/* ═══════════════════════════════════════════ */

const CONFIG = {
  duration: 3000,
  delay: 500,
  enabled: true,
};

// INFO: Clear comments explaining logic
function doSomething() {
  // Implementation
}

/* ═══════════════════════════════════════════ */
/* Clean up after yourself                     */
/* ═══════════════════════════════════════════ */

setTimeout(() => {
  element.remove();
  console.log("✨ Cleanup complete");
}, 5000);
```

### Markdown Documentation

```markdown
# Use H1 for title

## Use H2 for main sections

### Use H3 for subsections

**Bold** for emphasis
_Italic_ for terms
`Code` for commands

- Bullet points
- For lists

> Blockquotes for important notes

---

Horizontal rules to separate sections
```

---

## 🏆 Recognition

### Contributors Wall of Fame

All contributors are:

- ✨ Listed in README
- 🏆 Added to CONTRIBUTORS.md
- 💚 Thanked personally by MrDib
- 🎉 Celebrated in release notes

### Significant Contributions

**Special recognition for:**

- Major features
- Extensive documentation
- Performance improvements
- Bug fixes that save the day

**You might get:**

- Mentioned in release tweets
- Featured in README
- Coffee ☕ (if we meet IRL)

---

## 📞 Getting Help (911)

### Questions?

**Before asking:**

1. Read the documentation
2. Search existing issues
3. Check troubleshooting guide

**Still stuck?**

- Open a [discussion](https://github.com/MiniDevHub/Custom-Code-Styles/discussions)
- Tag with `question` label
- Be specific and provide context

**Response time:**

- Usually within 48 hours
- Faster for critical bugs
- Slower on weekends (MrDib needs coffee breaks ☕)

---

## 🎓 Learning Resources

### Want to Learn?

**CSS:**

- [MDN CSS Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Tricks](https://css-tricks.com/)

**JavaScript:**

- [JavaScript.info](https://javascript.info/)
- [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**VS Code Extension API:**

- [VS Code API](https://code.visualstudio.com/api)
- [Custom CSS Extension Docs](https://github.com/be5invis/vscode-custom-css)

**Git & GitHub:**

- [GitHub Docs](https://docs.github.com/)
- [Learn Git Branching](https://learngitbranching.js.org/)

---

## 🎯 Project Roadmap

### Upcoming Features (Help Welcome!)

**Version 3.0:**

- [ ] Theme switcher UI
- [ ] Multiple theme presets
- [ ] Performance mode toggle
- [ ] Better mobile support
- [ ] Extension marketplace submission

**Version 3.5:**

- [ ] Theme marketplace
- [ ] Live preview
- [ ] Cloud sync for settings
- [ ] Community themes integration

**Future:**

- [ ] VS Code extension
- [ ] GUI customization tool
- [ ] Theme generator
- [ ] Video tutorials

**Want to work on any of these?** Open an issue!

---

## 💬 Communication Channels

### GitHub

- **Issues:** Bug reports, feature requests
- **Discussions:** Questions, ideas, show & tell
- **Pull Requests:** Code contributions

### Social Media

- **Twitter/X:** @MrDib (share your setups!)
- **Discord:** Coming soon!
- **Email:** Only for private matters

---

<div align="center">

## 🙏 Thank You!

</div>

Every contribution, no matter how small, makes this project better for everyone!

**Your contributions help:**

- 🌟 Make VS Code more beautiful
- 📚 Improve documentation
- 🐛 Fix bugs faster
- ✨ Add new features
- 💚 Build an awesome community

---

<div align="center">

## 🚀 Ready to Contribute?

**Pick an issue, fork the repo, and let's make VS Code awesome together!**

---

```
  ╔═══════════════════════════════════╗
  ║  Every PR is a gift! 🎁           ║
  ║  Every bug report helps! 🐛       ║
  ║  Every star motivates! ⭐         ║
  ╚═══════════════════════════════════╝
```

---

Made with 💚 by MrDib and contributors

**Contributors:** See [CONTRIBUTORS.md](CONTRIBUTORS.md)

[Main README](README.md) | [Report Bug](https://github.com/MiniDevHub/Custom-Code-Styles/issues) | [Request Feature](https://github.com/MiniDevHub/Custom-Code-Styles/issues)

</div>
