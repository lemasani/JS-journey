// setTimeout(changeText, 3000)

function changeText (){
    document.querySelector('h1').textContent = 'hello from callback'
}


const timerid = setTimeout(changeText, 3000)

document.querySelector('#cancel').addEventListener('click', ()=>{
    console.log(timerid);
    clearTimeout(timerid)
    console.log('timer canceled');
})