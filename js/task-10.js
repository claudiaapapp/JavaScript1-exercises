function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");

createButton.addEventListener("click", () => {
  const input = document.querySelector("input");
  const amount = Number(input.value);
  createBoxes(amount);
});
destroyButton.addEventListener("click", () => {
  const divboxes = document.querySelector("#boxes");
  while (divboxes.firstChild) {
    divboxes.removeChild(divboxes.lastChild);
  }
});

function createBoxes(amount) {
  let divs = [];
  let width = 30;
  let height = 30;
  for (let i = 1; i <= amount; i += 1) {
    let div = document.createElement("div");
    let color = getRandomHexColor();
    div.style = `width: ${width}px; height: ${height}px; background-color: ${color}`;
    width = width + 10;
    height = height + 10;
    divs.push(div);
  }
  const divboxes = document.querySelector("#boxes");
  divs.forEach((div) => divboxes.appendChild(div));
}
