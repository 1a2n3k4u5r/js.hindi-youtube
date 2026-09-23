const User = {
    _email: 'h@hc.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User) // Object.create(User) ek new empty object banata hai, lekin us new object ka prototype User object hota hai.
console.log(tea.email);


//_email mein _ ka matlab JavaScript mein actually private nahi hota. Ye sirf ek common naming convention hai ki:
// "Ye internal value hai, directly use karne ke bajay getter/setter ke through access karo."