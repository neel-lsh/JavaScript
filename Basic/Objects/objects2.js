// ---------------------------
// Creating an object dynamically
// ---------------------------

// You can create an empty object using either syntax:
// const tinderuser = new Object(); // Classic constructor (less common)
const tinderuser = {}; // Literal syntax (more common)

// Adding properties dynamically
tinderuser.name = "Nilesh";
tinderuser.age = 21;
tinderuser.isLoggedIn = false;

// Display the object
console.log("tinderuser:", tinderuser);

// ---------------------------
// Nested object example
// ---------------------------
const regular = {
  email: "nk@hjj",
  id: 12,
  isLoggedIn: true,
  fullname: {
    firstname: "Nilesh",
    lastname: {
      lastname1: "Kumar",
      lastname2: "Singh"
    }
  }
};

// Accessing nested property
console.log("Lastname1:", regular.fullname.lastname.lastname1);

// ---------------------------
// Merging multiple objects
// ---------------------------
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { d: 4, e: 5, f: 6 };

// Method 1: Object.assign (creates a shallow copy)
const result = Object.assign({}, obj1, obj2);
console.log("Merged using Object.assign:", result);

// Method 2: Spread syntax (also creates a shallow copy)
const obj3 = { ...obj1, ...obj2 };
console.log("Merged using spread:", obj3);

// ---------------------------
// Inspecting object properties
// ---------------------------

// Get array of keys
console.log("Keys:", Object.keys(obj1)); // ['a', 'b', 'c']

// Get array of values
console.log("Values:", Object.values(obj1)); // [1, 2, 3]

// Get array of entries (key-value pairs)
console.log("Entries:", Object.entries(obj1)); // [ ['a',1], ['b',2], ['c',3] ]

// Count of entries
console.log("Entry count:", Object.entries(obj1).length); // 3

// ---------------------------
// Checking property existence
// ---------------------------

// Does obj1 have its own property 'a'?
console.log("Has 'a'?", Object.hasOwn(obj1, 'a')); // true

// Does obj1 have property 'z'?
console.log("Has 'z'?", Object.hasOwn(obj1, 'z')); // false

// ---------------------------
// Getting property descriptors
// ---------------------------

// Descriptor of a single property
console.log("Descriptor for 'a':", Object.getOwnPropertyDescriptor(obj1, 'a'));

// Descriptors of all properties
console.log("All descriptors:", Object.getOwnPropertyDescriptors(obj1));

// ---------------------------
// Comparing objects
// ---------------------------

// Check if obj1 and obj2 are the same reference
console.log("obj1 === obj2?", Object.is(obj1, obj2)); // false

// Check if obj1 and obj1 are the same reference
console.log("obj1 === obj1?", Object.is(obj1, obj1)); // true

// ---------------------------
// Object extensibility / immutability
// ---------------------------

// Can we add properties to obj1?
console.log("Is extensible?", Object.isExtensible(obj1)); // true

// Is obj1 frozen?
console.log("Is frozen?", Object.isFrozen(obj1)); // false

// Is obj1 sealed?
console.log("Is sealed?", Object.isSealed(obj1)); // false

// ---------------------------
// Counting keys and values
// ---------------------------

// Count keys
console.log("Number of keys:", Object.keys(obj1).length); // 3

// Count values
console.log("Number of values:", Object.values(obj1).length); // 3

// Count entries
console.log("Number of entries:", Object.entries(obj1).length); // 3

// ---------------------------
// Getting all property names
// ---------------------------
console.log("All property names:", Object.getOwnPropertyNames(obj1)); // ['a','b','c']

