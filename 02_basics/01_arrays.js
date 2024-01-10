// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);


// Array methods

// myArr.push(6) // add element to the end of the array
// myArr.push(7)
// myArr.pop() // remove element from the end of the array

// myArr.unshift(9) // add element to the start of the array
// myArr.shift() // remove element from the start of the array

// console.log(myArr.includes(9)); // checks if the element exists in the array or not
// console.log(myArr.indexOf(3)); // returns the index of the element

// const newArr = myArr.join() // Adds all the elements of an array into a string. Not done in the original array

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // Returns a copy of a section of an array from startIndex to (endIndex - 1)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // Removes elements from an array from startIndex to endIndex
// returns the deleted elements. This is done inline, so it will have impact on the original array
console.log("C ", myArr);
console.log(myn2);