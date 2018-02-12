# Destructuring

```
Destructuring, which is the process of breaking down a data structure into smaller parts.
```

## Why Is Destructuring Useful?
In ECMAScript 5 and earlier, the need to fetch information from objects
and arrays could result in a lot of duplicate code to get certain data into
local variables.
```
let options = {
  repeat: true,
  save: false
};
// extract data from the object
let repeat = options.repeat,
  save = options.save;
```

### With ES6
```
let node = {
  type: "Identifier",
  name: "foo"
};
let { type, name } = node;

console.log(type); // "Identifier"
console.log(name); // "foo"
```



