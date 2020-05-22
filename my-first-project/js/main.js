// TYPEWRITER
const titleInput = document.querySelector('#type-line').textContent;

let count = 0,
	result = '';

function typeLine() {
	let interval = setTimeout(() => {
		result += titleInput[count];
		document.querySelector('#title-input').innerHTML = result + '|' ;
		count++;

		if (count >= titleInput.length) {
			clearTimeout(interval);
			document.querySelector('#title-input').innerHTML = result;
			return true;
		}
		typeLine();
	}, 100);
}

typeLine();

console.log(titleInput.length);


// ENCRYPTION TEXT
let inputValue = document.querySelector('#text_inner-input'),
	encryptionText = document.querySelector('#encryption');

// inputValue.addEventListener('input', () => {

// 	encryptionText.classList.remove('hide');
// 	encryptionText.classList.add('show');
// 	encryptionText.innerHTML = inputValue.value;
// });

// ENCRIPTION
const btnGo = document.querySelector('#go');

btnGo.addEventListener('click', () => {
	encrypt(inputValue.value)
});

{
	let resultText = [];

	let newWords = [];

// function encrypt(words) {
// 	for(var i=0; i < words.length; i++) {
// 		for(var x=0; x < 1; x++) {
// 			if (words[i] == 'a') {
// 				words[i].slice()
// 				resultText.push(words[i]);
// 			} else if (words[i] == 'b'){
// 				resultText.push(words[i]);
// 			}
// 		}
// 	}
// 	resultText.join('');
// 	console.log(resultText);
// }

	function encrypt(words) {
		for (let i = 0; i < words.length; i++) {
			resultText.push(words[i]);
			for (let x = 0; x < words; i++) {
				
			}
		}
	}


};