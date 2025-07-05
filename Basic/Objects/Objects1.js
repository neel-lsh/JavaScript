//object literal 
const mysum=Symbol("key1")

const user={
    name:"Nilesh",
    "full_name":"Nilesh kumar",
    [mysum]:"mykey1",
    age:21,
    email:"Nilesh@0780",
    islog:false,
    login_date:["monday","thursday"]
}
console.log(user.email);
console.log(user["email"]);
console.log(user["full_name"]);
console.log([user["age"], user["name"], user["islog"]]);
console.log(user[mysum]);


user.email="Nk@3311"
console.log(user.email);
//Object.freeze(user)
user.email="Nk@55522"
console.log(user)

user.say=function(){
    console.log("Say Hello !")

}
console.log(user.say())
user.say();



