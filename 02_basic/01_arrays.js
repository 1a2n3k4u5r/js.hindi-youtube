//array

 const myArr = [0, 1, 2, 3, 4, 5]   // array in number
 const myHeroes = ["shaktiman", "naagraj"]  //array in string 

 const myArr2 = new Array(1, 2, 3, 4)
  // console.log(myArr[1]); 

 // Array methods

 // myArr.push(6)   // add the last element
  // myArr.push(7)
   //myArr.pop()    // remove the last element

// myArr.unshift(9)  // insert the element at the starting to shift the numbers 
 // myArr.shift()    // Remove the first element from the Array.

 // console.log(myArr.includes(9));  //gives boolean value
 // console.log(myArr.indexOf(3));

 //const newArr = myArr.join()   // .join() Adds all the elements of an array into a string, seperated by the specified seperator.

 //console.log(myArr);   // output = [0, 1, 2, 3, 4, 5]
 //console.log(newArr);  // output = 0,1,2,3,4,5


 // slice, splice

 console.log("A", myArr);  // A [ 0, 1, 2, 3, 4, 5 ]

 const myn1 = myArr.slice(1,3)   // [ 1, 2 ]    // the difference between slice and splice is that, 1)splice removes the given portion from the original Array. 2) in slice last range is not include but in splice last range is include.
                        
 console.log(myn1);
 console.log("B", myArr);  // B[ 0, 1, 2, 3, 4, 5 ]


  const myn2 = myArr.splice(1,3)  
  console.log("C", myArr); // C [ 0, 4, 5 ]
  console.log(myn2);       // [ 1, 2, 3 ]


  // ***** REVISION ***** 
  // Javascript array are resizable means we can add another element in the array.
  // javascript array are zero-indexed
  // The new array is different, but nested objects/arrays inside it are still shared.
  // Javascript array ma app jo bhi change karta hai vo original array ma bhi change hota hai usi ko bolta hai shallow copy.