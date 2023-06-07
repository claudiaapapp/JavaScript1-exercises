let input = document.querySelector("#name-input");
input.addEventListener("input", () => {
  let value = input.value;
  let output = document.querySelector("#name-output");
  if (value !== null && value !== "") {
    output.textContent = value;
  } else {
    output.textContent = "Anonymous";
  }
});
