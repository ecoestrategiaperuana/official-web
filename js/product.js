var swiper = new Swiper(".productSwiper", {
  slidesPerView: 5,
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
  },
  breakpoints: {
    1280: {
      slidesPerView: 5
    }, 
    1512: {
      slidesPerView: 6
    }
  }
});