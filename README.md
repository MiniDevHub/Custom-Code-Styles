# 💅 VS Code Custom CSS & JS 💻

This repo contains my personal customizations for Visual Studio Code using the legendary [Custom CSS and JS Loader](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css) extension.

These styles are designed to:
- Add a modern, aesthetic twist to the UI
- Enhance focus and usability
- Inject **chaotic good energy** into a boring editor

---

## 🧠 What’s Inside

- `custom.css` – Pure style, baby. Themes, blur effects, layout tweaks, neon glow-ups... you name it.
- `custom.js` – DOM wizardry. JS that changes how VS Code behaves, adds UI interactivity, or auto-hacks elements for power users.
- Optionally a `screenshots/` folder with before-after proof of how slick it looks.

---

## 🚀 How to Use

> **⚠️ Warning:** This breaks VS Code's TOS. Use at your own risk. You may need to re-enable extensions if VS Code updates itself.

1. Install the extension:  
   [Custom CSS and JS Loader](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css)

2. Open VS Code `settings.json` and add:

   ```json
   "vscode_custom_css.imports": [
       "file:///absolute/path/to/custom.css",
       "file:///absolute/path/to/custom.js"
   ],
   "vscode_custom_css.policy": true
