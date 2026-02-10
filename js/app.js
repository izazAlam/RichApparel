var heroSwiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".hero-next",
    prevEl: ".hero-prev",
  },
});

var collectionSwiper = new Swiper(".collectionSwiper", {
  slidesPerView: 4,
  spaceBetween: 12,
  loop: true,
  navigation: {
    nextEl: ".collection-next",
    prevEl: ".collection-prev",
  },
});
