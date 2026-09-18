const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval){   //reduce() is used when you want to convert the  whole array into one single value.       

//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)    // accumulator ko apko comma ka bad jo bhi value data ho vo valur accumulator ma ati hai .




const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)   // variables are used to store the value
console.log(myTotal);

const shoppingCart = [
    {
        itemName:"js course",
        price: 2999
    },
    {
        itemName:"py course",
        price: 999
    },
    {
        itemName:" mobile dev course",
        price: 4999
    },
    {
        itemName:"data science course",
        price: 12999
    },
]

 const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price,0)

 console.log(priceToPay)


 // Syntax of reduce method - 
 // array.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, initialValue);

// accumulator (sum) → stores the result so far
// currentValue (num) → current array element
// initialValue → starting value, usually 0 for addition


// where we use this (=>) than we called this is a arrow function.