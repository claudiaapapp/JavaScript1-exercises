let form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (
    email.value === null ||
    password.value === null ||
    email.value === "" ||
    password.value === ""
  ) {
    alert("Toate campurile sunt obligatorii!");
  } else {
    let completedForm = {
      email: email.value,
      password: password.value,
    };
    console.log(completedForm);
    event.currentTarget.reset();
  }
});
