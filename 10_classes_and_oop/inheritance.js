      // *****  Parent class — User *****

 class User {
    constructor(username){ 
    this.username = username   //username on the right → value received by constructor and this.username on the left → property of the current object
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);  // ${this.username} = This is template literal syntax.
    }
 }


   // ****** Creating the child class ******

  class Teacher extends User{              // extends = means inheritance = Teacher is a child class of User.
    constructor(username,email,password){
        super(username)   // super() = Calls parent call constructor which is User

        this.email = email
        this.password = password
    }
    addCourse(){
          console.log(`A new course was added by ${this.username}`);
    }
  }
    const chai =  new Teacher("chai", "chai@teacher.com", "123")

  chai.addCourse()

  const masalaChai = new User("masalaChai")
  masalaChai.logMe()
  console.log(chai instanceof User);  // instanceof checks whether an object belongs to a class's inheritance chain.

  // You cannot use this before super() in a derived class constructor.
