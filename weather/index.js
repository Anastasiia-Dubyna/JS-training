import { createMarkup } from "./createMarkup.js";
import { getWeatherByQuery } from "./weatherApi.js";

const form = document.querySelector(".search-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const { value } = e.target.elements.user_country;
  if (!value) {
    return;
  }
  console.log(value);
  getWeatherByQuery(value).then((data) => {
    createMarkup(data);
  });
}
