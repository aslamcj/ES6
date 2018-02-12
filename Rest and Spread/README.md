# Rest and Spread Operators

```
Many modern programming languages provide the ability for the function to accept a number of parameters. 
ES6 introduces this much needed feature to JavaScript with Rest Parameters.

You now have the ability to pass a function a dynamic number of parameters very easily. 
If you wanted to do this in ES5 you would have to put all the values in a data container data type like an array.
```

## Rest Operator Creation
It can be created with ...Name (3 dots followed by any name)

### Example
```
var showCollections = function (id, ...collection) {
console.log(collection instanceof Array);
};
showCollections(42, "movies", "music"); // true
```
