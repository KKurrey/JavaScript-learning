/***************************** Nums ****************************/

const score = 400
// console.log(score);

const balance = new Number(400)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // gives the value with two digits after decimal

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3)); // 124 => round off to 3 digits
// console.log(otherNumber.toPrecision(1)); // 1e+2
// console.log(otherNumber.toPrecision(4)); // 123.9

const hundreds = 1000000
// console.log(hundreds.toLocaleString("en-IN"));



/******************************** Maths *******************************/

// console.log(Math);
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.min(4, 3, 6, 8)); // 3
// console.log(Math.max(4, 3, 6, 8)); // 8

// console.log(Math.random()); // will always give value between 0 and 1
// console.log(Math.random() * 10);
// console.log(Math.floor(Math.random() * 10) + 1); // gives value in range (1 - 10)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // gives value in range (10 - 20)