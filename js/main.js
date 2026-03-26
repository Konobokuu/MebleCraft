const swiper = new Swiper('.gallerySwiper', {
  slidesPerView: 1.2,
  spaceBetween: 15,
  centeredSlides: true,
  loop: true,

  breakpoints: {
    768: {
      slidesPerView: 1
    }
  }
});