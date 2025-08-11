document.addEventListener('DOMContentLoaded', () => {
  function initSwiper(selector) {
    const isMobile = window.innerWidth <= 768;

    return new Swiper(selector, {
      loop: isMobile ? false : true,
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

      slidesPerView: 1,
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
        el: selector + ' .swiper-pagination',
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

  // Inicializamos ambos carruseles
  let portfolioSwiper = initSwiper('.portfolio-swiper');
  let logrosSwiper = initSwiper('.logros-swiper');

  window.addEventListener('resize', () => {
    portfolioSwiper.destroy(true, true);
    logrosSwiper.destroy(true, true);

    portfolioSwiper = initSwiper('.portfolio-swiper');
    logrosSwiper = initSwiper('.logros-swiper');
  });
});
