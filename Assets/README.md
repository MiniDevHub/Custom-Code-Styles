# 🎨 Assets Directory

**Visual resources that power MrDib's Custom Code Styles**

---

## 📂 Directory Structure

```

Assets/
└── Images/
├── art.svg → SVG artwork for decorations
├── CustomProfile.jpg → Profile picture for activity bar
├── CustomWallpaper.jpg → Main editor background wallpaper
├── ErrorLens-01.png → Custom error icon for Error Lens
├── Gears.png → Settings gear icon
├── Mask.png → Command palette overlay effect
├── Photo.jpeg → Account icon in activity bar
└── Trident.png → Sidebar background decoration

```

---

## 🖼️ Asset Details

### CustomWallpaper.jpg

**Purpose:** Main editor background
**Used In:** `Styles/CustomCSS.css`
**CSS Reference:**

```css
.monaco-workbench::before {
  background-image: url("path/to/CustomWallpaper.jpg");
  opacity: 0.3;
}
```

**Recommendations:**

- Resolution: 1920x1080 or higher
- Format: JPG (for smaller file size)
- Optimize: Compress to < 500KB
- Style: Dark, subtle patterns work best

---

### Photo.jpeg / CustomProfile.jpg

**Purpose:** Your face in the activity bar
**Used In:** `Styles/CustomCSS.css`
**CSS Reference:**

```css
.codicon-accounts-view-bar-icon:before {
  background-image: url("path/to/Photo.jpeg");
  border-radius: 50%;
}
```

**Recommendations:**

- Size: 512x512px (square)
- Format: JPG or PNG
- Style: Headshot, centered face
- Background: Any (will be cropped to circle)

---

### Trident.png

**Purpose:** Sidebar background decoration
**Used In:** `Styles/CustomCSS.css`
**CSS Reference:**

```css
.monaco-workbench .part.sidebar::before {
  background-image: url("path/to/Trident.png");
  opacity: 0.35;
}
```

**Recommendations:**

- Format: PNG (with transparency)
- Style: Icon, logo, or pattern
- Color: Works best with light colors
- Size: 512x512px or vector

---

### Mask.png

**Purpose:** Command palette overlay
**Used In:** `Styles/CustomCSS.css`
**CSS Reference:**

```css
.quick-input-widget::before {
  background-image: url("path/to/Mask.png");
  opacity: 0.3;
  background-size: 35%;
}
```

**Recommendations:**

- Format: PNG (with transparency)
- Style: Abstract pattern or icon
- Size: 512x512px
- Opacity: Will be reduced to 30%

---

### Gears.png

**Purpose:** Custom settings icon
**Used In:** `Styles/CustomCSS.css`
**CSS Reference:**

```css
.codicon-settings-view-bar-icon:before {
  background-image: url("path/to/Gears.png");
  border-radius: 50%;
}
```

**Recommendations:**

- Format: PNG (with transparency)
- Size: 128x128px
- Style: Gear icon or settings symbol

---

### ErrorLens-01.png

**Purpose:** Custom error indicator
**Used In:** `Styles/CustomCSS.css`
**CSS Reference:**

```css
.monaco-editor .ced-1-TextEditorDecorationType33-2 {
  background: url("path/to/ErrorLens01.png");
}
```

**Recommendations:**

- Format: PNG (with transparency)
- Size: 24x24px or 32x32px
- Style: Error/warning icon
- Color: Red or orange tones

---

### art.svg

**Purpose:** Scalable vector art
**Used In:** Activity bar decorations
**Recommendations:**

- Format: SVG (vector, scalable)
- Optimize: Remove unnecessary metadata
- Size: Keep file < 50KB

---

## 🎨 Adding Your Own Assets

### Step 1: Prepare Your Image

**For Wallpapers:**

```bash
# Optimize with ImageMagick
convert CustomWallpaper.jpg -quality 85 -resize 1920x1080 CustomWallpaper-optimized.jpg
```

**For Photos/Icons:**

```bash
# Convert to optimal size
convert photo.jpg -resize 512x512 -quality 90 CustomProfile.jpg
```

### Step 2: Add to Assets/Images/

```bash
cp your-image.jpg Custom-Code-Styles/Assets/Images/
```

