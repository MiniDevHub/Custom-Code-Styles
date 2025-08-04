// INFO: Command Palette and Notification Blur
document.addEventListener("DOMContentLoaded", function () {
  const checkElement = setInterval(() => {
    const commandDialog = document.querySelector(".quick-input-widget");
    if (commandDialog) {
      if (commandDialog.style.display !== "none") {
        runMyScript();
      }
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
      console.log("Command dialog not found yet. Retrying...");
    }
  }, 500);
  document.addEventListener("keydown", function (event) {
    if ((event.metaKey || event.ctrlKey) && event.key === "p") {
      event.preventDefault();
      runMyScript();
    } else if (event.key === "Escape" || event.key === "Esc") {
      event.preventDefault();
      handleEscape();
    }
  });
  document.addEventListener(
    "keydown",
    function (event) {
      if (event.key === "Escape" || event.key === "Esc") {
        handleEscape();
      }
    },
    true
  );
  function runMyScript() {
    const targetDiv = document.querySelector(".monaco-workbench");
    const existingElement = document.getElementById("command-blur");
    if (existingElement) {
      existingElement.remove();
    }
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
    });
    targetDiv.appendChild(newElement);
  }
  function handleEscape() {
    const element = document.getElementById("command-blur");
    if (element) {
      element.remove();
    }
  }
});

// INFO: Custom KeyStrokes
// const toastContainer = document.createElement("div");
// Object.assign(toastContainer.style, {
//   position: "fixed",
//   bottom: "20px",
//   right: "20px",
//   display: "flex",
//   flexDirection: "column-reverse",
//   gap: "8px",
//   zIndex: 9999,
// });
// document.body.appendChild(toastContainer);
// document.addEventListener("keydown", (e) => {
//   const keys = [];
//   if (e.metaKey) keys.push("⌘");
//   if (e.ctrlKey) keys.push("Ctrl");
//   if (e.altKey) keys.push("Alt");
//   if (e.shiftKey) keys.push("Shift");
//   let rawKey = e.key;
//   const keyMap = {
//     " ": "Space",
//     Escape: "Esc",
//     ArrowUp: "↑",
//     ArrowDown: "↓",
//     ArrowLeft: "←",
//     ArrowRight: "→",
//     Enter: "Enter",
//     Tab: "Tab",
//     Backspace: "Backspace",
//   };
//   const normalizedKey = keyMap[rawKey] || rawKey.toUpperCase();
//   if (!["CONTROL", "SHIFT", "ALT", "META"].includes(normalizedKey)) {
//     keys.push(normalizedKey);
//   }
//   const combo = keys.join(" + ");
//   const toast = document.createElement("div");
//   toast.textContent = combo;
//   Object.assign(toast.style, {
//     background: "#222",
//     color: "#fff",
//     padding: "8px 12px",
//     fontSize: "14px",
//     borderRadius: "6px",
//     fontFamily: "monospace",
//     opacity: "0",
//     transform: "translateX(20px)",
//     transition: "all 0.4s ease",
//   });
//   toastContainer.appendChild(toast);
//   requestAnimationFrame(() => {
//     toast.style.opacity = "0.95";
//     toast.style.transform = "translateX(0)";
//   });
//   setTimeout(() => {
//     toast.style.opacity = "0";
//     toast.style.transform = "translateX(20px)";
//     setTimeout(() => toast.remove(), 400);
//   }, 2500);
// });

// INFO: Custom Welcome 🎉
const style = document.createElement("style");
style.textContent = `
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
@keyframes fadeInSubtle {
  from { opacity: 1; }
  to { opacity: 0; }
}
@keyframes matrixFall {
  0% { transform: translateY(-100%); opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
}
@keyframes glitch {
  0%   { opacity: 0.3; transform: scale(1.1); color: #0f0; }
  50%  { opacity: 1; transform: scale(0.95); color: #fff; }
  100% { opacity: 1; transform: scale(1); color: #00ff99; }
}
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
.matrix-char {
  position: absolute;
  top: 0;
  font-family: monospace;
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
#glitch-text {
  display: inline-block;
  font-size: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}
.glitch-char {
  display: inline-block;
  animation: glitch 0.4s ease-in-out;
  font-size: inherit !important;
}
`;
document.head.appendChild(style);
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
const matrixRain = document.createElement("div");
matrixRain.classList.add("matrix-rain");
document.body.appendChild(matrixRain);
for (let i = 0; i < 200; i++) {
  const char = document.createElement("div");
  char.classList.add("matrix-char");
  char.textContent = String.fromCharCode(0x30a0 + Math.random() * 96);
  const left = Math.random() * window.innerWidth * 1.5;
  const delay = Math.random() * 4;
  const duration = 3 + Math.random() * 2;
  Object.assign(char.style, {
    left: `${left}px`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  });

  matrixRain.appendChild(char);
}
window.addEventListener("resize", () => {
  const chars = document.querySelectorAll(".matrix-char");
  chars.forEach((char) => {
    char.style.left = `${Math.random() * window.innerWidth * 1.5}px`;
  });
});
const splash = document.createElement("div");
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
  boxShadow: "0 0 20px rgba(0, 255, 100, 0.25)",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)",
  zIndex: "9999",
  textAlign: "center",
  animation: `
            holdGlow 3s ease-out both,
            fadeOutSmooth 2s ease-in-out 3s forwards
          `,
});
document.body.appendChild(splash);
const target = document.getElementById("glitch-text");
const message = "⚡ Welcome back, Dibakar ⚡";
let i = 0;
const typeGlitchChar = () => {
  if (i >= message.length) return;
  const realChar = message[i];
  const glitchChar = document.createElement("span");
  glitchChar.classList.add("glitch-char");
  glitchChar.textContent = getRandomChar();
  target.appendChild(glitchChar);
  setTimeout(() => {
    glitchChar.innerHTML = realChar === " " ? "&nbsp;" : realChar;
  }, 80 + Math.random() * 100);

  i++;
  setTimeout(typeGlitchChar, 60);
};
function getRandomChar() {
  const chars = "アカサタナハマヤラワ0123456789@#$%^&*";
  return chars[Math.floor(Math.random() * chars.length)];
}
typeGlitchChar();
window.addEventListener("resize", () => {
  splash.style.fontSize = `clamp(16px, ${window.innerWidth * 0.04}px, 34px)`;
});
setTimeout(() => {
  requestAnimationFrame(() => {
    splash.style.animation = `
          holdGlow 3s ease-out both,
          fadeOutSmooth 2s ease-in-out 3s forwards;
        `;
  });
}, 5000);
setTimeout(() => {
  splash.remove();
  bgFade.remove();
}, 5200);
