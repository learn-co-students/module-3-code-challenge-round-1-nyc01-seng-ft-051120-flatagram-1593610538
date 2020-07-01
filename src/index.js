document.addEventListener('DOMContentLoaded', function(e){
    fetchImage()
    addComm()

    document.addEventListener('click', function(e){
        if (e.target.matches('.like-button')){
            imgId = e.target.dataset.id
            imgLikes = parseInt(e.target.parentNode.querySelector('.likes').textContent.slice(0,2))
            newLikes = imgLikes + 1
            e.target.parentNode.querySelector('.likes').textContent = `${newLikes} likes`
            fetch('http://localhost:3000/images/1', {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'accepts': 'application/json'
                },
                body: JSON.stringify({
                    'likes': newLikes
                })
            })
        }
        else if (e.target.matches('.down-button')){
            imgId = e.target.dataset.id
            imgLikes = parseInt(e.target.parentNode.parentNode.querySelector('.likes').textContent.slice(0,2))
            downLikes = imgLikes - 1
            e.target.parentNode.parentNode.querySelector('.likes').textContent = `${downLikes} likes`
            fetch('http://localhost:3000/images/1', {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'accepts': 'application/json'
                },
                body: JSON.stringify({
                    'likes': downLikes
                })
            })
        }
        
    })

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

    imgCardLikeBtn = imgCard.querySelector('.like-button')
    imgCardLikeBtn.dataset.id = image.id

    imgCardDownBtn = document.createElement('button')
    imgCardDownBtn.className = 'down-button'
    imgCardDownBtn.textContent = "X"

    imgCardLikeBtn.append(imgCardDownBtn)

    imgCardComm = imgCard.querySelector('.comments')
    imgCardComm.textContent = ''

    comments = image.comments.forEach(comment => {
        comment.content
        commLi = document.createElement('li')
        commLi.textContent = comment.content
        imgCardComm.append(commLi)
    })

    
}

function addComm(){
    document.addEventListener('submit', function(e){
        e.preventDefault()
        commForm = e.target
        
        comment = commForm.querySelector('.comment-input').value

        commLi = document.createElement('li')
        commLi.textContent = comment
        
        commUl = commForm.parentNode.querySelector('.comments')
        commUl.append(commLi)

        commForm.reset()

        fetch(`http://localhost:3000/comments`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'accepts': 'application/json'
            },
            body: JSON.stringify({
                'imageId': 1,
                'content': comment
            })
        })
    })
}