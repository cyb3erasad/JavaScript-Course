const marvel_heros = ["Ironman", "Hulk", "Thor"]
const dc_heroes = ["Batman", "Superman", "Flash"]

// marvel_heros.push(dc_heroes)
// console.log(marvel_heros[3][0]);

// const all_heros = marvel_heros.concat(dc_heroes)   // combine array using concat
// console.log(all_heros);

// const new_heros = [...marvel_heros, ...dc_heroes]     // Spread method to combine array
// console.log(new_heros);

// const new_arr = [1, 2, 3, [4,5, 6], 7, [8, 9, 10, [20,21]]]
// const result_arr = new_arr.flat(3)
// console.log(result_arr);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));