let input = document.querySelector("#font-size-control");

input.addEventListener("input", () => {
  let currentValue = Number(input.value);
  let span = document.querySelector("#text");
  span.style.fontSize = `${currentValue}px`;
});
