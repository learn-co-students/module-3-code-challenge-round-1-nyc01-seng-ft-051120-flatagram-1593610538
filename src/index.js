// write your code here
document.addEventListener('DOMContentLoaded', () => {
fetchImage()
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
    let titleSpot = imgDiv.querySelector('h2.title')
    let imgSpot = imgDiv.querySelector('img.image')
    let likesSpot = imgDiv.querySelector('span.likes')
    let commentSpot = imgDiv.querySelector('ul.comments')
    titleSpot.innerText = imgObj.title 
    imgSpot.src = imgObj.image 
    likesSpot = imgObj.likes 
    fetchComments()
}


const fetchComments = () => {
    fetch("http://localhost:3000/comments")
    .then(response => response.json())
    .then(comments => {
        comments.forEach(comment => {
            console.log(comment)
        }
    }))
}