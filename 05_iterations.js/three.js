// for of 

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
 for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
 }

 // Maps // maps are known for unique values or jis order ma apna order kiya ha usi order ma rahta hai

 const map = new Map()
 map.set('IN', "India")
 map.set('USA', "United States Of America")
 map.set('Fr', "France")
 map.set('IN', "India")

 // console.log(map);

 for (const [key, value] of map) {
     console.log(key, ':-', value);
 }

 const myobject = {
    'game1' : 'NFS',
    'game2' : 'spiderman'
 }

//  for (const [key, value]of myobject){
//     console.log(key, ':-', value);

//  }

