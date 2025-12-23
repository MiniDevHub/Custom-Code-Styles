# ⌨️ The Evolved Config: My VS Code Power Bindings v2

**Date Updated:** December 2025
**Description:** A breakdown of my highly customized VS Code `keybindings.json`. This setup is optimized for **Zen-mode coding**, **UI customization**, **home-row ergonomics**, **OS-level integration**, and **rapid configuration**.

---

## 🎨 UI & Aesthetics ( The "Zen Mode" )

These shortcuts are designed to clear the clutter and control the visual environment.

### 1. Toggle the Activity Bar

- **Key:** `Shift` + `Alt` + `Cmd` + `B`
- **Command:** `workbench.action.toggleActivityBarVisibility`
- **The Logic:** The Activity Bar (the fat icon strip on the left) takes up horizontal space. This shortcut allows me to vanish it instantly for a cleaner, wider coding view, and bring it back only when I need to click an extension icon.

### 2. The "Custom CSS" Hacker Switch

- **Install:** `Shift` + `Alt` + `Cmd` + `E` (`extension.installCustomCSS`)
- **Uninstall:** `Shift` + `Alt` + `Cmd` + `D` (`extension.uninstallCustomCSS`)
- **The Logic:** I use the **Custom CSS and JS Loader** extension to modify the VS Code UI beyond standard settings (transparency, neon glows, custom fonts). Since VS Code updates often break these hacks, these keys let me quickly "Re-inject" (`E`) or "Remove" (`D`) the styles without digging through menus.

---

## 🖥 Screen Real Estate

### 3. Maximize Bottom Panel

- **Key:** `Ctrl` + `Cmd` + `J`
- **Command:** `workbench.action.toggleMaximizedPanel`
- **The Logic:** The default terminal view is too small for heavy logs. This shortcut acts like a "Zoom" button, making the Terminal/Debug Console take up the **full screen** instantly, then shrinking it back down with the same key.

---

## ⚡️ Workflow & Extensions

### 4. Advanced New File (Remapped)

- **Key:** `Shift` + `Alt` + `Cmd` + `N`
- **Command:** `extension.advancedNewFile`
- **The Logic:**

1. I **disabled** the default shortcut (`Alt+Cmd+N`) to prevent accidental triggers.
2. I **remapped** it to this complex combo to ensure I only triggered the "Advanced File Creation" wizard when I really meant to.

### 5. Toggle GitHub Copilot

- **Key:** `Shift` + `Alt` + `C`
- **Command:** `github.copilot.completions.toggle`
- **The Logic:** "C" for Copilot. Sometimes the AI ghost text is helpful; sometimes it breaks your concentration. This is a dedicated "Mute Button" for the AI.

---

## 🚀 The "Alt + O" Saga (Ergonomics Masterclass)

This is the most critical optimization in the setup. I sacrificed C++ navigation to gain super-speed editing.

### 6. The "Change All Occurrences" Hack

- **New Key:** `Alt` + `O`
- **Command:** `editor.action.changeAll`
- **The Logic:**
- **The Problem:** The default key to rename a variable everywhere is `Cmd + F2`. Reaching for `F2` is unergonomic and slow.
- **The Fix:** I mapped it to `Alt + O` (thinking "O" for **Occurrences**). This keeps hands on the home row for lightning-fast refactoring.

### 7. The Cleanup (Unbinding Conflicts)

- **Unbind:** `Alt` + `O` (Removed `C_Cpp.SwitchHeaderSource`)
- **Unbind:** `Cmd` + `F2` (Removed `editor.action.changeAll`)
- **The Logic:**
- I explicitly removed the C++ shortcut that swaps `.c` and `.h` files so it wouldn't conflict with my new renaming tool.
- I disabled the old `F2` binding to force myself to use the new, faster method.

---

## 🍎 OS & Raycast Integration

### 8. Reclaiming "Cmd + Shift + H"

- **Unbind:** `Cmd` + `Shift` + `H` (Removed `workbench.action.replaceInFiles`)
- **The Logic:**
- **The Conflict:** VS Code natively uses this global shortcut for "Search and Replace in Files."
- **The Goal:** I use **Raycast** (macOS productivity launcher) to manage my system. I mapped `Cmd + Shift + H` to instantly open my **Home Directory** in Finder.
- **The Fix:** By unbinding this in VS Code, I prevent the editor from hijacking the keystroke, allowing Raycast to catch it every time.

---

## ⚙️ Config Velocity (The Meta-Layer)

_New in v2 upgrade._ I tweak my editor constantly. Searching for the configuration files via UI menus is too slow.

### 9. The "God Mode" Settings (Settings JSON)

- **Key:** `Cmd` + `Shift` + `Alt` + `;`
- **Command:** `workbench.action.openSettingsJson`
- **The Logic:** This bypasses the GUI settings menu entirely and opens the raw `settings.json` file.
- **Mnemonic:** The Semicolon `;` is used to end lines in code; this is the key to end/change settings.

### 10. The Keybinding Map (Keybindings JSON)

- **Key:** `Cmd` + `Shift` + `Alt` + `'` (Single Quote)
- **Command:** `workbench.action.openGlobalKeybindingsFile`
- **The Logic:** This opens the exact file you are reading right now (`keybindings.json`).
- **Mnemonic:** The Quote `'` key is right next to the Semicolon `;`. These two keys now serve as the "Control Center" for the editor's behavior.

---

> **Summary:** This configuration belongs to a Power User who prefers keyboard-driven workflows, hates visual clutter, optimizes for editing speed, and requires instant access to the configuration files to tweak the environment on the fly.
