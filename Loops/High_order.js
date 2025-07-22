 // for of
 const arr=[1,2,3,4,5]
 for (const element  of arr) {
    console.log(element); // Will log 1, 2, 3, 4, 5
    
 }
 const name="Nilesh"
 for (const char of name) {
    console.log(char); // Will log 'N', 'i', 'l', 'e', 's', 'h'
    
 }

 //Map
 const map=new Map()
 map.set('a', 1);
 map.set('b', 2);
console.log(map)
for (const [key,value] of map) {
    console.log(key," ",value); 
        
    }
    // const myobj={
    //     name:"Nilesh",
    //     age: 25,
    //     city: "Muzaffarpur"
    // }
    // for (const [key,value] of myobj) {
    //     console.log(`key is ${key} and value is ${value}`);
        
    // }
    