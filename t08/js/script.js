'use strict';

export const checkBrackets = str => {

	if (typeof str === 'string') {
		const openBrackets = str.match(/\(/g),
			closeBrackets = str.match(/\)/g),
			countOpenBrackets = openBrackets !== null
				? openBrackets.length
				: 0,
			countCloseBrackets = openBrackets !== null
				? closeBrackets.length
				: 0;
		if (countOpenBrackets == 0 && countCloseBrackets == 0) {
			return -1;
		}

		let start = 0, end = 0;
		for (const parentheses of str) {
			if (parentheses === '(') {
				start++;
			} else if (start > 0 && parentheses === ')') {
				start--;
			} else if (parentheses === ')') { end++; }
		}
		return end + start;

	}
	return -1;
};

