 
 function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("U");
    console.log("R");
 }

 // sayMyName() where sayMyName is a refernce and () is a excution of a function.
 
 //function addTwoNumbers(number1, number2){  // parameters -> jab bhi aap function ki definition banata  ha to jo bhi input lata ha number ,string usa parameters bolata ha
  //   console.log(number1 + number2);
 //}

 // addTwoNumbers(3, 4) // arguments ->  jab aap function ko call karata hai tab uska ander jo value pass hota hai usa  arguments bolta ha

 function addTwoNumbers(number1, number2){

 // let result = number1 + number2
 // return result
 return number1 + number2 // by default function k ek definition ka rule hota hai ki ek bar apna jo return kar diya uska bad koi kaam nhi karega function.
 }

 const result = addTwoNumbers(3, 5)

 // console.log("Result:", result);   //output = undefined


 function loginUserMessage(username){
    if(username === undefined){ //(!username)
        console.log("Pleas enter a username")
        return // it is used to not run the another code after return
    }
    return`${username} just logged in`
 }

 //console.log(loginUserMessage("ankur"))
 // console.log(loginUserMessage()) // output = undefined when value is not passed



function calculateCartPrice(num1){
    return num1
}
 // console.log(calculateCartPrice(200,400,500,2000)) // output = 200


 function calculateCartPrice(...num1){
    return num1
}    // here ... is a rest operators

 // console.log(calculateCartPrice(200,400,500,2000)) // output = [200,400,500, 2000]



 function calculateCartPrice(val1, val2, ...num1){
    return num1
}    // here ... is a rest operators

 // console.log(calculateCartPrice(200,400,500,2000)) // output = [500, 2000]

 
 const user = {
    username:"ankur",
    price:199
 }

 function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

 }

 // handleObject(user)
 handleObject({
    username: "sam",
    price:399

 })

 const myNewArray = [200, 400, 100, 600]

 function returnSecondValue(getArray){
    return getArray[1]
 }

 //console.log(returnSecondValue(myNewArray));
 console.log(returnSecondValue([200, 400, 500, 1000]));


 // jab app koi bhi value return karenga to app usa kisi bhi value variable ma store kar sakta ho.