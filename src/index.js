// write your code here
document.addEventListener('DOMContentLoaded', () => {
    
    
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
    //console.dir(imagePlace.src);
}

function renderComments(com){
    let commentsPlace = document.querySelector("body > div > div > ul")
    //console.dir(commentsPlace.children[0]);
    commentsPlace.children[0].innerHTML = com[0].content
    commentsPlace.children[1].innerHTML = com[1].content
    commentsPlace.children[2].innerHTML = com[2].content
}

// 2. Click on the heart icon to increase image likes, and still see them when I reload the page
// zlap lika i dodaj listenera
// zwieksz liczke likes przy kazdym kliknieciu
// wprowadz do DOM

let heart = document.querySelector("body > div > div > div > button")
heart.addEventListener('click', function(e){
    let heartButton = e.target
    //console.log(heartButton.previousElementSibling.textContent);
    let currentLikes = praseInt(heartButton.previousElementSibling.textContent);
    let newLikes =currentLikes + 1
    heartButton.previousElementSibling.textContent + newLikes

    fetch("http://localhost:3000/images")
})


fetchComments()
fetchImage()
})










// 3.  Add a comment (no persistance needed)