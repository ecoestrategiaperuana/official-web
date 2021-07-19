var swiper = new Swiper(".productSwiper", {
  slidesPerView: 4,
  spaceBetween: 27,
  autoplay: {
    delay: 1250,
    disableOnInteraction: false
  },
  initialSlide: 1,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true
  }
});