const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const destroy1 = document.querySelector("[data-destroy1]");
const input = document.querySelector(".input");
const boxes = document.querySelector("#boxes");

create.addEventListener("click", handleCreateClick);
destroy.addEventListener("click", handleDelete);
destroy1.addEventListener("click", handleDeleteLast);

function handleCreateClick() {
  if (input.value === "0" || input.value === "") {
    alert("Choose number from 1 to ..");
    return;
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

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handleDelete() {
  boxes.innerHTML = "";
}

function handleDeleteLast() {
  const lastBox = boxes.lastElementChild;
  if (lastBox) {
    lastBox.remove();
  }
}
