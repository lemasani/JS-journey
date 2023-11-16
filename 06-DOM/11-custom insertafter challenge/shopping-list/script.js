function insertAfter (newEL, existingEl){
    existingEl.parentElement.insertBefore(newEL, existingEl.nextSibling)
    
}

const li = document.createElement('li')
li.textContent = 'insert me after'

const firstItem = document.querySelector('li:first-child')


insertAfter(li, firstItem)
console.log(firstItem);