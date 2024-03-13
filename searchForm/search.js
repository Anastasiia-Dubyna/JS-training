import { save, load } from "./storage.js";
import { form, saveFavoriteBtn, favoriteList } from "./refs.js";
import { createMarkup } from "./createMarkup.js";
import { btnAddFavorite, btnRemoveFavorite } from "./favoriteBtn.js";
const url =
  "https://d1vcy8ih94g58p.cloudfront.net/eyJrZXkiOiIyNzI2ODRcL2JGelNLZXdxR08wVkp5b3ZoNWJ0MzN3dFQzZ2lzcXlkQjlUREZnR2suanBlZyIsImJ1Y2tldCI6IndpcmVzdG9jay1vcmlnaW5hbC1wcm9kdWN0aW9uIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDI0LCJmaXQiOiJjb3ZlciJ9LCJvdmVybGF5V2l0aCI6eyJidWNrZXQiOiJ3aXJlc3RvY2stb3JpZ2luYWwtcHJvZHVjdGlvbiIsImtleSI6IndhdGVybWFya3NcL3dhdGVybWFyay5wbmcifSwianBlZyI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=6a4a791f7057aff473aa4e79f978c782cb0fc3e3a62f55a2eef06de41f3f6428";
document.body.style = `background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.9)), url(${url}) center fixed; background-size: cover`;

const persistedFavorites = load("favorite") || [];
createMarkup(persistedFavorites);

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
  save("favorite", persistedFavorites);

  createMarkup([form.elements.search.value]);

  btnAddFavorite();
}

form.addEventListener("input", handleInput);

function handleInput(e) {
  const value = e.target.value.toLowerCase();
  if (persistedFavorites.find((element) => element.toLowerCase() === value)) {
    btnAddFavorite();
    return;
  }
  btnRemoveFavorite();
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
    save("favorite", filteredFavorites);
    item.remove();
  }
  if (e.target.nodeName === "LI") {
    form.elements.search.value = e.target.dataset.name;
    btnAddFavorite();
  }
}
