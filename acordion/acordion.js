const list = document.querySelector(".list");

list.addEventListener("click", hideText);

function hideText(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  event.target.nextElementSibling.classList.toggle("active");
}
