// global scope- variable accessible anywhere

const x = 100

console.log(x, 'in global scope');
function run(){
  console.log(x, 'in function scope');
}
console.log(run());

if(true){
  console.log(x, 'in block');
}

function add(){
  const y = 50  // in functional scope cant be accessed outside the function
  console.log(x + y); // x is in global scope
}

console.log(add());