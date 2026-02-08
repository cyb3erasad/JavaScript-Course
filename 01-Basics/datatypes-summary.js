//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

// const array = ["Asad", "Hassan", "Basit", "Sami"]

// let obj = {
//     "name": "Asad",
//     "age": 19
// }

// let myFunction =function(){
//     console.log("Hello World");
    
// }


// Stack (permitive) | Heap (non-permitive)

let userOne = {
    "email": "user1@gmail.com",
    "pass": "123"
}

let userTwo = userOne
userTwo.email = "user2@gmail.com"

console.log(userTwo);
