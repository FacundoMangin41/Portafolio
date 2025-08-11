document.addEventListener('DOMContentLoaded', () => {
  function initSwiper() {
    const isMobile = window.innerWidth <= 768;

    return new Swiper('.portfolio-swiper', {
      loop: isMobile ? false : true,  // desactiva loop en mobile para cards
      grabCursor: true,
      centeredSlides: true,
      watchSlidesProgress: true,

      effect: isMobile ? 'cards' : 'slide',

      cardsEffect: isMobile
        ? {
            slideShadows: true,
            rotate: true,
            perSlideRotate: 2,
            perSlideOffset: 8,
          }
        : {},

      slidesPerView: 1,    // siempre 1 slide visible

      spaceBetween: isMobile ? 15 : 30,

      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }

  let swiper = initSwiper();

  window.addEventListener('resize', () => {
    swiper.destroy(true, true);
    swiper = initSwiper();
  });
});
