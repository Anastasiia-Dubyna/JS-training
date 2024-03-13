const keyList = document.querySelector(".js-key__list");

keyList.addEventListener("click", handleClick);
function handleClick(e) {
  if (e.target.nodeName === "UL") {
    return;
  }
  const item = e.target.closest(".key__item");
  item.classList.add("playing");
  playSound(item.dataset.key);
}

keyList.addEventListener("transitionend", (e) => {
  if (e.propertyName === "transform") {
    e.target.classList.remove("playing");
  }
});

function playSound(key) {
  const sound = document.querySelector(`audio[data-key="${key}"]`);
  if (!sound) return;
  sound.play();
}

window.addEventListener("keydown", (e) => {
  const item = document.querySelector(`li[data-key="${e.keyCode}"]`);
  if (!item) return;
  playSound(e.keyCode);
  item.classList.add("playing");
});
