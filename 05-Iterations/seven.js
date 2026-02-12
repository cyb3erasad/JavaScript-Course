const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const nums = number.map( (num) => num + 10 )

// console.log(nums);

const myNum = number
              .map( (num) => num * 10)
              .map((num) => num + 1)
              .filter( (num) => num > 30)


console.log(myNum);
              