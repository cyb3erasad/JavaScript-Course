// function sumofnum(num1, num2) {
//     console.log(num1 + num2);


        
// }
// sumofnum(3, 7)

function sumNum(num1, num2){
    let result = num1 + num2
    return result
}

const result = sumNum(5,5)
// console.log("Result:",result);

function loginUserMsg(username){
    if (!undefined) {
        console.log("Username required");
        return    
    }
    else{
        return `${username} just logged in`
    }
    return `${username} just logged in`
}

// console.log(loginUserMsg());

function cartCalculate(...num1){        // ...num1 is called rest operator
    return num1
}
// console.log(cartCalculate(200, 500, 600));

const user = {
    username: "Asad",
    pass: "asad$123"
}

function handleObjest(anyobject){
    console.log(`The username is ${anyobject.username} and the password is ${anyobject.pass}`);
}

handleObjest(user)

const newArray = [1, 2, 3, 4, 5]

function returnSecondvalue(getArray){
    return getArray[1]
}
console.log(returnSecondvalue(newArray));
