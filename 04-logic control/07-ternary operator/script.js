const age = 21

//using if statement

if( age >= 18){
    console.log('you can vote');
}else{
    console.log('can not vote');
}

// using ternary operator

age >= 18 ? console.log('eligible to vote'): console.log('cant vote');;

// assinging a conditional value to a variable

const canVote = age >= 18 ? 'you kinda vote' : 'naah wait till your 18'

console.log(canVote);

// muiltiple statements
const auth = true
// let redirect

// if(auth){
//     alert('welcome to dashboard')
//     redirect = '/dashboard'
// }else{
//     alert('Asses denied')
//     redirect = '/login'
// }


const redirect = auth 
? (alert('welcome to dashboard'),'/dashboard')
: (alert('acess denied'), '/login')
console.log(redirect);

auth ? console.log('welcome to dashboard') : null // when not havin else part