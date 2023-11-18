function removeClearBtn(){
    document.querySelector('#clear').remove()
}

function removeFirstItem (){
    const ul = document.querySelector('ul')
    const li = document.querySelector('li:first-child')

    ul.removeChild(li)
}

function removeItem (itemNumber){
    const ul = document.querySelector('ul')
    const li = document.querySelector(`li:nth-child(${itemNumber})`)
    ul.removeChild(li)
}

function removeItem2 (itemNumber){
    const ul = document.querySelector('ul')
    const li = document.querySelectorAll('li')[itemNumber - 1]
    ul.removeChild(li)
}

function removeItem3(itemNumber){
    const li = document.querySelectorAll('li')
    li[itemNumber - 1].remove()
}

removeClearBtn()
//removeFirstItem()
//removeItem(2)
//removeItem2()
removeItem3()


