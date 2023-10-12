// challenge 1

const arr = [1, 2, 3, 4, 5]; // reverse the output of array
arr.push(6);
arr.unshift(0);
let ar = arr.reverse();

console.log(ar);

// challenge 2
// concat the array into one array without repeating 5
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

let arr3;
let x;
x = arr1.slice(0, 4);

arr3 = [...x, ...arr2];

console.log(arr3);
