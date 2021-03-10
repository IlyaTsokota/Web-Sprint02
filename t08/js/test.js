'use strict';

let { checkBrackets } = require('./script');
let assert = require('assert');

describe("checkBrackets", function () {
	it("Returns -1 if passed NaN ", function () {
		assert.equal(checkBrackets(NaN), -1);
	});

	it("Returns -1 if passed number ", function () {
		assert.equal(checkBrackets(1), -1);
	});

	it("Returns -1 if passed undefined ", function () {
		assert.equal(checkBrackets(undefined), -1);
	});

	it("Returns -1 if passed BigInt ", function () {
		assert.equal(checkBrackets(123n), -1);
	});

	it("Returns -1 if passed string", function () {
		assert.equal(checkBrackets("Fail"), -1);
	});

	it(" For example '1)()(())2(()' the answer is 2 ", function () {
		assert.equal(checkBrackets('1)()(())2(()'), 2);
	});

	it(" For example '(1)()(())2(()' the answer is 1 ", function () {
		assert.equal(checkBrackets('(1)()(())2(()'), 1);
	});

	it(" For example '(1)()(())2(()' the answer is 0 ", function () {
		assert.equal(checkBrackets('(1)()(())2(())'), 0);
	});

	it(" For example '(1)()(())2(()' the answer is 1 ", function () {
		assert.equal(checkBrackets('(1)()(())2(()))'), 1);
	});
	it(" For example '() )(' the answer is 2 ", function () {
		assert.equal(checkBrackets('() )('), 2);
	});
	it(" For example '(hello) )' the answer is 1 ", function () {
		assert.equal(checkBrackets('(hello) )'), 1);
	});
	it(" For example '((hello) )' the answer is 0 ", function () {
		assert.equal(checkBrackets('((hello) )'), 0);
	});
	it(" For example '((hello) (aa)' the answer is 1 ", function () {
		assert.equal(checkBrackets('((hello) (aa)'), 1);
	});
	it("For example '((hello) (aa)' the answer is 3 ", function () {
		assert.equal(checkBrackets('((heawllo) (awdwa)((()'), 3);
	});
	it("For example '))))))((heawllo) (awdwa)((()' the answer is 9 ", function () {
		assert.equal(checkBrackets('))))))((heawllo) (awdwa)((()'), 9);
	});
}
);


