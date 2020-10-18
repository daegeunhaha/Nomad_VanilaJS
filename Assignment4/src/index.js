// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const colors = [
  "#e74c3c",
  "#f1c40f",
  "#27ae60",
  "#3498db",
  "#8e44ad",
  "#2c3e50"
];

const maxWidth = 1920;
const body = document.querySelector("body");
body.innerHTML = "<h2>Hello!</h2>";

if (window.innerWidth >= maxWidth * 0.6) {
  body.style.backgroundColor = colors[0];
} else if (window.innerWidth >= maxWidth * 0.5) {
  body.style.backgroundColor = colors[1];
} else if (window.innerWidth >= maxWidth * 0.4) {
  body.style.backgroundColor = colors[2];
} else if (window.innerWidth >= maxWidth * 0.3) {
  body.style.backgroundColor = colors[3];
} else if (window.innerWidth >= maxWidth * 0.2) {
  body.style.backgroundColor = colors[4];
} else {
  body.style.backgroundColor = colors[5];
}

function resizeHandler() {
  if (window.innerWidth >= maxWidth * 0.6) {
    body.style.backgroundColor = colors[0];
  } else if (window.innerWidth >= maxWidth * 0.5) {
    body.style.backgroundColor = colors[1];
  } else if (window.innerWidth >= maxWidth * 0.4) {
    body.style.backgroundColor = colors[2];
  } else if (window.innerWidth >= maxWidth * 0.3) {
    body.style.backgroundColor = colors[3];
  } else if (window.innerWidth >= maxWidth * 0.2) {
    body.style.backgroundColor = colors[4];
  } else {
    body.style.backgroundColor = colors[5];
  }
}
window.addEventListener("resize", resizeHandler);
