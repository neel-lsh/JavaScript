let age = "18";
console.log(typeof age); // string

let valueinNumber = Number(age); // Type conversion
console.log(typeof valueinNumber); // number
console.log(valueinNumber); // 18

// Examples of type conversion
// "33" => 33
// "33abx" => NaN
// true/false => 1/0

let islogg = 1;
let isBoolean = Boolean(islogg); // Convert number to boolean
console.log(typeof isBoolean); // boolean
console.log(isBoolean); // true
let islogg1 = 0;
let isBoolean1 = Boolean(islogg1); // Convert number to boolean
console.log(typeof isBoolean1); // boolean
console.log(isBoolean1); // false
