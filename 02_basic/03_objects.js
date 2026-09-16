  // singleton  ( Singleton = poore program mein object ki ek hi copy/instance)
 // Object.create  // constructor method ka through object ka banana

 // object literals

 const mySym= Symbol("key1")   // symbol declare karna ka method.
  // const mySym = Symbol("key1")


 const JsUser = {
    name: "Ankur",
    "full name":"Ankur Yadav",
    [mySym]: "mykey1", // if we want to use it like a symbol than use a square bracket.
    age:18,
    location:"Jaipur",
    email:"ankur@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
 }

  console.log(JsUser.email)
  console.log(JsUser["email"])  // object access karna ka method
 // console.log(JsUser["full name"])
 // console.log(JsUser[mySym])

 JsUser.email = "ankur@chatgpt.com"
 // Object.freeze(JsUser);   // freeze is used when you want that there is no value change
 JsUser.email = "ankur@microsoft.com"
 // console.log(JsUser);

 JsUser.greeting = function(){
     console.log("Hello Js user");

 }
 
 JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);   //this = jis object ke andar code run ho raha hai, us object ko refer karta hai.
 }

 console.log(JsUser.greeting()); // Agar hum greeting ka picha () nhi lagya ga to output ma function ka reference ayega.
 console.log(JsUser.greetingTwo());


 // ******* REVISION ********

 //  Object ko declare karna ka two ways hai : 1) Literals  2) constructors
// Agar literals  se banayega to singleton nhi banta hai lakin constructors se baneyga to  singleton banta hai.
