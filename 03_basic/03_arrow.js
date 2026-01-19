const user = {
    username: "ankur",
    price: 999,

   welcomeMessage: function(){
     console.log(`${this.username}, welcome to website`);  // this is a current context
    console.log(this);  // this current context ki bat karta hai matlab, current value , ya fir current variable ki bat karta hai
   }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);   // output are empty object {}

// function chai(){
//     let username = "ankur"
//     console.log(this);
// }

// chai()

// const chai = function(){
//     let username = "ankur"
//    console.log(this.username);
//  }

const chai = () => {
  let username = "ankur"
  console.log(this);
 }

 // chai()

//   const addTwo = (num1, num2) => {   // basic arrow function , agar hum curly braces lagata ha to huma return likhna hi padaga
//   return num1 + num2
//   }

  // const addTwo = (num1, num2) =>  num1 + num2    //implict return = An arrow function with a single expression body does not require curly braces {} or the return keyword. The result of the expression is automatically returned.

 // const addTwo = (num1, num2) => (num1 + num2) // agar paranthesis lagyaga to return nhi likhna padaga

 const addTwo = (num1, num2) =>({username: "hitesh"})

  console.log(addTwo(3, 4))

 // myNewArray.forEach()




