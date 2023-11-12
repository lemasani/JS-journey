//  document.getaElementById()
console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);
console.log(document.getElementById('app-title').getAttribute('id'));


// set attributes
document.getElementById('app-title').title = 'shopping list'
document.getElementById('app-title').setAttribute('class', 'title')

const title = document.getElementById('app-title')
console.log(title);

// get/change content
console.log(title.textContent);
title.textContent = 'hello world'
title.innerText = 'hello again'
title.innerHTML = '<strong>Shopping list </strong>'

// change styles
title.style.color = 'red'
title.style.backgroundColor = 'black'
title.style.padding = '10px'
title.style.borderRadius = '10px'

// document.querySelector()
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple juice';
secondItem.style.color = 'red'


// use these methods on other elements
const list = document.querySelector('ul')
console.log(list);
const firstItem = list.querySelector('li')
firstItem.style.color = 'white'
console.log();