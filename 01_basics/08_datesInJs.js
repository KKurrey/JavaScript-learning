// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23); // Month starts from 0th index
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate  = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate  = new Date("2023-01-23");
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate  = new Date("2023-01-23");
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate  = new Date("01-23-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp); // gives timestamp in ms
// console.log(myCreatedDate.getTime());
// console.log((Math.floor(Date.now() / 1000))); // gives timstamp in seconds

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay()); // gets the day of the week using locale time

// `${newDate.getDay()} and the time is`

newDate.toLocaleString('default', {
    weekday: "long"
})
