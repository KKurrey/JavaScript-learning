// Objects singleton

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Kranti"
tinderUser.isLoggedIn = true

// console.log(tinderUser);


// Nested object
const regularUser = {
    email : "kranti@google.com",
    fullname : {
        userFullname : {
            firstName : "Kranti",
            lastName : "Kumari"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname.userFullname.firstName);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj3 = {5 : "a", 6 : "b"}

// const obj4 = {obj1, obj2} // copy each value as an array
// console.log(obj4);

// const obj4 = Object.assign({}, obj1, obj2, obj3); // Copy the values of all of the enumerable own properties 
// from one or more source objects to a target object

const obj4 = {...obj1, ...obj2, ...obj3} 
// console.log(obj4);

const users = [
    {
        id : 1,
        email : "k@gmail.com"
    },
    {
        id : 2,
        email : "kk@gmail.com"
    },
    {
        id : 3,
        email : "kkk@gmail.com"
    }
]

// console.log(users[1].email); // kk@gmail.com

// console.log(Object.keys(tinderUser)); // returns the keys of the specified object in an array
// console.log(Object.values(tinderUser)); // returns the values of the specified object in an array
// console.log(Object.entries(tinderUser)); // Returns an array of key/values of the specified object

// console.log(tinderUser.hasOwnProperty("isLogged")); // false - no key/property with name "isLogged"
// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true - key/property with name "isLoggedIn" exists


// Object Destructring

const course = {
    courseName : "Learning JavaScript",
    price : 999,
    courseInstructor : "Kranti"
}

// console.log(course.courseInstructor); // basic way of accessing data

// when we need to access the course instructor again and again
// then the above code for accessing the element will not be a good practice
// In this case, Object destructring is required

const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor : instructor} = course // can give a different name to the property
console.log(instructor);