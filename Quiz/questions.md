## Quiz Questions

1. Reason why the following example throws an error

```
if (condition) {
console.log(typeof value); // throws an error
let value = "blue";
}
```

2. Changes the following program so the outcome would be 0 to 9. Using ES5 and ES6.

```
var funcs = [];
for (var i = 0; i < 10; i++) {
  funcs.push(function() {
  console.log(i);
});
}
funcs.forEach(function(func) {
  func(); // outputs the number "10" ten times
});
```
3. What would be the output

```
var RegExp = "Hello!";
console.log(window.RegExp); 
var ncz = "Hi!";
console.log(window.ncz); 

let RegExp = "Hello!";
console.log(RegExp); 
console.log(window.RegExp === RegExp); 

const ncz = "Hi!";
console.log(ncz); 
console.log("ncz" in window); 
```

4. What is ES6 string unicode support?

5. What is the output for the following program and explain the reason?
```
let text = "𠮷a";
console.log(text.length); 
console.log(/^.$/.test(text)); 
console.log(text.charAt(0)); 
console.log(text.charAt(1)); 
console.log(text.charCodeAt(0)); 
console.log(text.charCodeAt(1));
console.log(text.charCodeAt(2)); 
console.log(text.codePointAt(0)); 
console.log(text.codePointAt(1)); 
console.log(text.codePointAt(2));
```

6. What are the draw back in the following code
```
function makeRequest(url, timeout, callback) {
  timeout = timeout || 2000;
  callback = callback || function() {};
 }
```

7. Check the output of the following code
```
function mixArgs(first, second) {
  "use strict";
  console.log(first === arguments[0]);
  console.log(second === arguments[1]);
  first = "c";
  second = "d"
  console.log(first === arguments[0]);
  console.log(second === arguments[1]);
}
mixArgs("a", "b");
```
8. Explain the reason for the error
```
function add(first = second, second) {
return first + second;
}
console.log(add(1, 1)); // 2
console.log(add(undefined, 1)); // throws an error
```







