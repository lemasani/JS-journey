// create a promise
const promise = new Promise((resolve, reject) =>{
    // do some async task
    setTimeout(()=> {
        console.log('Async task complete');
        resolve()
    }, 2000)
})

// promise.then(() => console.log('Promise resolved'))

const getUser = new Promise((resolve, reject) =>{
    // do some async task
    setTimeout(()=> {
        let error = false
        if(!error){
            resolve({name: 'John', age: 30 })
        }else{
            reject('Error: Something went wrong')
        }
    }, 3000)
})
getUser
.then((user)=> console.log(user))
.catch((error) => console.log(error))
.finally(() => console.log('Promise has been resolved or rejected'))

console.log('hello from global scope');


