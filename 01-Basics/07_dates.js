let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());

// let CreatedDate = new Date(2026, 0, 28)

// let CreatedDate = new Date(2026, 0, 28, 10, 53)
// let CreatedDate = new Date("2026-01-28")
let CreatedDate = new Date("01-28-2026")
// console.log(CreatedDate.toLocaleString());

// let timeStamp = Date.now()
// console.log(timeStamp);
// console.log(CreatedDate.getTime());

// console.log(Math.floor(Date.now() / 1000));  // give value in seconds

let newDate = new Date()

newDate.toLocaleString('default', {
    weekday: "long"
})

console.log(newDate);

