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


### Best Example

// Before destructuring 

```

// function defenation
function fetchRepos (language, minStarts, maxStarts, createdBefore, createdAfter) {
	// execute code

}

// function call
fetchRepos('JavaScript',100,null, new Date('01/01/2017')getTime(), null);
```

// After destructuring

```
// function defenation
function fetchRepos ({language,createdBefore,maxStarts, minStarts, createdAfter}) {
	// execute code

}

// function call
fetchRepos({
language:'JavaScript', minStarts:100, maxStarts:null, createdBefore:new Date('01/01/2017')getTime(), cratedAfter:null});
```
#### Benefits/Adavantages
1. Order the values we pass for a function should not be same
2. Can assign default values
3. Need not to pass same amount of parameters and sequence required to be passed
4. can destroy exiting object and get the values which are required
5. can change the property/objects names by alias ':'

