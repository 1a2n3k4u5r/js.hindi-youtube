class User {
    constructor(username){
        this.username = username
 }

 logMe(){
    console.log(`Username: ${this.username}`)
 }

static createId(){     // static is used for access the method and properties
    return '123'
    }
 }

 const ankur = new User("ankur")
//   console.log(ankur.createId())

  class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
  }

  const iphone = new Teacher("iphone", "i@phone.com")
  iphone.logMe();