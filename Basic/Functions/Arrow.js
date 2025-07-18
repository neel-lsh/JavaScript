// Creating an object with properties and a method
const user = {
    name: "John",
    price: 100,

    // Regular function inside object (method) — 'this' refers to the object itself
    welcome: function () {
        console.log(`Welcome ${this.name} to our website`); // 'this.name' refers to user.name
        console.log(this); // Logs the entire 'user' object
    }
}

// Calling the method to see how 'this' works inside object method
// user.welcome(); // Output: Welcome John to our website

// Updating the name property
// user.name = "Nilesh";

// Calling the method again to reflect updated name
// user.welcome(); // Output: Welcome Nilesh to our website

// 'this' in global scope (uncommenting this will show window/global object in browser or empty in Node.js)
// console.log(this); 


// Regular function in global scope
function one() {
    let name = "Nilesh";
    console.log(this.name); // In non-strict mode, 'this' refers to global object; so this.name is undefined
}
// one(); // Will log 'undefined' in strict mode or in most modern JS environments


// Arrow function version — note the difference in 'this' behavior
const oneArrow = () => {
    let name = "Nilesh";
    console.log(this.name); // Arrow functions don’t bind their own 'this'; it uses the outer scope's 'this'
}
// oneArrow(); // Logs 'undefined' unless outer scope has 'this.name'


// Arrow function with return
// Explicit return with curly braces and 'return' keyword
// const add = (num1, num2) => {
//     return num1 + num2;
// }

// Shorthand implicit return without curly braces
// const add = (num1, num2) => (num1 + num2);

// Example usage:
// console.log(add(5,10)); // Output: 15


// Arrow function returning an object — wrapped in parentheses to avoid confusion
const add = () => ({ username: "Nilesh" })
console.log(add()); // Output: { username: "Nilesh" }
