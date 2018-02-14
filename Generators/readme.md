Similar to how Promises allow us to avoid callback hell, Generators allow us to flatten our code - giving our asynchronous 
code a synchronous feel. Generators are essentially functions which we can pause their execution and subsequently 
return the value of an expression.

A simple example of using generators is shown below:
```
function* sillyGenerator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

var generator = sillyGenerator();
> console.log(generator.next()); // { value: 1, done: false }
> console.log(generator.next()); // { value: 2, done: false }
> console.log(generator.next()); // { value: 3, done: false }
> console.log(generator.next()); // { value: 4, done: false }

```

Where next will allow us to push our generator forward and evaluate a new expression. 
While the above example is extremely contrived, we can utilize Generators to write asynchronous code in a synchronous manner:

```
// Hiding asynchronousity with Generators

function request(url) {
    getJSON(url, function(response) {
        generator.next(response);
    });
}

```

And here we write a generator function that will return our data:
```
function* getData() {
    var entry1 = yield request('http://some_api/item1');
    var data1  = JSON.parse(entry1);
    var entry2 = yield request('http://some_api/item2');
    var data2  = JSON.parse(entry2);
}

```
By the power of yield, we are guaranteed that entry1 will have the data needed to be parsed and stored in data1.

While generators allow us to write asynchronous code in a synchronous manner, 
there is no clear and easy path for error propagation. As such, as we can augment our generator with Promises:

```
function request(url) {
    return new Promise((resolve, reject) => {
        getJSON(url, resolve);
    });
}

```

