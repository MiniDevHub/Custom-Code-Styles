# ⌨️ The Legacy Config: My VS Code Power Bindings

**Date Archived:** December 2025
**Description:** A breakdown of my highly customized VS Code `keybindings.json`. This setup was optimized for **Zen-mode coding**, **UI customization**, **home-row ergonomics**, and **OS-level integration**.

---

## 🎨 UI & Aesthetics ( The "Zen Mode" )

These shortcuts were designed to clear the clutter and control the visual environment.

### 1. Toggle the Activity Bar

- **Key:** `Shift` + `Alt` + `Cmd` + `B`
- **Command:** `workbench.action.toggleActivityBarVisibility`
- **The Logic:** The Activity Bar (the fat icon strip on the left) takes up horizontal space. This shortcut allowed me to vanish it instantly for a cleaner, wider coding view, and bring it back only when I needed to click an extension icon.

### 2. The "Custom CSS" Hacker Switch

- **Install:** `Shift` + `Alt` + `Cmd` + `E` (`extension.installCustomCSS`)
- **Uninstall:** `Shift` + `Alt` + `Cmd` + `D` (`extension.uninstallCustomCSS`)
- **The Logic:** I used the **Custom CSS and JS Loader** extension to modify the VS Code UI beyond standard settings (likely for transparency, neon glows, or custom fonts). Since VS Code updates often break these hacks, these keys let me quickly "Re-inject" (`E`) or "Remove" (`D`) the styles without digging through menus.

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

1. I **disabled** the default shortcut (`Alt+Cmd+N`) to prevent accidental triggers or conflicts.
2. I **remapped** it to this complex combo to ensure I only triggered the "Advanced File Creation" wizard when I really meant to.

### 5. Toggle GitHub Copilot

- **Key:** `Shift` + `Alt` + `C`
- **Command:** `github.copilot.completions.toggle`
- **The Logic:** "C" for Copilot. Sometimes the AI ghost text is helpful; sometimes it breaks your concentration. This was a dedicated "Mute Button" for the AI.

---

## 🚀 The "Alt + O" Saga (Ergonomics Masterclass)

This was the most critical optimization in the setup. I sacrificed C++ navigation to gain super-speed editing.

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
- I explicitly removed the C++ shortcut that swaps `.c` and `.h` files so it wouldn't conflict with my new specific renaming tool.
- I disabled the old `F2` binding to force myself to use the new, faster method.

---

## 🍎 OS & Raycast Integration

### 8. Reclaiming "Cmd + Shift + H"

- **Unbind:** `Cmd` + `Shift` + `H` (Removed `workbench.action.replaceInFiles`)
- **The Logic:**
- **The Conflict:** VS Code natively uses this global shortcut for "Search and Replace in Files."
- **The Goal:** I use **Raycast** (the Mac productivity launcher) to manage my system. I wanted `Cmd + Shift + H` to be a global hotkey that instantly opens my **Home Directory** in the Finder, regardless of what app I'm in.
- **The Fix:** By explicitly removing this binding in VS Code, I prevented the editor from hijacking the keystroke, allowing the OS/Raycast to capture it cleanly every time.

---

> **Summary:** This configuration belonged to a Power User who preferred keyboard-driven workflows, hated visual clutter, optimized for editing speed, and prioritized **Global macOS Shortcuts** (via Raycast) over default editor bindings.
