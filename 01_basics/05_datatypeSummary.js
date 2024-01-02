// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
console.log(typeof score);

const scoreValue = 100.3
console.log(typeof scoreValue);

const isLoggedIn = true
console.log(typeof isLoggedIn);

const outsideTemp = null
console.log(typeof outsideTemp);

let userEmail
console.log(typeof userEmail);

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId); // => false, because Symbol treats both the values as unique
console.log(typeof anotherId);

const bigNumber = 12345678910111213141516n // putting n to the end converts the big number to BigInt
// console.log(typeof bigNumber);

// Reference
// 3 types : Array, Objects, Functions

const heros = ["ironman", "spriderman", "superman"]
console.log(typeof heros);

let myObj = {
    name: "Kranti",
    id: 22 
}
console.log(typeof myObj);

const myFunction = function() {
    console.log("Hello world");
}
console.log(typeof myFunction);

