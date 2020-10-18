import "./styles.css";

const greetingForm = document.querySelector(".js-greeting-form"),
  greetingInput = greetingForm.querySelector("input"),
  greetingH4 = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmitForm(event) {
  event.preventDefault();
  const currentValue = greetingInput.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  greetingForm.classList.add(SHOWING_CN);
  greetingForm.addEventListener("submit", handleSubmitForm);
}

function paintGreeting(text) {
  greetingForm.classList.remove(SHOWING_CN);
  greetingH4.classList.add(SHOWING_CN);
  greetingH4.innerText = `Hello~~~~ ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
