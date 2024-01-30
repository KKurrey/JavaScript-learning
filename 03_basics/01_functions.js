// console.log("K");
// console.log("R");
// console.log("A");
// console.log("N");
// console.log("T");
// console.log("I");

// the above is not feasible to write. So, we will write it inside function

// function definition
function sayMyName() {
    console.log("K");
    console.log("R");
    console.log("A");
    console.log("N");
    console.log("T");
    console.log("I");
}

// function calling
// sayMyName()
// sayMyName // will not print anything as this is the reference of the function

// when variable is passed inside a function during definition, they are called as "arguments"
// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

// when variable is passed inside a function during call, they are called as "paramaeters"
// addTwoNumbers(3, 4) // print 7
// addTwoNumbers() // print NaN
// addTwoNumbers(3, "4") // print 34
// addTwoNumbers(3, "a") // print 3a
// addTwoNumbers(3, null) // print 3

// const result = addTwoNumbers(3, 4);
// console.log("Result: ", result); //  print "undefined" because the function is not returning anything

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2;
    // return result;
    // console.log("Kranti"); // code is unreacable when written after return statement
    return number1 + number2
}

const result = addTwoNumbers(3, 4);
// console.log("Result: ", result); // print 7

// function loginUserMessage(username) {
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Kranti")); // Kranti just logged in
// console.log(loginUserMessage("")); //  just logged in
// console.log(loginUserMessage()); // undefined just logged in

function loginUserMessage(username) {
    // if(username === undefined) {
    //     console.log("Please enter a username");
    //     return
    // }
    if(!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage()); // Please enter a username

// function calculateCartPrice(num1) {
//     return num1
// }

// console.log(calculateCartPrice(200)); // 200
// console.log(calculateCartPrice(200, 400, 500)); // 200, will print the first element only

// function calculateCartPrice(...num1) { // REST operator ...
//     return num1
// }

// console.log(calculateCartPrice(200, 800, 500)); // [ 200, 800, 500 ]

function calculateCartPrice(val1, val2, ...num1) { // REST operator ...
    return num1
}

// console.log(calculateCartPrice(200, 400, 800, 2000)); // [ 800, 2000 ], the first two values got assigned to val1 and val2

// passing an object to the function

const user = {
    username : "Kranti",
    id : 12345
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and ID is ${anyobject.id}`);
}

// handleObject(user)

// directly passing an object
// handleObject({
//     username : "Kurrey",
//     id : 6789
// })

// passing an array
const myNewArr = [200, 400, 800, 2000]

function returnSecondValue(anyarray) {
    return anyarray[1]
}

// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([100, 900, 800, 300]));