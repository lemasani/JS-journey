const itemInput = document.getElementById('item-input')

const onkeyPress = (e) => {
    console.log('keypress');
}

const onkeyUp = (e) => {
    console.log('keyup');
}

const onkeyDown = (e) => {
    console.log('keydown');
    // key
    console.log(e.key);
    //document.querySelector('h1').innerText = e.key
    
    //keycode
    if(e.keyCode === 13){
        alert('pressed enter')
    }
    //code
    if(e.code === 'Digit1'){
        console.log('you pressed 1');
    }

    if(e.repeat){
        console.log('you are holding down ' + e.key);
    }

    console.log('shift: ' + e.shiftKey);
    console.log('control: ' + e.ctrlKey);
    console.log('ALt: ' + e.altKey);
}
//itemInput.addEventListener('keypress', onkeyPress)
//itemInput.addEventListener('keyup', onkeyUp)
itemInput.addEventListener('keydown', onkeyDown)