// Singleton 


// Object literals

const mysym = Symbol("key1")
const user = {
    name: "Asad",
    "full name": "Asad Nadeem",
    age: 18,
    [mysym]: "my Key1",
    location: "Karachi",
    email: "asad@google.com",
    pass: "123%%%%",
    isLoggedin: false,
    lastLogin: ["Monday", "Tuesday"]
}


// console.log(user.email);
// console.log(user["full name"]); 
// console.log(user["email"]); 
// console.log(user[mysym]);

user.email = "asad@meta.com"
// Object.freeze(user);   // Now we cannot change the values

user.greeting = function(){
    console.log("Hello All Users");    
}

user.greetingTo = function(){
    console.log(`Hello User: ${this.name}`);    
}
console.log(user.greeting());
console.log(user.greetingTo());
console.log(user)


