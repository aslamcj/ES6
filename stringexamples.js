//Multiline string In JavaScript

//Method1:
var string = "This is first line \n\
This is second line \n\
This is third line \n\
";
console.log(string);

//Method2
var name = "narayan";
var x = `
My Name is ${name}.
My Profession is web development.
`;
console.log(x);

//Method3
var myString = (function () {/*
   I am narayan
   I am a web developer
*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
