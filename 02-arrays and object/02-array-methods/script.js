let x;
const arr = [123, 452, 245, 145];

//arr.push(221); // adds element at the end

//arr.pop(); // removes the last element

//arr.unshift(421); // adds element at the beginning

//arr.shift(); // removes the first element

//arr.reverse(); // reverses the array

x = arr.includes(425); // checks if the element is available

x = arr.indexOf(123); // gives index of the element

x = arr.slice(1, 3);

//x = arr.splice(1, 3);

x = arr.slice(1, 4).reverse().toString().charAt(0);

console.log(x, arr);
