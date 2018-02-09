//ES3 or earlier

var myArray = [8, 3, 11, 9, 6];

for (var index = 0; index < myArray.length; index++) {
  console.log(myArray[index]);
}


// ES5
myArray.forEach(function (value) {
  console.log(value);
});

// ES6
for (var value of myArray) {
  console.log(value);
}

for (var chr of "😺😲") {
  alert(chr);
}

for (var char of 'Hello') {
    console.log(char);
}
