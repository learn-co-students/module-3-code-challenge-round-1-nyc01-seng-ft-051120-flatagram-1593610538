// write your code here
//As a user, I can:

//See the image received from the server, including its title, likes and comments when the page loads
    //function getImages
    //renderImage
    // title: "", likes: , comments: ""

// Click on the heart icon to increase image likes, and still see them when I reload the page
    // remember the function even.preventDefault() on refresh on this ^^
    // const heartButton

// Add a comment (no persistance needed)

let images = []
const imageTitle = document.querySelector('#title')
const imgSrc = document.querySelector('#image')
const likes = document.querySelector('#likes')

document.addEventListener("DOMContentLoaded",(event)=>{
    console.log('DOM loaded');

    getImages()

});

function getImages(){
    fetch('http://localhost:3000/images/1')
    .then(response => response.json())
    .then(images => console.log(images))
    .then(images => renderImages(images))

    

function renderImages(){
    images.forEach(image =>{
        imageTitle.innerText = `${image.title}`

    })
}