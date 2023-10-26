const firstName = 'Brian'
const lastName = 'Doe'
const age = 24

const person = {
  firstName, 
  lastName,
  age
}

console.log(person.age);

// Destucturing

const todo = {
  id: 1, 
  title: 'take out trash',
  user: {
    name: 'Brian',
  
  }
}

const {id, title, user:{name}} = todo

console.log(id, title, name);


const numbers = [223, 31,321,31, 424, 32]

const [first, second, third, ...rest] = numbers

console.log(first, second, third, rest);

