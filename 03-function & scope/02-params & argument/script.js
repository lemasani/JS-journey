// default params
function registerUser(user = 'Bot'){ // new way to set default 
// if(!user){
//   user = 'Bot'  // old way setting default value
// }

  return user + ' is registered'
}
console.log(registerUser());

// Rest params

function sum (...numbers){   // functiopn to convert arguments to array if  return numbers

  let total = 0

  for (const num of numbers){
    total += num
  }
  return total
}

console.log(sum(1,2,3,5));


// objects as params
function loginUser(user){
  return `The user ${user.name} with the id of ${user.id} 
  is logged in`
}

const user = {
  id: 1,
  name: 'Brian'
}
console.log(loginUser(user));
console.log(loginUser({
  id: 2,
  name: 'Sara'
}));


// Arrays as params
function getRandom(arr){
  const randomIndex = Math.floor(Math.random() * arr.length)
  const item = arr[randomIndex]
  return item
}

console.log(getRandom([2,43,5,7,9,65,78,45]));