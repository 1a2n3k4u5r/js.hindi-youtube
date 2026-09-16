const user = {
    username: "ankur",
    price: 999,

   welcomeMessage: function(){
     console.log(`${this.username}, welcome to website`);  // (this) is a current context matlab kiski baat ho rhi hai.
    console.log(this);  // (this) current context ki bat karta hai matlab, current value , ya fir current variable ki bat karta hai
   }
}

// user.welcomeMessage()   // Ankur welcome to website
// user.username = "sam"
// user.welcomeMessage() // sam welcome to website.

 console.log(this);   // output are empty object {}


// function chai(){
//     let username = "ankur"
//     console.log(this); // ya par (this)object ka andar hi kaam kar rha hai na ki function ka andar.

// }
// chai() 

// const chai = function(){
//     let username = "ankur"
//    console.log(this.username);
//  }  


// Arrow function
const chai = () => {
  let username = "ankur"
  console.log(this);
 }

 // chai()
 

 // Arrow function ko likhta kaisa hai =

//   const addTwo = (num1, num2) => {   // basic arrow function , agar hum curly braces lagata ha to huma return likhna hi padaga =  explicit return
//   return num1 + num2
//   }


  // const addTwo = (num1, num2) =>  num1 + num2    // implict return( मान लेता हूँ आप को लखना की जरूरत न्ही है ) = An arrow function with a single expression body does not require curly braces {} or the return keyword. The result of the expression is automatically returned.


 // const addTwo = (num1, num2) => (num1 + num2) // agar paranthesis lagyaga to return nhi likhna padaga


 const addTwo = (num1, num2) =>({username: "hitesh"}) // object ko return karna ka liya apko parenthesis lagana hi padega

  console.log(addTwo(3, 4))

 // myNewArray.forEach()


 
// ****** REVISION ******
 // uses of backticks = 

//  They are useful when you want to:
// 1) Put variables directly inside a string.
//  2) Write strings over multiple lines.
// 3) Create strings more easily.


// Browser ka andar jo global object ha vo hai window object.

// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an object method, this refers to the object.
// In an event, this refers to the element that received the event.
// In methods like call(), apply() and bind(), this can refer to any object.

