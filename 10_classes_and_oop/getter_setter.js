
// New Syntax of getter and setter
class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }


    set email(value){
         this._email = value
    }

    get password(){
        return `${this._password.toUpperCase()}ankur`
}

    set password(value){
        this._password = value
    }
}

const ankur = new User("a@ankur.ai", "123")
console.log(ankur.password);

// Getter = property ko read karte waqt function jaisa kaam karta hai.
// Setter = property ko value assign karte waqt function jaisa kaam karta hai.

// Getter vs Setter
// Kab chalta hai?= Value read karte waqt ->	Value assign karte waqt
// Example	= user.email -> user.email = "x"
// Parameter =	Normally nahi ->	Exactly 1 value
// return = Usually return karta hai ->	Usually return nahi karta
// Purpose = Value ko process karke dena ->	Value ko validate/process/store karna

// Aur ek important baat: _email aur _password actual private properties nahi hain. _ sirf convention hai ki “ye internal/stored value hai.”