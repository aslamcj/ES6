let node = {
  type: "Identifier",
  name: "foo"
};
let { type: localType, name: localName } = node;
console.log(localType); // "Identifier"
console.log(localName); // "foo"
