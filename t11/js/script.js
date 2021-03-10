'use strict';

function addWords(obj, words) {
	const arrayObjStr = returnValidString(obj.words).split(' '),
		arrayWords = returnValidString(words).split(' ');
	for (let i = 0; i < arrayWords.length; i++) {
		arrayObjStr.push(arrayWords[i]);
	}
	obj.words = arrayObjStr.join(' ');
}


function removeWords(obj, words) {
	const arrayWords = words.split(' ');

	for (let i = 0; i < arrayWords.length; i++) {
		if (arrayWords[i] != '') {
			obj.words = obj.words.replace(arrayWords[i], '');
		}
	}
	let newArr = [],
		arr = obj.words.split(' ');
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== '') {
			newArr.push(arr[i]);
		}
	}
	obj.words = newArr.join(' ');
}

function changeWords(obj, oldWords, newWords) {
	const arrayWords = obj.words.split(' '),
		arrayOldWords = oldWords.split(' '),
		arrayNewWords = newWords.split(' ');

	let indexNew = 0;

	for (let j = 0; j < arrayOldWords.length; j++) {
		for (let k = 0; k < arrayWords.length; k++) {
			if (arrayOldWords[j] !== '' && arrayWords[k] === arrayOldWords[j]) {
				arrayWords[k] = arrayNewWords[indexNew++];
				break;
			}
		}
	}

	obj.words = arrayWords.join(' ');
}


function returnValidString(str) {
	let strArr = str.split(' '),
		newArr = [],
		j = 0;
	for (let i = 0; i < strArr.length; i++) {
		if (strArr[i] !== '' && strArr[i + 1] !== '') {
			newArr[j++] = strArr[i];
		}
	}
	return newArr.join(' ');
}
const obj = { words: 'newspapers newspapers  books magazines' };
console.log(obj); // {words: "newspapers newspapers  books magazines"}

addWords(obj, 'radio newspapers   ');
console.log(obj); // {words: "newspapers books magazines radio"}

removeWords(obj, 'newspapers   radio');
console.log(obj); // {words: "books magazines"}

changeWords(obj, 'books radio  magazines', 'tv internet');
console.log(obj); // {words: "tv internet"}