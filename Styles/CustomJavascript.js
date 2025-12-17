/* ╔══════════════════════════════════════════════════════════════════╗ */
/* ║                  🚀 MrDib's CUSTOM JAVASCRIPT                    ║ */
/* ║                      Professional Edition v2.0                   ║ */
/* ╚══════════════════════════════════════════════════════════════════╝ */

/* ┌─────────────────────────────────────────────────────────────────┐ */
/* │                    🎭 COMMAND PALETTE EFFECTS                   │ */
/* └─────────────────────────────────────────────────────────────────┘ */

// INFO: Command Palette Blur Effect - Making the background dreamy! 🌫️
document.addEventListener("DOMContentLoaded", function () {
  // INFO: Check for command palette element
  const checkElement = setInterval(() => {
    const commandDialog = document.querySelector(".quick-input-widget");

    if (commandDialog) {
      // INFO: Apply blur if palette is visible
      if (commandDialog.style.display !== "none") {
        runMyScript();
      }

      // INFO: Mutation observer for palette visibility changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (
            mutation.type === "attributes" &&
            mutation.attributeName === "style"
          ) {
            if (commandDialog.style.display === "none") {
              handleEscape();
            } else {
              runMyScript();
            }
          }
        });
      });

      observer.observe(commandDialog, { attributes: true });
      clearInterval(checkElement);
    } else {
      console.log("⏳ Command dialog not found yet. Retrying...");
    }
  }, 500);

  // INFO: Keyboard shortcut handlers - Cmd/Ctrl+P and Escape! ⌨️
  document.addEventListener("keydown", function (event) {
    if ((event.metaKey || event.ctrlKey) && event.key === "p") {
      event.preventDefault();
      runMyScript();
    } else if (event.key === "Escape" || event.key === "Esc") {
      event.preventDefault();
      handleEscape();
    }
  });

  // INFO: Capture phase escape handler
  document.addEventListener(
    "keydown",
    function (event) {
      if (event.key === "Escape" || event.key === "Esc") {
        handleEscape();
      }
    },
    true
  );

  // INFO: Apply blur overlay - Creating that glass effect! 🥃
  function runMyScript() {
    const targetDiv = document.querySelector(".monaco-workbench");
    const existingElement = document.getElementById("command-blur");

    // Remove existing blur if present
    if (existingElement) {
      existingElement.remove();
    }

    // Create new blur overlay
    const newElement = document.createElement("div");
    newElement.setAttribute("id", "command-blur");
    Object.assign(newElement.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      zIndex: "999",
      backdropFilter: "blur(2.5px)",
      WebkitBackdropFilter: "blur(2.5px)",
      backgroundColor: "rgba(0, 0, 0, 0.25)",
      pointerEvents: "none",
      transition: "all 0.3s ease-in-out",
    });

    targetDiv.appendChild(newElement);
  }

  // INFO: Remove blur overlay - Back to clarity! ✨
  function handleEscape() {
    const element = document.getElementById("command-blur");
    if (element) {
      element.style.opacity = "0";
      setTimeout(() => element.remove(), 300);
    }
  }
});

/* ┌─────────────────────────────────────────────────────────────────┐ */
/* │                    🎨 ANIMATION STYLES                          │ */
/* └─────────────────────────────────────────────────────────────────┘ */

