const form = document.querySelector(".form");
const saveFavoriteBtn = document.querySelector(".saveFavoriteBtn");
const favoriteList = document.querySelector(".favorite_list");

const persistedFavorites = JSON.parse(localStorage.getItem("favorite")) || [];
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const { value } = e.target.elements.search;
  if (!value) {
    Notiflix.Notify.failure("Enter some text search");
    return;
  }
  console.log(value);
}

saveFavoriteBtn.addEventListener("click", saveFavorite);

function saveFavorite() {
  persistedFavorites.push(form.elements.search.value);
  localStorage.setItem("favorite", JSON.stringify(persistedFavorites));
  favoriteList.insertAdjacentHTML(
    "beforeend",
    `<li data-name="${form.elements.search.value}">${form.elements.search.value}<button class="deleteFavoriteBtn">X</button></li>`
  );
  saveFavoriteBtn.classList.add("inFavorite");
  saveFavoriteBtn.disabled = true;
}

const favoriteMarkup = persistedFavorites
  .map((element) => {
    return `<li data-name="${element}">${element} <button class="deleteFavoriteBtn">X</button></li>`;
  })
  .join("");

favoriteList.innerHTML = favoriteMarkup;

form.addEventListener("input", handleInput);

function handleInput(e) {
  const value = e.target.value.toLowerCase();
  if (persistedFavorites.find((element) => element.toLowerCase() === value)) {
    saveFavoriteBtn.classList.add("inFavorite");
    saveFavoriteBtn.disabled = true;
    return;
  }
  saveFavoriteBtn.classList.remove("inFavorite");
  saveFavoriteBtn.disabled = false;
}

favoriteList.addEventListener("click", handleFavoriteClick);

function handleFavoriteClick(e) {
  if (e.target.nodeName === "UL") {
    return;
  }
  if (e.target.nodeName === "BUTTON") {
    const item = e.target.parentNode;
    const filteredFavorites = persistedFavorites.filter(
      (el) => el.toLowerCase() !== item.dataset.name.toLowerCase()
    );
    localStorage.setItem("favorite", JSON.stringify(filteredFavorites));
    item.remove();
  }
  if (e.target.nodeName === "LI") {
    form.elements.search.value = e.target.dataset.name;
    saveFavoriteBtn.classList.add("inFavorite");
    saveFavoriteBtn.disabled = true;
  }
}
