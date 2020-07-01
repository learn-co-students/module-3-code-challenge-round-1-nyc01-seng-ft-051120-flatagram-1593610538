document.addEventListener("DOMContentLoaded", function(e) {
    fetchImages()
    fetchComments()
    addImage()
})

let comments = []

function fetchImages() {
    fetch("http://localhost:3000/images")
    .then(response => response.json())
    .then(images => {
        images.forEach(image => {
            console.log(image)
            addImage(image)
        })
    })
}

function fetchComments() {
    fetch("http://localhost:3000/comments")
    .then(response => response.json())
    .then(comments => {
        comments.forEach(comment => {
            addComments(comment)
        })
    })
}

function addImage(image) {
    const imageCard = document.querySelector(".image-card")
    imageCard.innerHTML = `
    <h2 class="title">${image.title}</h2>
    <img src=${image.image} class="image">
    <div class="likes-section">
      <span class="likes">0 likes</span>
      <button class="like-button">♥</button>
    </div>
    <ul class="comments">
    </ul>
    <form class="comment-form">
      <input class="comment-input" type="text" name="comment" placeholder="Add a comment...">
      <button class="comment-button" type="submit">Post</button>
    </form>`
}

function addComments(comment) {
        let commentsUl = document.querySelector(".comments")
        let commentLi = document.createElement("li")
        commentLi.innerText = `${comment.content}`
        commentsUl.append(commentLi)
}

document.addEventListener("submit", function(e) {
    e.preventDefault()
    let form = document.querySelector(".comment-form")
    let comment = form.comment.value
    let commentsUl = document.querySelector(".comments")
    let commentLi = document.createElement("li")
    commentLi.innerText = `${comment}`
    commentsUl.append(commentLi)
    form.reset()
})

document.addEventListener("click", function(e) {
    if (e.target.className ==== "like-button") {
        let likesSpan = document.querySelector(".likes")
        let likes = parseInt(likesSpan.innerText)
    }
})
