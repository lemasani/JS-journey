const post = {
  id: 1,
  title: 'post one',
  body: 'this is the body of post 1'
}

// convert to Json string

const str = JSON.stringify(post)


// Parse

const ob  = JSON.parse(str)

console.log(ob);