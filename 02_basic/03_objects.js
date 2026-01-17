  // singleton
 // Object.create

 // object literals

 const mySym= Symbol("key1")
  // const mySym = Symbol("key1")


 const JsUser = {
    name: "Ankur",
    "full name":"Ankur Yadav",
    mySym: "mykey1",
    age:18,
    location:"Jaipur",
    email:"ankur@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
 }

 // console.log(JsUser.email)
 // console.log(JsUser["email"]) 
 // console.log(JsUser["full name"])
 // console.log(JsUser[mySym])

 JsUser.email = "ankur@chatgpt.com"
 // Object.freeze(JsUser);
 JsUser.email = "ankur@microsoft.com"
 // console.log(JsUser);

 JsUser.greeting = function(){
     console.log("Hello Js user");

 }
 
 JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  
 }

 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());


 
