// Object literal
const user = {
    username: "ankur",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
     //   console.log("Got user details from database");
      // console.log(`Username: ${this.username}`);
      console.log(this);

 
    }
}

 // console.log(user.username);     // this keyword is used to refer to the object that is currently executing the function. Its value depends on how and where the function is called.
 // console.log(user.getUserDetails());  


 // Constructor function

 // const promiseONe = new Promise ()   // new keyword  is a constructor function which allow us that we use a one object literals to make multiple instance and  it is used to make a new context this is called as constructor.
 // const date = new Date()

 function User(username,loginCount, isLoggedIn){
    this.username = username;
    this.loginCount  = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    return this
 }
 
 const userOne = new User("ankur", 12, true)
 const userTwo =  new User("chaiaurcode", 11, false)
 console.log(userOne);
  console.log(userTwo);

  // about new keyword
  // 1. when  we use new keyword then first one empty object is created from constructor function or class which is called instance.
 // 2. constructor function call hota due to new keyword  which is used to bind the argumnents.
 //3. In this keyword the whole arguments are injected .( In other words Inside the constructor, this refers to the newly created object).
 // 4.  we find it in a function