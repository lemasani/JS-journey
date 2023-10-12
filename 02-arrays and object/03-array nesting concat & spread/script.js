let x;
const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberries', 'blueberry', 'rasberry'];

// nesting of array
//fruits.push(berries);

//x = fruits[3][1];

const allFruits = [fruits, berries];

x = allFruits[1][0];

// concat array
x = fruits.concat(berries);

//spread operator  {...}
x = [...fruits, ...berries];

// flatten array
const arr = [1, 2, [3, 4], 5, [6, 7], 8];

x = arr.flat();

// static methods on Array object

x = Array.isArray(fruits); // checks if its an array

x = Array.from('12345'); // makes an array

const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c); // passes variable and makes an array

console.log(x);
