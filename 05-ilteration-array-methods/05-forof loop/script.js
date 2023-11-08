const items = ['book', 'chair', 'kite', 'table']
const users =[
    {name: 'Brad'},
    {name: 'Chad'},
    {name: 'suzan'}
]


for (item of items){
    console.log(item);
}


console.log('list of users');
for (user of users){ 
    console.log(user.name);
}

// loop over strings

const str = 'Hello world'

for(const letter of str){
    console.log(letter);
}

// loop over maps
const map = new Map()
map.set('name','Brad')
map.set('age', 30)

for (const [key,value] of map){
    console.log(key,value);
}