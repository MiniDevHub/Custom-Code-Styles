# 💅 Styles Directory

**The visual magic that transforms VS Code into a cyberpunk masterpiece!**

---

## 📂 Directory Structure

```

Styles/
├── CustomCSS.css → Visual styling (~800 lines)
├── CustomJavascript.js → Interactive features (~400 lines)
└── README.md → You are here! 👋

```

---

## ✨ CustomCSS.css

**Visual styling, animations, and glass effects**

### 📊 File Overview

| Metric                | Value                  |
| --------------------- | ---------------------- |
| **Lines of Code**     | ~800                   |
| **Sections**          | 12                     |
| **Animations**        | 7                      |
| **Custom Fonts**      | 3                      |
| **Color Variables**   | 0 (uses inline colors) |
| **Assets Referenced** | 7 images               |

### 🎨 Main Sections

#### 1. **Custom Animations** (Lines ~10-40)

**Animations defined:**

```css
@keyframes glowCycle       → Rainbow text glow (10s cycle)
@keyframes tabSlideIn      → Tab slide-in from left
@keyframes tabSlideOut     → Tab slide-out to left;
```

**Used for:**

- File labels (rainbow glow)
- Tab open/close animations
- Smooth UI transitions

---

#### 2. **Typography & Fonts** (Lines ~45-60)

**Font stack:**

```css
font-family: "Cascadia Code", "FiraCode Nerd Font", "FiraCode", "Menlo",
  "Geist Mono", "JetBrains Mono", "Consolas", "Courier New", "monospace";
```

**Special fonts:**

- **Codicon** - For icon fonts
- **Algerian** - For terminal tabs, file hovers
- **Times New Roman** - For tooltips on hover

**Why this matters:** Ligatures, consistent spacing, professional look

---

#### 3. **Terminal Customization** (Lines ~65-90)

**Styling:**

- Algerian font for terminal tabs
- Removed borders for clean look
- Enhanced readability

**Effect:** Professional terminal appearance with personality

---

#### 4. **Syntax Highlighting** (Lines ~95-130)

**Token overrides:**

```css
.mtk1 → White,
bold (700 weight) .mtk3 → Yellow,
extra bold (900 weight) .mtk4 → Dark orange .mtk10 → Extra bold (900 weight);
```

**Line numbers:**

- Algerian font
- Centered alignment
- 70% opacity for subtlety

**Effect:** Code pops with vibrant colors, easy to scan

---

#### 5. **Editor Background & Transparency** (Lines ~135-195)

**Key features:**

- Removes default backgrounds
- Makes editor transparent
- Adds custom wallpaper via `::before` pseudo-element

**Wallpaper config:**

```css
.monaco-workbench::before {
  background-image: url("path/to/CustomWallpaper.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.3; /* Subtle background */
  z-index: -2; /* Behind everything */
}
```

**Assets used:**

- `CustomWallpaper.jpg` - Main background

---

#### 6. **Panel & Layout Structure** (Lines ~200-215)

**Styling:**

- Centered headers
- Flexbox alignment
- Consistent spacing

**Effect:** Clean, organized workspace layout

---

#### 7. **Sidebar Styling** (Lines ~220-310)

**Features:**

- Drop shadow for depth
- Large, golden title text (Algerian font, 40px)
- Trident background image
- Hidden title actions for cleaner look

**Title styling:**

```css
font-size: 40px;
color: ivory;
text-shadow: gold 4px 4px 3px;
```

**Background decoration:**

```css
background-image: url("path/to/Trident.png");
opacity: 0.35;
```

**Assets used:**

- `Trident.png` - Sidebar background

**Effect:** Majestic sidebar that demands attention! 👑

---

#### 8. **File Explorer** (Lines ~315-390)

**Styling hierarchy:**

```
Normal state    → Transparent, white text, rainbow glow animation
Hover state     → Algerian font, golden background, rounded
Selected state  → Cyan glow, rounded borders
```

**Color scheme:**

- Normal: White with animated rainbow glow
- Hover: Gold (rgba(255, 215, 0, 0.25))
- Selected: Cyan (rgba(0, 255, 255, 0.5))

**Animations:**

- Continuous `glowCycle` animation (10s)
- Smooth transitions (0.5-0.6s)

