// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const h2 = document.querySelector("h2");
const rangeInput = document.querySelector("#rangeInput");
const guess = document.querySelector("#guess");
const playButton = document.querySelector("button");
const resultDescription = document.querySelector("#resultDescription");
const result = document.querySelector("#result");

const minNumber = rangeInput.getAttribute("min");
let maxNumber = rangeInput.value;

function init() {
  h2.innerText = `Generate a number between 0 and ${maxNumber}`;
  rangeInput.addEventListener("change", rangeInputChangeHandler);
  playButton.addEventListener("click", playButtonHandler);
}

function rangeInputChangeHandler() {
  maxNumber = rangeInput.value;
  h2.innerText = `Generate a number between 0 and ${maxNumber}`;
}

function playButtonHandler() {
  const randomNumber = getRandomInt();
  const guessNumber = parseInt(guess.value);
  resultDescription.innerText = `You chose: ${guessNumber}, the machine chose: ${randomNumber}.`;
  if (randomNumber === guessNumber) {
    result.innerText = "You won!";
  } else {
    result.innerText = "You lost!";
  }
  result.style.fontWeight = "bold";
}

function getRandomInt() {
  let min = Math.ceil(minNumber);
  let max = Math.floor(maxNumber);
  return Math.floor(Math.random() * (max - min)) + min;
}

init();
