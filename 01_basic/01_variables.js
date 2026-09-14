 const accountId = 144553
 let accountEmail = "ankur1236876@gmail.com"
 var accountPasswoard = "12345"
 accountCity = "Jaipur"
 let accountState;     

 // accountId = 2 // not allowed

 accountEmail = "officialboy1236@gmail.com"
 accountPassword = "21212121"
 accountCity = "Bengaluru"

 console.log(accountId);

 /*
 Prefer not to use (var) variable
 because of issue in block scope and functional scope.
 */

 console.table([accountId,accountEmail,accountPasswoard,accountCity,accountState])



 
      //    *****  REVISION *****  


    //   const  ka declare karna ka only one type ha , but variable ko declare karna ka do type ha. 
    // 1) let. 
    //  2) var.  
    // and one important point is that curly braces are known as Scope.

    //  so, in javascipt the variable most used is (const), and (let) not use var.
    // agar javascript  ka andar app variable ko only declare karka chod data ho lakin value nhi lagata  ho to value undefined mangata  hai.