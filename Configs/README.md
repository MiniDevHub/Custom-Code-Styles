<div align="center">

# ⚙️ MrDib's VS Code Configuration Files

**The secret sauce behind the magic** ✨

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Extensions.json](#-extensionsjson)
- [KeyBindings.json](#️-keybindingsjson)
- [Settings.json](#️-settingsjson)
- [Installation Guide](#-installation-guide)
- [Customization Tips](#-customization-tips)

---

## 🌟 Overview

This directory contains **MrDib's complete VS Code configuration** - the result of years of refinement, countless hours of tweaking, and probably too much coffee. These configs transform VS Code from a simple text editor into a **professional-grade development powerhouse**.

```
Configs/
├── Extensions.json     → 60+ recommended extensions
├── KeyBindings.json    → Custom keyboard shortcuts
└── Settings.json       → 2,000+ lines of perfection
```

---

## 📦 Extensions.json

**60+ carefully curated extensions organized by category**

### What's Inside?

- 🎨 **Visual Enhancements** - Themes, icons, animations
- ⚠️ **Error Detection** - Linters, spell checkers
- 💅 **Code Formatting** - Prettier, Black, Clang-Format
- 💬 **Comments** - Better Comments, JSDoc tools
- 🏃 **Execution** - Code Runner, debuggers
- 📦 **Languages** - Python, Java, JavaScript, React, Vue, Angular, Go, Rust, PHP, Ruby
- 🐙 **Git Tools** - GitLens, Git Graph, Git History
- 🚀 **Productivity** - Path IntelliSense, Auto Rename Tag, Bookmarks
- 🤖 **AI Assistants** - GitHub Copilot, Tabnine, Codeium
- 📸 **Screenshots** - CodeSnap, Polacode
- 📊 **Data Tools** - CSV viewer, Excel viewer, Draw.io
- 🔒 **Security** - Secret detection, DotENV support
- 📝 **Markdown** - Enhanced preview, linting
- 🧪 **Testing** - Jest, Test Explorer, Coverage
- 🌐 **Web Dev** - Live Server, REST Client, Color Picker
- ⚙️ **Config Tools** - Project Manager, EditorConfig

### Quick Install

```bash
# Method 1: VS Code UI
# 1. Open VS Code in this project folder
# 2. Press Cmd/Ctrl + Shift + P
# 3. Type: "Extensions: Show Recommended Extensions"
# 4. Click "Install All"

# Method 2: Command Line (install specific extension)
code --install-extension be5invis.vscode-custom-css
```

### Installation Strategy

**MrDib's Recommendation:** Don't install all at once!

**Phase 1: Core Essentials (10 extensions)**

```json
[
  "be5invis.vscode-custom-css", // Required for this setup
  "brandonkirbyson.vscode-animations", // Smooth animations
  "usernamehw.errorlens", // Inline errors
  "esbenp.prettier-vscode", // Code formatter
  "eamodio.gitlens", // Git superpowers
  "PKief.material-icon-theme", // Beautiful icons
  "aaron-bond.better-comments", // Colorful comments
  "formulahendry.code-runner", // Run code instantly
  "ritwickdey.LiveServer", // Local dev server
  "christian-kohler.path-intellisense" // Path autocomplete
]
```

**Phase 2: Language-Specific (Install what you need)**

- Python Developers → Python, Pylint, Black Formatter
- Java Developers → Java Extension Pack, Java Debug
- Web Developers → ES7 React Snippets, Tailwind IntelliSense
- Full-Stack → All of the above + Docker

**Phase 3: Power Tools (When you're ready)**

- GitHub Copilot (AI assistance)
- Thunder Client (API testing)
- GitLens (advanced Git)
- CodeSnap (beautiful screenshots)

### Extension Categories Summary

| Category        | Extensions | Priority  | Install When     |
| --------------- | ---------- | --------- | ---------------- |
| 🎨 Visual       | 8          | High      | First install    |
| ⚠️ Errors       | 6          | Critical  | First install    |
| 💅 Format       | 5          | High      | First install    |
| 📦 Languages    | 15         | As Needed | Per language     |
| 🐙 Git          | 5          | High      | If using Git     |
| 🚀 Productivity | 9          | High      | After core       |
| 🤖 AI           | 4          | Optional  | Power users      |
| 🧪 Testing      | 4          | Medium    | If writing tests |
| 🌐 Web          | 6          | Medium    | Web developers   |

**Total: 91 Extensions** (Yes, really! But install selectively)

---

## ⌨️ KeyBindings.json

**MrDib's custom keyboard shortcuts for maximum productivity**

### What's Changed?

```json
{
  // ═══════════════════════════════════════════════════════════
  // Activity Bar Toggle
  // ═══════════════════════════════════════════════════════════
  "Shift + Alt + Cmd + B" → Toggle Activity Bar visibility

  // ═══════════════════════════════════════════════════════════
  // Custom CSS Controls (Important!)
  // ═══════════════════════════════════════════════════════════
  "Shift + Alt + Cmd + E" → Install/Enable Custom CSS
  "Shift + Alt + Cmd + D" → Disable/Uninstall Custom CSS

  // ═══════════════════════════════════════════════════════════
  // Panel Management
  // ═══════════════════════════════════════════════════════════
  "Ctrl + Cmd + J" → Toggle Maximized Panel (Terminal fullscreen)

  // ═══════════════════════════════════════════════════════════
  // Advanced File Creation
  // ═══════════════════════════════════════════════════════════
  "Shift + Alt + Cmd + N" → Advanced New File (with folder creation)

  // ═══════════════════════════════════════════════════════════
  // GitHub Copilot Toggle
  // ═══════════════════════════════════════════════════════════
  "Shift + Alt + C" → Toggle Copilot completions on/off

  // ═══════════════════════════════════════════════════════════
  // Change All Occurrences (Renamed from C++ switch header)
  // ═══════════════════════════════════════════════════════════
  "Alt + O" → Change all occurrences (like Cmd+F2 but better)
}
```

### How to Use These Shortcuts

**Install Custom CSS:**

1. Press `Shift + Alt + Cmd + E`
2. Restart VS Code
3. Enjoy the magic! ✨

**Toggle Activity Bar (More Space):**

```
Shift + Alt + Cmd + B → Poof! More screen real estate
```

**Maximize Terminal:**

```
Ctrl + Cmd + J → Terminal goes fullscreen
```

**Create Nested Files Quickly:**

```
Shift + Alt + Cmd + N → Create "src/components/Button/index.tsx" in one go!
```

**Toggle Copilot (Focus Mode):**

```
Shift + Alt + C → Turn off AI when you want to think
Shift + Alt + C → Turn back on when you need help
```

**Rename All Instances:**

```
Alt + O → Select word → Renames ALL occurrences (faster than Find & Replace!)
```

### Integration with Default Shortcuts

These custom shortcuts **complement** (not replace) VS Code's defaults:

| Default                 | Custom                                 | Why Both?             |
| ----------------------- | -------------------------------------- | --------------------- |
| `Cmd + B` (Sidebar)     | `Shift + Alt + Cmd + B` (Activity Bar) | Different UI elements |
| `Cmd + J` (Panel)       | `Ctrl + Cmd + J` (Maximize Panel)      | Toggle vs Maximize    |
| `Cmd + F2` (Change All) | `Alt + O` (Change All)                 | Easier to reach       |
| `Cmd + N` (New File)    | `Shift + Alt + Cmd + N` (Advanced)     | Simple vs Advanced    |

### Installation

**Option 1: Manual (Recommended)**

```bash
# Open your keybindings.json
# Cmd/Ctrl + Shift + P → "Preferences: Open Keyboard Shortcuts (JSON)"
# Copy and paste shortcuts from Configs/KeyBindings.json
```

**Option 2: Replace Entirely (Advanced)**

```bash
# macOS
cp Configs/KeyBindings.json ~/Library/Application\ Support/Code/User/keybindings.json

# Linux
cp Configs/KeyBindings.json ~/.config/Code/User/keybindings.json

# Windows
copy Configs\KeyBindings.json %APPDATA%\Code\User\keybindings.json
```

> ⚠️ **Warning:** Option 2 overwrites your existing shortcuts! Backup first!

---

## 🛠️ Settings.json

**2,000+ lines of meticulously documented perfection**

### The Crown Jewel

This is where the real magic happens. Every setting is:

- ✅ **Documented** with comments explaining what it does
- ✅ **Organized** into logical sections
- ✅ **Optimized** for performance and productivity
- ✅ **Tested** by MrDib himself over years of use

### What's Configured?

<details>
<summary><b>🪟 Window & Interface (Click to expand)</b></summary>

```json
{
  "window.customTitleBarVisibility": "windowed",
  "window.title": "MrDib ${activeEditorMedium} ${rootPath}",
  "window.zoomLevel": 1.5,

  // Transparency & Glass Effects
  "apc.electron": {
    "opacity": 0.95,
    "transparent": true,
    "vibrancy": "ultra-dark"
  }
}
```

**Features:**

- Custom title bar with filename and path
- 95% opacity for that cyberpunk look
- Ultra-dark vibrancy (macOS)
- 1.5x zoom for better readability

</details>

<details>
<summary><b>📁 File Management</b></summary>

```json
{
  // Auto-save magic
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 2000,

  // Cleanup squad
  "files.trimTrailingWhitespace": true,
  "files.trimFinalNewlines": true,
  "files.insertFinalNewline": true,

  // Explorer settings
  "explorer.confirmDelete": false, // Live dangerously!
  "explorer.confirmDragAndDrop": false
}
```

**Features:**

- Auto-saves 2 seconds after you stop typing
- Cleans up whitespace automatically
- No annoying delete confirmations
- Drag & drop without nagging

</details>

<details>
<summary><b>✏️ Editor Configuration</b></summary>

```json
{
  // Minimalist display
  "editor.minimap.enabled": false,
  "breadcrumbs.enabled": false,
  "editor.renderLineHighlight": "none",

  // The LEGENDARY cursor
  "editor.cursorBlinking": "expand",
  "editor.cursorSmoothCaretAnimation": "on",
  "apc.stylesheet": {
    ".monaco-editor .cursor": "background: #ffffff !important; box-shadow: 0 0 70px 5px #ffffff"
  },

  // Smooth scrolling
  "editor.smoothScrolling": true,
  "editor.mouseWheelZoom": true,

  // Indentation perfection
  "editor.tabSize": 10, // MrDib's preference
  "editor.insertSpaces": true,
  "editor.detectIndentation": false,

  // Format everything
  "editor.formatOnSave": true,
  "editor.formatOnType": true
}
```

**Features:**

- **Glowing cursor** that's impossible to lose
- Butter-smooth scrolling
- Consistent indentation (10 spaces - yes, really!)
- Auto-formatting on save & type
- Clean, distraction-free interface

</details>

<details>
<summary><b>🎨 Workbench & Theme</b></summary>

```json
{
  "workbench.colorTheme": "Transparent Color Theme",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.sideBar.location": "right",
  "workbench.statusBar.visible": false,
  "workbench.tree.indent": 10,

  // Tab management
  "workbench.editor.enablePreview": false,
  "workbench.editor.showIcons": false,
  "workbench.editor.tabSizing": "shrink",
  "workbench.editor.highlightModifiedTabs": true
}
```

**Features:**

- Transparent theme for glass effect
- Material icons (beautiful!)
- Sidebar on right (more natural for LTR languages)
- No status bar (more space!)
- Smart tab management

</details>

<details>
<summary><b>🎬 Animations & Effects</b></summary>

```json
{
  "animations.Enabled": true,
  "animations.CursorAnimation": true,
  "animations.Command-Palette": "Fade",
  "animations.Active": "Indent",
  "animations.CursorAnimationOptions": {
    "TrailLength": 20
  },

  // Custom CSS imports
  "vscode_custom_css.imports": [
    "file:///path/to/CustomCSS.css",
    "file:///path/to/CustomJavascript.js"
  ]
}
```

**Features:**

- Smooth fade animations
- Cursor trail effect
- Command palette fade-in
- Matrix rain on startup
- Tab slide animations

</details>

<details>
<summary><b>💻 Terminal Configuration</b></summary>

```json
{
  "terminal.integrated.fontFamily": "Cascadia Code, MesloLGS NF",
  "terminal.integrated.fontSize": 15,
  "terminal.integrated.lineHeight": 1.2,
  "terminal.integrated.tabs.title": "${process} ~ MrDib",
  "terminal.integrated.cursorBlinking": true,
  "terminal.integrated.cursorStyle": "line",
  "terminal.integrated.smoothScrolling": true
}
```

**Features:**

- Beautiful fonts with ligatures
- Custom title with your name
- Smooth scrolling terminal
- Blinking cursor for visibility

</details>

<details>
<summary><b>🔧 Language Formatters</b></summary>

```json
{
  // Default formatter
  "editor.defaultFormatter": "esbenp.prettier-vscode",

  // Python
  "[python]": {
    "editor.defaultFormatter": "ms-python.black-formatter",
    "editor.formatOnSave": true
  },

  // Java
  "[java]": {
    "editor.defaultFormatter": "redhat.java",
    "editor.formatOnSave": true
  },

  // HTML, CSS, JavaScript, JSON, Markdown
  "[html]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[css]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[javascript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },
  "[json]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },

  // Shell scripts
  "[shellscript]": { "editor.defaultFormatter": "foxundermoon.shell-format" }
}
```

**Features:**

- Prettier for web files
- Black for Python (PEP 8 compliant)
- Red Hat formatter for Java
- Shell formatter for bash scripts
- Auto-format on save for all languages

</details>

<details>
<summary><b>▶️ Code Runner (50+ Languages!)</b></summary>

```json
{
  "code-runner.clearPreviousOutput": true,
  "code-runner.showExecutionMessage": false,
  "code-runner.runInTerminal": true,

  "code-runner.executorMap": {
    // Compiled languages
    "c": "clear && cd $dir && gcc $fileName -o $fileNameWithoutExt && ./$fileNameWithoutExt",
    "cpp": "cd $dir && g++ $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
    "java": "cd $dir && javac $fileName && java $fileNameWithoutExt",
    "rust": "cd $dir && rustc $fileName && $dir$fileNameWithoutExt",

    // Scripting languages
    "python": "clear && python3 -u",
    "javascript": "node",
    "typescript": "ts-node",
    "ruby": "ruby",
    "php": "php",

    // Modern languages
    "go": "go run",
    "swift": "swift",
    "kotlin": "kotlin",
    "dart": "dart"

    // And 40+ more!
  }
}
```

**Features:**

- One-click code execution
- Supports 50+ programming languages
- Clears output before each run
- Runs in integrated terminal
- Custom compilation flags for each language

</details>

<details>
<summary><b>🐙 Git Configuration</b></summary>

```json
{
  "git.autofetch": true,
  "git.enableCommitSigning": true,
  "git.confirmSync": false,
  "git.confirmForcePush": false,
  "git.decorations.enabled": true,
  "git.inputValidation": true,
  "git.inputValidationLength": 50,
  "git.mergeEditor": true,

  // GitLens
  "gitlens.currentLine.enabled": true,
  "gitlens.codeLens.enabled": true,
  "gitlens.hovers.enabled": true,
  "gitlens.statusBar.enabled": true
}
```

**Features:**

- Auto-fetch from remote
- Commit signing enabled
- No annoying confirmations
- Git decorations in explorer
- GitLens superpowers
- Merge editor for conflicts

</details>

<details>
<summary><b>💬 Better Comments</b></summary>

```json
{
  "better-comments.tags": [
    { "tag": "*", "color": "#7CFC00", "bold": true }, // * Green highlight
    { "tag": "?", "color": "#FF2D00", "bold": true }, // ? Red question
    { "tag": "!", "color": "#FF00FF", "bold": true }, // ! Purple alert
    { "tag": "TODO:", "color": "#EA580C", "bold": true }, // TODO: Orange
    { "tag": "FIXME:", "color": "#FF2D00", "bold": true }, // FIXME: Red
    { "tag": "BUG:", "color": "#9333EA", "bold": true }, // BUG: Purple
    { "tag": "HACK:", "color": "#C026D3" }, // HACK: Pink
    { "tag": "NOTE:", "color": "#2563EB", "bold": true }, // NOTE: Blue
    { "tag": "INFO:", "color": "cyan", "bold": true }, // INFO: Cyan
    { "tag": "IDEA:", "color": "#FFF", "backgroundColor": "#EAB308" }, // IDEA: Highlighted
    { "tag": "WARNING:", "color": "#FF6B35", "bold": true } // WARNING: Orange-red
  ]
}
```

**Features:**

- 11 different comment styles
- Color-coded by importance
- Bold for critical comments
- Background highlight for ideas
- Makes code navigation easier

</details>

<details>
<summary><b>⚠️ Error Lens</b></summary>

```json
{
  "errorLens.messageBackgroundMode": "none",
  "errorLens.fontWeight": "800",
  "errorLens.gutterIconsEnabled": true,
  "errorLens.severityText": ["☠️", "☠️", "☠️", "☠️"]
}
```

**Features:**

- Inline error messages
- Bold error text (impossible to miss)
- Skull emoji for all errors (because errors = death)
- Gutter icons for quick scanning

</details>

<details>
<summary><b>🧘 Zen Mode</b></summary>

```json
{
  "zenMode.fullScreen": true,
  "zenMode.centerLayout": false,
  "zenMode.hideLineNumbers": true,
  "zenMode.hideStatusBar": true,
  "zenMode.hideActivityBar": true,
  "zenMode.restore": false,
  "zenMode.silentNotifications": false
}
```

**Features:**

- Fullscreen distraction-free coding
- Hides all UI elements
- Centers your code
- Perfect for focus sessions
- Press `Cmd/Ctrl + K, Z` to enter

</details>

<details>
<summary><b>📚 Spell Check Dictionary</b></summary>

```json
{
  "cSpell.userWords": [
    // Tech terms
    "Aakash",
    "asyncio",
    "axios",
    "tensorflow",
    "pytorch",

    // Frameworks
    "nextjs",
    "reactjs",
    "vuejs",
    "django",
    "flask",

    // Companies
    "vercel",
    "netlify",
    "supabase",
    "firebase",

    // Indian languages
    "मराठी",
    "हिन्दी",
    "ਪੰਜਾਬੀ",
    "ગુજરાતી",

    // MrDib's custom words
    "mrdib",
    "dibakar"

    // And 500+ more!
  ]
}
```

**Features:**

- 500+ technical terms
- Framework names
- Company names
- Indian language support
- MrDib's custom vocabulary
- Never get false spelling warnings again!

</details>

### File Organization

The Settings.json is organized into **clear sections** with headers:

```json
{
  // ╔══════════════════════════════════════════════════════════════════╗
  // ║                   🎨 MrDib's VS CODE MASTERPIECE                 ║
  // ║                  ⚡ Professional Edition v2.0 ⚡                 ║
  // ╚══════════════════════════════════════════════════════════════════╝
  // ┌─────────────────────────────────────────────────────────────────┐
  // │             🪟 WINDOW & INTERFACE MAGNIFICENCE                  │
  // └─────────────────────────────────────────────────────────────────┘
  // Settings here...
  // ┌─────────────────────────────────────────────────────────────────┐
  // │                 📁 FILE MANAGEMENT EXCELLENCE                   │
  // └─────────────────────────────────────────────────────────────────┘
  // More settings...
}
```

**12 Main Sections:**

1. 🪟 Window & Interface
2. 📁 File Management
3. ✏️ Editor Configuration
4. 🎨 Workbench & Theme
5. 🎬 Animations & Effects
6. 💻 Terminal Configuration
7. 🔧 Language Formatters
8. ▶️ Code Runner
9. 🐙 Git & Version Control
10. 💬 Better Comments
11. ⚠️ Error Lens
12. 🧘 Zen Mode

### Installation

**Option 1: Cherry-Pick (Recommended)**

```bash
# Open your settings.json
# Cmd/Ctrl + Shift + P → "Preferences: Open Settings (JSON)"
# Copy sections you want from Configs/Settings.json
```

**Option 2: Full Replace (Advanced Users)**

```bash
# ⚠️ WARNING: Backs up your existing settings first!

# macOS
cp ~/Library/Application\ Support/Code/User/settings.json ~/settings.json.backup
cp Configs/Settings.json ~/Library/Application\ Support/Code/User/settings.json

# Linux
cp ~/.config/Code/User/settings.json ~/.config/Code/User/settings.json.backup
cp Configs/Settings.json ~/.config/Code/User/settings.json

# Windows
copy %APPDATA%\Code\User\settings.json %APPDATA%\Code\User\settings.json.backup
copy Configs\Settings.json %APPDATA%\Code\User\settings.json
```

**Option 3: Merge Manually (Safest)**

1. Open both files side-by-side
2. Copy settings you like from MrDib's
3. Paste into your settings.json
4. Adjust paths (especially `vscode_custom_css.imports`)
5. Test and tweak!

### Important: Update File Paths

**After copying settings.json, update these paths:**

```json
{
  // Line ~150: Custom CSS imports
  "vscode_custom_css.imports": [
    "file:///Users/YOUR_USERNAME/path/to/Custom-Code-Styles/Styles/CustomCSS.css",
    "file:///Users/YOUR_USERNAME/path/to/Custom-Code-Styles/Styles/CustomJavascript.js"
  ],

  // Line ~145: APC imports (animation handler)
  "apc.imports": [
    "file://${userHome}/.vscode/extensions/brandonkirbyson.vscode-animations-VERSION/dist/updateHandler.js"
  ]
}
```

Replace:

- `YOUR_USERNAME` with your actual username
- `VERSION` will auto-resolve with `${userHome}` variable

---

## 📥 Installation Guide

### Quick Start (5 Minutes)

**Step 1: Review Extensions**

```bash
# Open Extensions.json
code Configs/Extensions.json

# Decide what you need:
# - Core essentials (10) → Install first
# - Language-specific → Install for your languages
# - Power tools → Install when ready
```

**Step 2: Install Extensions**

```bash
# Open VS Code in project folder
# Cmd/Ctrl + Shift + P
# Type: "Extensions: Show Recommended Extensions"
# Click "Install All" or selectively install
```

**Step 3: Copy KeyBindings**

```bash
# Cmd/Ctrl + Shift + P
# Type: "Preferences: Open Keyboard Shortcuts (JSON)"
# Copy shortcuts from Configs/KeyBindings.json
# Paste into your keybindings.json
```

**Step 4: Merge Settings**

```bash
# Cmd/Ctrl + Shift + P
# Type: "Preferences: Open Settings (JSON)"
# Copy sections you want from Configs/Settings.json
# Update file paths for Custom CSS imports
```

**Step 5: Reload VS Code**

```bash
# Cmd/Ctrl + Shift + P
# Type: "Developer: Reload Window"
# Or just restart VS Code
```

### Verification Checklist

After installation, verify:

✅ **Extensions:**

- [ ] Custom CSS extension installed
- [ ] Animations extension installed
- [ ] Error Lens showing inline errors
- [ ] Prettier formatting on save
- [ ] GitLens showing git info

✅ **KeyBindings:**

- [ ] `Shift + Alt + Cmd + B` toggles activity bar
- [ ] `Shift + Alt + Cmd + E` enables Custom CSS
- [ ] `Ctrl + Cmd + J` maximizes terminal

✅ **Settings:**

- [ ] Theme is transparent
- [ ] Cursor is glowing
- [ ] Auto-save working
- [ ] Format on save working
- [ ] Terminal title shows "MrDib"

✅ **Visual Effects:**

- [ ] Matrix rain on startup (if CustomCSS enabled)
- [ ] Tab animations working
- [ ] Command palette blurs background
- [ ] Smooth scrolling everywhere

---

## 🎨 Customization Tips

### Make It Yours!

**1. Change Your Name in Terminal:**

```json
{
  "terminal.integrated.tabs.title": "${process} ~ YOUR_NAME"
}
```

**2. Adjust Zoom Level:**

```json
{
  "window.zoomLevel": 1.0 // Default: 1.5 (MrDib likes it big!)
}
```

**3. Change Cursor Glow Color:**

```json
{
  "apc.stylesheet": {
    ".monaco-editor .cursor": "background: #00ff00 !important; box-shadow: 0 0 70px 5px #00ff00"
  }
}
```

**4. Modify Tab Size:**

```json
{
  "editor.tabSize": 4 // Default: 10 (MrDib's preference)
}
```

**5. Adjust Transparency:**

```json
{
  "apc.electron": {
    "opacity": 1.0 // Default: 0.95 (less transparent)
  }
}
```

**6. Enable/Disable Minimap:**

```json
{
  "editor.minimap.enabled": true // Default: false
}
```

**7. Change Icon Theme:**

```json
{
  "workbench.iconTheme": "vscode-icons" // Alternatives: vs-seti, material-icon-theme
}
```

**8. Sidebar Position:**

```json
{
  "workbench.sideBar.location": "left" // Default: right
}
```

### Advanced Customization

**Create Your Own Comment Style:**

```json
{
  "better-comments.tags": [
    {
      "tag": "MRDIB:",
      "color": "#00ffff",
      "backgroundColor": "#1a1a1a",
      "bold": true,
      "italic": true
    }
  ]
}
```

**Custom Code Runner Command:**

```json
{
  "code-runner.executorMap": {
    "javascript": "clear && node --trace-warnings"
  }
}
```

**Personalized Window Title:**

```json
{
  "window.title": "🚀 ${activeEditorShort} - ${rootName} - MrDib's Setup"
}
```

---

## 🔧 Troubleshooting

### Common Issues

**Extensions not loading:**

```bash
# Reload window
Cmd/Ctrl + Shift + P → "Developer: Reload Window"

# Check extension logs
Cmd/Ctrl + Shift + P → "Developer: Show Logs" → "Extensions"
```

**KeyBindings not working:**

```bash
# Check for conflicts
Cmd/Ctrl + K, Cmd/Ctrl + S → Open Keyboard Shortcuts
# Search for your shortcut
# Remove conflicting bindings
```

**Settings not applying:**

```bash
# Settings priority: User > Workspace > Defaults
# Check if workspace settings override user settings

# Open workspace settings
Cmd/Ctrl + Shift + P → "Preferences: Open Workspace Settings (JSON)"
```

**Custom CSS not working:**

```bash
# Re-enable Custom CSS
Shift + Alt + Cmd + E

# Check file paths
# Open settings.json
# Verify "vscode_custom_css.imports" paths are absolute

# Restart VS Code
```

**Formatting not working:**

```bash
# Check default formatter
# Right-click in file → "Format Document With..."
# Select formatter
# Check "Set as default formatter"

# Verify extension installed
Extensions panel → Search for formatter
```

---

## 📊 Performance Impact

### Resource Usage

| Configuration       | CPU Impact | Memory Impact | Worth It?             |
| ------------------- | ---------- | ------------- | --------------------- |
| Base Settings       | Minimal    | ~50MB         | ✅ Essential          |
| Animations          | Low        | ~20MB         | ✅ Yes                |
| Custom CSS          | Low        | ~30MB         | ✅ Yes                |
| GitLens             | Medium     | ~80MB         | ✅ Very useful        |
| Copilot             | Medium     | ~100MB        | ✅ If you pay         |
| Error Lens          | Low        | ~10MB         | ✅ Absolutely         |
| All Extensions (91) | High       | ~500MB+       | ⚠️ Selective install! |

### Optimization Tips

**Disable per Workspace:**

```json
// .vscode/settings.json in project
{
  "gitlens.enabled": false // Disable GitLens for this project
}
```

**Check Extension Performance:**

```bash
# Cmd/Ctrl + Shift + P
# Type: "Developer: Show Running Extensions"
# Sort by "Activation Time"
# Disable slow extensions
```

**Reduce Animations:**

```json
{
  "animations.Enabled": false, // Turn off when battery low
  "editor.cursorSmoothCaretAnimation": "off"
}
```

---

## 🎯 Recommended Configuration Profiles

### Profile 1: Minimalist (Fast & Clean)

**Extensions (10):**

- Custom CSS
- Animations
- Error Lens
- Prettier
- Material Icons
- Path IntelliSense
- Auto Rename Tag
- Better Comments
- Code Runner
- GitLens

**Settings:**

- Enable: Formatting, auto-save, smooth scrolling
- Disable: Minimap, breadcrumbs, activity bar animations

### Profile 2: Full-Stack Developer (Balanced)

**Extensions (25):**

- Minimalist profile +
- Python, Java, TypeScript support
- ESLint, Pylint
- Live Server
- REST Client
- Docker
- Database tools

**Settings:**

- Language-specific formatters
- Debugger configurations
- Docker integration

### Profile 3: Power User (Maximum Productivity)

**Extensions (40+):**

- Full-Stack profile +
- GitHub Copilot
- GitLens Pro features
- Testing tools
- CodeSnap
- Thunder Client
- All language supports

**Settings:**

- AI completions
- Advanced Git features
- Custom snippets
- Workspace-specific configs

### Profile 4: Performance Mode (Low-End Machines)

**Extensions (5):**

- Prettier
- Error Lens
- Material Icons
- Better Comments
- Path IntelliSense

**Settings:**

- Disable animations
- Reduce transparency
- Disable git features
- Minimal UI

---

## 📚 Additional Resources

### Learn More

- [VS Code Settings Reference](https://code.visualstudio.com/docs/getstarted/settings)
- [VS Code Keybindings](https://code.visualstudio.com/docs/getstarted/keybindings)
- [Extension API](https://code.visualstudio.com/api)

### Related Docs

- [Main README](../README.md) - Project overview
- [INSTALLATION.md](../Docs/INSTALLATION.md) - Detailed setup
- [CUSTOMIZATION.md](../Docs/CUSTOMIZATION.md) - Visual customization
- [VSCODE.md](../VSCODE.md) - Keyboard shortcuts guide
- [Package.md](../Docs/Package.md) - Ultimate resources

---

<div align="center">

## 🎉 You're All Set!

**Your VS Code is now configured like MrDib's!** 🚀

Now go build something amazing!

---

**Summary:**

- 📦 **91 Extensions** (install selectively)
- ⌨️ **6 Custom Shortcuts** (productivity boost)
- 🛠️ **2,000+ Settings** (every detail perfected)
- 🎨 **12 Categories** (organized & documented)
- ⚡ **50+ Languages** (Code Runner support)
- 💚 **100% MrDib Approved**

---

Made with 💚 and ☕ by **MrDib**

[Back to Main README](../README.md) | [Report Issue](https://github.com/MiniDevHub/Custom-Code-Styles/issues)

</div>

---
