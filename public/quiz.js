

function generateCards(data) {
	// randomize data
	let shuffled = [];
	while (data.length !== 0) {
		let randomIndex = Math.floor(Math.random() * data.length);
		shuffled.push(data[randomIndex]);
		data.splice(randomIndex, 1);
	}
	data = shuffled;
	
	let container = document.getElementById('container');
	for (let row of data) {
		
		let p = document.createElement('p');
		let label = document.createElement('label');
		label.setAttribute('for', row['id']);
		label.innerHTML = row['en'];
		let input = document.createElement('input');
		input.id = row['id'];
		input.type = 'text';
		input.onchange = function() {
			if (input.value == row['kr']) {
				input.classList.add('correct');
			}
		};
		let br = document.createElement('br');
		p.appendChild(label);
		p.appendChild(br);
		p.appendChild(input);
		container.appendChild(p);
	   }  
}


function getData() {

	fetch('/list')
	  .then(function (response) {
		return response.json();
	  })
	  .then(function (cards) {
		generateCards(cards.data);
	  })
	  .catch(function (err) {
		console.log(err);
	  });
}
 
getData();

