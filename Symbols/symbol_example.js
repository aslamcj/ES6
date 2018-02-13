// Problem with the following code

var collection = {};
collection['a'] = 123;
collection['b'] = 'hello'

for(var g in collection) {
	console.log(collection[g]);
}

collection['b'] = "bye"


// Symbol usage

var a = Symbol('my test');
var b = Symbol('my test');

var collection2 = {};
collection2[a] = 500;
collection2[b] = 1000;

console.log(collection2);
console.log(collection2[a]);



