'use strict';

let sortEvenOdd = (arr) => {
	arr.sort((a, b) => a - b);

	let tmp;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i; j++) {
			if (arr[j] % 2 != 0 && arr[j + 1] % 2 == 0) {
				tmp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
			}
		}
	}
};
