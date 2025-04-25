const navSlider = new Swiper('.nav-slider', {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
  });

  const mainSlider = new Swiper('.main-slider', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: navSlider,
    },
  });