document.addEventListener("DOMContentLoaded", () => {
  const spotlight = document.getElementById("spotlight-cursor");
  if (spotlight) {
    window.addEventListener("mousemove", (e) => {
      spotlight.style.left = e.clientX + "px";
      spotlight.style.top = e.clientY + "px";
    });
  }

  const menuBtn = document.getElementById("mobile-menu-btn");
  const nav = document.querySelector("nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    const words = heroTitle.querySelectorAll(".word");
    words.forEach((word) => {
      const letters = word.textContent.split("");
      word.innerHTML = "";
      letters.forEach((letter) => {
        const span = document.createElement("span");
        span.className = "char";
        span.textContent = letter === " " ? "\u00A0" : letter;
        word.appendChild(span);
      });
    });

    const chars = document.querySelectorAll(".hero-title .char");
    chars.forEach((char, index) => {
      char.style.animationDelay = `${index * 0.03}s`;
    });
  }

  const tiltElements = document.querySelectorAll("[data-tilt]");
  tiltElements.forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const { width, height } = rect;
      const rotateX = (y / height - 0.5) * -15; // Max 7.5 deg
      const rotateY = (x / width - 0.5) * 15; // Max 7.5 deg

      el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "rotateX(0) rotateY(0) scale(1)";
    });
  });
});

  function copyScript1() {
    const scriptText = document.getElementById("script-text").innerText;
    const copyBtn = document.getElementById("copy-btn");
    const originalContent = copyBtn.innerHTML;

    navigator.clipboard.writeText(scriptText).then(() => {
      copyBtn.innerHTML = '<i class="fas fa-check"></i><span>Copied!</span>';
      copyBtn.classList.add("copied");
      copyBtn.disabled = true;

      setTimeout(() => {
        copyBtn.innerHTML = originalContent;
        copyBtn.classList.remove("copied");
        copyBtn.disabled = false;
      }, 2000);
    }).catch((err) => {
      console.error("Failed to copy text: ", err);
    });
  }

  function copyScript2() {
    const scriptText = document.getElementById("script-text1").innerText;
    const copyBtn = document.getElementById("copy-btn1");
    const originalContent = copyBtn.innerHTML;

    navigator.clipboard.writeText(scriptText).then(() => {
      copyBtn.innerHTML = '<i class="fas fa-check"></i><span>Copied!</span>';
      copyBtn.classList.add("copied");
      copyBtn.disabled = true;

      setTimeout(() => {
        copyBtn.innerHTML = originalContent;
        copyBtn.classList.remove("copied");
        copyBtn.disabled = false;
      }, 2000);
    }).catch((err) => {
      console.error("Failed to copy text: ", err);
    });
  }



