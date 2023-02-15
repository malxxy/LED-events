// optional: create sparkles dynamically instead of adding them to HTML
const container = document.querySelector(".container");
for (let i = 0; i < 5; i++) {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");
  container.appendChild(sparkle);
}