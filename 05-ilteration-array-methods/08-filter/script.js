const numbers = [1,2,3,4,5,6,7,8,9,10]

// const evenNumbers = numbers.filter(function(number){
//     return number % 2 == 0
// })

// short version
const evenNumbers = numbers.filter((number) => number % 2 == 0)


//  same with for each

// let evenNumber = []
// numbers.forEach((number) => {
//     if(number % 2 == 0){
//         evenNumber.push(number)
//     }
// })
// console.log(evenNumbers);

const companies = [
    {name: 'company 1', category: 'Finance', start: 1981, end: 2004},
    {name: 'company 2', category: 'Retail', start: 1982, end: 2008},
    {name: 'company 3', category: 'Auto', start: 1999, end: 2007},
    {name: 'company 4', category: 'Retail', start: 1989, end:2010},
    {name: 'company 5', category: 'Tech', start: 2009, end: 2014}
]

// get only retail companies

const retailCompanies = companies.filter((company) => company.category === 'Retail')

console.log(retailCompanies);


// get companies lasted 10 yrs or more

const longCompanies = companies.filter((company) => company.end - company.start >= 10)

console.log(longCompanies);