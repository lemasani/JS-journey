let output;
//  get child elements

const parent = document.querySelector('.parent')
output = parent.children
output = parent.children[1].innerText
output = parent.children[1].className

parent.children[1].innerText = 'child two'
parent.children[1].style.color = 'red'



parent.firstElementChild.innerText = 'child one';
parent.lastElementChild.innerText = 'child Three';



// get parent elements from a child
const child = document.querySelector('.child')

output = child.parentElement
child.parentElement.style.border = '1px solid #ccc'

//  sibling elements
const secondItem = document.querySelector('.child:nth-child(2)')
output = secondItem
output = secondItem.nextElementSibling
secondItem.nextElementSibling.style.color = 'green'
secondItem.previousElementSibling.style.color = 'orange'




console.log(output);