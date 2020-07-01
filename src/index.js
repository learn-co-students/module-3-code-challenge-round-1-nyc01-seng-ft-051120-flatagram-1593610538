// write your code here
document.addEventListener('DOMContentLoaded', () => {
    
    let commentsPlace = document.querySelector("body > div > div > ul")
// 1. See the image received from the server, including its title, likes and comments when the page loads

function fetchImage(){
fetch("http://localhost:3000/images")
.then(resp => resp.json())
.then(images => renderImage(images))
}

function fetchComments(){
fetch("http://localhost:3000/comments")
.then(resp => resp.json())
.then(comments => renderComments(comments))
}

function renderImage(img){
    let imagePlace = document.querySelector("body > div > div > img")
    let titlePlace = document.querySelector("body > div > div > h2")
    let picture = img[0].image
    let title = img[0].title
    imagePlace.src = picture
    titlePlace.innerText = title
    console.dir(imagePlace.src);
}

function renderComments(com){

    
}

fetchImage()
})





// 2. Click on the heart icon to increase image likes, and still see them when I reload the page




// 3.  Add a comment (no persistance needed)