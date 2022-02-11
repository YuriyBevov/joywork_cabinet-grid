import Swiper, { Autoplay, Thumbs, Zoom, Navigation} from 'swiper';
Swiper.use([Autoplay, Thumbs, Zoom, Navigation]);

const slider = document.querySelector('.swiper-container');

if(slider) {
    let swiper = new Swiper(".apartment-slider-thumbs", { 
      slidesPerView: 'auto',
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      spaceBetween: 10,
    });

    let swiperThumbs = new Swiper(".apartment-slider", {
      // loop: true,
      spaceBetween: 10,

      navigation: {
        nextEl: '.apartment-slider-button-next',
        prevEl: '.apartment-slider-button-prev',
      },

      thumbs: {
        swiper: swiper,
      },
    });
}

const objectSlider = document.querySelectorAll('.object-card-slider');

if(objectSlider) {
  objectSlider.forEach(slider => {
    new Swiper(slider, {
      slidesPerView: '1',
      spaceBetween: 10,
      loop: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  })
}
