// 
const div = document.createElement('div')
div.className = 'myElement'
div.id = 'my-element'
div.setAttribute('title', 'myelement')
// div.innerText = 'hell0 world'

const text = document.createTextNode('hello world')
div.appendChild(text)

document.body.appendChild(div)

document.querySelector('ul').appendChild(div)

