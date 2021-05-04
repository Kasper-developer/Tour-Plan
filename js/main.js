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
	effect: "coverflow",
	speed: 550
});

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
	speed: 550
});
