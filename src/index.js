const imgIndexUrl = "http://localhost:3000/images"
const commentsIndexUrl = "http://localhost:3000/comments"
const imgContainerDiv = document.querySelector(".image-container")

document.addEventListener('DOMContentLoaded', function(){
    fetchImage(imgIndexUrl, 1)

    const thisLikeButton = imgContainerDiv.querySelector('button')
    thisLikeButton.addEventListener('click', function(e){
        let thisLikeCount = thisLikeButton.dataset.likes
        const thisImgId = thisLikeButton.dataset.id 
        thisLikeCount = parseInt(thisLikeCount) + 1
        fetchPatchLike(imgIndexUrl, thisImgId, thisLikeCount)
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


// - Click on the heart icon to increase image likes,
//  and still see them when I reload the page




