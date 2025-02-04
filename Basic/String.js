const Name = "Nilesh";
const repcount = 10;

console.log(Name + repcount); 
console.log(`Hello, my name is ${Name} and my Repo count is ${repcount}`);

const gameName = new String('Hello World       ');
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.indexOf('o')); // Fixed case sensitivity
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));

const newString = gameName.substring(0, 5);
console.log(newString);

const anotherString = gameName.slice(4, 6); // Fixed incorrect indices
console.log(anotherString);

const trim1 = gameName.trim();
console.log(trim1);
