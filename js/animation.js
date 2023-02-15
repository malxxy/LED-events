// optional: add interactive animation using mouse movements
const container2 = document.querySelector(".container2");
const box2 = document.querySelector(".box2");

container.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const boxX = container.offsetWidth / 2;
  const boxY = container.offsetHeight / 2;
  const rotateX = (mouseY - boxY) / 20;
  const rotateY = (boxX - mouseX) / 20;
  box2.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});