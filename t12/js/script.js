'use strict';

function concat(str1, str2 = '') {
	if (str2 !== '') {
		return `${str1} ${str2}`;
	} else {
		return function func() {
			if (func.count === undefined) {
				func.count = 0;
			}
			func.count++;
			return `${str1} ${prompt("Input text", "")}`;
		};
	}
}
