 // primitive - Call by Value

 // 7 types of : Boolean , String, Number, Null, Undefined, Symbol(kisi bhi value ko unique bana ka liya use hota hai), BigInt

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

let myObj  =  {
    name :"Ankur yadav", // example of object
    age : 20,
}

const myFunction = function(){        // we use here functions as a variable by using const.
    console.log("hello World");

}

 console.log(typeof anotherId);  // typeof is used to know the type of data type .output = symbol
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


// ***** Revision 1 ****
// data memory ma kis terha sa store hota hai, or kis terha se app apna data ko access kar sakta ho isi ka basis pa do categorization kiya gya hai data type ko.
// 1) Primitive  AND  2) NON-Primitive.

//  Javascript is a dynamic typed language.
// null is a object data type.

// ALl the non - primitive type  is  a typeof  (object) data type.


//    ***** Revision 2 *****
// jab bhi stack memory use hoti hai iska matlab jo bhi apna variable declare kiya hai uska copy milta hai ,
// or jab bhi ek memory heap ka andar define hota hai to wha se huma ek reference milta hai original value ka.


