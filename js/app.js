const form = document.querySelector(".request__content");
const button = document.querySelector("#submit-button");
form.addEventListener("submit", checkForm);
button.addEventListener("click", (event) => {
  event.preventDefault();
});

function checkForm(event) {
  event.preventDefault();

  const nameInput = document.querySelector(".request__input--name");
  const telInput = document.querySelector(".request__input--tel");
  const commentInput = document.querySelector(".request__input--comment");
  const inputs = document.querySelectorAll(".request__input");

  let isValid = true;
  if (nameInput.value.trim() === "") {
    isValid = false;
  }
  if (
    telInput.value.trim() === "" ||
    !/^\+?[0-9]{10,12}$/.test(telInput.value.trim())
  ) {
    isValid = false;
  }
  if (commentInput.value.trim() === "") {
    isValid = false;
  }

  if (!isValid) {
    inputs.forEach((e) => {
      e.classList.add("request__input--error");

      setTimeout(() => {
        e.classList.remove("request__input--error");
      }, 2000);
    });
    return;
  }
  inputs.forEach((e) => {
    e.classList.add("request__input--correct");
  });
  setTimeout(() => {
    form.submit();
  }, 2000);
}