// INFO: Inject animation styles - The magic CSS! 🎩
const style = document.createElement("style");
style.textContent = `
  /* ═══════════════════ GLOW ANIMATIONS ═══════════════════ */

  /* INFO: Persistent glow effect */
  @keyframes holdGlow {
    0% {
      transform: translate(-50%, -50%) scale(1);
      filter: drop-shadow(0 0 8px #00ff99);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(1.01);
      filter: drop-shadow(0 0 10px #00ffcc);
      opacity: 1;
    }
  }

  /* INFO: Smooth fade out animation */
  @keyframes fadeOutSmooth {
    0% {
      transform: translate(-50%, -50%) scale(1.01);
      filter: drop-shadow(0 0 10px #00ffcc);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(1.02);
      filter: drop-shadow(0 0 0px transparent);
      opacity: 0;
    }
  }

  /* INFO: Background fade in */
  @keyframes fadeInSubtle {
    from { opacity: 1; }
    to { opacity: 0; }
  }

  /* ═══════════════════ MATRIX EFFECTS ═══════════════════ */

  /* INFO: Matrix rain animation - Neo would be proud! 🕶️ */
  @keyframes matrixFall {
    0% {
      transform: translateY(-100%);
      opacity: 1;
    }
    70% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(100vh);
      opacity: 0;
    }
  }

  /* INFO: Glitch text effect - Cyberpunk vibes! 🤖 */
  @keyframes glitch {
    0% {
      opacity: 0.3;
      transform: scale(1.05) skew(1deg);
      color: #0f0;
      text-shadow: 1px 1px 0 #ff00ff, -1px -1px 0 #00ffff;
    }
    50% {
      opacity: 0.6;
      transform: scale(0.98) skew(-0.5deg);
      color: #0ff;
      text-shadow: 0.5px 0.5px 0 #ff00ff, -0.5px -0.5px 0 #00ffff;
    }
    100% {
      opacity: 1;
      transform: scale(1) skew(0deg);
      color: #00ff99;
      text-shadow: 0 0 10px #00ff99;
    }
  }

  /* Enhancement: Pulse animation for characters */
  @keyframes charPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  /* ═══════════════════ ELEMENT STYLES ═══════════════════ */

  /* INFO: Matrix rain container */
  .matrix-rain {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9997;
    pointer-events: none;
    overflow: hidden;
  }

  /* INFO: Individual matrix characters - Fancy styled! 💎 */
  .matrix-char {
    position: absolute;
    top: -100px;
    font-family: 'Cascadia Code', monospace;
    font-size: 16px;
    color: #00ff00;
    opacity: 0;
    animation: matrixFall linear forwards;
    padding: 2px;
    border-radius: 50%;
    background: rgba(0, 255, 0, 0.05);
    border: 1px solid rgba(0, 255, 0, 0.1);
    box-shadow:
      0 0 4px rgba(0, 255, 100, 0.4),
      0 0 10px rgba(0, 255, 100, 0.1),
      inset 0 0 4px rgba(0, 255, 100, 0.2);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    transition: transform 0.2s ease;
  }

  /* Enhancement: Hover effect for matrix chars */
  .matrix-char:hover {
    transform: scale(1.5) rotate(180deg);
    color: #ff00ff;
  }

  /* INFO: Glitch text container */
  #glitch-text {
    display: inline-block;
    font-size: inherit;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    letter-spacing: 0.1em;
  }

  /* INFO: Individual glitch characters */
  .glitch-char {
    display: inline-block;
    animation: glitch 0.3s ease-in-out forwards;
    font-size: inherit !important;
    position: relative;
  }

  /* Enhancement: Staggered animation */
  .glitch-char:nth-child(odd) {
    animation-delay: 0.05s;
  }

  .glitch-char:nth-child(even) {
    animation-delay: 0.02s;
  }
`;
document.head.appendChild(style);

/* ┌─────────────────────────────────────────────────────────────────┐ */
/* │                    🌌 WELCOME SCREEN EFFECTS                    │ */
/* └─────────────────────────────────────────────────────────────────┘ */

// INFO: Background fade overlay - Setting the mood! 🌃
const bgFade = document.createElement("div");
Object.assign(bgFade.style, {
  position: "absolute",
  top: 0,
  left: "-25vw",
  width: "150vw",
  height: "100vh",
  fontSize: "clamp(12px, 1.2vw, 20px)",
  background: "linear-gradient(135deg, #121212, #1f1f1f)",
  opacity: "0",
  zIndex: "9996",
  pointerEvents: "none",
  animation: "fadeInSubtle 5s ease-in-out forwards",
});
document.body.appendChild(bgFade);

/* ┌─────────────────────────────────────────────────────────────────┐ */
/* │                    🌧️ MATRIX RAIN EFFECT                        │ */
/* └─────────────────────────────────────────────────────────────────┘ */

// INFO: Create matrix rain container
const matrixRain = document.createElement("div");
matrixRain.classList.add("matrix-rain");
document.body.appendChild(matrixRain);

// INFO: Configuration for matrix rain
const MATRIX_CONFIG = {
  charCount: 200,
  minDelay: 0,
  maxDelay: 4,
  minDuration: 3,
  maxDuration: 5,
  charRange: 96,
  baseChar: 0x30a0,
};

// INFO: Generate matrix rain characters - Let it rain! ☔
for (let i = 0; i < MATRIX_CONFIG.charCount; i++) {
  const char = document.createElement("div");
  char.classList.add("matrix-char");

  const isSpecial = Math.random() > 0.9;
  char.textContent = isSpecial
    ? ["⚡", "🔥", "💀", "👾", "🎯"][Math.floor(Math.random() * 5)]
    : String.fromCharCode(
        MATRIX_CONFIG.baseChar + Math.random() * MATRIX_CONFIG.charRange
      );

  const left = Math.random() * window.innerWidth * 1.5;
  const delay = MATRIX_CONFIG.minDelay + Math.random() * MATRIX_CONFIG.maxDelay;
  const duration =
    MATRIX_CONFIG.minDuration +
    Math.random() * (MATRIX_CONFIG.maxDuration - MATRIX_CONFIG.minDuration);
  const opacity = 0.3 + Math.random() * 0.7;

  Object.assign(char.style, {
    left: `${left}px`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    opacity: opacity,
    fontSize: isSpecial ? "20px" : "16px",
  });

  matrixRain.appendChild(char);
}

