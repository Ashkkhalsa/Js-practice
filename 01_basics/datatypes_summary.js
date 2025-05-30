//js is a dynamically typed value
//On the basis how data is stored in memory and how it is accessed . datatype is divided into 2 types.

// Primitive(The value given to you is kept as it is and it gives you a copy to use)
//7 types: String,Number,boolean,Null, Undefined,Symbol,BigInt



// Non Primitive/ Reference Type
// Array, Objects, Functions.



//Return type of  value in js
// 1) Primitive
//  Number = Number
//  String = String
//  Boolean = Boolean
//  null = Object
//  undefined = undefined
//  Symbol = Symbol
//  BigInt = BigInt


//  2) Reference Type
//  Array = Object
//  function = function
//  Object = Object



//****************************************Memories ****************************************************** */

//  Heap(Non -Primitive) reference of original
// Stack(Primitive) you get a copy

let myYouTubeName = "Ashmeet.com"
let anotherName = myYouTubeName
anotherName = "chaiaurcode"

console.log(anotherName);
console.log(myYouTubeName);

let user1= {
    email : "ash@gmail.com",
    upi: "user@ybl"
}
let user2 = user1
user2.email="gurjas@gmail.com"

console.log(user1.email);
console.log(user2.email);
