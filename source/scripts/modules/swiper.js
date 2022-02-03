import Swiper, { Autoplay, Thumbs, Zoom} from 'swiper';
Swiper.use([Autoplay, Thumbs, Zoom]);

const slider = document.querySelector('.swiper-container');

if(slider) {
    let swiper = new Swiper(".apartment-slider-thumbs", {
      slidesPerView: 'auto',
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      spaceBetween: 10
    });

    let swiperThumbs = new Swiper(".apartment-slider", {
      zoom: true,
      loop: true,

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
      spaceBetween: 10
    });
  })
}
