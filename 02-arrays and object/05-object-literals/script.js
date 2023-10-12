let x;
const person = {
  name: 'Angela doe',
  age: 30,
  isAdmin: true,
  address: {
    street: 'Mponzi',
    city: 'Dar es salaam',
    state: 'Dar',
  },
  hobbies: ['music', 'drawing', 'games'],
};

x = person.name;
x = person['age'];
x = person.address.state;
x = person.hobbies[1];

x = person.name = 'Tracy';
x = person['isAdmin'] = false;

delete person.isAdmin;

person.hasChildren = true;

person.greet = function () {
  console.log(`hello my name is ${this.name}`);
};
person.greet();

x = person;

console.log(x);