// INFO: Responsive matrix rain - Adapt to window resize! 📐
window.addEventListener("resize", () => {
  const chars = document.querySelectorAll(".matrix-char");
  chars.forEach((char) => {
    char.style.left = `${Math.random() * window.innerWidth * 1.5}px`;
  });
});

/* ┌─────────────────────────────────────────────────────────────────┐ */
/* │                     💬 WELCOME MESSAGE (FIXED)                  │ */
/* └─────────────────────────────────────────────────────────────────┘ */

// FIX: Check if splash already exists to prevent double-typing bug!
if (!document.getElementById("dib-splash-container")) {
  const splash = document.createElement("div");
  splash.id = "dib-splash-container";
  splash.innerHTML = `<span id="glitch-text"></span>`;

  Object.assign(splash.style, {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: `${Math.min(window.innerWidth * 0.05, 42)}px`,
    fontFamily: "'Cascadia Code', 'Fira Code', monospace",
    color: "#00ff00",
    padding: "0.5em 1em",
    maxWidth: "90vw",
    overflow: "hidden",
    whiteSpace: "nowrap",
    background:
      "linear-gradient(135deg, rgba(0,255,0,0.05), rgba(0,255,255,0.05))",
    borderRadius: "16px",
    border: "2px solid rgba(0, 255, 0, 0.2)",
    boxShadow: `0 0 20px rgba(0, 255, 100, 0.25), 0 0 40px rgba(0, 255, 100, 0.15)`,
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    zIndex: "9999",
    textAlign: "center",
    animation: `holdGlow 3s ease-out both, fadeOutSmooth 2s ease-in-out 3s forwards`,
    cursor: "default",
  });
  document.body.appendChild(splash);

  /* ┌─────────────────────────────────────────────────────────────────┐ */
  /* │                    ⚡ GLITCH TEXT ANIMATION (FIXED)             │ */
  /* └─────────────────────────────────────────────────────────────────┘ */

  const GLITCH_CONFIG = {
    message: "⚡ Welcome back, Dibakar ⚡",
    typeDelay: 80, // Increased for better visibility
    glitchDuration: 200, // FIXED: Increased so the real char shows properly
    randomDelay: 50,
    glitchChars: "アカサタナハマヤラワ0123456789@#$%^&*!?",
  };

  const target = document.getElementById("glitch-text");
  let charIndex = 0;

  const typeGlitchChar = () => {
    // Double check: if the target was removed by a cleanup timer, stop typing
    if (!document.getElementById("glitch-text")) return;

    if (charIndex >= GLITCH_CONFIG.message.length) {
      setTimeout(() => {
        if (target)
          target.style.animation = "charPulse 1s ease-in-out infinite";
      }, 500);
      return;
    }

    const realChar = GLITCH_CONFIG.message[charIndex];
    const glitchChar = document.createElement("span");
    glitchChar.classList.add("glitch-char");

    // FIXED: Start with random glitch character
    glitchChar.textContent =
      GLITCH_CONFIG.glitchChars[
        Math.floor(Math.random() * GLITCH_CONFIG.glitchChars.length)
      ];

    target.appendChild(glitchChar);

    // FIXED: Change to real character after glitch duration
    setTimeout(() => {
      if (glitchChar && glitchChar.parentNode) {
        glitchChar.textContent = realChar === " " ? "\u00A0" : realChar;

        // Special styling for lightning bolts
        if (realChar === "⚡") {
          glitchChar.style.color = "#ffff00";
          glitchChar.style.textShadow = "0 0 15px #ffff00";
          glitchChar.style.filter = "brightness(1.5)";
        }
      }
    }, GLITCH_CONFIG.glitchDuration);

    charIndex++;
    setTimeout(typeGlitchChar, GLITCH_CONFIG.typeDelay);
  };

  // Start typing after a small delay
  setTimeout(typeGlitchChar, 100);

  // INFO: Responsive font sizing - Looks good on any screen! 📺
  window.addEventListener("resize", () => {
    if (splash && splash.parentNode) {
      splash.style.fontSize = `${Math.min(window.innerWidth * 0.05, 42)}px`;
    }
  });

  // Final cleanup
  setTimeout(() => {
    if (matrixRain && matrixRain.parentNode) {
      matrixRain.style.transition = "opacity 0.5s ease-out";
      matrixRain.style.opacity = "0";
    }
    setTimeout(() => {
      if (splash && splash.parentNode) splash.remove();
      if (bgFade && bgFade.parentNode) bgFade.remove();
      if (matrixRain && matrixRain.parentNode) matrixRain.remove();
      console.log("✨ Welcome sequence complete! Happy coding, Dibakar! 🚀");
    }, 500);
  }, 5500);
}

/* ╔══════════════════════════════════════════════════════════════════╗ */
/* ║                     END OF CUSTOM JAVASCRIPT                     ║ */
/* ║                                                                  ║ */
/* ║  "Code is poetry, bugs are just typos in the verse!" ~ MrDib 🎨 ║ */
/* ╚══════════════════════════════════════════════════════════════════╝ */
