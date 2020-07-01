
// Note: completed core deliverables plus comment persistance from AD. Did not complete delete and did not attempt downvote.

const imageCard = document.querySelector(`.image-container`)
const imageUrlContainer = document.querySelector(`.image`)
const likesSpan = document.querySelector(`.likes`)
const commentsUl = document.querySelector(`.comments`)
const titleH1 = document.querySelector(`.title`)
const likeButton = document.querySelector(`.like-button`)
const commentForm = document.querySelector(`.comment-form`)
const commentButton = document.querySelector(`.comment-button`)

imageUrl = "http://localhost:3000/images/1"
commentsUrl = "http://localhost:3000/comments"
commentUrl = "http://localhost:3000/comments/:id"

document.addEventListener(`DOMContentLoaded`, e => {

getImage(e)

})

const getImage = () => {

    fetch(imageUrl)
    .then(response => response.json())
    .then(image => renderImage(image))  
}


const renderImage = (image) => {
    
    titleH1.innerText = `${image.title}`
    imageUrlContainer.src = `${image.image}`
    likesSpan.innerText = `${image.likes} likes`
    likesSpan.dataset.likes = image.likes
    commentsUl.innerText = ``
    console.log(image.comments)
        image.comments.forEach(comment => {
        commentLi = document.createElement(`li`)
        commentLi.innerText = `${comment.content}`
        commentsUl.append(commentLi)
        })
}


document.addEventListener("click", function (e) {
if (e.target === likeButton)
addLike(e)

else if (e.target === commentButton)
submitListener(e)

})

const addLike = (e) => {
currentLikes = likesSpan.dataset.likes
totalLikes = parseInt(currentLikes) + 1

const likesObj = {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({likes: totalLikes})
    }

    fetch(imageUrl, likesObj)
    .then(resp => resp.json())
    .then(getImage())
    }

const submitListener = (e) => {
    document.addEventListener("submit", (e) => {
    e.preventDefault()
    newComment = commentForm.comment.value
    addComment(newComment)
    })}

const addComment = (newComment) => {
    commentLi = document.createElement(`li`)
    commentLi.innerText = `${newComment}`
    commentsUl.append(commentLi)
    postComment(newComment)
    commentForm.reset()
    }

const postComment = (newComment) => {

    options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify({
            content: newComment,
            imageId: 1
        }) 
    }
    fetch("http://localhost:3000/comments/", options)
        .then(response => response.json())
        .then(getImage())
}

// uncompleted Delete (never made the button):

    //  function deleteComment(button) {
    //      const deleteObj = {
    //          method: "DELETE"
    //      }
 
    //      fetch(`${commentURL}${button.dataset.id}`, deleteObj)
    //      .then(removeComment(button))
    //  }
 
    //  function removeComment(button) {
    //      button.parentNode.remove()
    //  }
   





