const imgIndexUrl = "http://localhost:3000/images"
const commentsIndexUrl = "http://localhost:3000/comments"
const imgContainerDiv = document.querySelector(".image-container")

document.addEventListener('DOMContentLoaded', function(){
    fetchImage(imgIndexUrl, 1)
    fetchComments(commentsIndexUrl)


    removeInitialComments()

    const thisLikeButton = imgContainerDiv.querySelector('button')
    
    thisLikeButton.addEventListener('click', function(e){
        let thisLikeCount = thisLikeButton.dataset.likes
        const thisImgId = thisLikeButton.dataset.id 
        thisLikeCount = parseInt(thisLikeCount) + 1
        fetchPatchLike(imgIndexUrl, thisImgId, thisLikeCount)
    })

    const commentForm = imgContainerDiv.querySelector('.comment-form')
    commentForm.addEventListener('submit', function(e){
        e.preventDefault()
        const form = e.target
        const comment = form.comment.value
        if (comment === "") {
            alert("Invalid Entry: You must say something")
        }
        else {
            addCommentWithoutPersistance(comment)
            const imageId = form.dataset.imgid
            const commentObj = createCommentObj(imageId, comment)
            addCommentToDatabase(commentsIndexUrl, commentObj) 
        }

        form.reset()
    })

    const commentUl = document.querySelector('.comments')
    commentUl.addEventListener('click', function(e){
        if (e.target.className = 'delete-button') {
            const deleteButton = e.target
            const imgId = deleteButton.dataset.imageid
            const commentId = deleteButton.dataset.id
            removeComment(commentsIndexUrl, commentId)
            removeCommentFromLi(commentId)
        }


    })
})


function fetchImage(url, imageId) {
    fetch(`${url}/${imageId}`)
    .then(resp => resp.json())
    .then(imgData => {
        renderImage(imgData)
    })
    .catch(error => alert(error))
}

function renderImage(imgData) {
    const imgId = imgData.id
    const imgTitle = imgData.title
    const imgLikes = imgData.likes
    const imgImage = imgData.image
    const imgTitleHeader = imgContainerDiv.querySelector('h2')
    imgTitleHeader.textContent = imgTitle
    const imgLocation= imgContainerDiv.querySelector('img')
    imgLocation.src = `${imgImage}`
    const imgLikesSpan = imgContainerDiv.querySelector('span')
    imgLikesSpan.textContent = imgLikes 
    const likeButton = imgContainerDiv.querySelector('button')
    likeButton.dataset.likes = imgLikes
    likeButton.dataset.id = imgId

    const commentForm = imgContainerDiv.querySelector('.comment-form')
    commentForm.dataset.imgid = imgId
}

function fetchPatchLike(url, imageId, likeCount) {
    fetch(`${url}/${imageId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            "likes": `${likeCount}`
        })
    })
    .then(resp => resp.json())
    .then(imgData => {
        renderImage(imgData)
    })
    .catch(error => alert(error))
}


function addCommentWithoutPersistance(comment) {
    const commentUl = imgContainerDiv.querySelector('.comments')
    const thisComment = document.createElement('li')
    thisComment.className = 'user-comment'
    thisComment.textContent = comment
    commentUl.appendChild(thisComment)
}

function removeInitialComments() {
    const commentUl = imgContainerDiv.querySelector('.comments')

    const commentChildrenArray = Array.from(commentUl.children)
    commentChildrenArray.forEach(commentChild =>{
        commentChild.remove()
    })
}



function addCommentToDatabase(url, commentObj) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(commentObj)
    })
    .then(resp => resp.json())
    .then(commentData => commentData)
    // .then(error => alert(error))
}



function createCommentObj(imageId, comment) {
    const obj = {
                    "imageId": `${imageId}`,
                    "content": `${comment}`

                }
    return obj
}



function fetchComments(url) {
    fetch(url)
    .then(resp => resp.json())
    .then(commentData => renderComments(commentData))
    .catch(error => alert(error))
}

function renderComments(commentData) {
    commentData.forEach(comment => renderComment(comment))
}

function renderComment(comment) {
    const imageId = comment.imageId
    const commentContent = comment.content 
    const commentId = comment.id
    const commentLi = document.createElement('li')
    commentLi.dataset.id = commentId 
    commentLi.dataset.imageid = imageId
    commentLi.textContent = commentContent 
    const deleteButton = document.createElement('button')
    deleteButton.dataset.id = commentId 
    deleteButton.dataset.imageid = imageId
    deleteButton.textContent = 'x'
    deleteButton.className = 'delete-button'
    commentLi.append(deleteButton)

    const commentUl = document.querySelector('.comments')
    commentUl.append(commentLi)

}

function removeComment(url, commentId) {
    fetch(`${url}/${commentId}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',      
        'Accept': 'application/json'      
    }})
    // .then(resp => {
    //     removeCommentFromLi(commentID)
    // })
    .catch(error => alert('There was an Error: This Comment Has Not Been Deleted From Our Database'))

}

function removeCommentFromLi(commentId) {
    const commentUl = document.querySelector('.comments')
    const commentLi = commentUl.querySelector(`[data-id="${commentId}"]`)
    commentLi.remove()
}

