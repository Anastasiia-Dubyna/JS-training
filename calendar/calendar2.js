const calendar = document.querySelector(".calendar");

calendar.addEventListener("click", handleClick);

function handleClick(event) {
  if (event.target.nodeName !== "TD" || event.target.textContent === "") {
    return;
  }
  const active = document.querySelector(".active");
  if (active) {
    active.classList.remove("active");
  }
  if (active === event.target) {
    return;
  }
  event.target.classList.add("active");
}
