//var c = 300    
let a = 300    //global scope

if(true) {                
      let  a = 10
      const b = 20            
     // console.log("INNER: ", a);
}   

{} //scope

// if ka andar jo bhi likha hai vo ha block scope or uska bhar jo bhi likhata hai vo hai global scope and global scope ma app jo bhi value likhata hai vo scope ka liya available hoti lakin vice-versa is not true.

 // for (let i =0; i< array.length; i++){
     //  const element = array[i]; 
 // }

  console.log(a);
 // console.log(b);
 // console.log(c);


 function one(){
    const username = "ankur"

    function two(){
        const website = "youtube"
        console.log(username);   // closure = jab andar ka function bhar ka variable ko access kar pata ha to usko closure khata hai or Jab ek inner function, apne outer function ke variables ko yaad rakhta hai, even after outer function finish ho chuka ho.
    }
     // console.log(website);

    two()
 }
 //one()


      if (true) {
        const username = "ankur"
        if(username === "ankur"){
            const website = "youtube"
            // console.log(username + website);
        }
           // console.log(website);
 } 
       // console.log(username);

        

// +++++++++++++++++++++ interesting +++++++++++



console.log(addone(5))

function addone(num){
    return num + 1
}


const addTwo = function(num){
    return num + 2
}
addTwo(5)

  

