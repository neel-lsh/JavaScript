// Date
let myDate = new Date();  // Current date and time

console.log(myDate.toString());             
// Full date string in local timezone
// Example: "Thu Jul 03 2025 13:00:00 GMT+0530 (India Standard Time)"

console.log(myDate.toISOString());          
// ISO format (UTC)
// Example: "2025-07-03T07:30:00.000Z"

console.log(myDate.toJSON());               
// Same as toISOString
// Example: "2025-07-03T07:30:00.000Z"

console.log(myDate.toLocaleDateString());   
// Locale-specific date
// Example: "7/3/2025"

console.log(myDate.toDateString());         
// Readable date without time
// Example: "Thu Jul 03 2025"

console.log(typeof myDate);                 
// "object"

// Creating a specific date
let MyDate = new Date(2025, 6, 4);  
// Note: Months are 0-indexed
// 6 = July (January=0)
// So this is: 4 July 2025

console.log(MyDate.toDateString());         
// "Fri Jul 04 2025"

console.log(MyDate.toJSON());               
// "2025-07-03T18:30:00.000Z" (depending on timezone)

console.log(MyDate.toString());             
// "Fri Jul 04 2025 00:00:00 GMT+0530 (India Standard Time)"

// Time stamp (milliseconds since Jan 1, 1970)
let Timestap = Date.now();
console.log(Timestap);
// Example: 1751532600000

// Getting parts of current date
let newDate = new Date();
console.log(newDate.getDate());             
// Day of month (1-31)

console.log(newDate.getDay());              
// Day of week (0-6, Sunday=0)

console.log(newDate.getFullYear());         
// Full year (e.g., 2025)

// Getting weekday name (e.g., "Thursday")
let weekdayName = newDate.toLocaleString('default', { weekday: "long" });
console.log(weekdayName);
