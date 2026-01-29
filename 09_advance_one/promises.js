const promiseOne = new Promise(function(resolve, reject){  // Promise = A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a.
    // Do an async task.  
    //DB calls, cryptography,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
}) 

 promiseOne
 .then(function(){
    console.log("promise consumed");
 })

 new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
 }).then(function(){
    console.log("Async 2 resolved");
 })

 const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})

    },1000)
 })

 promiseThree
 .then(function(user){
    console.log(user);
})

const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Ankur", password:"1a2n3k4u5r"})
        }else{
            reject('ERROR: something went wrong')
        }
    },1000)
})

 promiseFour
 .then((user) =>{
    console.log(user);
    return user.username
})
.then((username) =>{    ////  the second braces in  a then is called chaining jiska matlab hota hai ki upar wala .then jo value return hoka ka aygi vo apka new chain ma ayegi.
     console.log(username);
})
.catch(function(error){   // catch = The callback to execute when the Promise is rejected.Attaches a callback for only the rejection of the Promise.The callback to execute when the Promise is rejected..@returns — A Promise for the completion of the callback
 console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript", password:"1a2n3k4u"})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
  try{
    const response = await promiseFive
  console.log(response);
  } catch (error) {
     console.log(error);
  }
}

consumePromiseFive();

consumePromiseFive()

// async function getAllUsers(){
//     try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/user')
//      const data = await response.json()
//      console.log(data);
//     } catch (error){
//         console.log("E:", error);
//     }
// }getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))