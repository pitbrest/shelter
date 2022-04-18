const mySlider = new Swiper('.slider', {


	loop: true,
	slidesPerView: 3,
	slidesPerGroup: 3,
	// Предзагрузка изображений
	preloadImages: true,
	// Скорость прокрутки слайдов
	speed: 1200,
	// Включаем/выключаем возможность переключать слайды перетягиванием мыши влево и вправо
	simulateTouch: false,

	// Кнопки "влево" / "вправо"
	navigation: {
		nextEl: '.arrow-right',
		prevEl: '.arrow-left',
	},

	breakpoints: {
		// when window width is >= 320px
		320: {
			// Кол-во выводимых слайдов одновременно
			slidesPerView: 1,
			// Количество одновременно прокручиваемых слайдов за один клик по стрелке
			slidesPerGroup: 1,
			// Расстояние между карточками
			spaceBetween: 0,
		},
		768: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 40,
		},
		1280: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: 90,
			loop: true,
		}
	},
});