### Step 3: Update CSS References

```css
/* Edit Styles/CustomCSS.css */

/* Find the appropriate section and update: */
.your-selector {
  background-image: url("/ABSOLUTE/PATH/TO/Assets/Images/your-image.jpg");
}
```

> ⚠️ **Important:** Always use **absolute paths** for VS Code Custom CSS!

### Step 4: Reload Custom CSS

```bash
# Press Shift + Alt + Cmd + E (macOS)
# Or Cmd/Ctrl + Shift + P → "Reload Custom CSS and JS"
# Restart VS Code
```

---

## 🔧 Path Configuration

### macOS/Linux Absolute Paths

```
file:///Users/YOUR_USERNAME/Documents/Code/CustomCode/CustomWallpaper.jpg
file:///home/YOUR_USERNAME/Documents/Code/CustomCode/Photo.jpeg
```

### Windows Absolute Paths

```
file:///C:/Users/YOUR_USERNAME/Documents/Code/CustomCode/CustomWallpaper.jpg
```

### Finding Your Path

```bash
# macOS/Linux
pwd  # Shows current directory
# Then prepend file:///

# Windows
cd  # Shows current directory
# Convert backslashes to forward slashes
# Then prepend file:///
```

---

## 📐 Image Specifications

| Asset Type    | Recommended Size | Format  | Max File Size | Notes            |
| ------------- | ---------------- | ------- | ------------- | ---------------- |
| Wallpaper     | 1920x1080px      | JPG     | 500KB         | Compress well    |
| Profile Photo | 512x512px        | JPG/PNG | 200KB         | Square, centered |
| Icons         | 128x128px        | PNG     | 50KB          | Transparent BG   |
| Decorations   | 512x512px        | PNG     | 100KB         | Transparent BG   |
| SVG Art       | Vector           | SVG     | 50KB          | Optimized SVG    |

---

## 🎨 Design Guidelines

### Color Palette

Works best with these colors:

