let x;

const name = 'Angela';
const age = 30;

x = 'hello, my name is ' + name + age + ' ' + 'years old';

// template literals
x = `hellow, my name is ${name} and i am ${age} years old`;

// string properties and methods

//const s = 'hello world'

const s = new String('helow world');

x = typeof s;
x = s.length;

// access value by key
x = s[4];

x = s.__proto__;

x = s.toUpperCase()

x = s.charAt(8)

x = s.indexOf('d')

x = s.substring(0,4)

x = '    hellow world'
x = s.trim()

x = s.replace('world', 'Angela')

x = s.split('')
console.log(x);
