#Symbols

Symbols are a new primitive type in ECMAScript 6
They are tokens that serve as unique IDs. You create symbols via the factory function Symbol()

```
let symbol1 = Symbol();

```

Symbol() has an optional string-valued parameter that lets you give the newly created symbol a description:
```
let symbol2 = Symbol('symbol2');
console.log(symbol2)
```

Every symbol returned by Symbol() is unique, every symbol has its own identity:
```
symbol1 === symbol2
```
