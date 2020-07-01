// write your code here
// √See the image received from the server, including its title, likes and comments when the page loads
// √Click on the heart icon to increase image likes, and still see them when I reload the page
// √Add a comment (no persistance needed)


document.addEventListener("DOMContentLoaded", () => {
    const baseUrl = 'http://localhost:3000'
    const imageCard = document.querySelector(".image-card")
    const likeSpan = document.querySelector(".likes")
    const likeBtn = document.querySelector(".like-button")
    const commentsUl = document.querySelector(".comments")
    console.log(commentsUl);
    

    
// need an event listener for clicks
    // that click event target will be the heart
    // that click event will make a patch request to increase the inner text of the likes span + 1
document.addEventListener("click", e => {
    if (e.target.innerText === "♥"){
        patchLikes(e)
    }
})

// need event listener for submit
    // submit should be prevented from reloading page
    // need to find comment value and append to comments <ul>
document.addEventListener("submit", e => {
    e.preventDefault()
    if (e.target.className === "comment-form") {
        addComment(e)
    }
})

const addComment = (e) => {
    let form = e.target
    console.log(form);
    let newComment = form.comment.value
    console.log(newComment);
    let commentLi = document.createElement("li")
    commentLi.innerText = `${newComment}`
    commentsUl.append(commentLi)
}


 const patchLikes = (e) => {
     let likeId = e.target.dataset.id
     let newLikes = parseInt(likeSpan.innerText) + 1
     console.log(likeId)
     fetch(baseUrl+`/images/${likeId}`, {
         method: 'PATCH',
         headers: {"content-type":"application/json"},
         body: JSON.stringify({
             likes: newLikes
         })
     })
     .then(r => r.json())
     .then(likes => {
        likeSpan.innerText = `${likes.likes} likes`     
     })
 }

const renderImages = (images) => {
        imageCard.children[0].innerText = `${images.title}` 
        imageCard.children[1].src = `${images.image}`
        likeSpan.innerText = `${images.likes} likes`
        likeBtn.dataset.id = `${images.id}`
        commentsUl.innerHTML = `
        <li>${images.comments[0].content}</li>
        <li>${images.comments[1].content}</li>
        <li>${images.comments[2].content}</li>
        `
}    

const fetchImage = () => {
    fetch(baseUrl+'/images/1')
    .then(r => r.json())
    .then(images => renderImages(images))
}
  
fetchImage()
})