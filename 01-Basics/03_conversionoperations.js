let score = undefined

// console.log(typeof (score));

let ValueInNumber = Number(score)
// console.log(typeof ValueInNumber);
// console.log(ValueInNumber);

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = 1
let convertBoolean = Boolean(isLoggedIn)

// console.log(typeof convertBoolean);
// console.log(convertBoolean);

// 1 => true; 0 => false
// "" => false
// "Asad" => true

let age = 18
let convertString = String(age)
// console.log(typeof convertString)

// *********************** Operations ***********************

let value = 5
let negativeValue = -value
// console.log(typeof negativeValue);
// console.log(negativeValue);

let str1 = "Asad"
let str2 = " Nadeem"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log(1 + 3 +"2");
// console.log("1" + 2 + 2);


let x = 5
const y = x++    // Postfix

console.log(x, y)

let a = 10
const b = ++a    // Prefix
console.log(a, b);
