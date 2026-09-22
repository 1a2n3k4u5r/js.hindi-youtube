function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)    // A list of arguments to be passed to the method. Calls a method of an object, substituting another object for the current object. // to hold the reference we use the .call and .bind method
   this.username = username
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

