console.log(10 > 20 && 30 > 15);
console.log(20 > 10 && 30 > 15);

console.log(10 > 20  || 30 > 16);

// && will return 1st falsy value or last value

let a

a = 10 && 20
a = 10 && 20 && 30

console.log(a);

const posts = [1,2,3,43,1]

posts.length > 0 && console.log(posts[2]) && console.log('no posts');

// || will return the 1st truthy value or last value

let b

b= 10 || 20
b = 0 || 20
b = 0 || null || '' || undefined

console.log('b: ',b);

// ??  returns the right side operand when left is null or underfined

let c
c = 10 ?? 20
c = null ?? 20
c = undefined ?? 20
c = 0 ?? 30
c = '' ?? 30


console.log('c: ', c);