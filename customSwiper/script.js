const swiper = new Swiper(".image-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index, className) {
      return '<span class"' + className + '">' + (index + 1) + "</span>";
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,
  hashNavigation: {
    watchState: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 1,
    // eventsTarget: ".image-slider",
  },
  autoHeight: true,
  slidesPerView: 1,
  wathOverflow: true,
  spaceBetween: 30,
  slidesPerGroup: 1,
  centeredSlides: false,
  initialSlide: 0,
  loop: false,
  loopedSlides: 0,
  breakpoints: {
    320: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 7,
    },
  },
});

const sity = [
  "Kiev1",
  "Kiev2",
  "Kiev3",
  "Kiev4",
  "Kiev5",
  "Kiev5",
  "Kiev5",
  "Kiev5",
];

const markup = sity
  .map((el, index) => {
    return `<li data-hash="slide-${
      index + 1
    }" class="image-slider__slide swiper-slide">
            ${el}
          </li>`;
  })
  .join("");

const swiperList = document.querySelector(".image-slider__wrapper");

swiperList.insertAdjacentHTML("beforeend", markup);

swiper.update();
// swiper.updateSlides();

// const promise = new Promise((res, rej) => {
//   // rej("Error");
//   setTimeout(() => {
//     console.log("timeout");
//     res("Success");
//   }, 1000);
// });

// promise.then(
//   (data) => console.log(data),
//   (error) => console.log(error)
// );
// // .catch((error) => console.log(error));

// fetch("https://65d763b227d9a3bc1d7aea8d.mockapi.io/contacts")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Somesing wrong");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
