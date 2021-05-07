const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    prevEl: '.hotel-slider__button-prev',
    nextEl: '.hotel-slider__button-next',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true,
  },
  effect: 'coverflow',
  speed: 550,
})

const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    prevEl: '.reviews-slider__button-prev',
    nextEl: '.reviews-slider__button-next',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true,
  },
  speed: 550,
})

var menuButton = document.querySelector('.menu-button')
menuButton.addEventListener('click', function () {
  console.log('Клик по кнопке')
  document
    .querySelector('.navbar-bottom')
    .classList.toggle('navbar-bottom--visible');
  document
    .querySelector('body')
    .classList.toggle('lock');
  document
    .querySelector('.menu-button--top--line')
    .classList.toggle('menu-button--top');
  document
    .querySelector('.menu-button--bottom--line')
    .classList.toggle('menu-button--bottom')
  document
    .querySelector('.menu-button--middle--line')
    .classList.toggle('menu-button--middle')
})
