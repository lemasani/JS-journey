// Break

for (let i = 0; i<= 20; i++ ){
    if (i === 15){
        console.log('Breaking....');
        break
    }
    console.log(i);
}

// continue

for(let i = 0; i <= 10; i++){
    if(i === 5){
        console.log('skipping 5..');
        continue
    }
    console.log(i);
}