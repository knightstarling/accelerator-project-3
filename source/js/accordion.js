const questionItems = document.querySelectorAll('.faq__item');

const accordionHandler = () => {
  questionItems.forEach((item) => {
    const button = item.querySelector('.faq__button');

    button.addEventListener('click', () => {
      item.classList.toggle('faq__item--active');
    });
  });
};

export {accordionHandler};
