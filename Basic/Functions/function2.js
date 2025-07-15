// Function with rest parameters (...num1)
function calculateprice(val1, val2, ...num1) {
    // num1 collects all remaining arguments into an array
    return num1;
}

// Calling the function with multiple arguments
console.log(calculateprice(10, 20, 30, 40, 50));
// Output: [30, 40, 50]
// Explanation: 
// val1 = 10
// val2 = 20
// num1 = [30, 40, 50]


// Object to pass to function
const user = {
    username: "Nilesh",
    price: 15
};

// Function that takes an object parameter
function handleobject(obj) {
    console.log(`username is ${obj.username} and price is ${obj.price}`);
}

// Passing an object variable
handleobject(user);
// Output: username is Nilesh and price is 15

// Passing an object literal directly
handleobject({ username: "John", price: 25 });
// Output: username is John and price is 25


// Array to pass to function
const arr1 = [1, 2, 3, 4, 5];

// Function to get the second element of an array
function secondval(arr) {
    return arr[1];
}

// Calling the function
console.log(secondval(arr1));
// Output: 2
