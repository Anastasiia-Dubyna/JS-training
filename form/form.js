const form = document.querySelector(".form");

form.addEventListener("input", (e) => {
  const data = JSON.parse(localStorage.getItem("form")) || {};
  data[e.target.name] = e.target.value;
  localStorage.setItem("form", JSON.stringify(data));
});

function loadPage() {
  const parsed = JSON.parse(localStorage.getItem("form"));
  if (!parsed) {
    return;
  }
  Object.entries(parsed).forEach(([key, value]) => {
    form.elements[key].value = value;
  });
}
loadPage();

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { email, message } = event.currentTarget;
  const formData = { email: email.value, message: message.value };
  localStorage.removeItem("form");
  event.target.reset();
}
