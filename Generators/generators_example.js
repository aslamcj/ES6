var myGen = function*() {
	var one = yield 1;
	var two = yield 2;
	var three = yield 3;
	console.log(one, two, three);
};

var gen = myGen();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

/*
console.log(gen.next(100));
console.log(gen.next(200));
console.log(gen.next('test string'));
console.log(gen.next());
*/
