import { pictures } from './pictures.js';

const gallary = document.querySelector('.gallary');

const markup = pictures
  .map(
    (element, index) => `<li class="card" style="background-image:url(${
      element.url
    })" >
            <div class="row">
              <div class="icon">${index + 1}</div>
              <div class="description">
                <h4>${element.title}</h4>
                <p>${element.description}</p>
              </div>
            </div>
          </li>`
  )
  .join('');

gallary.insertAdjacentHTML('beforeend', markup);

gallary.addEventListener('click', openCard);

function openCard(event) {
  if (event.target.nodeName === 'UL') {
    return;
  }
  const item = event.target.closest('.card');
  const isActive = gallary.querySelector('.is-active');
  if (item === isActive) {
    item.classList.remove('is-active');
    return;
  }
  isActive?.classList.remove('is-active');
  item.classList.add('is-active');
}
