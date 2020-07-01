// write your code here
// - See the image received from the server, including its title, likes and comments when the page loads
document.addEventListener('DOMContentLoaded', () => {
 const BASE_IMG = `http://localhost:3000/images`
 const BASE_COMM = `http://localhost:3000/comments`
 fetchImages()
 fetchComments()




    function fetchImages(){
        fetch(BASE_IMG)
        .then(resp => resp.json())
        .then(images => getImages(images))

    }  
    
    // function fetchComments(){
    //     fetch(BASE_COMM)
    //     .then(resp => resp.json())
    //     .then(comments => getComments(comments))
    // }
   
    function getImages(images) {
        console.log(images)
        const imageCard = document.querySelector(".image-card")
        images.forEach(image => {
            let picture = document.querySelector(".image")
            picture.innerText = ${image.image}
            let title = document.querySelector(".title")
            title.innerText = ${image.title}
            let likes = document.querySelector(".likes")
            likes.textContent = ${image.likes}
        })
        
    }


})


// - Click on the heart icon to increase image likes, and still see them when I reload the page
// - Add a comment (no persistance needed)