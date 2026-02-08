const accountId = "101"    /* const is a constant variable once you write then you don't change this */
let acountEmail = "Asad@google.com"
var accountPass = "asad@123"     /* prefer not to use var because of issue in block scope and functional scop */
accountCity = "Karachi"
let accountState;

accountEmail = "Asad01@gmail.com"
accountPass = "asad$010"
accountCity = "Lahore"

console.table([accountId, accountEmail, accountPass, accountCity, accountState])