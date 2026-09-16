 const marvel_heros = ["thor", "Ironman", "spiderman"]
 const dc_heros = ["superman", "flash","batman"]

  // marvel_heros.push(dc_heros)

 // console.log(marvel_heros[3][1]);

 // const allHeros =  marvel_heros.concat(dc_heros)    // concat and push give the same output.
 // console.log(allHeros);

 const all_new_heros = [...marvel_heros, ...dc_heros]    // using spread operators

 // console.log(all_new_heros);

 const another_array = [1, 2, 3,[4, 5, 6], 7, [6, 7, [4, 5]]]

  const real_another_array = another_array.flat(Infinity)   // .flat() is used to remove nested arrays and make them into a single-level array.
  console.log(real_another_array);



  console.log(Array.isArray("Ankur")) //  Array.isArray() is used to check whether a value is an array or not.
  console.log(Array.from("Ankur"))   // output = ["A", "n", "k", "u", "r"].  // Array.from() → string, Set, NodeList, etc. ko Array mein convert karne ke liye use hota hai.
  console.log(Array.from({name: "ankur"})) // its output is empty [] 

  let score1 = 100
  let score2 = 200
  let score3 = 300

  console.log(Array.of(score1, score2, score3));   // output = [100, 200, 300] //Array.of() is used to create a new array from the values you give it.
  

  // ***** REVISION *****


  // concat() → Arrays combine
  // join() → Array → String
  // split() → String → Array
  // slice() → Array/String ka part copy

  // push() = Add to existing array and .push() changes the original array.
  // concat() = Combine and create a new array and .concat() does not change the original array.