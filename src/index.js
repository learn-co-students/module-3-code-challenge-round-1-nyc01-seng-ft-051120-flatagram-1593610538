const imgIndexUrl = "http://localhost:3000/images"
const commentsIndexUrl = "http://localhost:3000/comments"
const imgContainerDiv = document.querySelector(".image-container")

document.addEventListener('DOMContentLoaded', function(){
    fetchImage(imgIndexUrl, 1)


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
        addCommentWithoutPersistance(comment)
        form.reset()
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


