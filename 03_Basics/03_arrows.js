const user = {
    username: "Asad",
    id: 101,

    loginMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.loginMessage()
// user.username = "Sammi"
// user.loginMessage()

// function chai(){
//     let user = "Asad"
//     console.log(this.user);
    
// }
// chai()

// const chai = () => {         This is arrow function
//     let user = "Asad"
//     console.log(this.user);   
// }
// chai()

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "Asad"})

console.log(addTwo(2, 3))