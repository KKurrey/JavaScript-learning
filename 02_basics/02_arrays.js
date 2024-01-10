const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) // treat dc_heros as a single element and insert it. It will not concatenate

// console.log(marvel_heros); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros) // it will concatenate both the arrays
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // concatenation using spread operator (...)

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // flaten the array with the specified depth
// console.log(real_another_array);


// console.log(Array.isArray("Kranti")) // checks if given element is array or not
// console.log(Array.from("Kranti")) // create an array from the given element
// console.log(Array.from({name: "Kranti"})) // will give an empty [] array. 
// Need to mention if we need to create an array using keys or values

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3)); // Returns a new array from a set of elements