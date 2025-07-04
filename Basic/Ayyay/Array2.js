const arr = [0, 1, 2, 5, 7, 2]; 
const arr1 = [0, 1, 25, 0, 78, 2];

// Combine arrays using concat (returns new array)
const all = arr.concat(arr1);
console.log(all);
// Output: [0,1,2,5,7,2,0,1,25,0,78,2]

// Combine arrays using spread operator (also returns new array)
const all_new = [...arr, ...arr1];
console.log(all_new);
// Output: [0,1,2,5,7,2,0,1,25,0,78,2]

// Nested array with multiple levels
const arr3 = [1, 2, 5, [4,5,8], 4, [4,[5,6],9]];

// Flatten the array to remove all nested levels
const another = arr3.flat(Infinity);
console.log(another);
// Output: [1,2,5,4,5,8,4,4,5,6,9]

// Check if a value is an array
console.log(Array.isArray("Nilesh"));
// Output: false

// Create an array from a string (array of characters)
console.log(Array.from("Nilesh"));
// Output: ["N","i","l","e","s","h"]

// Create array from provided values
let x = 100;
let y = 200;
let z = 300;
console.log(Array.of(x, y, z));
// Output: [100,200,300]
