// for of

let arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
    
// }

const greeting = "Hello World!"

// for (const greet of greeting) {
//     console.log(`Each char is: ${greet}`);
    
// }

const map = new Map()
map.set("PAK", "Pakistan")
map.set("TRK", "Turkey")
map.set("GER", "Germany")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':', value);
    
}

// const games = {
//     game1: "EA Sports",
//     game2: "E Football"
// }

// for (const [ket, value] of games) {
//     console.log(key, ':', value);
    
// }