document.addEventListener("DOMContentLoaded", () => {

  /* Typing Effect */
  const text = ["Java FullStack Developer",  "AWS Learner"];
  let index = 0;
  let charIndex = 0;
  const typingElement = document.querySelector(".typing");

  function typeEffect() {
    if (charIndex < text[index].length) {
      typingElement.textContent += text[index].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 100);
    } else {
      setTimeout(eraseEffect, 1500);
    }
  }

  function eraseEffect() {
    if (charIndex > 0) {
      typingElement.textContent = text[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseEffect, 50);
    } else {
      index = (index + 1) % text.length;
      setTimeout(typeEffect, 500);
    }
  }

  typeEffect();

  /* Dark Mode Toggle */
  const toggleBtn = document.getElementById("theme-toggle");

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️";
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      toggleBtn.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      toggleBtn.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  });

});
