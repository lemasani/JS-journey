// fetching a json file
fetch('./movies.json')
.then((res) =>{
    return res.json()
})
.then((data) =>{
    console.log(data);
})

const resultDisplay  = document.querySelector('#results')
// fetching a text file
fetch('./test.txt')
.then((res) =>{
    return res.text()
})
.then((data) =>{
    console.log(data);
})

const user = 'lemasani'

// fetching from an API
fetch(`https://api.github.com/users/${user}/repos`)
.then((res) =>{
    return res.json()
})
.then((data) =>{
    console.log(data);
    data.map(name => {
        console.log(name);
        const result = document.createElement('li')
        result.textContent = name.name
        resultDisplay.appendChild(result)
        
    });
})
.catch((error)=>{
    console.log(error)
    const errorMessage = document.createElement('span')
    errorMessage.textContent = 'something went wrong, Try again!'
    resultDisplay.appendChild(error)
})
