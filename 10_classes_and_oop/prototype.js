let myName = "ankur"


  // console.log(myName.truelength); // .length is used to find the size or count of elements/characters in different data types.


  let myHeroes = ["thor", "spiderman"]

  let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSoiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.ankur = function(){
    console.log(`ankur is present in all objects`);
}

Array.prototype.heyAnkur = function(){
    console.log(`Ankur says hello`);
}

 // heroPower.ankur()
//  myHeroes.ankur()
//  myHeroes.heyAnkur()
 // heroPower.heyAnkur()



 // inheritance

 const User = {
    name:"chai",
    email: "chai@google.com"
 }

 const Teacher = {
    makeVideo: true
 }

 const TeachingSupport = {
    isAvailable: false
 }

 const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:   TeachingSupport   // here __proto__   it helps in prototype inheritance — how one object can use properties and methods of another object.
 }

 Teacher.__proto__ = User

 // modern syntax
 Object.setPrototypeOf(TeachingSupport,Teacher)

 let anotherUsername = "chaiAurCode     "

 String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
     console.log(`True length is: ${this.trim().length}`);  // trim() removes whitespace from both the beginning and the end of a string.
 }

 //  anotherUsername.trueLenght()
 "ankur".trueLength()
 "iceTea".trueLength()