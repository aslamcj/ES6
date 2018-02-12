let colors = [ "red", "green", "blue" ];
let [ firstColor, secondColor ] = colors;
console.log(firstColor); // "red"
console.log(secondColor); // "green"

let [ , , thirdColor ] = colors;
console.log(thirdColor); // "blue"

// swapping variables in ECMAScript 5
let a = 1,
b = 2,
tmp;

tmp = a;
a = b;
b = tmp;
console.log(a); // 2
console.log(b); // 1

// swapping variables in ECMAScript 6
let a = 1,
b = 2;
[ a, b ] = [ b, a ];
console.log(a); // 2
console.log(b); // 1

//Default Values

let colors = [ "red" ];
let [ firstColor, secondColor = "green" ] = colors;
console.log(firstColor); // "red"
console.log(secondColor); // "green"


