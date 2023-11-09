const numbers = [1,2,3,4,5,6,7,8,9,10]

const sum = numbers.reduce(function (accumlulator, currentValue){
    return accumlulator + currentValue
}, 0)


// shorten version
const sum2 = numbers.reduce((acc, cur) => acc + cur,0)
console.log(sum2);

// using a for loop
const sum3 = () =>{
    let acc = 0
    for (const cur of numbers){
        acc += cur
    }
    return acc
}
console.log(sum3());


const cart =[
    {id: 1, name: 'Product 1', price: 130},
    {id: 2, name: 'Product 2', price: 150},
    {id: 3, name: 'Product 3', price: 175}
]

const total = cart.reduce((acc, product) => acc + product.price ,0)

console.log(total);