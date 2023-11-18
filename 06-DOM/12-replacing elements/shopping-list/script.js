function replaceFirstItem(){
    const firstItem = document.querySelector('li:first-child')
    const li = document.createElement('li')
    li.textContent = 'replaced first'

    firstItem.replaceWith(li)
}


function replaceSecondItem (){
    const secondItem = document.querySelector('li:nth-child(2)')
    secondItem.outerHTML = '<li>replaced second item </li>'
}


function replaceAll (){
    const lis = document.querySelectorAll('li')
    lis.forEach((item, index) =>{
        //item.outerHTML = '<li>replaced all</li>'
        if(index == 1){
            item.innerHTML = 'second item replaced a orange'
        }else{
            item.innerHTML = 'replaced all'
        }
    })
}

function replaceChildHeading(){
    const header = document.querySelector('header')
    const h1 = document.querySelector('header h1')

    const h2 = document.createElement('h2')
    h2.id = 'app-title'
    h2.textContent = 'shopping list'
    header.replaceChild(h2, h1)
}


replaceFirstItem()
replaceSecondItem()
replaceAll()
replaceChildHeading()