const panel = document.querySelector(".panels");

panel.addEventListener("click", largeImage);

function largeImage(event) {
  if (event.target.nodeName === "UL") {
    return;
  }
  const item = event.target.closest(".panel");
  console.log(item);
  const isActive = document.querySelector(".is-open");
  if (isActive === item) {
    isActive.classList.remove("is-open");
    return;
  }
  if (isActive) {
    isActive.classList.remove("is-open");
  }
  item.classList.toggle("is-open");
}
