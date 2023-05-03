const SLIDER_LINE = document.querySelector(".slider-block__line");
const CARDS = document.querySelectorAll(".card");
const CONTROL_BUTTONS = document.querySelectorAll(".controller__button");

let activeCardIndex = 0;
let activeControlButtonIndex = 0;
CARDS[activeCardIndex].classList.add("card--active");
CONTROL_BUTTONS[activeControlButtonIndex].classList.add("controller__button--active");

export const sliderMove = (index) => {
    const CARDS = document.querySelectorAll(".card");
    let CARD_WIDTH = CARDS[0].offsetWidth;

    function updateCardWidth() {
    CARD_WIDTH = CARDS[0].offsetWidth;
    }

    window.addEventListener("resize", updateCardWidth);
    
    CARDS[activeCardIndex].classList.remove("card--active");
    CONTROL_BUTTONS[activeControlButtonIndex].classList.remove("controller__button--active");

    activeCardIndex = index;
    activeControlButtonIndex = index;
    CARDS[activeCardIndex].classList.add("card--active");
    CONTROL_BUTTONS[activeControlButtonIndex].classList.add("controller__button--active");

    const slideAmount = -activeCardIndex * CARD_WIDTH;
    
    SLIDER_LINE.style.left = slideAmount + "px";
  
}

