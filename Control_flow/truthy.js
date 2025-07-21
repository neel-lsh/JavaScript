// -------------------------------------------
// 1. Truthy/Falsy check on array
// -------------------------------------------

const userEmail = [];

// Even though the array is empty, it's considered "truthy"
if (userEmail) {
    console.log("Got user email"); // ✅ This will run
} else {
    console.log("Don't have user email");
}

// -------------------------------------------
// 2. Falsy values in JavaScript
// -------------------------------------------
// These are considered false in boolean contexts:
// false, 0, -0, 0n (BigInt), "", null, undefined, NaN

// -------------------------------------------
// 3. Truthy values in JavaScript
// -------------------------------------------
// These are considered true:
// "0", 'false', " ", [], {}, function(){}

// -------------------------------------------
// 4. Check if array is actually empty
// -------------------------------------------

if (userEmail.length === 0) {
    console.log("Array is empty"); // ✅ This will also run
}

// -------------------------------------------
// 5. Check if object is empty
// -------------------------------------------

const emptyObj = {};

// Object.keys(emptyObj) returns an array of the object's own property names
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty"); // ✅ This will run
}

// -------------------------------------------
// 6. Nullish Coalescing Operator (??)
// -------------------------------------------
// Returns the first defined (non-null, non-undefined) value

let val1;

// Examples:
// val1 = 5 ?? 10         // Output: 5
// val1 = null ?? 10      // Output: 10
// val1 = undefined ?? 15 // Output: 15

val1 = null ?? 10 ?? 20;  // First non-null/undefined = 10
console.log(val1);        // ✅ Output: 10

// -------------------------------------------
// 7. Ternary Operator
// -------------------------------------------
// Syntax: condition ? expressionIfTrue : expressionIfFalse;

const iceTeaPrice = 100;

iceTeaPrice <= 80 
    ? console.log("less than 80") 
    : console.log("more than 80"); // ✅ This will run (100 > 80)
     