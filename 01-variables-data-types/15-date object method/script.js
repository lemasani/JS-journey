let x;

let d = new Date();

x = d.toString();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear();

x = d.getMonth() + 1;

x = d.getDate();

x = d.getDay();

x = d.getHours();

x = d.getMinutes();

x = Intl.DateTimeFormat('en-GB').format(d); // uses API

x = d.toLocaleString('default', { month: 'short' });

console.log(x);
