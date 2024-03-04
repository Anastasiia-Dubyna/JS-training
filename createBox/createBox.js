const create = document.querySelector("[data-create]");
const input = document.querySelector(".input");
const boxes = document.querySelector("#boxes");
create.addEventListener("click", handleCreateClick);
console.log(boxes);
function handleCreateClick() {
  if (input.value === "0" || input.value === "") {
    alert("Choose number from 1 to ..");
    return;
  }
  createBoxes(input.value);
}

function createBoxes(amount) {
  for (let i = 1; i <= amount; i++) {
    boxes.insertAdjacentHTML(
      "beforeend",
      `<div style="width:30px; height:30px; background:${getRandomHexColor()}"></div>`
    );
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
