'use strict';

const getFormattedDate = date => {
	return `${zeroAdd(date.getDate())}.${zeroAdd(date.getMonth() + 1)
		}.${date.getFullYear()} ${zeroAdd(date.getHours())}:${zeroAdd(date.getMinutes())} ${getDay(date.getDay())} `;
};

function getDay(indexDay) {
	let day;
	switch (indexDay) {
		case 0:
			day = "Sunday";
			break;
		case 1:
			day = "Monday";
			break;
		case 2:
			day = "Tuesday";
			break;
		case 3:
			day = "Wednesday";
			break;
		case 4:
			day = "Thursday";
			break;
		case 5:
			day = "Friday";
			break;
		case 6:
			day = "Saturday";
			break;
		default:
			day = "Invalid day";
			break;
	}
	return day;
}

function zeroAdd(num) {
	if (num < 9) {
		return "0" + num;
	}
	return num;
}
