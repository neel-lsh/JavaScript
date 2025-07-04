// Array
const arr = [0, 1, 2, 5, 7, 2];               // Numeric array
const name = ["Nilesh", "adi", "Aman"];      // String array
const arr1 = new Array(1, 4, 5, 8);          // Array created with constructor

console.log(arr);                            // [0,1,2,5,7,2]
console.log(name);                           // ["Nilesh","adi","Aman"]
console.log(arr1);                           // [1,4,5,8]

console.log(arr[2]);                         // Access element by index: 2

// Methods to modify array
arr1.push(70);                               // Add element at the end
console.log(arr1);                           // [1,4,5,8,70]

arr1.pop();                                  // Remove last element
console.log(arr1);                           // [1,4,5,8]

arr1.unshift(70);                            // Add element at the start
console.log(arr1);                           // [70,1,4,5,8]

arr1.shift();                                // Remove first element
console.log(arr1);                           // [1,4,5,8]

// Check if array includes a value
console.log(arr1.includes(80));              // false

// Get index of a value
console.log(arr1.indexOf(5));                // 2

// Join array into string
const newarr = arr1.join();                  // "1,4,5,8"
console.log(newarr);

console.log(typeof newarr);                  // "string"

// Slice and Splice
console.log("A", arr1);                      // A [1,4,5,8]

// Slice does not modify original array
const newarr1 = arr1.slice(1,3);             // From index 1 to 2 (3 excluded)
console.log(newarr1);                        // [4,5]
console.log("B", arr1);                      // B [1,4,5,8]

// Splice modifies original array
const newarr2 = arr1.splice(1,3);            // Remove 3 elements starting at index 1
console.log(newarr2);                        // [4,5,8]
console.log("C", arr1);                      // C [1]
