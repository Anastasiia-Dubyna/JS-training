import { galleryItems } from "./pictures.js";

const gallary = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item"><img alt="${description}" src="${preview}" class="gallery__image"/></li>`
  )
  .join("");

gallary.insertAdjacentHTML("beforeend", markup);
