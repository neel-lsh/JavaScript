const score = 400;
console.log(`Score: ${score}`);

const balance = new Number(100);
console.log(`Balance: ${balance}`);

console.log(`Balance as String Length: ${balance.toString().length}`);
console.log(`Balance with 1 decimal: ${balance.toFixed(1)}`);

const otherNumber = 123.8966;
console.log(`Precision (4 digits): ${otherNumber.toPrecision(4)}`);

const millions = 1000000;
console.log(`Formatted Number (India): ${millions.toLocaleString('en-IN')}`);

// +++++++++++++ Math Operations +++++++++++++++++++++++++++++
console.log(`Math Object:`, Math);
console.log(`Absolute of -4: ${Math.abs(-4)}`);
console.log(`Round 4.6: ${Math.round(4.6)}`);
console.log(`Ceil 4.2: ${Math.ceil(4.2)}`);
console.log(`Floor 4.9: ${Math.floor(4.9)}`);
console.log(`Min of (4, 3, 6, 8): ${Math.min(4, 3, 6, 8)}`);
console.log(`Max of (4, 3, 6, 8): ${Math.max(4, 3, 6, 8)}`);

// +++++++++++++ Random Number Generation +++++++++++++++++++++++++++++
console.log(`Random Number: ${Math.random()}`);
console.log(`Random (1-10): ${Math.floor(Math.random() * 10) + 1}`);

const min = 10;
const max = 20;
const randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random Number between ${min} and ${max}: ${randomInRange}`);
