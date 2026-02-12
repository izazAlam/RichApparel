const swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".hero-next",
    prevEl: ".hero-prev",
  },
});

const collectionSwiper = new Swiper(".collectionSwiper", {
  loop: true,
  navigation: {
    nextEl: ".collection-next",
    prevEl: ".collection-prev",
  },
  slidesPerView: 4,
  spaceBetween: 10,
});

