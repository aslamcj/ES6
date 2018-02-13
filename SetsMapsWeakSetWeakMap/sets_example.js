"use strict"

let myArray = [11,22,34,22,33];
let mySet = new Set(myArray);

// To manually add items to the set
mySet.add('100');
mySet.add({a:1, b:2});

// To delete particular set
mySet.delete(22);

// to clear out set
mySet.clear();
