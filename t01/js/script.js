'use strict';


const number = 12,
	big = 123n,
	str = "Hi",
	isOk = true,
	fail = null, // object, this is error in the JS language.
	undef = undefined,
	obj = {},
	sym = Symbol('id'),
	hi = function () { };

alert(`number is ${typeof number}\nbig is ${typeof big}\nstr is ${typeof str}\nisOk is ${typeof isOk}\nfail is ${typeof fail}\nundef is ${typeof undef}\nobj is ${typeof obj}\nsym is ${typeof sym}\nhi is ${typeof hi}\n`);