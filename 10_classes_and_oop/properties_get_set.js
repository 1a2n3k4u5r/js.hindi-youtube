function User (email, password){    // Yahan hum ek constructor function bana rahe hain jiska naam User hai.
    this.email = email;
    this.password = password

    Object.defineProperty(this, 'email', {   // Object.defineProperty() ka use karke hum kisi object ki property ko special behavior de sakte hain.
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(value){
         this._email = value
        }

    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set:function(value){   // setter ka syntax ma hum method ko value deta hai.
         this._password = value
        }
    })
}

const chai = new User("chai@chai.com","chai")

console.log(chai.email);

// Syntax = Object.defineProperty(object, propertyName, descriptor)
// Getter automatically execute hota hai jab hum property ko read karte hain.
// _email internal storage ke liye use ho raha hai.
// Setter automatically execute hota hai jab hum property ko value assign karte hain.
// email     → public interface
// _email    → internal storage