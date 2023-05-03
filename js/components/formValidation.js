export const validateForm = () => {
  const nameInput = document.querySelector(".request__input--name");
  const telInput = document.querySelector(".request__input--tel");
  const commentInput = document.querySelector(".request__input--comment");

  let isValid = true;
  
  if (nameInput.value.trim() === "") {
    nameInput.classList.add("request__input--error");
    isValid = false;
  } else {
    nameInput.classList.remove("request__input--error");
    nameInput.classList.add("request__input--correct");
  }
  
  if (telInput.value.trim() === "" || !/^\+?\d{10,12}$/.test(telInput.value.trim())) {
    telInput.classList.add("request__input--error");
    isValid = false;
  } else {
    telInput.classList.remove("request__input--error");
    telInput.classList.add("request__input--correct");
  }
  
  if (commentInput.value.trim() === "") {
    commentInput.classList.add("request__input--error");
    isValid = false;
  } else {
    commentInput.classList.remove("request__input--error");
    commentInput.classList.add("request__input--correct");
  }

  
  return isValid;
}