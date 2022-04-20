const myPetsSlider = new Swiper('.pets-swiper', {

	grid: {
		rows: 2,
		fill: 'row',
	},

	// Скорость прокрутки слайдов
	speed: 1200,
	// Включаем/выключаем возможность переключать слайды перетягиванием мыши влево и вправо
	simulateTouch: true,
	watchSlidesProgress: true,

	// Кнопки "влево" / "вправо"
	navigation: {
		nextEl: '.step-right',
		prevEl: '.step-left',
	},
	// If we need pagination
	// pagination: {
	// 	el: '.btn-2',
	// 	type: 'fraction',

	// },


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


// const toggleSlideBtns = document.querySelectorAll('.content-toggle-button');
// const currentSlide = document.querySelector('.btn-2');

// toggleSlideBtns.forEach(item => {
// 	item.addEventListener('click', (event) => {
// 		currentSlide.innerHTML = Number(currentSlide.innerHTML) + 1;
// 	})
// })

let toExtremeSlide = function () {

	const toLeftSide = document.querySelector('.to-left-side');
	const toRightSide = document.querySelector('.to-right-side');

	toRightSide.addEventListener('click', e => {
		myPetsSlider.slideTo(48, 4000);
	})

	toLeftSide.addEventListener('click', e => {
		myPetsSlider.slideTo(1, 4000);
	})

}

toExtremeSlide()

