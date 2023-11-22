//window.onload = function () {
//    document.querySelector('h1').textContent ='hello world'
//}

window.addEventListener('load' ,()=>{
    console.log('Page loaded');
})

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
})

console.log('Run me');

window.addEventListener('resize', () => {
    document.querySelector('h1').innerText = 
    `Resized to ${window.innerWidth} x ${window.innerHeight}`
})

window.addEventListener('scroll', ()=>{
    console.log(`scrolled: ${window.scrollX} x ${window.scrollY}`)
    if(window.scrollY > 10){
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }else{
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'

    }
})