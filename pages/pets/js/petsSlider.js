const mySliderPets = new Swiper('.pets-swiper', {

	grid: {
		rows: 2,
		fill: 'row',
	},

	// Скорость прокрутки слайдов
	speed: 1200,
	// Включаем/выключаем возможность переключать слайды перетягиванием мыши влево и вправо
	simulateTouch: true,

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
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: 40,
		},
		1280: {
			slidesPerView: 4,
			slidesPerGroup: 4,
			spaceBetween: 40,
		}
	},
});

