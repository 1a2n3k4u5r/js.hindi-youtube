class User {
    constructor(username){
        this.username = username
 }

 logMe(){
    console.log(`Username: ${this.username}`)
 }

static createId(){     // static is used for access the method and properties or static means:This method belongs to the class itself, not to the objects created from the class.
    return '123'
    }
 }

 const ankur = new User("ankur")
 console.log(User.createId())


 //Creating Teacher
  class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
  }

  const iphone = new Teacher("iphone", "i@phone.com")
  iphone.logMe();

  //static is used to define methods/properties that belong to the class itself rather than to individual instances (objects).