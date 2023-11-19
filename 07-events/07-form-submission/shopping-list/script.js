const form = document.getElementById('item-form')

function onSubmit(e){
    e.preventDefault()
    const item = document.getElementById('item-input').value
    const priority = document.getElementById('priority-input').value


    if(item === '' || priority === '0'){
        alert('Please fill in all fields')
        return
    }
    console.log(item, priority);
}

function onSubmit2 (e){
    e.preventDefault()
    const formData = new FormData(form)

    const item = formData.get('item')// fill the value of the name attribute in html
    const priority = formData.get('priority')// fill the value of the name attribute in html

    console.log(item, priority);
}


form.addEventListener('submit', onSubmit2)