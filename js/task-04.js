let counterValue = 0;

const decrementButton = document.querySelector("[data-action='decrement']");

decrementButton.addEventListener("click", () => {
  counterValue = counterValue - 1;
  let span = document.querySelector("#value");
  span.textContent = counterValue;
});

const incrementButton = document.querySelector("[data-action='increment']");
incrementButton.addEventListener("click", () => {
  counterValue = counterValue + 1;
  let span = document.querySelector("#value");
  span.textContent = counterValue;
});
