const myPetsSlider = new Swiper('.pets-swiper', {

	// Скорость прокрутки слайдов
	speed: 1200,
	// Включаем/выключаем возможность переключать слайды перетягиванием мыши влево и вправо
	simulateTouch: true,
	// Кнопки "влево" / "вправо"
	navigation: {
		nextEl: '.step-right',
		prevEl: '.step-left',
	},
	// Пагинация (отображает позицию слайда в общем количестве слайдов)
	pagination: {
		el: '.btn-2',
		// Тип пагинации фракция (к примеру первая страница будет отображаться как 1/7)
		type: 'fraction',
		// Изменяем отображение пагинации, вместо позиции текущего слайда в общем количестве слайдов отображаем только номер текущего слайда
		renderFraction: function (currentClass, index) {
			return '<span class="' + currentClass + '"> ' + index + '</span>'
		},
	},

	breakpoints: {
		// when window width is >= 320px
		320: {
			// Кол-во выводимых слайдов одновременно
			slidesPerView: 1,
			// Количество одновременно прокручиваемых слайдов за один клик по стрелке

			// Расстояние между карточками
			spaceBetween: 40,
			grid: {
				rows: 3,
				column: 1,
				fill: 'row',
			},
		},
		768: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 40,
			grid: {
				rows: 3,
				fill: 'row',
			},
		},
		1280: {
			slidesPerView: 4,
			slidesPerGroup: 4,
			spaceBetween: 40,
			// Сетка слайдера в 2 строки и построчным заполнением
			grid: {
				rows: 2,
				fill: 'row',
			},
		}
	},
});


// Реализуем функционал прокрутки к первому и последнему слайду

let toExtremeSlide = function () {

	const toLeftSide = document.querySelector('.to-left-side');
	const toRightSide = document.querySelector('.to-right-side');

	toRightSide.addEventListener('click', () => {
		// Задаем к какому слайду (слайду с каким индексом) следует переместиться
		// метод слайдера стандартный, взят тут - https://swiperjs.com/swiper-api
		myPetsSlider.slideTo(48, 4000);
	})

	toLeftSide.addEventListener('click', () => {
		myPetsSlider.slideTo(0, 4000);
	})

}

toExtremeSlide()


// Реализуем стилистику кнопок прокрутки слайдов в зависимости 
// от текущего слайда (согласно заданию)

let controlBtnsStyling = function () {
	const paginationBtn = document.querySelector('.swiper-pagination-current');
	const allSliderBtns = document.querySelectorAll('.content-toggle-button');
	const stepToLeftBtn = document.querySelector('.step-left');
	const stepToRightBtn = document.querySelector('.step-right');
	const toLeftSideBtn = document.querySelector('.to-left-side');
	const toRightSideBtn = document.querySelector('.to-right-side');

	allSliderBtns.forEach(item => {
		item.addEventListener('click', () => {

			if (+paginationBtn.innerHTML === 1) {
				stepToLeftBtn.classList.remove('active');
				toLeftSideBtn.classList.remove('active');
				if (!stepToRightBtn.classList.contains('active')) {
					stepToRightBtn.classList.add('active');
				};
				if (!toRightSideBtn.classList.contains('active')) {
					toRightSideBtn.classList.add('active');
				}
			}
			else if (+paginationBtn.innerHTML > 1) {
				if (!stepToLeftBtn.classList.contains('active')) {
					stepToLeftBtn.classList.add('active');
				};
				if (!toLeftSideBtn.classList.contains('active')) {
					toLeftSideBtn.classList.add('active');
				}
			}
			if (!(+paginationBtn.innerHTML === 6 && innerWidth >= 1280) && !(+paginationBtn.innerHTML === 8 && innerWidth >= 768 && innerWidth < 1280) && !(+paginationBtn.innerHTML === 16 && innerWidth < 768)) {
				if (!stepToRightBtn.classList.contains('active')) {
					stepToRightBtn.classList.add('active');
				};
				if (!toRightSideBtn.classList.contains('active')) {
					toRightSideBtn.classList.add('active');
				}
			}
			else if (+paginationBtn.innerHTML === 6 && innerWidth >= 1280) {
				stepToRightBtn.classList.remove('active');
				toRightSideBtn.classList.remove('active');
				stepToLeftBtn.classList.add('active');
				toLeftSideBtn.classList.add('active');
			}
			if (+paginationBtn.innerHTML === 8 && innerWidth >= 768 && innerWidth < 1280) {
				stepToRightBtn.classList.remove('active');
				toRightSideBtn.classList.remove('active');
				stepToLeftBtn.classList.add('active');
				toLeftSideBtn.classList.add('active');
			}
			if (+paginationBtn.innerHTML === 16 && innerWidth < 768) {
				stepToRightBtn.classList.remove('active');
				toRightSideBtn.classList.remove('active');
				stepToLeftBtn.classList.add('active');
				toLeftSideBtn.classList.add('active');
			}
			else if (+paginationBtn.innerHTML > 1) {
				if (!stepToLeftBtn.classList.contains('active')) {
					stepToLeftBtn.classList.add('active');
				}
				if (!toLeftSideBtn.classList.contains('active')) {
					toLeftSideBtn.classList.add('active');
				}
			}
		})
	})

}
controlBtnsStyling()

