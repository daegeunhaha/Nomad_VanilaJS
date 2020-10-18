// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const form = document.querySelector("form");
const input = form.querySelector("input");
const pdList = document.querySelector(".js-pdList");
const fnList = document.querySelector(".js-fnList");
const TODOS_PD = "pds";
const TODOS_FN = "fns";

let pendings = [];
let finishes = [];

function init() {
  loadToDos();
  form.addEventListener("submit", inputSubmitHandler);
}

init();

function loadToDos() {
  const loadedPendings = localStorage.getItem(TODOS_PD);
  const loadedFinishes = localStorage.getItem(TODOS_FN);
  if (loadedPendings !== null) {
    const parsedPendings = JSON.parse(loadedPendings);
    parsedPendings.forEach(function (pending) {
      paintPendings(pending.text);
      savePendingsToArray(pending.text);
      savePendingsToLocalStorage();
    });
  }
  if (loadedFinishes !== null) {
    const parsedFinished = JSON.parse(loadedFinishes);
    parsedFinished.forEach(function (finished) {
      paintFinished(finished.text);
      saveFinishedToArray(finished.text);
      saveFinishedToLocalStorage();
    });
  }
}

function inputSubmitHandler(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintPendings(currentValue);
  savePendingsToArray(currentValue);
  savePendingsToLocalStorage();
  input.value = "";
}

function paintPendings(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = text;
  const delBtn = document.createElement("button");
  delBtn.addEventListener("click", deletePending);
  delBtn.innerText = "❌";
  const finBtn = document.createElement("button");
  finBtn.addEventListener("click", finishPending);
  finBtn.innerText = "✔";

  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(finBtn);
  li.id = generatePendingId();
  pdList.appendChild(li);
}

function deletePending(event) {
  const delBtn = event.target;
  const li = delBtn.parentNode;
  pdList.removeChild(li);
  const cleanToDos = pendings.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  pendings = cleanToDos;
  savePendingsToLocalStorage();
}

function finishPending(event) {
  const finishButton = event.target;
  const li = finishButton.parentNode;
  const span = li.querySelector("span");
  const currentValue = span.innerText;
  pdList.removeChild(li);
  const cleanToDos = pendings.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  pendings = cleanToDos;
  savePendingsToLocalStorage();

  paintFinished(currentValue);
  saveFinishedToArray(currentValue);
  saveFinishedToLocalStorage();
}

function savePendingsToArray(text) {
  const pendingObj = {
    text: text,
    id: generatePendingId()
  };
  pendings.push(pendingObj);
}

function savePendingsToLocalStorage() {
  localStorage.setItem(TODOS_PD, JSON.stringify(pendings));
}

function generatePendingId() {
  return pendings.length;
}

function paintFinished(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = text;
  const delBtn = document.createElement("button");
  delBtn.addEventListener("click", deleteFinished);
  delBtn.innerText = "❌";
  const pndBtn = document.createElement("button");
  pndBtn.addEventListener("click", pendFinished);
  pndBtn.innerText = "↪";

  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(pndBtn);
  li.id = generateFinishedId();
  fnList.appendChild(li);
}

function saveFinishedToArray(text) {
  const finishedObj = {
    text: text,
    id: generateFinishedId()
  };
  finishes.push(finishedObj);
}

function saveFinishedToLocalStorage() {
  localStorage.setItem(TODOS_FN, JSON.stringify(finishes));
}

function generateFinishedId() {
  return finishes.length;
}

function deleteFinished(event) {
  const delBtn = event.target;
  const li = delBtn.parentNode;
  fnList.removeChild(li);
  const cleanToDos = finishes.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  finishes = cleanToDos;
  saveFinishedToLocalStorage();
}

function pendFinished(event) {
  const pendButton = event.target;
  const li = pendButton.parentNode;
  const span = li.querySelector("span");
  const currentValue = span.innerText;
  fnList.removeChild(li);
  const cleanToDos = finishes.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  finishes = cleanToDos;
  saveFinishedToLocalStorage();

  paintPendings(currentValue);
  savePendingsToArray(currentValue);
  savePendingsToLocalStorage();
}
