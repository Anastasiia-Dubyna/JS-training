const calendar = document.querySelector(".calendar");

calendar.addEventListener("click", selectDate);

function selectDate(event) {
  if (event.target.nodeName !== "TD" || event.target.textContent === "") {
    return;
  }
  console.log(event.target.textContent);
  const isActive = document.querySelector(".active");
  console.log(isActive);
  if (isActive === event.currentTarget) {
    isActive.classList.remove("active");
    return;
  }
  if (isActive) {
    isActive.classList.remove("active");
  }
  event.target.classList.toggle("active");
}
