const numbers = [1,2,3,4,5,6,7,8,9,10]

const doubleNumbers = numbers.map((number) => number * 2)

console.log(doubleNumbers);

// same with forEach 

const doubleNumbers2 = []

numbers.forEach((number) => {
    doubleNumbers2.push(number * 2)
})

console.log(doubleNumbers2);



const companies = [
    {name: 'company 1', category: 'Finance', start: 1981, end: 2004},
    {name: 'company 2', category: 'Retail', start: 1982, end: 2008},
    {name: 'company 3', category: 'Auto', start: 1999, end: 2007},
    {name: 'company 4', category: 'Retail', start: 1989, end:2010},
    {name: 'company 5', category: 'Tech', start: 2009, end: 2014}
]

// create an array of companies names

const companyNames = companies.map((company) => company.name)

//console.log(companyNames);

// create an array with company and category
const companyInfo = companies.map((company) => {
    return {
        name: company.name,
        category: company.category
    }
})
console.log(companyInfo);

// create an array of objects with the name and the length of @ company in years

const companyYears = companies.map((company) => {
    return {
        name: company.name,
        years: company.end - company.start
    }
})

console.log(companyYears);

// chain map methods
const squareandDouble = numbers
.map((number) => Math.sqrt(number))
.map((sqrt) => sqrt * 2)

console.log(squareandDouble);

// chaining different methods

const evenDouble = numbers
.filter((number) => number % 2==0)
.map((number) => number * 2)

console.log(evenDouble);