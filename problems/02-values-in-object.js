/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns 
an array of all the values within that Object. 


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]
***********************************************************************/

function valuesInObject(obj) {
  // Your code here
  // let val = [];
  // for(let a of Object.values(obj)){
  //   val.push(a);
  // }
  let [a,...b] = Object.values(obj);
  return [a,...b];
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuesInObject;
