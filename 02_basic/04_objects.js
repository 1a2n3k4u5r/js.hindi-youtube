// const tinderuser = new Object() //singleton
const tinderUser = {}   //non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

 // console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "ankur",
            lastname:  "yadav"
        }
    }
}

 // console.log(regularUser.fullname.userfullname.firstname);  // ankur

 const obj1 = {1: "a", 2: "b"}
 const obj2 = {3: "a", 4: "b"}
 const obj3 = {5: "a", 6: "b"}

  // const obj4 = { obj1, obj2 }  //  //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
  // const obj4 = Object.assign({}, obj1,obj2, obj3)   // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

 const obj4 = {...obj1, ...obj2} //spread method
 // console.log(obj4);
 
 const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },

]

users[1].email
console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }

 console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ] -> datatype are Array or Object.keys() → object ki keys ko array ke form mein return karta hai.

 console.log(Object.values(tinderUser));  //  '123abc', 'Sammy', false ]

 console.log(Object.entries(tinderUser));  // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ] // har ek key values ko array ma bna diya jata hai.

 console.log(tinderUser.hasOwnProperty('isLoggedIn'))  // this is used to check that properties are there before use it give the answer in the form of true or false.

 
 const course = {
    coursename: "js in hindi",
    price:"999",
    courseInstructor: "hitesh"
 }

 // course.courseInstructor

 const {courseInstructor: instructor} = course

 // console.log(courseInstructor);
 console.log(instructor);


 //    ****** JSON = javascript object notation ******  
 // APIs in the form of object

 // {
 // "name": "hitesh",
 // "coursename": "js in hindi",
 // "price": "free"
  // }

  // APIs in the form of array
  [
    {},  
    {},
    {}
  ]

//apko object json formate ma hi bhajana hota hai.
 





