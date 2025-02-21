import { Swiper } from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';

const initProgramsSlider = () => {
  const sliderProgramsEl = document.querySelector('.swiper-programs');
  const swiperPrograms = new Swiper(sliderProgramsEl, {
    modules: [Navigation, Scrollbar],
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,
    allowTouchMove: true,
    breakpoints: {
      768: {
        slidesPerView: 'auto',
        scrollbar: {
          dragSize: 326,
        }
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 32,
        scrollbar: {
          dragSize: 394,
        },
      }
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
  swiperPrograms.update();
};

export { initProgramsSlider };

