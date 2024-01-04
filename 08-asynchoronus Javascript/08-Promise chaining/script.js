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
            resolve({name: 'Angela', age: 30 })
        }else{
            reject('Error: Something went wrong')
        }
    }, 3000)
})
getUser
.then((user)=> {
    console.log(user)
    return user.name
})
.then((name) => {
    console.log(name)
    return name.length
})
.then((nameLength)=>{
    console.log(nameLength);
})
.catch((error) => {
    console.log(error)
    return 123
})
.then((x) => console.log('This will run no matter what', x))


