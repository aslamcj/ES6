"use strict"

let myArray = [11,22,34,22,33];
let mySet = new Set(myArray);

// To manually add items to the set
mySet.add('100');
mySet.add({a:1, b:2});
mySet.add('some text');

// To delete particular set
mySet.delete(22);

// to clear out set
mySet.clear();

// to check the value
mySet.has(22);
mySet.has(Math.sqrt(25));   // evaluation of expression
mySet.has('Some Text'.toLowerCase()); // evaluation of expression


// to check the size of set
mySet.size;

// Iterating Sets
for (let item of mySet) console.log(item);
for (let item of mySet.keys()) console.log(item);
for (let item of mySet.values()) console.log(item);

// converting between Set and Array
mySet2 = new Set([1, 2, 3, 4]);
mySet2.size; // 4
[...mySet2]; // [1, 2, 3, 4]

// Iterate set entries with forEach
mySet.forEach(function(value) {
  console.log(value);
});



