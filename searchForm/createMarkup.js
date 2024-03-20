import { favoriteList } from "./refs.js";

export const createMarkup = (items) => {
  const markup = items
    .map((element, index) => {
      return `<li data-name="${element}" data-hash="slide-${
        index + 1
      }" class="swiper-slide">${element}<button class="deleteFavoriteBtn">X</button></li>`;
    })
    .join("");
  favoriteList.insertAdjacentHTML("beforeend", markup);
};
