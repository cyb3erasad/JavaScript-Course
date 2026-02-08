const array = [0, 1, 2, 3, 4, 5]
const arr1 = ["batman", "superman", "potato"]
const arr2 = new Array(0, 1, 2, 3, 4)
// console.log(arr[0]);    // how we define arrays in different ways

// Array methods

// array.push(6,7)    // add new value in the array
// array.pop()        // delete last value in the array 
// array.unshift(0)  //  add value in the start of array
// array.shift()    // remove first value of array

// console.log(array.includes(5));
// console.log(array.indexOf(5));

// const newArr = array.join()    // convert into string 
// console.log(array);
// console.log(newArr);

// slice, splice

console.log("A", array);

const myarr1 = array.slice(1,3)
console.log(myarr1);
console.log("B", array);

const myarr2 = array.splice(1,3)
console.log("C", array);
console.log(myarr2);