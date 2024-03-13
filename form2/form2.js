const form = document.querySelector(".form");
const key = "key";

form.addEventListener("input", (e) => {
  const data = JSON.parse(localStorage.getItem(key)) || {};
  const { name, value } = e.target;
  data[name] = value;
  localStorage.setItem(key, JSON.stringify(data));
});

function loadPage() {
  const parsed = JSON.parse(localStorage.getItem(key));
  Object.entries(parsed).forEach(([key, value]) => {
    form.elements[key].value = value;
  });
}
loadPage();

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const { email, message } = e.target.elements;
  console.log({ email: email.value, message: message.value });
}
