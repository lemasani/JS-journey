// function declaration

function add(a, b){
  return a + b
}
console.log(add(1,2));

// Arrow function

const Add = (a,b) => {
  return a + b
}

console.log(Add(2,4));

const subtract = (a,b) => a - b // shorten arrow function

const double = a => a *2  // can leave off () with a single params


// returning object
const createOb = () => ({
  name: 'Brad'
})
console.log(createOb());