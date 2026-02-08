// {} is a scope like in function, conditions, loop but not in Object 

let a = 10
const b =20
// var c = 30

if (true) {
    let a = 100
    const b = 200
    // console.log("Inner:", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Asad"

    function two(){
        const github = "cyb3rasad"
        console.log(github);
        
        console.log(username);   
    }
    // console.log(github);
    
    two()
}
// one()


// if (true) {
//     const username = "Asad"
//     if(username === "Asad"){
//         const github = "cub3rasad"
//         console.log(username + github);    
            
//     }
//     // console.log(github);    
// }
// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addOne(5))
function addOne(num){
    return num + 1
}

// addtwo(6)
const addtwo = function(num){
    return num + 2
}
