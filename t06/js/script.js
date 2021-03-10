'use strict';


function start() {
	let name = prompt("Please enter your name", "");
	if (!checkValue(name)) {
		alert("Wrong input!");
		console.log('Wrong input!');
		return;
	}
	let surname = prompt("Please enter your surname", "");
	if (!checkValue(surname)) {
		alert("Wrong input!");
		console.log('Wrong input!');
		return;
	}
	name = capitalizeFirstLetter(name);
	surname = capitalizeFirstLetter(surname);

	alert(`Hello, ${name} ${surname}`);
	console.log(`Hello, ${name} ${surname}`);
}



function checkValue(val) {
	if (val.search(/[1-9]/) != -1 || val.search(/ /) != -1) {
		return false;
	}
	return true;
}

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

start();