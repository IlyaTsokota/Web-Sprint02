'use strict';

function start() {
	const str = prompt("Введите 2 числа через пробел: 1 - начало диапазона, 2 - конец", "");
	if (str != null) {
		const arr = str.split(' '),
			from = checkValue(arr[0]),
			to = checkValue(arr[1]);
		if (from <= to) {
			checkDivision(from, to);
		} else {
			checkDivision();
		}
	} else {
		checkDivision();
	}
}

function checkDivision(beginRange = 1, endRange = 100) {
	for (let i = beginRange; i <= endRange; i++) {
		if (i % 2 == 0 && i % 3 == 0 && i % 10 == 0 && i > 0) {
			console.log(`${i} is even, a multiple of 3, a multiple of 10`);
		} else if (i % 2 == 0 && i % 3 == 0) {
			console.log(`${i} is even, a multiple of 3`);
		} else if (i % 2 == 0 && i % 10 == 0) {
			console.log(`${i} is even, a multiple of 10`);
		} else if (i % 3 == 0 && i % 10 == 0) {
			console.log(`${i} is a multiple of 3, a multiple of 10`);
		} else if (i % 2 == 0) {
			console.log(`${i} is even`);
		} else if (i % 3 == 0) {
			console.log(`${i} is a multiple of 3`);
		} else if (i % 10 == 0) {
			console.log(`${i} is a multiple of 10`);
		} else {
			console.log(`${i} -`);
		}
	}
}


function checkValue(val) {
	if (!isNaN(parseInt(val))) {
		return +val;
	}
	return undefined;
}

start();