  const score = 400
  console.log(score);

  const balance = new Number(100);
  console.log(balance);  // output = [Number : 100]

  console.log(balance.toString().length); // output = 3 
  console.log(balance.toFixed(1)); // output = 100.0    //for putting decimal at a given number.


  const otherNumber = 123.8966
  console.log(otherNumber.toPrecision(4));  // toPrecision() returns a string, not a number and toPrecision() is used to format a number to a specified number of significant digits.

  const hundreds = 1000000
  console.log(hundreds.toLocaleString('en-IN'));   // toLocalString is used to add a commas(,)



  //  ********* Math *********


  console.log(Math);      // object
  console.log(Math.abs(-4));   // convert negative value  in the positive value
  console.log(Math.round(4.6));  //Math.round() decimal number ko nearest full number bana deta hai.
  console.log(Math.ceil(4.2));  // gives maximum value of the decimal number.
  console.log(Math.floor(4.9));  //gives min  value of the  deciaml number .
  console.log(Math.min(4,3,6,8));
  console.log(Math.max(4,3,6,8));

  console.log(Math.random());   //Math.random() is used to generate a random number between 0 (included) and 1 (not included).
  console.log((Math.random()*10) + 1);
  console.log(Math.floor(Math.random()*10) + 1);  // Math.floor() is used to remove the decimal part and give the lower whole number.

  const min = 10;
  const max = 20;

  console.log(Math.floor(Math.random()* (max- min + 1)) + min)





 