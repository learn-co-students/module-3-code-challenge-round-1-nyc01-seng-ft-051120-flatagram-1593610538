// write your code here
document.addEventListener('DOMContentLoaded', () => {
    
    let commentsPlace = document.querySelector("body > div > div > ul")
// 1. See the image received from the server, including its title, likes and comments when the page loads

function fetchImage(){
fetch("http://localhost:3000/images")
.then(resp => resp.json())
.then(images => renderImage(images))
}

function renderImage(img){
    let image = document.querySelector("body > div > div > img")
    console.log(image);
    
    let picture = img.image
    console.log(picture);
    

    // image.append(picture)
}

fetchImage()
})





// 2. Click on the heart icon to increase image likes, and still see them when I reload the page




// 3.  Add a comment (no persistance needed)