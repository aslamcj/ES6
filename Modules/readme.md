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

## Importing in ES6
ES6 provides us with various flavors of importing. We can import an entire file:

```
import 'underscore';

```
It is important to note that simply importing an entire file will execute all code at the top level of that file.

Similar to Python, we have named imports:
```
import { sumTwo, sumThree } from 'math/addition';

```
We can also rename the named imports:

```
import {
    sumTwo as addTwoNumbers,
    sumThree as sumThreeNumbers
} from 'math/addition';
```

In addition, we can import all the things (also called namespace import):

```
import * as util from 'math/addition';
```
Lastly, we can import a list of values from a module:

```
import * as additionUtil from 'math/addition';
const { sumTwo, sumThree } = additionUtil;
```
