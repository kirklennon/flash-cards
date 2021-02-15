
let selectedLang = 'random';

function generateCards(data, selectedLang) {
	// randomize data
	let shuffled = [];
	while (data.length !== 0) {
		let randomIndex = Math.floor(Math.random() * data.length);
		shuffled.push(data[randomIndex]);
		data.splice(randomIndex, 1);
	}
	data = shuffled;
	
	let container = document.getElementById('container');
	container.innerHTML = '';
	for (let index of data) {
		if (selectedLang == 'random') {
			var lang = Math.random() < 0.5 ? 'en' : 'kr';
		} else if (selectedLang == 'en') {
			var lang = 'en';
		} else if (selectedLang == 'kr') {
			var lang = 'kr';
		}
		
		let otherLang = (lang == 'en') ? 'kr' : 'en';
		let cardContainer = document.createElement('div');
		cardContainer.classList.add('card-container');
		let flipper = document.createElement('div');
		flipper.classList.add('flipper');
		flipper.addEventListener("click", function(){
			  this.classList.toggle('clicker');
			});
		let front = document.createElement('div');
		front.classList.add('front', 'card', lang);
		front.innerHTML = index[lang];
		let back = document.createElement('div');
		back.classList.add('back', 'card', otherLang);
		back.innerHTML = index[otherLang];
		flipper.appendChild(front);
		flipper.appendChild(back);
		cardContainer.appendChild(flipper);
		container.appendChild(cardContainer);
	  }  
}



function getData(selectedLang) {

	fetch('/list')
	  .then(function (response) {
		return response.json();
	  })
	  .then(function (cards) {
		generateCards(cards.data, selectedLang);
	  })
	  .catch(function (err) {
		console.log(err);
	  });
}
 
getData(selectedLang);

