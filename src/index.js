document.addEventListener('DOMContentLoaded', function(e){
    fetchImage()

})

function fetchImage(){
    fetch('http://localhost:3000/images/1')
    .then(resp => resp.json())
    .then(image => renderImage(image))
}

function renderImage(image){
    const imgCard = document.querySelector('.image-card')
    
    imgCardTitle = imgCard.querySelector('.title')
    imgCardTitle.textContent = image.title

    imgCardsrc = imgCard.querySelector('.image')
    imgCardsrc.src = image.image

    imgCardLike = imgCard.querySelector('.likes')
    imgCardLike.textContent = `${image.likes} likes`

    imgCardComm = imgCard.querySelector('.comments')
    imgCardComm.textContent = ''

    comments = image.comments.forEach(comment => {
        comment.content
        commLi = document.createElement('li')
        commLi.textContent = comment.content
        imgCardComm.append(commLi)
    })

    
}