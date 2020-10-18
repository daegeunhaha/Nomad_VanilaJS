import "./styles.css";
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

const HOURS = 0;
const MINUTES = 1;
const SECONDS = 2;

function getTime() {
  const date = new Date();
  const times_int = [date.getHours(), date.getMinutes(), date.getSeconds()];
  const times_str = [];
  let i;
  for (i in times_int) {
    if (times_int[i] < 10) {
      times_str.push("0" + String(times_int[i]));
    } else {
      times_str.push(String(times_int[i]));
    }
  }
  clockTitle.innerText = `${times_str[HOURS]}:${times_str[MINUTES]}:${times_str[SECONDS]}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
