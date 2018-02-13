# Set and WeakSet

Sets and WeakSets are yet another collection type introduced in ES6.

## Set
1. The Set object lets you store unique values of any type, whether primitive values or object references.
2. Set objects are collections of unique values. Duplicate values are ignored, as the
collection must have all unique values. Sets are fast and the values can be primitive types
or object references.
3. Sets can be incredibly helpful if you need a dynamic list of unique elements to be
rendered in a drop-down or as an auto-suggestion for an input field. Using Set would
ensure that your list of suggestions would never have a duplicate value and saves you the
trouble of checking for duplicates.

## WeakSet
Similar to WeakMap, the WeakSet object lets you store weakly held objects in a collection,
which means a WeakSet doesn’t prevent its elements from being garbage collected.

Much like a WeakMap, a WeakSet is not iterable and does not have a size property.
```
A WeakSet supports only three methods:
* add(value)
* has(value)
* delete(value)
```

```
WeakSet example
let ws = new WeakSet();
const obj = {};
const foo = {};
ws.add(window);
ws.add(obj);
ws.has(window); // true
ws.has(foo); // false, foo has not been added to the set
ws.delete(window); // removes window from the set
ws.has(window); // false, window has been removed

```
