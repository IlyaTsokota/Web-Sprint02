'use strict';

function questions() {
	for (let i = 0; i < 3; i++) {
		const name = prompt("What animal is the superhero most similar to?", "");
		if (name.length >= 20 || / /g.test(name) || !(/[a-z]/ig.test(name))) {
			alert("Invalid value, please reload the page!!!");
			return;
		}
		const gender = prompt("Is the superhero male or female? Leave blank if unknown or other.", "");
		if (gender.length > 0 && !(/male|female/i.test(gender))) {
			alert("Invalid value, please reload the page!!!");
			return;
		}
		const age = prompt("How old is the superhero", "");
		if (!(/[1-9]/ig.test(age)) || age[0] === '0' || age.length > 5) {
			alert("Invalid value, please reload the page!!!");
			return;
		}
		answer(name, gender, +age);

	}

}

function answer(name, gender, age) {
	let answer = '';
	if (gender.length === 0) {
		if (age < 18) {
			answer = "kid";
		} else {
			answer = "hero";
		}
	} else if (gender == 'male') {
		if (age < 18) {
			answer = "boy";
		} else {
			answer = "man";
		}
	} else {
		if (age < 18) {
			answer = "girl";
		} else {
			answer = "woman";
		}
	}
	alert(`The superhero name is: ${name}-${answer}!`);
}


questions();