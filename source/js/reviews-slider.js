import { Swiper } from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';

const initReviewsSlider = () => {
  const sliderReviewsEl = document.querySelector('.swiper-reviews');
  const swiperReviews = new Swiper(sliderReviewsEl, {
    modules: [Navigation, Scrollbar],
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,
    allowTouchMove: true,
    breakpoints: {
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        scrollbar: {
          dragSize: 326,
        }
      },
      1440: {
        slidesPerView: 2,
        spaceBetween: 32,
        scrollbar: {
          dragSize: 394,
        },
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });
  swiperReviews.update();
};

export { initReviewsSlider };
