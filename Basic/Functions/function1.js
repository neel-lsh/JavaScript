//  function saymyName(name) {
//     console.log("Nilesh");
//  }
//  saymyName();

function addtwo(num1,num2){
   console.log(num1+num2)   
   return num1 + num2;
}

addtwo(5, 10);
addtwo(20, "add");
const result=addtwo(8,10);
//console.log(result); 


function loginuser(username="Guest") {
    if(username === undefined){
        return "Please enter a username";
    }

    return `${username} logged in successfully`

}
//username == undefined becomes true if username is undefined OR null.
//So username === undefined is true only if username is really undefined.
console.log(loginuser("Nilesh"));
console.log(loginuser());


