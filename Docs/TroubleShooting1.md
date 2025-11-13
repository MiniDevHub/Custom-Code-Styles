# 🔧 Troubleshooting Guide

## Common Issues & Solutions

### ❌ "Your Code installation appears to be corrupt"

**This is normal!** The Custom CSS extension modifies VS Code's core files.

**Solution:**

- Click the notification gear icon
- Select "Don't Show Again"
- Continue using VS Code normally

---

### ❌ Styles Not Loading

**Possible Causes & Solutions:**

1. **Incorrect file paths**

   - Ensure paths in settings.json are absolute, not relative
   - Use forward slashes even on Windows
   - Example: `file:///C:/Users/Name/path/to/file.css`

2. **Extension not enabled**

   - Run `Enable Custom CSS and JS` from Command Palette
   - Restart VS Code

3. **Permission issues**
   - Run VS Code as Administrator (Windows)
   - Check file permissions (macOS/Linux)

---

### ❌ Animations Laggy or Choppy

**Solutions:**

1. Reduce animation count in CustomJavascript.js:

   ```javascript
   const MATRIX_CONFIG = {
     charCount: 100, // Reduce from 200
     // ...
   };
   ```

2. Disable specific animations in settings.json:

   ```json
   "animations.Enabled": false
   ```

3. Check GPU acceleration:
   ```json
   "disable-hardware-acceleration": false
   ```

---

### ❌ Lost Customization After VS Code Update

VS Code updates can reset modifications.

**Solution:**

1. Open Command Palette
2. Run: `Enable Custom CSS and JS`
3. Restart VS Code

**Prevention:**

- Disable auto-updates during active work sessions
- Keep backup of your settings.json

---

### ❌ Images/Assets Not Showing

**Check:**

1. Asset paths match your system
2. Images exist in specified locations
3. File permissions allow VS Code to read them

**Fix paths in CSS:**

```css
/* Change from */
background-image: url("/Users/dibakar/Documents/Code/CustomCode/Photo.jpeg");

/* To your path */
background-image: url("/YOUR/PATH/HERE/Photo.jpeg");
```

---

### ❌ Command Palette Blur Not Working

**Ensure:**

1. CustomJavascript.js is loaded
2. No console errors (Help > Toggle Developer Tools)
3. Blur effect supported by your GPU

**Fallback:** Disable blur in JS if causing issues

---

### ❌ Welcome Message Shows Wrong Name

**Edit** `styles/CustomJavascript.js`:

```javascript
const GLITCH_CONFIG = {
  message: "⚡ Welcome back, YOUR_NAME ⚡",
  // ...
};
```

---

## Performance Optimization

### Reduce Visual Effects

```javascript
// In CustomJavascript.js
const MATRIX_CONFIG = {
  charCount: 50, // Fewer characters
  maxDelay: 2, // Shorter delays
  maxDuration: 3, // Faster animation
};
```

### Disable Specific Features

Comment out unwanted sections in CSS:

```css
/* Disable glow animation
@keyframes glowCycle {
  ...
}
*/
```

---

## Debug Mode

Enable VS Code Developer Tools:

1. Help → Toggle Developer Tools
2. Check Console tab for errors
3. Look for "Custom CSS" related messages

---

## Complete Reset

If all else fails:

1. Disable Custom CSS: `Disable Custom CSS and JS`
2. Remove from settings.json
3. Restart VS Code
4. Reinstall from scratch

---

## Platform-Specific Issues

### macOS Big Sur/Monterey

- Grant Full Disk Access to VS Code
- System Preferences → Security & Privacy → Privacy → Full Disk Access

### Windows 11

- Disable Controlled Folder Access temporarily
- Windows Security → Virus & threat protection → Manage settings

### Linux (Ubuntu/Debian)

```bash
# Fix permissions
sudo chown -R $(whoami) /usr/share/code
```

---

## Error Messages

### "EACCES: permission denied"

Run VS Code with elevated permissions

### "Cannot find module"

Check file paths are correct and files exist

### "Unexpected token"

Syntax error in CSS/JS - validate your code

---

## Getting Help

Still stuck?

1. Check [GitHub Issues](https://github.com/yourusername/Custom-Code-Styles/issues)
2. Create new issue with:
   - VS Code version: `Help → About`
   - OS version
   - Console errors: `Help → Toggle Developer Tools`
   - Screenshots of the issue

Happy debugging! 🐛🔨

---
