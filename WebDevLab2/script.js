// Scroll to top
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
};
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// Theme Toggle
const themeBtn = document.getElementById("themeToggleBtn");
let darkMode = false;

themeBtn.onclick = () => {
  document.body.classList.toggle("dark-mode");
  darkMode = !darkMode;
  themeBtn.textContent = darkMode ? "☀️" : "🌙";
};
