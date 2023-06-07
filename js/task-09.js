function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector(".change-color");

button.addEventListener("click", () => {
  const color = getRandomHexColor();
  const span = document.querySelector(".color");
  span.textContent = color;
  document.body.style = `background-color: ${color}`;
});
