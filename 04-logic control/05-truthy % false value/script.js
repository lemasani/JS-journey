// a string with a value is a truthy
const email = 'test@test.com'
if (email){
    console.log('You passed in an email');
} 

// fasly value
// - false
// -0
// "" or '' (empty string)
// null
// undefined
// NaN

const x = false

if(x){
    console.log('this is truthy');
}else{
    console.log('this is falsy');
}
console.log(Boolean(x));

// Truthy and falsy caveats
const children = 2
if (children){
    console.log(`you have ${children} children`);
}else{
    console.log('please enter number of children');
}

// checking for empty array
const posts = [1]

if(posts.length > 0){
    console.log('list posts');
}else{
    console.log('no posts to list');
}

// checking for empty obJects
const user = {
    name: 'brad',
}

if (Object.keys(user).length > 0){
    console.log('list user');
}else{
    console.log('no user ');
}

// loose equality(==)
console.log(false == 0);
console.log('' == 0);
console.log(null == undefined);