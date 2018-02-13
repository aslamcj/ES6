
// Rest example for Arrays

var num1, num2, rest;
var x, y, z;

[num1, num2, ...rest] = [1, 2, 3, 4, 5];
[x, y, z] = [1, 2, 3, 4, 5];

console.log(num1); // 1
console.log(num2); // 2
console.log(rest); // [3, 4, 5]
console.log(x, y, z) // 1 2 3

// Simple example of rest operator in functions
function checkArgs(...args) {
console.log(args.length);
console.log(arguments.length);
console.log(args[0], arguments[0]);
console.log(args[1], arguments[1]);
}
checkArgs("a", "b");

// Syntax error: Can't have a named parameter after rest parameters
function pick(object, ...keys, last) {
let result = Object.create(null);
for (let i = 0, len = keys.length; i < len; i++) {
result[keys[i]] = object[keys[i]];
}
return result;
}


// Rest example of Destructured Parameters
function createObj(name, value, options) {
    let obj = {};
    obj.x = options.a;
    obj.y = options.b;
    obj.z = options.c;
    obj[name] = value;
    return obj;
}
let options = {a: 1, b: 2, c: 3};
let testObj = createObj('test', 4, options);  
console.log(testObj)// {x:1, y:2, z:3, test:4}
