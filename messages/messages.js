const buttonItem = document.querySelectorAll(".message__close-btn");

buttonItem.forEach((btn) => {
  btn.addEventListener("click", removeItem);
});

function removeItem(event) {
  event.target.parentNode.remove();
}
