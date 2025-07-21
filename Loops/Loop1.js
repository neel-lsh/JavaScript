 // for
 let array=[1,5,8,9]
 for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element); 
    
 }
 console.log("Loop completed");
 for (let i = 0; i < 3; i++) {
   for (let j = i; j < 2; j++) {
  
    console.log(i); 
    
   }
    
 }

 // -------------------------------------------
 // break and continue
    // -------------------------------------------
// 1. Break statement
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        console.log("Breaking at i =", i); // Will log when i is 3
        break; // Exits the loop
    }
    console.log(i); // Will log 0, 1, 2
}       
// 2. Continue statement
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        console.log("Skipping i =", i); // Will log when i is 2
        continue; // Skips the rest of the loop body for this iteration
    }
    console.log(i); // Will log 0, 1, 3, 4
}