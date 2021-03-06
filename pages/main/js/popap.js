let petsClone = [
	{
		"name": "Katrine",
		"img": "../../assets/images/png/page2/pets-katrine.png",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
		"age": "6 months",
		"inoculations": ["panleukopenia"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"name": "Jennifer",
		"img": "../../assets/images/png/page2/pets-jennifer.png",
		"type": "Dog",
		"breed": "Labrador",
		"description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
		"age": "2 months",
		"inoculations": ["none"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"name": "Woody",
		"img": "../../assets/images/png/page2/pets-woody.png",
		"type": "Dog",
		"breed": "Golden Retriever",
		"description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
		"age": "3 years 6 months",
		"inoculations": ["adenovirus", "distemper"],
		"diseases": ["right back leg mobility reduced"],
		"parasites": ["none"]
	},
	{
		"name": "Sophia",
		"img": "../../assets/images/png/page2/pets-sophia.png",
		"type": "Dog",
		"breed": "Shih tzu",
		"description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
		"age": "1 month",
		"inoculations": ["parvovirus"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"name": "Scarlett",
		"img": "../../assets/images/png/page2/pets-scarlet.png",
		"type": "Dog",
		"breed": "Jack Russell Terrier",
		"description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
		"age": "3 months",
		"inoculations": ["parainfluenza"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"name": "Timmy",
		"img": "../../assets/images/png/page2/pets-timmy.png",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
		"age": "2 years 3 months",
		"inoculations": ["calicivirus", "viral rhinotracheitis"],
		"diseases": ["kidney stones"],
		"parasites": ["none"]
	},
	{
		"name": "Freddie",
		"img": "../../assets/images/png/page2/pets-freddie.png",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human???s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
		"age": "2 months",
		"inoculations": ["rabies"],
		"diseases": ["none"],
		"parasites": ["none"]
	},
	{
		"name": "Charly",
		"img": "../../assets/images/png/page2/pets-charly.png",
		"type": "Dog",
		"breed": "Jack Russell Terrier",
		"description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn???t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
		"age": "8 years",
		"inoculations": ["bordetella bronchiseptica", "leptospirosis"],
		"diseases": ["deafness", "blindness"],
		"parasites": ["lice", "fleas"]
	}
];

// console.log(pets.filter(item => item.name === 'Katrine')[0].name);

function popupActivator() {

	const bodyLock = document.body;
	const overlay = document.querySelector('.popup__body');
	const petsCards = document.querySelectorAll('.card');
	const popupCloseButton = document.querySelector('.popup__close')
	const popup = document.querySelector('.popup');

	let petImg = document.getElementById('pet-img');
	let title = document.querySelector('.popup__title');
	let subtitle = document.querySelector('.popup__subtitle');
	let description = document.querySelector('.popup__text');
	let age = document.getElementById('age');
	let inoculations = document.getElementById('inoculations');
	let diseases = document.getElementById('diseases');
	let parasites = document.getElementById('parasites');



	for (let item of petsCards) {
		item.addEventListener('click', (event) => {

			let currentPet = event.target.parentNode.dataset.name;

			petImg.src = petsClone.filter(item => item.name === currentPet)[0].img;
			if (event.target.parentNode.dataset.name === 'Sophia' || event.target.parentNode.dataset.name === 'Charly') { petImg.style.width = '90%' };
			title.innerHTML = petsClone.filter(item => item.name === currentPet)[0].name;
			subtitle.innerHTML = petsClone.filter(item => item.name === currentPet)[0].breed;
			description.innerHTML = petsClone.filter(item => item.name === currentPet)[0].description;
			age.innerHTML = petsClone.filter(item => item.name === currentPet)[0].age;
			inoculations.innerHTML = petsClone.filter(item => item.name === currentPet)[0].inoculations;
			diseases.innerHTML = petsClone.filter(item => item.name === currentPet)[0].diseases;
			parasites.innerHTML = petsClone.filter(item => item.name === currentPet)[0].parasites;

			// console.log(event.target.parentNode.dataset.name);
			popup.classList.add('open');
			bodyLock.classList.add('hidden');

		})
	};

	overlay.addEventListener('click', (event) => {
		if (event.target.classList == "popup__body") {
			popup.classList.remove('open');
			bodyLock.classList.remove('hidden');
		}
	})

	popupCloseButton.addEventListener('click', (event) => {
		event.preventDefault();
		popup.classList.remove('open');
		bodyLock.classList.remove('hidden');
	})

	overlay.addEventListener('mouseover', (event) => {
		if (event.target.classList == "popup__body" || event.target.classList == "popup__close") {
			popupCloseButton.style.backgroundColor = '#f1cdb3';
		}
	})
	overlay.addEventListener('mouseout', (event) => {
		if (event.target.classList == "popup__body" || event.target.classList == "popup__close") {
			popupCloseButton.style.backgroundColor = 'transparent';
		}
	})

}

popupActivator()







