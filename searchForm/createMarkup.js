import { favoriteList } from "./refs.js";

export const createMarkup = (items) => {
  const markup = items
    .map((element) => {
      return `<li data-name="${element}">${element} <button class="deleteFavoriteBtn">X</button></li>`;
    })
    .join("");
  favoriteList.insertAdjacentHTML("beforeend", markup);
};
