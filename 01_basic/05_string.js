 const name = "Ankur yadav"  //this is a way to declare a string in another way
 const repoCount = 50

 //console.log(name + repoCount  + "Value");

 console.log('Hello my name is ${name} and my repo copunt is $ {repoCount}');    // here symbol (``) is known as backticks which is uses a string manipulation

 const gameName = new String('ankur-hc') // This is a another way to declare the string.

//console.log(gameName[0]);  // output = a
//console.log(gameName._proto_);   // output = {}


//console.log(gameName.length);   // output = 5
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)   // this ignore the negative value if given
console.log(newString);     // output = anku, it does not count the last index 4 , it count 0,1,2,3.

const anotherString = gameName.slice(-8,4)  // .slice ma hum negative value bhi da sakta hai and .slice() is used to extract a part of a string or array without changing the original, in string it does not include the last index  butv in array it does not include the first index.
console.log(anotherString);

const newStringOne = "  ankur yadav  "
console.log(newStringOne);
console.log(newStringOne.trim());  // output =ankur yadav    // .trim() is used to remove extra whitespace from the beginning and end of a string.

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))
console.log(gameName.split('-'));
