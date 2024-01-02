/******************************** Conversion ******************************/ 

// Number()

let score = ""
// console.log(typeof score);
// console.log(score);

let scoreInNumber = Number(score)
// console.log(typeof scoreInNumber);
// console.log(scoreInNumber);

// "" => 0
// "33" => 33
// "33abc" => NaN
// "hello" => NaN
// true => 1
// false => 0

// Boolean()

let isLoggedIn = ""
// console.log(typeof isLoggedIn);
// console.log(isLoggedIn);

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn);
// console.log(isLoggedIn);

// 1 => true
// 0 => true
// "" => false
// "hello" => true

// String()

let someNumber = 33

let stringSomeNumber = String(someNumber)
// console.log(typeof stringSomeNumber);
// console.log(stringSomeNumber);


/******************************** Operation ******************************/ 

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = " kranti"

let str3 = str1 + str2
// console.log(str3);

// if the first operand is string, the result will be a string. 
// Otherwise, operand at first will be evaluated first and then string will be appended
// console.log("1" + 2);  
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true); // 1
// console.log(true+); // not allowed
// console.log(+""); // 0

let gameCounter = 100
console.log(gameCounter++); //100
console.log(++gameCounter); //102