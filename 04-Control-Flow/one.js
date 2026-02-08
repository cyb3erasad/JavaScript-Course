// if

// const temperature = 40

// if (temperature > 50 ){
//     console.log("temperature is less then 50");

// }else{
//     console.log("temperature is greater then 50");
    
// }

// const score = 200
// if (score > 100){
//     const power = "fly"
//     console.log(`Power: ${power}`);
    
// }
// console.log(`Power: ${power}`);

// const balance = 1200
// // if (balance > 500) console.log("balance"), console.log("balance 2"); ==> This is not right way 

// if (balance < 500){
//     console.log("less then 500");
// } else if(balance < 700){
//     console.log("less then 700");   
// } else if(balance < 1200){
//     console.log("less then 1200");  
// } else{
//     console.log("balance should be zero");   
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}