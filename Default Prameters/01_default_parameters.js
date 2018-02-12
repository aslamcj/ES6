// Traditional or ES5 way of passing default values

function multiply(a, b) {
  b = (typeof b !== 'undefined') ?  b : 1;
  return a * b;
}

multiply(5, 2); // 10
multiply(5, 1); // 5
multiply(5);    // 5

// ES6 Way

function multiply(a, b = 1) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5, 1); // 5
multiply(5);    // 5

// Passing undefined vs. other falsy values
function test(num = 1) {
  console.log(typeof num);
}

test();          // 'number' (num is set to 1)
test(undefined); // 'number' (num is set to 1 too)

// test with other falsy values:
test('');        // 'string' (num is set to '')
test(null);      // 'object' (num is set to null)


// Evaluated at call time
//The default argument gets evaluated at call time, so unlike e.g. in Python, a new object is created each time the function is called.
//This even applies to functions and variables:

function append(value, array = []) {
  array.push(value);
  return array;
}
append(1); //[1]
append(2); //[2], not [1, 2]

function singularAutoPlural(singular, plural = singular + 's', 
                            rallyingCry = plural + ' ATTACK!!!') {
  return [singular, plural, rallyingCry]; 
}

//["Gecko","Geckos", "Geckos ATTACK!!!"]
singularAutoPlural('Gecko');

//["Fox","Foxes", "Foxes ATTACK!!!"]
singularAutoPlural('Fox', 'Foxes');

//["Deer", "Deer", "Deer ... change."]
singularAutoPlural('Deer', 'Deer', 'Deer peaceably and respectfully \
   petition the government for positive change.')
