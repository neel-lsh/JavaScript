// Creating an object with keys and values
const myobj = {
    name: "Nilesh",
    age: 25,
    city: "Muzaffarpur"
}

// Using 'for...in' to iterate over keys in an object
for (const key in myobj) {
    console.log(`key is ${key} and value is ${myobj[key]}`); 
    // Output: key is name and value is Nilesh ...
    // Iterates through each key in the object
}

// Array example
const arr1 = [1, 2, 3, 4, 5]

// 'for...in' on array iterates over **index** (keys)
for (const key in arr1) {
    console.log(arr1[key]); 
    // Logs each value at index 0 to 4: 1, 2, 3, 4, 5
}

// Array of strings
const codding = ["javaScript", "Python", "Java"]

// Using forEach with an anonymous function
// codding.forEach(function (element){
//     console.log(element); 
//     // Logs each language in the array
// })

// Using arrow function in forEach
// codding.forEach((element) => {
//     console.log(element); 
//     // Same output as above
// })

// Using named function with forEach
// function print(item){
//     console.log(item); 
//     // Logs each item passed by forEach
// }
// codding.forEach(print); 
// Passes each element to the print function

// forEach with access to item, index, and full array
// codding.forEach((item, index, arr) => {
//     console.log(`Item: ${item}, Index: ${index}, Array: ${arr}`); 
//     // Gives more context about each iteration
// });

// Array of objects
const coddingSet = [
    {
        name: "nilesh",
        age: 25,
    },
    {
        name: "sanjay",
        age: 30,
    },
    {
        name: "suman",
        age: 28,
    }
]

// Iterating through array of objects
coddingSet.forEach(function (item){
    console.log(item.name, item.age); 
    // Logs: nilesh 25, sanjay 30, suman 28
})
