import { validateForm } from "./components/formValidation";

const BURGER_BUTTON = document.querySelector("#burger-button")
const BURGER_MENU = document.querySelector("#burger-menu")
const BURGER_ITEM = document.querySelectorAll("#burger-link")
const SHADOW = document.querySelector(".shadow-wrapper")
const FORM = document.querySelector("#request-form");

// const CONTROL_BUTTONS = document.querySelectorAll(".controller__button")
// const SLIDER_LINE = document.querySelector(".slider-block__line")

const SLIDER_LINE = document.querySelector(".slider-block__line");
const CARDS = document.querySelectorAll(".card");
const CONTROL_BUTTONS = document.querySelectorAll(".controller__button");

// Calculate the width of a single card
const CARD_WIDTH = CARDS[0].offsetWidth;

// Set the initial active card and control button
let activeCardIndex = 0;
let activeControlButtonIndex = 0;
CARDS[activeCardIndex].classList.add("card--active");
CONTROL_BUTTONS[activeControlButtonIndex].classList.add("controller__button--active");

// Add click event listeners to the control buttons
CONTROL_BUTTONS.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Remove the active classes from the current card and control button
    CARDS[activeCardIndex].classList.remove("card--active");
    CONTROL_BUTTONS[activeControlButtonIndex].classList.remove("controller__button--active");

    // Set the new active card and control button
    activeCardIndex = index;
    activeControlButtonIndex = index;
    CARDS[activeCardIndex].classList.add("card--active");
    CONTROL_BUTTONS[activeControlButtonIndex].classList.add("controller__button--active");

    // Calculate the amount of pixels to slide
    const slideAmount = -activeCardIndex * CARD_WIDTH;
    
    // Set the left position of the slider line to slide the cards
    SLIDER_LINE.style.left = slideAmount + "px";
  });
});


FORM.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validateForm()) {
    setTimeout(() => {
      window.location.reload()
    }, 2000);
  }
});

const toggleBurger = () => {
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

