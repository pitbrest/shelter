// Burger menu

function secondPageBurger() {

	const telo = document.body;
	const burger = document.querySelector('.header__burger');
	const menu = document.querySelector('.header-nav');
	const toner = document.querySelector('.toner');
	const navItem = document.querySelectorAll('li');
	const logo = document.querySelector('.header-logo');

	burger.addEventListener('click', event => {
		burger.classList.toggle('active');
		menu.classList.toggle('active');
		toner.classList.toggle('active');
		telo.classList.toggle('overflow')
		logo.classList.toggle('active');
	})
	toner.addEventListener('click', event => {
		burger.classList.remove('active');
		menu.classList.remove('active');
		toner.classList.remove('active');
		telo.classList.remove('overflow');
		logo.classList.remove('active');
	})
	navItem.forEach(item => {
		item.addEventListener('click', event => {
			burger.classList.remove('active');
			menu.classList.remove('active');
			toner.classList.remove('active');
			telo.classList.remove('overflow');
			logo.classList.remove('active');
		})
	})
}

secondPageBurger()