// quick & dirty
function createlistItem(item){
    const li = document.createElement('li')
    li.innerHTML = `${item}
    <button>*</button>`

    document.querySelector('.items').appendChild(li)
}




// clean & performant
function createnewItem (item){
    const li = document.createElement('li')
    const liValue = document.createTextNode(item)
    li.appendChild(liValue)

    const button = document.createElement('button')
    button.className = 'button'
    const icon = document.createTextNode('*')
    button.appendChild(icon)

    li.appendChild(button)

    document.querySelector('.items').appendChild(li)

    

    console.log(li);
}

// my creative way - takes the value of input and appends it to the list 

const submit = document.querySelector('.btn')
submit.addEventListener('click', function addItem (item){
    const inputValue = document.querySelector('.form-input').value
    console.log(inputValue);

    const li = document.createElement('li')
    li.innerHTML = inputValue
    console.log(li);

    const button = document.createElement('button')
    button.className = 'button'
    const icon = document.createTextNode('*')
    button.appendChild(icon)

    li.appendChild(button)

    document.querySelector('.items').appendChild(li)
})



createlistItem('Eggs')
createnewItem('cheese')