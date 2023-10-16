let x;

const todo = new Object();

todo.id = 1;
todo.name = 'buy milk';
todo.completed = true;

x = todo;
// nesting
const person = {
  address: {
    cords: {
      lat: 32.1234,
      long: -23.42,
    },
  },
};

x = person.address.cords.lat;

// spread operator
const obj1 = { a: 1, b: 34 };
const obj2 = { c: 3, d: 42 };

const obj3 = { ...obj1, ...obj2 };

const obj4 = Object.assign({}, obj1, obj2);

const todos = [
  { id: 1, name: 'Buy Milk' },
  { id: 2, name: 'Pickup kids from school' },
  { id: 3, name: 'Take out Trash' },
];

x = todos[1].name;

x = Object.keys(todo);

x = Object.keys(todo).length;

x = Object.values(todo);

x = Object.entries(todo);

x = todo.hasOwnProperty('age')

console.log(x);
