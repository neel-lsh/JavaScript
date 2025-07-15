// Define the outer function 'one'
function one() {
    // 'name' is declared in 'one' function scope
    const name = "Nilesh";

    // Define the nested (inner) function 'two'
    function two() {
        // 'website' is declared in 'two' function scope
        const website = "Nilesh.com";

        // This console.log can access 'name' because of closures
        console.log(`My name is ${name}`);
    }

    // Calling the inner function 'two' inside 'one'
    two();
}

// Calling the outer function 'one'
one();
