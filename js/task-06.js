let input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  let validLength = Number(input.dataset.length);
  let insertedLength = input.value.length;
  if (validLength === insertedLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
