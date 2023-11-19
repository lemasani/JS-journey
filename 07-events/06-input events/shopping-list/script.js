const ItemInput = document.getElementById('item-input')
const priorityInput = document.getElementById('priority-input')
const checkbox = document.getElementById('checkbox')
const heading = document.querySelector('h1')

function onInput(e){
    heading.textContent = e.target.value;
}

function onChecked(e){
    const isChecked = e.target.checked;
    heading.textContent = isChecked ? 'Checked' : 'Not checked'
}


function onFocus(e){
    console.log('input focused');
    ItemInput.style.outlineStyle = 'solid'
    ItemInput.style.border = 'none'
    ItemInput.style.outlineWidth = '2px'
    ItemInput.style.outlineColor = 'blue'
}

function onBlur(e){
    console.log('Input is not focused');
    ItemInput.style.outlineStyle = 'none'
    ItemInput.style.border = '1px solid black'
}

ItemInput.addEventListener('input', onInput)
priorityInput.addEventListener('change', onInput)
checkbox.addEventListener('input', onChecked)
ItemInput.addEventListener('focus', onFocus)
ItemInput.addEventListener('blur', onBlur)