// ES6
  
 // ****** Two ways of creating essentially the same kind of User object: ****


      // 1st Way :
       class User {    //class is a keyword // constructor is call when an object is initilize from class
       constructor(username, email,  password)  {  
        this.username = username;
        this.email = email;
        this.password = password  
     }  
     encryptPassword(){                   //methods
          return  `${this.password}abc`
     }
     changeUsername(){
        return `${this.username.toUpperCase()}`
     }
}
const chai = new User("chai", "chai@gmail.com", "123")  // object

console.log(chai.encryptPassword());
console.log(chai.changeUsername());


 

// 2nd way:
// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;

}

User.prototype.encryptPassword = function(){
     return  `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return  `${this.username.toUpperCase()}`
}
     

const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());



// **** Revision ****
// class is a JavaScript keyword used to create a blueprint/template for objects.
// Class = blueprint
 // Object = actual thing created from blueprint
 // he constructor() is a special method inside a class.
// It automatically runs when you create an object using new.

// ***** new performs several important steps *****
// 1. Create a new empty object
 //        ↓
// 2. Connect it to User.prototype
//         ↓
// 3. Call User/constructor with this = new object
//         ↓
// 4. Return the new object