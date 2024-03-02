const pictures = [
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/0/700/460",
    alt: "laptop",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/1/700/460",
    alt: "developer",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/10/700/460",
    alt: "forest",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/100/700/460",
    alt: "beach",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/1000/700/460",
    alt: "mountain",
  },
];

const gallary = document.querySelector(".gallaryUl");
const backdrop = document.querySelector(".backdrop");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const markup = pictures
  .map(
    (el, index) =>
      `<li class="list"><img class="image" data-large="${el.url}" src="${el.url}" alt="${el.alt}" data-index="${index}"/></li>`
  )
  .join("");

gallary.insertAdjacentHTML("beforeend", markup);

gallary.addEventListener("click", largeImg);

let imageIndex = 0;

function largeImg({ target }) {
  if (target.nodeName !== "IMG") {
    return;
  }
  openModal();
  updateModalImg(target.dataset.large);
  imageIndex = Number(target.dataset.index);
}

backdrop.addEventListener("click", hiddenImg);

function openModal() {
  backdrop.classList.remove("is-hidden");
  document.addEventListener("keydown", keydown);
}

function closeModal() {
  backdrop.classList.add("is-hidden");
  document.removeEventListener("keydown", keydown);
}

function hiddenImg(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}

function keydown(event) {
  if (event.code === "Escape") {
    closeModal();
  }
  if (event.code === "ArrowRight") {
    next();
  }
  if (event.code === "ArrowLeft") {
    prev();
  }
}

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);

function updateModalImg(largeImg) {
  backdrop.querySelector("img").src = largeImg;
}

function next() {
  imageIndex = (imageIndex + 1) % pictures.length;
  const nextImg = pictures[imageIndex];
  updateModalImg(nextImg.url);
}

function prev() {
  imageIndex = (imageIndex - 1 + pictures.length) % pictures.length;
  const prevImageSrc = pictures[imageIndex];
  updateModalImg(prevImageSrc.url);
}
