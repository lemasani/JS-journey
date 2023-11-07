// for (let i = 0; i <= 10; i++){
//     if(i == 7){
//         console.log('lucky number: 7');
//     }else{
//     console.log('Number: ' + i);
//     }
// }

// // nested loops 
// for (let i = 1; i <= 10; i++){
//     console.log('Number: ' + i);

//     for(let k = 1; k <= 10; k++){
//         console.log(`${i} * ${k} = ${i * k}`);
//     }
// }

// loop through an array

const name = ['bard', 'sara', 'sam', 'brian', 'chad']

for (let i = 0; i < name.length; i++ ){
    
    if(name[i] === 'chad'){
        console.log(`${name[i]} is the best`);
    }else{
        console.log(name[i]);
    }
}