- **Primary:** #00ff00 (Matrix green)
- **Accent:** #00ffff (Cyan glow)
- **Highlight:** #ffd700 (Golden)
- **Warning:** #ff00ff (Purple)
- **Background:** Dark tones (#121212, #1f1f1f)

### Style Tips

**Wallpapers:**

- ✅ Abstract patterns
- ✅ Cyberpunk themes
- ✅ Dark gradients
- ✅ Subtle textures
- ❌ Bright, distracting images
- ❌ Text-heavy images
- ❌ High-contrast photos

**Icons:**

- ✅ Simple, recognizable shapes
- ✅ Transparent backgrounds
- ✅ Monochrome or duo-tone
- ❌ Complex, detailed graphics
- ❌ Multiple colors

---

## 🖼️ Free Image Resources

### Wallpapers

```
🌈 https://unsplash.com           → Free high-quality photos
🎨 https://pexels.com             → Free stock photos & videos
🌌 https://coolbackgrounds.io    → Generate backgrounds
🎭 https://bgjar.com              → SVG background generator
```

### Icons

```
🎯 https://heroicons.com          → Beautiful SVG icons
💎 https://phosphoricons.com      → Flexible icon family
🌟 https://lucide.dev             → Modern icon set
🎨 https://iconmonstr.com         → Free simple icons
```

### Editing Tools

```
🖌️ https://photopea.com           → Free Photoshop alternative
✂️ https://remove.bg              → Remove backgrounds
🎨 https://squoosh.app            → Image compression
📐 https://iloveimg.com           → Resize, crop, compress
```

---

## 🚀 Quick Start Examples

### Replace Wallpaper

```bash
# 1. Download/create your wallpaper
# 2. Optimize it
convert my-wallpaper.jpg -quality 85 -resize 1920x1080 CustomWallpaper.jpg

# 3. Move to Assets/Images/
mv CustomWallpaper.jpg Assets/Images/

# 4. Path is already set in CustomCSS.css
# 5. Reload Custom CSS: Shift + Alt + Cmd + E
```

### Replace Profile Photo

```bash
# 1. Get your photo (512x512px recommended)
# 2. Copy to Assets/Images/
cp my-photo.jpg Assets/Images/Photo.jpeg

# 3. Reload VS Code
# Your face now appears in the activity bar! 👤
```

### Add New Icon

```bash
# 1. Create/download PNG icon
# 2. Copy to Assets/Images/
cp my-icon.png Assets/Images/MyIcon.png

# 3. Add to CustomCSS.css
# .custom-element {
#   background-image: url('/path/to/Assets/Images/MyIcon.png');
# }

# 4. Reload Custom CSS
```

---

## 📊 Current Asset Usage

| Asset               | Used In       | Line # (approx) | Opacity | Effect                 |
| ------------------- | ------------- | --------------- | ------- | ---------------------- |
| CustomWallpaper.jpg | CustomCSS.css | ~190            | 0.3     | Editor background      |
| Photo.jpeg          | CustomCSS.css | ~410            | 1.0     | Account icon           |
| CustomProfile.jpg   | CustomCSS.css | ~410            | 1.0     | Alternative profile    |
| Gears.png           | CustomCSS.css | ~430            | 0.8     | Settings icon          |
| Trident.png         | CustomCSS.css | ~475            | 0.35    | Sidebar decoration     |
| Mask.png            | CustomCSS.css | ~645            | 0.3     | Command palette        |
| ErrorLens-01.png    | CustomCSS.css | ~750            | 1.0     | Error indicators       |
| art.svg             | (Optional)    | -               | -       | Additional decorations |

---

## 🔄 Asset Management

### Updating Assets

```bash
# Backup current assets
cp -r Assets/Images Assets/Images.backup

# Update asset
cp new-wallpaper.jpg Assets/Images/CustomWallpaper.jpg

# Test in VS Code
# Reload Custom CSS: Shift + Alt + Cmd + E

# If it works, commit
git add Assets/Images/CustomWallpaper.jpg
git commit -m "style(assets): update custom wallpaper"

# If it doesn't work, restore backup
cp Assets/Images.backup/* Assets/Images/
```

### Version Control

**Add to .gitignore if needed:**

```bash
# .gitignore

# Large files (optional)
Assets/Images/*.jpg
Assets/Images/*.png

# But keep a .gitkeep
!Assets/Images/.gitkeep
```

**Or commit everything:**

```bash
# Recommended for this project
git add Assets/Images/*
git commit -m "style(assets): add all visual resources"
```

---

## 💡 Pro Tips

### Optimization

1. **Compress images before adding:**

   - Use https://tinypng.com
   - Or ImageOptim (macOS)
   - Or Squoosh (web)

2. **Use appropriate formats:**

   - Photos → JPG (smaller)
   - Icons → PNG (transparency)
   - Logos → SVG (scalable)

3. **Test performance:**
   - Large images slow down VS Code startup
   - Keep total assets < 5MB

### Backup

```bash
# Create asset backup
tar -czf assets-backup-$(date +%Y%m%d).tar.gz Assets/

# Restore from backup
tar -xzf assets-backup-20241106.tar.gz
```

### Troubleshooting

**Images not loading?**

```
1. Check file paths are absolute
2. Check file permissions (readable)
3. Check file names match CSS references
4. Try reload: Shift + Alt + Cmd + E
5. Check browser console for errors
```

**Images too bright/dark?**

```css
/* Adjust opacity in CustomCSS.css */
.element::before {
  opacity: 0.2; /* Lower = darker/more subtle */
}
```

**Images stretched/distorted?**

```css
/* Fix with background-size */
background-size: cover; /* Fill space, crop if needed */
background-size: contain; /* Fit entire image, may have gaps */
background-size: 100%; /* Stretch to fill (may distort) */
```

---

## 🎯 Quick Reference

**Where are assets used?**

- `Styles/CustomCSS.css` - All image references
- `Styles/CustomJavascript.js` - Potentially for dynamic loading

**How to replace?**

1. Add image to `Assets/Images/`
2. Update path in `CustomCSS.css`
3. Reload Custom CSS
4. Restart VS Code

**Need help?**

- [Main README](../README.md)
- [Customization Guide](../Docs/CUSTOMIZATION.md)
- [Troubleshooting](../Docs/TROUBLESHOOTING.md)

---

<div align="center">

**Your assets, your style, your VS Code!** 🎨

Made with 💚 by MrDib

[Back to Main README](../README.md)

</div>
