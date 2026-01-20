 // Immediately Invoked Function Expressions (IIFE) = create a private scope for variables, preventing them from polluting the global scope, and to run setup code or modules once, ensuring encapsulation, avoiding naming conflicts, and managing data privacy.


 ( function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
 })();     // here semicolon is used to end the first code and start the new code but it is not used directly.
 
 // ()() // first paranthesis for function definition , and second paranthesis for execution call.

  ( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
  } )('ankur')
