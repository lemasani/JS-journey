const logo = document.querySelector('img')

const onclick = ()=> console.log('click event');
const onDoubleclick = ()=> {
    if(document.body.style.backgroundColor !== 'purple'){
        document.body.style.backgroundColor = 'purple'
        document.body.style.color = 'white'
    }else{
        document.body.style.backgroundColor = 'aliceblue'
        document.body.style.color = 'black'
    }
};

const onRightclick = () => console.log('right click');

const onMousedown = () => console.log('mouse down event');
const onMouseup = () => console.log('mouse up event');
const onMouseWheel = () => console.log('mouse wheel event');
const onMouseover = () => console.log('mouse over event');
const onmouseout = () => console.log('mouse out  event');
const onDragStart = () => console.log('Drag start  event');
const onDrag = () => console.log('Drag event');
const onDragEnd = () => console.log('Drag end event');

// event listeners
logo.addEventListener('click', onclick)
logo.addEventListener('dblclick', onDoubleclick)
logo.addEventListener('contextmenu', onRightclick)
logo.addEventListener('mousedown', onMousedown)
logo.addEventListener('mouseup', onMouseup)
logo.addEventListener('wheel', onMouseWheel)
logo.addEventListener('mouseover', onMouseover)
logo.addEventListener('mouseout', onmouseout)
logo.addEventListener('dragstart', onDragStart)
logo.addEventListener('drag', onDrag)
logo.addEventListener('dragend', onDragEnd)


