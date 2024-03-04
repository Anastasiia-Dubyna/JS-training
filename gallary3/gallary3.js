import { galleryItems } from "./pictures.js";

const gallary = document.querySelector(".gallery");
const backdrop = document.querySelector(".backdrop");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

const markup = galleryItems
  .map(
    ({ preview, original, description }, index) =>
      `<li class="gallery__item"><img data-large="${original}" data-index="${index}" alt="${description}" src="${preview}" class="gallery__image"/></li>`
  )
  .join("");

gallary.insertAdjacentHTML("beforeend", markup);

gallary.addEventListener("click", openCard);

let indexImg = 0;

function openCard(event) {
  if (event.target.nodeName === "UL") {
    return;
  }
  backdrop.classList.remove("is-hidden");
  backdrop.querySelector("img").src = event.target.dataset.large;
  document.addEventListener("keydown", keydown);
  indexImg = Number(event.target.dataset.index);
}

function handleClick(event) {
  if (event.target === event.currentTarget) {
    closeCard();
  }
}

function closeCard() {
  backdrop.classList.add("is-hidden");
  document.removeEventListener("keydown", keydown);
}

backdrop.addEventListener("click", handleClick);
prevBtn.addEventListener("click", prevImg);
nextBtn.addEventListener("click", nextImg);

function keydown(event) {
  if (event.code === "Escape") {
    closeCard();
  }
  if (event.code == "ArrowRight") {
    nextImg();
  }
  if (event.code == "ArrowLeft") {
    prevImg();
  }
}

function nextImg() {
  indexImg = (indexImg += 1) % galleryItems.length;
  const next = galleryItems[indexImg].original;
  backdrop.querySelector("img").src = next;
}

function prevImg() {
  indexImg = (indexImg - 1 + galleryItems.length) % galleryItems.length;
  const prev = galleryItems[indexImg].original;
  backdrop.querySelector("img").src = prev;
}
