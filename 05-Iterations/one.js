// for loop

// for(let i = 1; i <= 10; i++){
//     const element = i
//     if(element % 2 == 0){
//         console.log(`Even Number: ${element}`);      
//     } else{
//         console.log(`Odd Number: ${element}`);
        
//     }
    
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for(let j = 1; j <= 10; j++){
//         // console.log(`Inner loop value ${j} and inner loop ${i}`);
//         console.log(i + '*' + j + ' = ' + i*j);
            
//     }
    
// }

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

// for (let index = 0; index < days.length; index++) {
//     const element = days[index];
//     console.log(element);
    
    
// }

// for (let i = 1; i <= 20; i++) {
//     if (i === 5) {
//         console.log("5 Detected");
//         break
//     }
//     console.log(`value of i is ${i}`);
    
// }

for (let i = 1; i <= 20; i++) {
    if (i === 5) {
        console.log("5 Detected");
        continue
    }
    console.log(`value of i is ${i}`);
    
}
