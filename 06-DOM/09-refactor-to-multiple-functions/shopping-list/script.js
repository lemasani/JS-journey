// clean & performant
function createnewItem (item){
    const li = document.createElement('li')
    const liValue = document.createTextNode(item)
    li.appendChild(liValue)

    const button = createButton('button')
    const icon = document.createTextNode('*')
    button.appendChild(icon)

    li.appendChild(button)

    document.querySelector('.items').appendChild(li)

    

    console.log(li);
}

function  createButton (classes){
    const button = document.createElement('button')
    button.className = classes
    return button
}

createnewItem('Grand malta')
createnewItem('Bananas')