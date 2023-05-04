import { validateForm } from "./components/formValidation";
import { sliderMove, autoMoveSlider } from "./components/sliderMove";

const BURGER_BUTTON = document.querySelector(".burger-button")
const BURGER_MENU = document.querySelector(".burger-menu")
const BURGER_ITEM = document.querySelectorAll(".burger__link")
const SHADOW = document.querySelector(".shadow-wrapper")
const FORM = document.querySelector("#request-form");
const CONTROL_BUTTONS = document.querySelectorAll(".controller__button");

//Форма

FORM.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validateForm()) {
    setTimeout(() => {
      window.location.reload()
    }, 1000);
  }
});

//Бургер

const toggleBurger = () => {
  BURGER_BUTTON.classList.toggle("burger-button--active")
  BURGER_MENU.classList.toggle("burger-menu--active");
  SHADOW.classList.toggle("shadow-wrapper--show");

  if (document.body.style.overflow === "hidden") {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }
}

BURGER_BUTTON.addEventListener("click",toggleBurger)

BURGER_ITEM.forEach(element => {
  element.addEventListener("click",toggleBurger)
})


//Слайдер


CONTROL_BUTTONS.forEach((button, index) => {
  button.addEventListener("click", ()=>sliderMove(index));
});


