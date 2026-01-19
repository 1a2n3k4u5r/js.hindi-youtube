//var c = 300    
let a = 300      //global scope
if(true) {                {} //scope
      let  a = 10
      const b = 20                  //block scope
     //  console.log("INNER: ", a);
}

 // for (let i =0; i< Array.length; i++){
     //  const element = array[i]; 
 // }

  //console.log(a);
 // console.log(b);
 // console.log(c);


 function one(){
    const username = "ankur"

    function two(){
        const website = "youtube"
        console.log(username);   // closure
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

  

