 const name = "Ankur yadav"
 const repoCount = 50

 //console.log(name + repoCount  + "Value");

 console.log('Hello my name is ${name} and my repo copunt is $ {repoCount}');

 const gameName = new String('ankur-hc-com')

//console.log(gameName[0]);
//console.log(gameName._proto_);


//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.subString(0,4)
console.log(newString);

const anotherString = gameName.Slice(-8,4)
console.log(anotherString);

const newStringOne = "  ankur yadav  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))
console.log(gameName.split('-'));
