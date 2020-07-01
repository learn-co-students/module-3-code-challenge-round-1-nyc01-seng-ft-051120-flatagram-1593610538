document.addEventListener("DOMContentLoaded", () => {
    const baseUrl = 'http://localhost:3000'
    const imageCard = document.querySelector(".image-card")
    const likeSpan = document.querySelector(".likes")
    const likeBtn = document.querySelector(".like-button")
    const commentsUl = document.querySelector(".comments")
    
    // creating downvote button
    const likesBar = document.querySelector(".likes-section")
    const downVote = document.createElement("button")
    likesBar.append(downVote)
    downVote.innerText = "🤢"

    // need an event listener for clicks
        // that click event target will be the heart
        // that click event will make a patch request to increase the inner text of the likes span + 1
    document.addEventListener("click", e => {
        if (e.target.innerText === "♥"){
            increaseLikes(e)
        } else if (e.target.innerText === "🤢"){
            decreaseLikes(e)
        } else if (e.target.parentNode.className === "comments") {
            // console.log(e.target);
            deleteComment(e)   
        }
    })

    // need event listener for submit
        // submit should be prevented from reloading page
        // need to find comment value and append to comments <ul>
    document.addEventListener("submit", e => {
        e.preventDefault()
        if (e.target.className === "comment-form") {
            addComment(e)
            e.target.reset()
        }
    })

    // have a question about the DB persistence here. If I create the comment it persists, 
    // but if I want to delete it immediately the ID doesn't register 
    // but if I refresh the page, the delete function works
    // HMMMMMMMMMMMMM
    const deleteComment = (e) => {
        let commentToRemove = e.target
        let commentId = commentToRemove.dataset.id
        fetch(baseUrl+`/comments/${commentId}`, {
            method: 'DELETE'
        })
        commentToRemove.remove()
    }

    // function to add comments w/ post request
    const addComment = (e) => {
        let form = e.target
        // console.log(form);
        let newComment = form.comment.value
        // console.log(newComment);
        let commentLi = document.createElement("li")
        commentLi.innerText = `${newComment}`
        commentsUl.append(commentLi)
        fetch(baseUrl+`/comments`, {
            method: 'POST', 
            headers: {"content-type":"application/json"},
            body: JSON.stringify({
                imageId: 1,
                content: newComment
            })
        })
        .then(r => r.json())
        .then(comment => {
            console.log(comment);
            commentsUl.lastChild.innerText = `${comment.content}`
        })
    }

    // function to increase likes
    const increaseLikes = (e) => {
        let likeId = e.target.dataset.id
        let newLikes = parseInt(likeSpan.innerText) + 1
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

    const decreaseLikes = (e) => {
        let likeId = e.target.dataset.id
        let newLikes = parseInt(likeSpan.innerText) - 1
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
            downVote.dataset.id = `${images.id}`
            commentsUl.innerHTML = ""
            
            images.comments.forEach(comment => {
            let commentLi = document.createElement("li")
            commentLi.innerHTML = `${comment.content}`
            commentLi.dataset.id = `${comment.id}`
            commentsUl.append(commentLi)
            })
            
    }    

    const fetchImage = () => {
        fetch(baseUrl+'/images/1')
        .then(r => r.json())
        .then(images => renderImages(images))
    }

fetchImage()
})

// write your code here
// √See the image received from the server, including its title, likes and comments when the page loads
// √Click on the heart icon to increase image likes, and still see them when I reload the page
// √Add a comment (no persistance needed)


// I would've liked to refactor this so that increasing/decreasing likes was just one function, but wasn't too sure how 