**Effect:** Interactive, beautiful file browsing experience! 🌈

---

#### 9. **Activity Bar** (Lines ~395-470)

**Custom icons:**

**Account Icon:**

```css
.codicon-accounts-view-bar-icon:before {
  background-image: url("path/to/Photo.jpeg");
  border-radius: 50%; /* Circle crop */
}
```

**Settings Icon:**

```css
.codicon-settings-view-bar-icon:before {
  background-image: url("path/to/Gears.png");
  opacity: 0.8;
}
```

**Icon states:**

- Default: Golden (#ffd700)
- Hover: Green (#00ff00) with scale(1.5) + rotation(10deg)
- Active: Glow effect

**Assets used:**

- `Photo.jpeg` - Your face!
- `Gears.png` - Settings gear

**Effect:** Personalized activity bar with smooth hover effects! 👤

---

#### 10. **Tab Management** (Lines ~475-585)

**Features:**

- Hidden close buttons (cleaner tabs)
- Color transitions: White → Green (active tab)
- Hover scale effect (1.2x)
- Slide-in/slide-out animations (3s)

**Animation flow:**

```
Tab opens  → slideIn (3s) → Fades to white
Tab active → Turns green
Tab hover  → Scales 1.2x
Tab closes → slideOut (3s) → Disappears
```

**Effect:** Smooth, beautiful tab interactions! 🎪

---

#### 11. **Tooltips & Hovers** (Lines ~590-635)

**Stages:**

**Default state:**

```css
color: #00ff00;
background: transparent;
border: 2px solid rgba(255, 255, 255, 0.1);
```

**Hover state:**

```css
color: #ffd700;
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(3px);
box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.45);
border-radius: 12px;
```

**Font changes:**

- Default: Cascadia Code
- Hover: Times New Roman (elegant!)

**Effect:** Glass morphism tooltips! 🥃

---

#### 12. **Command Palette** (Lines ~640-730)

**The centerpiece of the UI!**

**Container styling:**

```css
min-width: 62.5vw;
min-height: 46.875vh;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%); /* Perfect centering */
backdrop-filter: blur(4px); /* Glass effect */
box-shadow: 0 0 8px 2px rgba(0, 255, 255, 0.8);
border-radius: 25px;
```

**Background overlay:**

```css
.quick-input-widget::before {
  background-image: url("path/to/Mask.png");
  opacity: 0.3;
  background-size: 35%;
}
```

**Input field:**

```css
border-radius: 25px;
box-shadow: 0 0 8px 2px rgba(255, 0, 255, 0.8); /* Purple glow */
```

**List items:**

- Hover: Green glow
- Focused: Purple borders + green shadow + gradient background

**Assets used:**

- `Mask.png` - Overlay pattern

**Effect:** Floating glass panel that feels futuristic! 🚀

---

#### 13. **Notifications** (Lines ~735-780)

**Styling:**

- Transparent background
- Glass morphism on hover
- Golden text (Times New Roman)
- Green glow on button hover

**Button hover:**

```css
transform: scale(1.05) rotate(-2deg);
box-shadow: 0 0 5px 2px rgba(0, 255, 0, 0.8);
```

**Effect:** Elegant, non-intrusive notifications! 🔔

---

#### 14. **Word Highlights** (Lines ~785-800)

**Selection colors:**

- Word highlight: Cyan glow
- Selected text: Green glow

**Effect:** Easy to see what's selected! 🔷

---

#### 15. **Error Lens Icons** (Lines ~805-815)

**Custom error icon:**

```css
background: url("path/to/ErrorLens01.png");
background-size: cover;
border-radius: 50%;
```

**Assets used:**

- `ErrorLens-01.png` - Custom error indicator

**Effect:** Stylized error indicators! ⚠️

---

### 🎨 Color Scheme

**Primary colors used throughout:**

| Color        | Hex       | Usage                     |
| ------------ | --------- | ------------------------- |
| Matrix Green | `#00ff00` | Text, highlights, success |
| Cyan         | `#00ffff` | Selections, borders       |
| Gold         | `#ffd700` | Hovers, active states     |
| Purple       | `#ff00ff` | Accents, warnings         |
| White        | `#ffffff` | Primary text              |
| Ivory        | `ivory`   | Titles                    |

**Transparency levels:**

- Background overlays: 0.3-0.35 opacity
- Glass effects: rgba(255, 255, 255, 0.05)
- Shadows: 0.25-0.8 alpha

---

### 🔧 Dependencies

**Required:**

- `be5invis.vscode-custom-css` extension
- Asset images in `Assets/Images/` folder

**Optional:**

- `brandonkirbyson.vscode-animations` (enhances animations)

---

## 🧙 CustomJavascript.js

**Interactive features and dynamic effects**

### 📊 File Overview

| Metric              | Value   |
| ------------------- | ------- |
| **Lines of Code**   | ~400    |
| **Features**        | 3 major |
| **Animations**      | 5       |
| **Event Listeners** | 4       |
| **Cleanup Timers**  | 2       |

### 🎯 Main Features

#### 1. **Command Palette Blur Effect** (Lines ~15-100)

**What it does:**

- Detects when command palette opens
- Applies blur overlay to background
- Removes blur when closed

**How it works:**

```javascript
// Mutation observer watches palette visibility
// When visible → runMyScript() → adds blur
// When hidden → handleEscape() → removes blur
```

**Keyboard shortcuts:**

- `Cmd/Ctrl + P` → Apply blur
- `Esc` → Remove blur

**Blur settings:**

```javascript
backdropFilter: 'blur(2.5px)',
backgroundColor: 'rgba(0, 0, 0, 0.25)',
```

**Effect:** Focus mode when searching! 🔍

---

#### 2. **Matrix Rain Effect** (Lines ~105-215)

**Configuration:**

```javascript
const MATRIX_CONFIG = {
  charCount: 200, // Number of falling characters
  minDelay: 0, // Start immediately
  maxDelay: 4, // Stagger up to 4 seconds
  minDuration: 3, // Minimum fall time
  maxDuration: 5, // Maximum fall time
  charRange: 96, // Katakana character variety
  baseChar: 0x30a0, // Unicode: Katakana
};
```

**Character types:**

- **90% chance:** Random Katakana (ア, カ, サ, etc.)
- **10% chance:** Special characters (⚡, 🔥, 💀, 👾, 🎯)

**Styling features:**

```css
color: #00ff00;
background: rgba(0, 255, 0, 0.05);
box-shadow: 0 0 4px rgba(0, 255, 100, 0.4), 0 0 10px rgba(0, 255, 100, 0.1);
backdrop-filter: blur(2px);
```

**Enhancements:**

- Variable opacity (0.3-1.0) for depth
- Bigger special characters (20px vs 16px)
- Hover effect (scale 1.5x + rotate 180°)
- Responsive to window resize

**Lifecycle:**

```
0s     → Starts appearing
0-4s   → Characters begin falling
3-5s   → Characters fall duration
5.2s   → Fade out and cleanup
```

**Effect:** Authentic Matrix rain! 🌧️

---

#### 3. **Welcome Message with Glitch Animation** (Lines ~220-330)

**Configuration:**

```javascript
const GLITCH_CONFIG = {
  message: "⚡ Welcome back, Dibakar ⚡",
  typeDelay: 60, // ms between characters
  glitchDuration: 80, // How long glitch lasts
  randomDelay: 100, // Random variation
  glitchChars: "アカサタナハマヤラワ0123456789@#$%^&*!?<>[]{}", // Glitch pool
};
```

**Animation sequence:**

1. **Create splash container** (centered, glass effect)
2. **Typewriter effect** - One character at a time
3. **Glitch each character** - Shows random char first
4. **Replace with real character** - Smooth transition
5. **Highlight special chars** - ⚡ glows yellow
6. **Pulse effect** - After typing completes
7. **Fade out** - After 5 seconds

**Splash container styling:**

```javascript
fontSize: clamp(16px, 5vw, 42px),  // Responsive sizing
background: linear-gradient(135deg,
  rgba(0,255,0,0.05),
  rgba(0,255,255,0.05)
),
borderRadius: '16px',
border: '2px solid rgba(0, 255, 0, 0.2)',
boxShadow: `
  0 0 20px rgba(0, 255, 100, 0.25),
  0 0 40px rgba(0, 255, 100, 0.15),
  inset 0 0 20px rgba(0, 255, 100, 0.1)
`,  // Multi-layer glow!
backdropFilter: 'blur(6px)',
```

**Glitch animation:**

```css
@keyframes glitch {
  0%   → Scale 1.1, skew 2deg, green, offset shadows
  50%  → Scale 0.95, skew -1deg, white, normal shadows
  100% → Scale 1, no skew, cyan, glow shadow
}
```

**Effect:** Cyberpunk typewriter greeting! ⚡

---

### 🎬 Animation Definitions (Injected via JS)

**In `<style>` tag added to `<head>`:**

```css
@keyframes holdGlow       → Persistent glow (3s)
@keyframes fadeOutSmooth  → Smooth fade exit (2s)
@keyframes fadeInSubtle   → Background fade
@keyframes matrixFall     → Falling characters
@keyframes glitch         → Glitch text effect
@keyframes charPulse      → Character pulse;
```

---

### 🎨 Visual Features Summary

| Feature        | Effect            | Duration   | Removable?   |
| -------------- | ----------------- | ---------- | ------------ |
| Matrix Rain    | Falling Katakana  | 5s         | Auto-cleanup |
| Welcome Text   | Glitch typewriter | 5s         | Auto-cleanup |
| Command Blur   | Background blur   | While open | Auto-cleanup |
| Tab Slide      | Slide animation   | 3s         | Permanent    |
| File Glow      | Rainbow glow      | Infinite   | Permanent    |
| Activity Hover | Scale + rotate    | 0.5s       | Permanent    |
| Tooltip Glass  | Glass morphism    | On hover   | Permanent    |

---

### 🔧 Customization Guide

#### Change Welcome Message

```javascript
// Line ~240 in CustomJavascript.js
const GLITCH_CONFIG = {
  message: "⚡ Welcome back, YOUR_NAME ⚡", // 👈 Edit this!
};
```

#### Adjust Matrix Rain Density

```javascript
// Line ~110 in CustomJavascript.js
const MATRIX_CONFIG = {
  charCount: 100, // Default: 200 (lower = less rain)
};
```

#### Change Glow Colors

```css
/* CustomCSS.css, find relevant section */

/* File glow */
@keyframes glowCycle {
  0% {
    text-shadow: #00ff00 0 0 4px;
  } /* Green */
  50% {
    text-shadow: #a200ff 0 0 4px;
  } /* Purple */
  100% {
    text-shadow: #ff009d 0 0 4px;
  } /* Pink */
}

/* Modify to your colors! */
```

#### Change Animation Speed

```css
/* Tab animations */
.monaco-workbench .tabs-container {
  animation: tabSlideIn 1.5s !important; /* Default: 3s */
}
```

#### Disable Matrix Rain

```javascript
// Line ~115 in CustomJavascript.js
// Comment out the entire for loop:

// for (let i = 0; i < MATRIX_CONFIG.charCount; i++) {
//   ... entire loop
// }
```

#### Change Background Opacity

```css
/* CustomCSS.css, line ~190 */
.monaco-workbench::before {
  opacity: 0.5 !important; /* Default: 0.3 (higher = more visible) */
}
```

---

### 📦 Asset Dependencies

**Images referenced in CustomCSS.css:**

| Asset               | Line # | Purpose                 |
| ------------------- | ------ | ----------------------- |
| CustomWallpaper.jpg | ~190   | Editor background       |
| Photo.jpeg          | ~410   | Account icon            |
| Gears.png           | ~430   | Settings icon           |
| Trident.png         | ~475   | Sidebar background      |
| Mask.png            | ~645   | Command palette overlay |
| ErrorLens-01.png    | ~750   | Error indicator         |

**Update paths if you move assets!**

---

### ⚡ Performance Impact

| Feature        | CPU    | Memory | FPS Impact        | Removable      |
| -------------- | ------ | ------ | ----------------- | -------------- |
| CSS Animations | Low    | ~5MB   | None              | Via commenting |
| Matrix Rain    | Medium | ~10MB  | Minimal (5s only) | Auto-removes   |
| Welcome Screen | Low    | ~5MB   | None (5s only)    | Auto-removes   |
| Blur Effect    | Low    | ~8MB   | None              | On-demand      |
| Glass Morphism | Low    | ~3MB   | None              | Permanent      |

**Total overhead:** ~30MB during startup, ~15MB after cleanup

**Performance modes available in:** [CUSTOMIZATION.md](../Docs/CUSTOMIZATION.md)

---

### 🐛 Debugging

#### Styles Not Applying?

```bash
# 1. Check browser console
Cmd/Ctrl + Shift + I → Console tab
# Look for CSS errors

# 2. Verify file paths
# Open Settings.json
# Check vscode_custom_css.imports paths

# 3. Re-enable Custom CSS
Shift + Alt + Cmd + E
# Restart VS Code
```

#### Animations Not Working?

```bash
# 1. Check animations extension installed
Extensions panel → Search "vscode-animations"

# 2. Check settings
"animations.Enabled": true

# 3. Check APC imports
"apc.imports": ["...updateHandler.js"]
```

#### Matrix Rain Not Showing?

```javascript
// Check console for errors
// Open DevTools: Cmd/Ctrl + Shift + I

// Verify MATRIX_CONFIG exists
// Line ~110 in CustomJavascript.js

// Check if auto-removed too quickly
// Increase timeout on line ~330
setTimeout(() => {
  matrixRain.remove();
}, 10000); // Keep for 10 seconds instead of 5
```

#### Welcome Message Not Appearing?

```javascript
// Check GLITCH_CONFIG
// Line ~240 in CustomJavascript.js

// Verify message isn't empty
message: "⚡ Welcome back, Dibakar ⚡",

// Check if auto-removed
// Line ~315 - adjust timeout if needed
```

---

### 🎓 Code Structure

**CustomJavascript.js organization:**

```javascript
/* File Structure */

// 1. Command Palette Blur (Lines 1-100)
   - Event listeners
   - Mutation observers
   - Blur overlay creation/removal

// 2. Style Injection (Lines 105-200)
   - Animation keyframes
   - CSS rules for dynamic elements

// 3. Background Fade (Lines 205-215)
   - Startup background overlay

// 4. Matrix Rain (Lines 220-280)
   - Character generation
   - Random positioning
   - Animation configuration

// 5. Welcome Screen (Lines 285-330)
   - Splash container creation
   - Glitch text animation
   - Typewriter effect

// 6. Cleanup (Lines 335-350)
   - Remove matrix rain
   - Remove welcome screen
   - Console confirmation
```

---

### 💡 MrDib's Pro Tips

**Performance:**

```javascript
// Reduce matrix rain for slower machines
charCount: 100,  // Default: 200

// Speed up animations
minDuration: 2,  // Default: 3
maxDuration: 3,  // Default: 5
```

**Personalization:**

```javascript
// Add your own special characters
const isSpecial = Math.random() > 0.9;
char.textContent = isSpecial
  ? ['💚', '☕', '🚀', '💻', '🎮'][Math.floor(Math.random() * 5)]
  : /* ... */;
```

**Extend welcome sequence:**

```javascript
// Add second message after first
setTimeout(() => {
  const secondMessage = document.createElement("div");
  secondMessage.textContent = "🚀 Let's code something awesome!";
  // Style and append...
}, 5500);
```

---

### 🔗 Loading These Files

**Via settings.json:**

```json
{
  "vscode_custom_css.imports": [
    "file:///ABSOLUTE/PATH/Styles/CustomCSS.css",
    "file:///ABSOLUTE/PATH/Styles/CustomJavascript.js"
  ],
  "vscode_custom_css.policy": true
}
```

**Enable:**

```
Shift + Alt + Cmd + E (macOS)
Shift + Alt + Ctrl + E (Windows/Linux)
```

---

### 📚 Further Reading

- [CUSTOMIZATION.md](../Docs/CUSTOMIZATION.md) - Detailed customization
- [Assets README](../Assets/README.md) - Image asset guide
- [Main README](../README.md) - Project overview

---

<div align="center">

**Now you know the magic behind the magic!** ✨

Made with 💚 by MrDib

[Back to Main README](../README.md) | [Customization Guide](../Docs/CUSTOMIZATION.md)

</div>
