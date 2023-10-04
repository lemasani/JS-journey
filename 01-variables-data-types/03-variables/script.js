// ways to declate variabels

// var, let , const

let firstName = 'Brian'
let lastName = 'Doe'

console.log(firstName, lastName)

let  age = 30

// naming conventions 
// -only letters, numbers, underscores and dollar signs
// -cannot start with a number

// Multi-word formatting
// firstName = camelcase
// firstn_name = underscore
// FirstName = Pascalcase
// firstname = lowercase


// Re-assigning variables
age = 31;
console.log(age);

let score

score = 1
console.log(score);

if(true){
    score += 1;
}
 console.log(score);

const x = 100;

const arr = [1,3,4,5];

arr.push(10)
console.log(arr);


const person = {
    name: 'Brian'
}

person.name = 'Angela'
person.email = 'angela@gmail.com'

console.log(person);