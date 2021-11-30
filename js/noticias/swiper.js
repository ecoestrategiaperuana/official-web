// --------------- ARTICLE --------------------


// --------------- CONTAMINACION --------------
var contaminationSwiper = new Swiper(".contaminationSwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  // effect: "fade",
  pagination: {
    el: ".contamination__container--swiper--pagination",
    type: "fraction",
    // clickable: true,
  },
  navigation: {
    nextEl: ".contamination__container--swiper--next",
    prevEl: ".contamination__container--swiper--prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1800: {
      slidesPerView: 4,
      spaceBetween: 40,
    }
  }
});

// --------------- MEDIO AMBIENTE --------------
var ambienteSwiper = new Swiper(".ambienteSwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  // effect: "fade",
  pagination: {
    el: ".ambiente__container--swiper--pagination",
    type: "fraction",
    // clickable: true,
  },
  navigation: {
    nextEl: ".ambiente__container--swiper--next",
    prevEl: ".ambiente__container--swiper--prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1800: {
      slidesPerView: 4,
      spaceBetween: 40,
    }
  }
});

// --------------- ECOLOGIC --------------
var ecologicSwiper = new Swiper(".ecologicSwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  // effect: "fade",
  pagination: {
    el: ".ecologic__container--swiper--pagination",
    type: "fraction",
    // clickable: true,
  },
  navigation: {
    nextEl: ".ecologic__container--swiper--next",
    prevEl: ".ecologic__container--swiper--prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1800: {
      slidesPerView: 4,
      spaceBetween: 40,
    }
  }
});


// --------------- CATEGORIAS -----------------
var swipper = new Swiper(".miSwiper", {
  slidesPerView: 1.2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  breakpoints: {
    435: {
      slidesPerView: 1.2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1.7,
      spaceBetween: 20,
    },
    834: {
      slidesPerView: 2.2,
      spaceBetween: 10,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1360: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});