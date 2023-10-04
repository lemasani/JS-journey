// values stored on stack
const name = 'Angela';
const age = 30;

// reference values are stored on the heap
const person = {
  name: 'Lemasani',
  age: 27,
};
let newName = name;
newName = 'Grace';

let newPerson = person;
newPerson.name = 'Bradley';

console.log(name, newName);
console.log(person, newPerson);
