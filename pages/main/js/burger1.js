// Burger menu

function firstPageBurger() {

	const telo = document.body;
	const burger = document.querySelector('.header__burger');
	const menu = document.querySelector('.header-nav');
	const toner = document.querySelector('.toner');
	const navItem = document.querySelectorAll('li');

	burger.addEventListener('click', event => {
		burger.classList.toggle('active');
		menu.classList.toggle('active');
		toner.classList.toggle('active');
		telo.classList.toggle('overflow');
	})
	toner.addEventListener('click', event => {
		burger.classList.toggle('active');
		menu.classList.toggle('active');
		toner.classList.toggle('active');
		telo.classList.toggle('overflow');
	})

	navItem.forEach(item => {
		item.addEventListener('click', event => {
			burger.classList.remove('active');
			menu.classList.remove('active');
			toner.classList.remove('active');
			telo.classList.remove('overflow');
		})
	})
}

firstPageBurger()


