const name = "Kranti"
const repoCount = 50

// console.log(name + repoCount + " Value"); // Not recommended

// String interpolation with backticks (``) is used in which we have placeholders for dynamic values
// console.log(`My name is ${name} and my Repo Count is ${repoCount}`);

// Another way of declaring String in JavaScript
const gameName = new String("kranti-kumari-kurrey")
// console.log(gameName);
// console.log(gameName[0]); // print value at first index
// console.log(gameName.__proto__); // The __proto__ accessor property of Object instances exposes the [[Prototype]] (either an object or null ) of this object.

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-15, 10)
// -15 => starts from front with the length of the string i.e., -20. So, element at -15 from start is "i"
// 10 => starts from front with 0 indexing. So, element at index (10-1) is "m"
// console.log(anotherString);

const newStringOne = "     Kranti      "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://kranti.com/kranti%20kumari"
// console.log(url);
// console.log(url.replace("%20", "-"));
// console.log(url.includes("kurrey")); // false
// console.log(url.includes("kumari")); // true

const arr = gameName.split("-")
// console.log(arr);