// challenge 1

const people = [
    {
        firstName: 'Brad',
        lastName: 'Doe',
        email: 'Brad@gmail.com',
        phone: '0782371472',
        age: 30
    },
    {
        firstName: 'Sam',
        lastName: 'Devis',
        email: 'sam@gmail.com',
        phone: '0773561472',
        age: 25
    },
    {
        firstName: 'Samathna',
        lastName: 'kivle',
        email: 'kivle@gmail.com',
        phone: '0682371472',
        age: 45
    },
    {
        firstName: 'Bob',
        lastName: 'foe',
        email: 'Bob@gmail.com',
        phone: '072561472',
        age: 19
    },
    {
        firstName: 'Angel',
        lastName: 'woe',
        email: 'Angel@gmail.com',
        phone: '07784271472',
        age: 23
    }
]

const youngpeople = people
.filter((person) => person.age <= 25)
.map((person) => {
    return {
        name: person.firstName + ' ' + person.lastName,
        email: person.email
    }
})
console.log(youngpeople);

// challenge 2
const numbers = [2,-30,50,20,-52,-9, 7]
const positiveSum = numbers
.filter((number) => number >= 0)
.reduce((acc, number) => acc + number)


console.log(positiveSum);


// challenge 3
const words = ['title', 'name', 'length']

const cWords = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1, word.length)
})

console.log(cWords);