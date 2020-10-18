// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const select = document.querySelector("select");

function selectChangeListener(event) {
  event.preventDefault();
  localStorage.setItem("country", event.target.value);
}

select.addEventListener("change", selectChangeListener);

function init() {
  console.log(localStorage.getItem("country"));
}

init();
