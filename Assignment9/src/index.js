// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const resultSpan = document.querySelector("#result");
const numberButtons = [];
const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");

let result = 0;
let newOperand = 0;
let operation = "";
let isNumberPressedBefore = false;

function addNumberButtonListener() {
  let number = 0;
  for (number = 0; number < 10; number++) {
    const numberString = String(number);
    const numberButton = document.querySelector("#btn" + numberString);
    numberButton.addEventListener("click", numberButtonListener);
    numberButtons.push(numberButton);
  }
}

function numberButtonListener(event) {
  const pressedNumber = parseInt(event.target.innerText);
  if (isNumberPressedBefore) {
    newOperand = newOperand * 10 + pressedNumber;
  } else {
    if (operation === "/" && pressedNumber === 0) {
      alert("cannot divide by zero. clear all");
      result = 0;
      operation = "";
      newOperand = 0;
      isNumberPressedBefore = false;
      resultSpan.innerText = String(result);
      return;
    }
    newOperand = pressedNumber;
  }
  resultSpan.innerText = String(newOperand);
  isNumberPressedBefore = true;
}

function operationButtonListener(event) {
  const pressedOperation = event.target.innerText;
  if (isNumberPressedBefore) {
    if (operation === "") {
      result = newOperand;
    } else {
      if (operation === "+") {
        result = result + newOperand;
      } else if (operation === "-") {
        result = result - newOperand;
      } else if (operation === "*") {
        result = result * newOperand;
      } else if (operation === "/") {
        result = result / newOperand;
      }
    }
  } else {
    alert("there wasn't any number before operation. clear all");
    result = 0;
    operation = "";
    newOperand = 0;
    isNumberPressedBefore = false;
    resultSpan.innerText = String(result);
    return;
  }
  newOperand = 0;
  operation = pressedOperation;
  isNumberPressedBefore = false;
  resultSpan.innerText = String(result);
  if (pressedOperation === "=") {
    result = 0;
    operation = "";
  }
}

function clearButtonListener() {
  result = 0;
  operation = "";
  newOperand = 0;
  isNumberPressedBefore = false;
  resultSpan.innerText = String(result);
}

function equalsButtonListener() {
  result = resultSpan.innerText = String(result);
  result = 0;
  operation = "";
  newOperand = 0;
  isNumberPressedBefore = false;
}

function init() {
  addNumberButtonListener();
  plusButton.addEventListener("click", operationButtonListener);
  minusButton.addEventListener("click", operationButtonListener);
  multiplyButton.addEventListener("click", operationButtonListener);
  divideButton.addEventListener("click", operationButtonListener);
  equalsButton.addEventListener("click", operationButtonListener);
  clearButton.addEventListener("click", clearButtonListener);
}

init();
