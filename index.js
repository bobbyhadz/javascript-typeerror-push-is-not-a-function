// TypeError: push is not a function in JavaScript

// EXAMPLE 1 - Pushing objects into an array

const arr = [{name: 'Tom'}];

arr.push({name: 'James'});

// 👇️ [{name: 'Tom'}, {name: 'James'}]
console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Adding key-value pairs to an object

// const obj = {
//   id: 1,
//   name: 'Alice',
// };

// // 👇️ dot notation
// obj.country = 'Chile';

// // 👇️ bracket notation
// obj['street address'] = 'Example street 123';

// // 👇️ {id: 1, name: 'Alice', country: 'Chile', 'street address': ...}
// console.log(obj);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Convert the value to an array before calling `push()`

// const set = new Set(['a', 'b']);

// const arr = Array.from(set);
// console.log(arr); // 👉️ ['a', 'b']

// arr.push('c');

// console.log(arr); // 👉️ ['a', 'b', 'c']

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if the value is an array before calling `push()`

// const arr = null;

// if (Array.isArray(arr)) {
//   arr.push('example');
// }

// if (Array.isArray(arr)) {
//   arr.push({id: 2, name: 'Brad'});
// }

// ------------------------------------------------------------------

// // EXAMPLE 5 - Access a property on an object before calling `push()`

// const obj = {
//   numbers: [1, 2],
// };

// obj.numbers.push(3);

// // 👇️ {numbers: [1, 2, 3]}
// console.log(obj);
