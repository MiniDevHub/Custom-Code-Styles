<div align="center">

# 🎨 Custom Code Styles - VS Code on Steroids

![VS Code](https://img.shields.io/badge/VS%20Code-1.85+-blue?style=for-the-badge&logo=visual-studio-code)
![CSS3](https://img.shields.io/badge/CSS3-Custom-orange?style=for-the-badge&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-Enhanced-yellow?style=for-the-badge&logo=javascript)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

**Transform your VS Code from a text editor into a cyberpunk command center 🚀**

[Installation](#-installation) • [Features](#-features) • [Customization](#-customization)

</div>

---

## 🌟 What's This Sorcery?

Welcome to my personal VS Code transformation kit! This isn't just a theme - it's a complete visual overhaul that turns your boring code editor into a **neon-soaked, glass-morphed, animation-filled powerhouse** that would make any sci-fi movie jealous.

### ✨ Key Features

- 🌈 **Glowing Animations** - Text that pulses with life, tabs that slide like butter
- 🎭 **Matrix Rain Effect** - Because every coder needs to feel like Neo sometimes
- 💎 **Glass Morphism** - Transparent panels with that premium frosted glass look
- ⚡ **Custom Welcome Screen** - Glitch text animation that greets you by name
- 🎨 **Neon Highlights** - Words glow cyan, selections shimmer green
- 🔮 **Command Palette Blur** - Background dims when searching, because focus matters
- 👤 **Personalized Activity Bar** - Your photo as the account icon (narcissistic? maybe. cool? definitely.)
- 🌊 **Smooth Transitions** - Everything animates smoothly, no jarring movements

---

## 📦 What's in the Box?

```
🎁 The Complete Package
├── 💅 CustomCSS.css       → Visual magic (transparency, glow, animations)
├── 🧙 CustomJavascript.js → Interactive wizardry (matrix rain, welcome screen)
├── 🎨 Custom Assets       → Wallpapers, icons, and visual elements
├── ⚙️ Settings.json       → My complete VS Code configuration
├── ✂️ Snippets            → 200+ snippets for Java & HTML
└── 📚 Documentation       → Everything you need to know
```

---

## 🚀 Installation

### Prerequisites

1. **VS Code** (v1.85 or higher)
2. **Required Extensions:**
   ```bash
   code --install-extension be5invis.vscode-custom-css
   code --install-extension brandonkirbyson.vscode-animations
   ```

### Quick Start

1. **Clone this repository:**

   ```bash
   git clone https://github.com/MiniDevHub/Custom-Code-Styles.git
   cd Custom-Code-Styles
   ```

2. **Copy assets to your custom directory:**

   ```bash
   # macOS/Linux
   cp -r assets ~/Documents/Code/CustomCode/

   # Windows
   xcopy assets %USERPROFILE%\Documents\Code\CustomCode\ /E
   ```

3. **Update your VS Code settings.json:**

   ```json
   {
     "vscode_custom_css.imports": [
       "file:///path/to/Custom-Code-Styles/styles/CustomCSS.css",
       "file:///path/to/Custom-Code-Styles/styles/CustomJavascript.js"
     ],
     "vscode_custom_css.policy": true
   }
   ```

4. **Enable Custom CSS:**
   - Open Command Palette (`Cmd/Ctrl + Shift + P`)
   - Run: `Enable Custom CSS and JS`
   - Restart VS Code
   - Enjoy the magic! ✨

> ⚠️ **Note:** VS Code will show a warning about corrupt installation. This is normal - the extension modifies core files. Click "Don't Show Again" and carry on.

---

## 🎮 Features Breakdown

### 🌐 The Matrix Has You

Every time VS Code starts, you're greeted with cascading Katakana characters and a glitched welcome message. It's not just eye candy - it's a daily reminder that you're not just coding, you're **hacking the matrix**.

### 🔍 Command Palette Glass Effect

When you hit `Cmd/Ctrl + P`, the background blurs into a dreamy haze, making the command palette float like a holographic interface from the future.

### 📁 File Explorer Glow

Files don't just sit there - they pulse with a rainbow glow animation. Hover over them and watch them transform with golden highlights. Selected files get a cyan aura because why not?

### 🎯 Custom Icons Everywhere

- **Account icon** → Your actual photo (round, with perfect borders)
- **Settings icon** → Custom gear graphic
- **Error icons** → Custom error lens graphics

### 💫 Tab Animations

Tabs slide in from the left when opened, slide out when closed. It's subtle, smooth, and satisfying.

---

## 🎨 Customization Guide

### Change Your Name in Welcome Message

Edit `styles/CustomJavascript.js`, find:

```javascript
const GLITCH_CONFIG = {
  message: "⚡ Welcome back, Dibakar ⚡",
  // ...
};
```

### Modify Color Scheme

The main colors are defined in `styles/CustomCSS.css`:

```css
/* Primary Colors */
--glow-green: #00ff00;
--glow-cyan: #00ffff;
--glow-purple: #ff00ff;
--glow-gold: #ffd700;
```

### Add Your Own Assets

1. Place images in `assets/` folder
2. Update paths in CSS/JS files
3. Commit and push!

---

## 🛠️ Troubleshooting

| Issue                    | Solution                                    |
| ------------------------ | ------------------------------------------- |
| **"VS Code is corrupt"** | Normal! Click "Don't Show Again"            |
| **Styles not loading**   | Check file paths are absolute, not relative |
| **Lost after update**    | Re-run "Enable Custom CSS and JS" command   |
| **Performance issues**   | Reduce animation count in JS config         |

For more issues, check [TROUBLESHOOTING.md](Docs/TROUBLESHOOTING.md)

---

## 🤝 Contributing

Got cool ideas? Found a bug? Want to add more animations?

1. Fork this repo
2. Create your feature branch (`git checkout -b feature/MoreNeon`)
3. Commit changes (`git commit -m 'Add cyberpunk scrollbars'`)
4. Push (`git push origin feature/MoreNeon`)
5. Open a Pull Request

---

## 📜 License

MIT - Do whatever you want with this. If you make something cooler, just let me know!

---

## 🙏 Credits

- **VS Code Team** - For making an editor worth customizing
- **Custom CSS Extension** - The real MVP enabling this madness
- **The Matrix** - For the inspiration (and the Katakana)
- **Coffee** ☕ - None of this would exist without you

---

## 💬 Final Words

> "Your VS Code is a reflection of your soul. Mine apparently has RGB lighting and thinks it's in a cyberpunk movie."
>
> — MrDib, 2024

<div align="center">

**If you like this setup, drop a ⭐ on the repo!**

Made with 💚 and probably too much caffeine

[Report Bug](https://github.com/MiniDevHub/Custom-Code-Styles/issues) • [Request Feature](https://github.com/MiniDevHub/Custom-Code-Styles/issues)

</div>

---

<div align="center">
  <img src="https://forthebadge.com/images/badges/powered-by-electricity.svg" />
  <img src="https://forthebadge.com/images/badges/built-with-love.svg" />
  <img src="https://forthebadge.com/images/badges/ctrl-c-ctrl-v.svg" />
</div>

---
