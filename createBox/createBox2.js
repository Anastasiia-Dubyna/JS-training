const createBox = document.querySelector("[data-create]");
const dataDestroy = document.querySelector("[data-destroy]");
const dataDestroy1 = document.querySelector("[data-destroy1]");
const input = document.querySelector(".input");
const boxes = document.querySelector("#boxes");

createBox.addEventListener("click", handleCreateClick);

function handleCreateClick() {
  if (input.value === "" || input.value === "0") {
    alert("Choose number from 1 to ...");
  }
  createBoxes(input.value);
}

function createBoxes(amount) {
  let boxSize = 30;
  for (let i = 1; i <= amount; i++) {
    boxes.insertAdjacentHTML(
      "beforeend",
      `<div style="width:${boxSize}px; height:${boxSize}px; background:${getRandomHexColor()}"></div>`
    );
    boxSize += 10;
  }
}

dataDestroy.addEventListener("click", deleteBox);
dataDestroy1.addEventListener("click", deleteBox1);

function deleteBox() {
  boxes.innerHTML = "";
}

function deleteBox1() {
  const lastBox = boxes.lastElementChild;
  if (lastBox) {
    lastBox.remove();
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
