document.addEventListener("DOMContentLoaded", () => {
    getImage()
    getComments()
    like()
})
const commentSection = document.querySelector('.comments')
function getImage(){
    fetch('http://localhost:3000/images/1')
    .then(resp => resp.json())
    .then(image => { renderImage(image) 
    })
}

function getComments(){
    fetch('http://localhost:3000/comments')
    .then(resp => resp.json())
    .then(comments =>
    //      {comments.forEach(comment => {
    //     renderComments(comment)

    // });}
    renderComments(comments)
    )
}

function renderImage(image){
    const imageCard = document.querySelector('.image-card')
    imageCard.innerHTML = `
    <h2 class="title">${image.title}</h2>
        <img src="${image.image}" class="image" />
        <div class="likes-section">
          <span class="likes">${image.likes} likes</span>
          <button class="like-button">♥</button>
          </div>
    `
}

function renderComments(comments){
    // const imageCard = document.querySelector('.image-card')
    // let commentsUl = document.querySelector('.comments')
    // let commentForm = document.querySelector('.comment-form')
    // let commentLi = document.getElementsByTagName('li')

    // comments.forEach(comment => {
    //     commentsUl.innerHTML += `
    //       <li>${comment.content}</li>`
    // });

    //     commentForm.innerHTML =
    //     `<form class="comment-form">
    //       <input
    //         class="comment-input"
    //         type="text"
    //         name="comment"
    //         placeholder="Add a comment..."
    //       />
    //       <button class="comment-button" type="submit">Post</button>
    //     </form>
    // `
    // imageCard.append(commentUl)
    // imageCard.append(commentForm)
}

function like(){
    const likeBtn = document.querySelector('.like-button')
    let likes = parseInt(likeBtn.previousElementSibling.innerText)+1
    let likeNum = document.querySelector('.likes')
    // document.addEventListener('click', function(e){
    //     // if(e.target === likeBtn){
    //     //     // e.preventDefault()
    //     // // likes + 1
    //     // // likeNum = `${likes} likes`
    //     // console.log(e.target)
    //     // }
        
        
        
    // })

    document.addEventListener('click', (e)=>{
        if(e.target.className === 'like-button'){
            e.preventDefault()
            console.log(likes)
        likeNum = `${likes} likes`
            
    }})
}
