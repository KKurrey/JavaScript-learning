// Sigleton - only one instance will be created
// Object.create

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Kranti", // By default, JS consider keys as string. No need to write in double quotes
    "full name" : "Kranti Kumari",
    // mySym : "myKey1", // mySym will be treated as string and not symbol
    [mySym] : "myKey1", // mySym will be treated as symbol. 
    // [Symbol(key1)]: 'myKey1' - gives this value when whole object is printed 
    age : 10,
    location : "Pune",
    email : "kranti@google.com",
    isLoggedIn : true,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser["name"]); // While accessing, write keys in double quotes

// console.log(JsUser["full name"]);
// console.log(JsUser.full name); // not allowed as key contains space. 
// Can be accessed as an array element where key should be in double quotes like above

// console.log(JsUser.mySym); // not allowed
// console.log(JsUser[mySym]);

JsUser.email = "kranti@chatgpt.com"
// console.log(JsUser); // email will be changed
// Object.freeze(JsUser) // Freezes the object. Any change after this line will not be reflected to the object
JsUser.email = "kranti@microsoft.com"
// console.log(JsUser); // email will not be changed (propagated) after freezing

JsUser.greeting = function() {
    console.log("Hello JS user");
}

// console.log(JsUser.greeting); // will give the reference of the object - [Function (anonymous)]
console.log(JsUser.greeting());

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}
console.log((JsUser.greetingTwo()));