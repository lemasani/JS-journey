const libary = [ 
  {
    title: 'Atomic habits',
    author: 'james clear',
    status: {
      own: true,
      reading: false,
      read: false
    }
  },
  {
    title: 'Rich dad poor dad',
    author: 'robert kiyosaki',
    status: {
      own: true,
      reading: false,
      read: false
    }
  },
  {
    title: 'Bible',
    author: 'GOD',
    status:{
      own: true,
      reading: false, 
      read: false
    }
  }
]



libary[0].status.read = true
libary[1].status.read = true
libary[2].status.read = true



// destructuring title
const {title: firsbook} = libary[0]


console.log(firsbook);



// Turn libary into JSON

const libaryJson = JSON.stringify(libary)

console.log(libaryJson);
