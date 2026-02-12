const number = [1, 2, 3]

// const total = number.reduce( function(acc, currvalue) {
//     console.log(`acc value: ${acc}, current value: ${currvalue}`);
    
//     return acc + currvalue
// },0)

// const total = number.reduce( (acc, currvalue) => acc + currvalue, 0)
// console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const payment = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(payment);
