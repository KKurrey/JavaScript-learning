// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 2);
// console.log(2 != 1);

// console.log("2" > 1);  // conversion happens which convert string "2" to number 2
// console.log("02" > 1); // same for this one

// console.log(null > 0); // conversion happens which convert null to number 0 (0 > 0) => false
// console.log(null == 0); // this works differently => false
// console.log(null >= 0); // conversion happens which convert null to number 0 (0 >= 0) => true

// console.log(undefined > 0); // => false
// console.log(undefined == 0); // => false
// console.log(undefined >= 0); // => false

// for strict checking in JavaScript, we use triple equals (===)

console.log("2" === 2); // => false