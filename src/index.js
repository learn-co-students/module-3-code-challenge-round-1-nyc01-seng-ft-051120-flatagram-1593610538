// write your code here
//As a user, I can:

//See the image received from the server, including its title, likes and comments when the page loads
    //function getImages
    //renderImage
    // title: "", likes: , comments: ""

// Click on the heart icon to increase image likes, and still see them when I reload the page
    // remember the function nodefault on refresh on this ^^
    // const heartButton

// Add a comment (no persistance needed)

const images = []

document.addEventListener("DOMContentLoaded",(event)=>{
    console.log('DOM loaded');

    getImages()


});

function getImages(){
    fetch('http://localhost:3000/images/1')
    .then(response => response.json())
    .then(images => console.log(images))
    
}

function renderImage(){
    fetch('http://localhost:3000/images/1'),{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }
}