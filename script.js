document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yes-btn");
  const noBtn = document.getElementById("no-btn");
  const mainContent = document.getElementById("main-content");
  const successContent = document.getElementById("success-content");
  const background = document.querySelector(".background-hearts");

  // Dynamic Name Logic
  const path = window.location.pathname;
  const name = decodeURIComponent(path.substring(1)); // Remove leading slash
  if (name && name !== "index.html" && name !== "/") {
    const titleElement = document.querySelector(".title");
    titleElement.textContent = name + "...";
  }

  // Create background hearts
  function createHearts() {
    setInterval(() => {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = "❤️"; // Or SVG
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // 3-5s
      background.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    }, 500);
  }

  createHearts();

  // No button logic
  const noTexts = [
    "Are you sure?",
    "Really?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
    "Plsss?",
    "Pretty please?",
    "With a cherry on top?",
    "No isn't an option",
    "Try the other button",
  ];

  function moveNoButton() {
    const btnWidth = noBtn.offsetWidth || 100; // Fallback
    const btnHeight = noBtn.offsetHeight || 40;

    // Ensure within viewport with padding
    const maxX = window.innerWidth - btnWidth - 20;
    const maxY = window.innerHeight - btnHeight - 20;

    const newLeft = Math.max(10, Math.random() * maxX);
    const newTop = Math.max(10, Math.random() * maxY);

    noBtn.style.position = "fixed"; // Escape flow
    noBtn.style.left = newLeft + "px";
    noBtn.style.top = newTop + "px";
  }

  noBtn.addEventListener("mouseover", () => {
    moveNoButton();
    growYesButton();
    changeNoText();
  });

  // Touch support for mobile
  noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Prevent click
    moveNoButton();
    growYesButton();
    changeNoText();
  });

  noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveNoButton();
    growYesButton();
    changeNoText();
  });

  function changeNoText() {
    const index = Math.floor(Math.random() * noTexts.length);
    noBtn.innerText = noTexts[index];
  }

  let yesScale = 1;
  function growYesButton() {
    yesScale += 0.2;
    yesBtn.style.transform = `scale(${yesScale})`;
  }

  // Yes button logic
  yesBtn.addEventListener("click", () => {
    mainContent.classList.add("hidden");
    successContent.classList.remove("hidden");

    // Continuous confetti
    setInterval(createConfetti, 50);
  });

  // Confetti
  function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    // Randomize
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = getDataColor();
    confetti.style.animationDuration = Math.random() * 2 + 2 + "s";

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 4000);
  }

  function getDataColor() {
    const colors = ["#ff758c", "#ff7eb3", "#e91e63", "#ffeb3b", "#4CAF50"];
    return colors[Math.floor(Math.random() * colors.length)];
  }
});
