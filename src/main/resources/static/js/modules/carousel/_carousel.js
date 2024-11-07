let Carousel = function () {
  let $loc = new Array();

  this.swiper = function ($coord, $obj) {
    if (document.querySelector($coord)) {
      document.addEventListener("DOMContentLoaded", function () {
        return new Swiper($coord, $obj);
      });
    }
  };

  this.bootstrap = function ($obj, $coord = ".boot-carousel") {
    if (document.querySelector($coord)) {
      document.addEventListener("DOMContentLoaded", () => {
        let carousel = document.querySelector($coord);
        return new bootstrap.Carousel(carousel, $obj);
      });
    }
  };
};

const carousel = new Carousel();

carousel.swiper(".banner-slides", {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});

export { Carousel };
