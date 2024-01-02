// Primitive - call by value, changes will happen in the copy of the variable and not the original variable
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
// console.log(typeof score);

const scoreValue = 100.3
// console.log(typeof scoreValue);

const isLoggedIn = true
// console.log(typeof isLoggedIn);

const outsideTemp = null
// console.log(typeof outsideTemp);

let userEmail
// console.log(typeof userEmail);

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(typeof anotherId);
// console.log(id === anotherId); // => false, because Symbol treats both the values as unique

const bigNumber = 12345678910111213141516n // putting n to the end converts the big number to BigInt
// console.log(typeof bigNumber);

// Reference (Non-Primitive) - call by reference, changes will happen in the original variable
// 3 types : Array, Objects, Functions

const heros = ["ironman", "spriderman", "superman"]
// console.log(typeof heros);

let myObj = {
    name: "Kranti",
    id: 22 
}
// console.log(typeof myObj);

const myFunction = function() {
    console.log("Hello world");
}
// console.log(typeof myFunction);



/********************************* Memory Allocation ******************************/

// Stack (primitive), Heap (non-primitive)

let myName = "KrantiKumari" // Memory is created in Stack and hence the changes will happen in the copy of the variable
let anotherName = myName

anotherName = "KrantiKurrey" 

console.log(myName); // "KrantiKumari"
console.log(anotherName); // "KrantiKurrey" 

// Memory is created in Heap and hence the changes will happen in the original variable
let userOne = {
    email: "userOne@google.com",
    upi: "userOne@ybl"
}

let userTwo = userOne
userTwo.email = "userTwo@google.com"

console.log(userOne.email); // "userTwo@google.com"
console.log(userTwo.email); // "userTwo@google.com"

