const d = new Date(2022,2,10,21,0,0)
const month = d.getMonth()
const hour = d.getHours()

switch (month){
    case 1: 
        console.log('it is Janaury');
        break
    
    case 2:
        console.log('it is feb');
        break

    case 3: 
        console.log('it is march');
        break
    default:
        console.log('other month');
}

switch (true){
    case hour < 12:
        console.log('Good morning');
        break
    case hour < 18:
        console.log('good afternoon');
        break
    default:
        console.log('Good night');
}