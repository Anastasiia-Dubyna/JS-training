const list = document.querySelector(".list");

list.addEventListener("click", handleClick);

function handleClick(event) {
  if (event.target.nodeName !== "BUTTON") return;
  event.target.nextElementSibling.classList.toggle("active");
}
