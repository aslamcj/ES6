# Rest and Spread Operators

```
Many modern programming languages provide the ability for the function to accept a number of parameters. 
ES6 introduces this much needed feature to JavaScript with Rest Parameters.

You now have the ability to pass a function a dynamic number of parameters very easily. 
If you wanted to do this in ES5 you would have to put all the values in a data container data type like an array.
```

## Rest Operator Creation
Rest operator can be created with ...Name (3 dots followed by any name). It precedes a named parameter. 
This named parameter will become an Array that will just gather up all the remaining parameters
passed to the function.
* Rest should be the last parameter in the function arguments list
* The length property ignores the Rest parameter. In this case, it is 1. The length property
of the function only counts the number of named parameters excluding the rest parameter.

### Example
```
var showCollections = function (id, ...collection) {
    console.log(collection);
  //console.log(collection instanceof Array);
};
showCollections(42, "movies", "music"); 
console.log(showCollections.length); // 1
```
* Now let's look at the case where we check the arguments.length inside the function:
```
var showCollections = function (id, ...collection) {
console.log(arguments.length);
};
showCollections(123, "movies", "music"); // 3
```


### 
