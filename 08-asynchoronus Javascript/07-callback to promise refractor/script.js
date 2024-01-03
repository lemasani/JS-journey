// function togle(e){
//     e.target.classList.toggle('danger')
//     console.log('clicked for toggle');
// }
// document.querySelector('button').addEventListener('click', togle)


const posts = [
    {title: 'Post 1', body: 'this is post one'},
    {title: 'Post 2', body: 'this is post two'}
]

function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let error = false
            if(!error){
                posts.push(post)
                resolve()
            }
            else{
                reject('Something went wrong')
            }
        }, 2000)
    })
}

function getPosts(){
    setTimeout(() =>{
        posts.forEach(function (post){
            const div = document.createElement("div");
            div.className = "post";
            div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`
            document.querySelector('#posts').appendChild(div)
        })
    }, 1000)
}
function showError(error){
    const h3 = document.createElement('h3')
    h3.innerHTML = `<strong>${error}</strong>`
    document.querySelector('#posts').appendChild(h3)
}

createPost({title: 'Post 3', body: 'this is post three'})
.then(getPosts)
.catch(showError)
