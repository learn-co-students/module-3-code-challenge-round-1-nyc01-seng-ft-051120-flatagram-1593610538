// write your code here
document.addEventListener('DOMContentLoaded', () => {
fetchImage()
likesListener()
})


const fetchImage = () => {
    fetch("http://localhost:3000/images")
    .then(response => response.json())
    .then(resp => {
       let imgObj = resp[0]
       renderImg(imgObj)
    })
}

const renderImg = (imgObj) => {
    console.log(imgObj)
    imgDiv = document.querySelector('.image-container')
    imgDiv.dataset.id = imgObj.id 
    let titleSpot = imgDiv.querySelector('h2.title')
    let imgSpot = imgDiv.querySelector('img.image')
    let likesSpot = imgDiv.querySelector('span.likes')
    titleSpot.innerText = imgObj.title 
    imgSpot.src = imgObj.image 
    likesSpot = imgObj.likes 
    fetchComments()
}


const fetchComments = () => {
    fetch("http://localhost:3000/comments")
    .then(response => response.json())
    .then(comments => {
        let commentSpot = imgDiv.querySelector('ul.comments')
        commentSpot.innerHTML = ""
        comments.forEach(comment => {
            let li = document.createElement('li')
            li.dataset.id = comment.id 
            li.dataset.image_id = comment.image_id
            li.innerText = comment.content 
            commentSpot.appendChild(li)
        })
    })
}

const likesListener = () => {
    const likesBloc = document.querySelector('.likes-section')
    const likesBtn = likesBloc.querySelector('button')
    likesBtn.addEventListener('click', (event) => {
        if (event.target === likesBtn){
            let targetDiv = document.querySelector('.likes-section')
            let currentLikes = parseInt(targetDiv.querySelector('span').innerText[0])
            currentLikes = currentLikes + 1
            console.log(currentLikes)


            fetch("http://localhost:3000/images/1", {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                    "Accepts": "application/json"
                },
                body: JSON.stringify({
                    likes: currentLikes 
                })
            })
            .then(response => response.json())
            .then(imageBack => {
                targetDiv.querySelector('span').innerText = `${imageBack.likes} likes`
            })
        }
    })
}