// function togle(e){
//     e.target.classList.toggle('danger')
//     console.log('clicked for toggle');
// }
// document.querySelector('button').addEventListener('click', togle)


const posts = [
    {title: 'Post 1', body: 'this is post one'},
    {title: 'Post 2', body: 'this is post two'}
]

function createPost(post, cb){
    setTimeout(()=>{
        posts.push(post)
        cb()
    }, 2000)
}

function getPosts(){
    setTimeout(() =>{
        posts.forEach(function (post){
            const div = document.createElement("div");
            div.className = "card";
            div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`
            document.querySelector('#posts').appendChild(div)
        })
    }, 1000)
}

createPost({title: 'Post 3', body: 'this is post three'}, getPosts)
