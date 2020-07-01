document.addEventListener("DOMContentLoaded", () => {
    getImage()
    getComments()
    like()
    addComment()
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
    const imageCard = document.querySelector('.image-card')
    let commentsUl = document.querySelector('.comments')
    let commentForm = document.querySelector('.comment-form')
    let commentLi = document.getElementsByTagName('li')

    comments.forEach(comment => {
        commentsUl.innerHTML += `
          <li>${comment.content}</li>`
    });

        commentForm.innerHTML =
        `<form class="comment-form">
          <input
            class="comment-input"
            type="text"
            name="comment"
            placeholder="Add a comment..."
          />
          <button class="comment-button" type="submit">Post</button>
        </form>
    `
    imageCard.append(commentUl)
    imageCard.append(commentForm)
}

function like(){
    const likeBtn = document.querySelector('.like-button')
    let likeNum = parseInt(likeBtn.previousElementSibling.innerText)
    let likeText = document.querySelector('.likes')

    document.addEventListener('click', (e)=>{
        if(e.target.className === 'like-button'){
            e.preventDefault()
        likeText.innerText = `${likeNum++} likes`

        fetch('http://localhost:3000/images/1', {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({likes: likeNum})
            
        }).then(resp => resp.json())
        .then(data => likeText)
            
    }})
}

function addComment(){
    let commentInput = document.querySelector('.comment-input')
    let newComment = document.createElement('li')
    let commentLists = document.querySelector('.comments')
    document.addEventListener('submit', (e)=>{
        if(e.target.className === 'comment-button'){
            newComment.innerText=`${commentInput.value}`
            commentLists.append(newComment)
        }
    })
}