// this is a single line of code
console.log(100)

/*
console.log('hello world')
multiple lines of code commented
console.log(20, 'hello', true)
*/
const x = 120

console.log(x)

console.error('alert')

console.warn('warning')

console.table({name: 'Brad', email: 'hanar@gmail.com'})

console.group('simple')
console.log(x);
console.error('alert')
console.warn('warning')
console.groupEnd()

const styles = 'padding: 10px; background-color: white; color: green'
console.log('%chelo world', styles);