// insertAdjacentELement Example
function insertElement() {
    const filter = document.querySelector('.filter')
    const h1 = document.createElement('h1')
    h1.textContent = 'insertAd'
    filter.insertAdjacentElement('beforebegin', h1)
}

//insertAdjacentText Example
function insertText (){
    const item = document.querySelector('li:first-child')
    item.insertAdjacentText('afterend', 'insertText')
}

//insertAdjacentHTML Example
function insertHTML(){
    const clearBtn = document.querySelector('.clear-div')
    clearBtn.insertAdjacentHTML('beforebegin', '<h2> insert HTML</h2>')
}


//insertBefore Example
function inserBeforeItem (){
    const ul = document.querySelector('ul')
    const li = document.createElement('li')
    li.textContent = 'inserBefore'

    const thirdItem = document.querySelector('li:nth-child(3)')
    ul.insertBefore(li, thirdItem)
}




insertElement()
insertText()
insertHTML()
inserBeforeItem()