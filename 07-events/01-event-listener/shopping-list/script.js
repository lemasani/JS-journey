const clearBtn = document.querySelector('#clear')

function onclear (){
   const ItemList = document.querySelector('ul')
   const items = ItemList.querySelectorAll('li')

   //items.forEach((item) => item.remove()) 
    while(ItemList.firstChild){
        ItemList.removeChild(ItemList.firstChild)
    }
   //ItemList.innerHTML = ''
}

// event listener
//clearBtn.onclick = function () {
//    alert('Clear Items');
//};

//addEventListener()
clearBtn.addEventListener('click', onclear)

//setTimeout(()=> clearBtn.removeEventListener
//('click', onclear), 5000)

setTimeout(()=> clearBtn.click(), 5000)