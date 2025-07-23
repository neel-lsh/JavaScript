 const arr=[1,2,3,4,5,6,7,9]

 const newarr=arr.map((num) => num * 2)
                .map((num) => num + 1)
                .filter((num) => num > 10)
console.log(newarr); 
// Logs: [11, 13, 15, 19

const mynums = [1, 2, 3, 4,5];
const total= mynums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total); // Logs: 10