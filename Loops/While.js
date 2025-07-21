    // while loop example
    let array = [1, 5, 8, 9];
let i = 0;
while (i < array.length) {
    const element = array[i];
    console.log(element);
    i++;
}

//do-while loop example
let j = 0;
do {
    console.log("Current value of j:", j);
    j++;
} while (j < 3); // Will run at least once even if j starts at 3        
console.log("Loop completed");
// -------------------------------------------
// break and continue in while loop
// -------------------------------------------
// 1. Break statement in while loop
let k = 0;
while (k < 5) {     
    if (k === 3) {
        console.log("Breaking at k =", k); // Will log when k is 3
        break; // Exits the loop
    }
    console.log(k); // Will log 0, 1, 2
    k++;
}
// 2. Continue statement in while loop

let l = 0;
while (l < 5) {
    if (l === 2) {
        console.log("Skipping l =", l); // Will log when l is 2
        l++; // Increment before continue to avoid infinite loop
        continue; // Skips the rest of the loop body for this iteration
    }
    console.log(l); // Will log 0, 1, 3, 4
    l++;
}