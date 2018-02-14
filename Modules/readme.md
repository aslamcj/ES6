# Modules

Prior to ES6, we used libraries such as Browserify to create modules on the client-side, and require in Node.js. With ES6, 
we can now directly use modules of all types (AMD and CommonJS).

## Exporting in CommonJS

```
module.exports = 1;
module.exports = { foo: 'bar' };
module.exports = ['foo', 'bar'];
module.exports = function bar () {};

```

## Exporting in ES6

With ES6, we have various flavors of exporting. We can perform Named Exports:


```
export let name = 'David';
export let age  = 25;

```
As well as exporting a list of objects:

```
function sumTwo(a, b) {
    return a + b;
}

function sumThree(a, b, c) {
    return a + b + c;
}

export { sumTwo, sumThree };

```

We can also export functions, objects and values (etc.) simply by using the export keyword:

```
export function sumTwo(a, b) {
    return a + b;
}

export function sumThree(a, b, c) {
    return a + b + c;
}

```

And lastly, we can export default bindings:

```
function sumTwo(a, b) {
    return a + b;
}

function sumThree(a, b, c) {
    return a + b + c;
}

let api = {
    sumTwo,
    sumThree
};

export default api;

/* Which is the same as
 * export { api as default };
 */

```

