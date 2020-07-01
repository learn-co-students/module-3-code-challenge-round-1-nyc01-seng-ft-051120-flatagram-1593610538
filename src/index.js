// write your code here
// - See the image received from the server, including its title, likes and comments when the page loads
baseImage = "http://localhost:3000/images"
baseComments = "http://localhost:3000/comments"

document.addEventListener('DOMContentLoaded', () => {

    function fetchImages(){
        fetch(`#{baseImage}`)
        .then(resp => resp.json())
        .then(images => renderImages(images))
    }
   
    function renderImages(images){
        const newImage = document.querySelector(".image-card")
        images.forEach(image => {
            document.querySelector(".image").innerText = ${image.image}
            document.querySelector(".title").innerText = ${image.title}
            document.querySelector(".likes").innerText = ${image.likes}

        })
    }


})


// - Click on the heart icon to increase image likes, and still see them when I reload the page
// - Add a comment (no persistance needed)