const myobject = {
    js: 'javascript',
    cpp: 'c++',
    rb:"ruby",
    swift: "swift by apple"
}

for (const key in myobject) {
    // console.log(`${key} shortcut is for ${myobject[key]}`);
}



// For  Array
const programming = ["js", "rb", "py", "java","cpp"]

for (const key in programming) {
  // console.log(programmingm[key]);

}

//   const map = new Map()
//  map.set('IN', "India")
//  map.set('USA', "United States Of America")
//  map.set('Fr', "France")
//  map.set('IN', "India")

 
//  for (const key in map) {
//     console.log(key);
// }
 

// agar object   ka andar loop lagana ho tab hum forin loop lagagyaga or iska andar key ati hai or agar array ka andar lagana ho tab forof loop lgaga jski andar value ayega.

// forof loop objects ka liya kam nhi karta hai lakin MAPS ka liya karta hai.
// object ka design hi isliya hua ta kyuki arrays ki jo key hai zero se start hoti hai by default no hi hoti hai but object ma app jo marji key dal sakta hai .
// MAP iteratable nhi hai or koi chij agar iterable nhi hai to hm isko loop ma nhi likh sakta hai 
// MAP ka andar iterations nhi kiya ja sakta.