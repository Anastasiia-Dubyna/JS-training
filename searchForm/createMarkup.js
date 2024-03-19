import { favoriteList } from "./refs.js";

export const createMarkup = (items) => {
  const markup = items
    .map((element) => {
      return `<li data-name="${element}"><div class="swiper-slide">${element}<button class="deleteFavoriteBtn">X</button></div></li>`;
    })
    .join("");
  favoriteList.insertAdjacentHTML("beforeend", markup);
};
