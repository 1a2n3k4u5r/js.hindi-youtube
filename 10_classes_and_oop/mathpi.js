 const descripter = Object.getOwnPropertyDescriptor(Math,"PI"). // Object.getOwnPropertyDescriptor() = Ye method kisi object ki specific property ke rules/details batata hai. where Math is a Object and PI is a poperty.

console.log(descripter); 
// output are {  value: 3.141592653589793,  
// writable: false,   writable batata hai ki property ki value change kar sakte ho ya nahi.
//  enumerable: false,  Ye batata hai ki property ko loops mein enumerate/show kiya jayega ya nahi.
// configurable: false } Ye batata hai ki property ke descriptor/configuration ko change ya property ko delete kar sakte ho ya nahi.

console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}
 console.log(Object.getOwnPropertyDescriptor(chai, "name")); 
 //  output are {value: 'ginger chai',  writable: true,  enumerable: true,   configurable: true}
// Iska matlab chai.name normal object property hai aur normally modify/iterate/configure ki ja sakti hai.



Object.defineProperty(chai, 'name',{  // defineProperty() se hum kisi property ke descriptor rules change kar sakte hain.
    writable: false,
    enumerable: false
 })
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for(let [key, value] of Object.entries(chai)){   // Object.entries(chai) =  Object ko key-value pairs ki array mein convert karta hai.
    if (typeof value != 'function'){

        console.log(`${key} : ${value}`);
    }
    
}


// writable     → change?
// enumerable   → loop mein show?
// configurable → property ke rules change/delete?
// value        → actual value?


//  Normally, nahi, JavaScript mein Math.PI ki value change nahi kar sakte.
// Math.PI ka property descriptor hai or configurable: false hai.