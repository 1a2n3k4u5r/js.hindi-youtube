 // primitive

 // 7 types of : Boolean , String, Number, Null, Undefined, Symbol, BigInt

 const score =  100
 const scorevalue = 100.3

 const isLoggedIn = false
 const outsideTemp = null
 let userEmail;

 const id = Symbol ('123');
 const anotherId = Symbol('123');


 console.log( id === anotherId);

 const bignumber = 3454356367267n


//reference (Non primitive)

//Array, Object , function

const heroes = ["shaktiman" , "naajrag ", "doga"]; // example of array

let myObject =  {
    name :"Ankur yadav", // example of object
    age : 20,
}

const myFunction = function(){
    console.log("helo World");

}

 console.log(typeof anotherId);
 //https://262.ecma-international.org/5.1/#sec-11.4.3


 //++++++++++++++++++++++++++++++++++//

 //  Stack(Primitive) ,  Heap(Non-Primitive)

 let myYoutubename ="hiteshchoudharydotcom"

 let anothername = myYoutubename
 anothername = "chaiaurcode"

 console.log(myYoutubename);
 console.log(anothername);

 let userOne = {
    email : " user@google.com",
    upi : " user@ybl"

 }

let userTwo = userOne
    
    userTwo.email = "hitesh@google.com"

    console.log(userOne.email);
    console.log(userTwo.email);



 









