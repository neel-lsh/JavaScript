// 'let a = 8' is declared in the outer/global scope
let a = 8;

if (true) {
    // This 'let a = 10' is a new variable limited to this block scope
    // It does NOT affect the 'a' declared outside
    let a = 10;
    console.log(a); // Output: 10 → This 'a' is the one declared inside the block

    // 'b' is block scoped with const and only accessible inside this block
    const b = 20;

    // 'var' is function-scoped (or globally scoped if not in a function)
    // So 'c' will be accessible even outside this block
    var c = 30;
}

// Now outside the if block

// This will print the outer 'a', which was never changed by the inner block
console.log(a); // Output: 8

// 'b' was block scoped, not accessible here → would throw ReferenceError if uncommented
// console.log(b); // ❌ ReferenceError: b is not defined

// 'c' was declared with 'var' inside the block → still accessible here
console.log(c); // Output: 30
