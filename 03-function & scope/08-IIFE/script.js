
// IIFE
(function(){
  const user = 'angel'
  console.log(user);
  const hello = () => console.log('hello from IIFe');
  hello()
})()


// do not why it doesnt work
(function (name){
  console.log('hello ' + name);
})('Sam')

