const logo = document.querySelector('img')

function onclick (e){
    //console.log(e.target);
    //console.log(e.currentTarget);
    console.log(e.type);
    console.log(e.timeStamp);
    //console.log(e.clientX);
    //console.log(e.clientY);
    //console.log(e.offsetX);
    //console.log(e.offsetY);
    console.log(e.pageX);
    console.log(e.pageY);
}

function onDrag(e){
    document.querySelector('h1').textContent = `X ${e.clientX}, Y ${e.clientY}`
}

logo.addEventListener('click', onclick)
logo.addEventListener('drag', onDrag)

//document.body.addEventListener('click', function(e){
//   console.log(e.target);
//  console.log(e.currentTarget);
//})


document.querySelector('a').addEventListener('click',
function (e){
    e.preventDefault()
    console.log('link is clicked');
})