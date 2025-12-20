# 📦 Installation Guide

## System Requirements

- **VS Code**: Version 1.85.0 or higher
- **Operating System**: Windows 10+, macOS 10.15+, or Linux
- **RAM**: 4GB minimum (8GB recommended for smooth animations)
- **Display**: 1920x1080 or higher recommended

## Step-by-Step Installation

### 1. Install Required Extensions

First, install these essential extensions:

```bash
# Required - Enables custom CSS/JS injection
code --install-extension be5invis.vscode-custom-css

# Required - Adds animation support
code --install-extension brandonkirbyson.vscode-animations

# Optional but recommended
code --install-extension PKief.material-icon-theme
code --install-extension usernamehw.errorlens
code --install-extension esbenp.prettier-vscode
```

### 2. Clone the Repository

```bash
# Using HTTPS
git clone https://github.com/MiniDevHub/Custom-Code-Styles.git

# Using SSH
git clone git@github.com:MiniDevHub/Custom-Code-Styles.git

# Or download as ZIP from GitHub
```

### 3. Set Up File Structure

Create your custom code directory:

```bash
# macOS/Linux
mkdir -p ~/Documents/Code/CustomCode

# Windows
mkdir %USERPROFILE%\Documents\Code\CustomCode
```

### 4. Copy Assets

Copy all image assets to your custom directory:

```bash
# macOS/Linux
cp -r Custom-Code-Styles/assets/* ~/Documents/Code/CustomCode/

# Windows
xcopy Custom-Code-Styles\assets\* %USERPROFILE%\Documents\Code\CustomCode\ /E
```

### 5. Configure VS Code

Add to your `settings.json`:

```json
{
  "vscode_custom_css.imports": [
    "file:///Users/YOUR_USERNAME/path/to/Custom-Code-Styles/styles/CustomCSS.css",
    "file:///Users/YOUR_USERNAME/path/to/Custom-Code-Styles/styles/CustomJavascript.js"
  ],
  "vscode_custom_css.policy": true,
  "window.titleBarStyle": "custom"
}
```

### 6. Enable Custom CSS

1. Open Command Palette: `Cmd/Ctrl + Shift + P`
2. Type: `Enable Custom CSS and JS`
3. Press Enter
4. Restart VS Code when prompted

### 7. Handle Security Warning

VS Code will show a warning about corrupt installation. This is expected!

- Click the gear icon on the warning
- Select "Don't Show Again"

## Platform-Specific Notes

### macOS

- You may need to grant VS Code additional permissions in System Preferences > Security & Privacy
- Use absolute paths starting with `/Users/`

### Windows

- Run VS Code as Administrator for the initial setup
- Windows Defender might flag the modification - add an exception if needed
- Use paths like `file:///C:/Users/YourName/...`

### Linux

- Ensure you have write permissions to VS Code installation directory
- Some distributions may require `sudo` for the enable command
- Use absolute paths starting with `/home/`

## Verification

After installation, you should see:

1. Matrix rain animation on startup
2. Transparent/blurred backgrounds
3. Glowing text effects
4. Custom activity bar icons

If not, check [TROUBLESHOOTING.md](TROUBLESHOOTING.md)

## Updating

To update the styles:

1. Pull latest changes: `git pull`
2. Re-run: `Enable Custom CSS and JS`
3. Restart VS Code

## Uninstalling

To remove customizations:

1. Open Command Palette
2. Run: `Disable Custom CSS and JS`
3. Remove entries from settings.json
4. Restart VS Code

---
