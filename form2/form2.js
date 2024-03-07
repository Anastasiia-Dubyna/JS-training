const form = document.querySelector(".form");
const key = "key";

form.addEventListener("input", (event) => {
  const data = JSON.parse(localStorage.getItem(key)) || {};
  data[event.target.name] = event.target.value;
  localStorage.setItem(key, JSON.stringify(data));
});

function loadPage() {
  const parsed = JSON.parse(localStorage.getItem(key));
  if (!parsed) {
    return;
  }
  Object.entries(parsed).forEach(([key, value]) => {
    form.elements[key].value = value;
  });
}

loadPage();
