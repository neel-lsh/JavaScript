// IIFE using regular function syntax
(function CHAI() {
    console.log("This is an IIFE function");
})();
// Output: This is an IIFE function

/* 
📝 Notes:
- IIFE = Immediately Invoked Function Expression.
- It runs as soon as it is defined.
- `CHAI` is a **named function expression**, but the name is mostly used for recursion or debugging.
- The parentheses around the function `()` make it an expression.
- The final `()` immediately invokes it.
*/


// IIFE using arrow function syntax and passing an argument
((name) => {
    console.log(`Hello, ${name}! This is an IIFE function.`);
})("Nilesh");
// Output: Hello, Nilesh! This is an IIFE function.

/*
📝 Notes:
- This is also an IIFE, but with an **arrow function**.
- `"Nilesh"` is passed as an argument.
- IIFE is often used to:
  ✓ Avoid polluting the global scope.
  ✓ Execute code once (initialization logic, etc.).
*/

