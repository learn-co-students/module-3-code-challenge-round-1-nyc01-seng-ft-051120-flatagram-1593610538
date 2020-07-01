// write your code here
// - See the image received from the server, including its title, likes and comments when the page loads
document.addEventListener('DOMContentLoaded', () => {

 const BaseImage = `http://localhost:3000/images`
 const BaseComments = `http://localhost:3000/comments`



    function fetchImages(){
        fetch(`http://localhost:3000/images`)
        .then(resp => resp.json())
        .then(console.log)

    }
    // }  function fetchComments(){
    //     fetch(BaseComments)
    //     .then(resp => resp.json())
    //     .then(comments => getImages(comments))
    // }
   
    // function getImages(images, comments) {
        
        // const newImage = document.querySelector(".image-card")
        // images.forEach(image => {
        //     document.querySelector(".image").innerText = ${image.image}
        //     document.querySelector(".title").innerText = ${image.title}
        //     document.querySelector(".likes").innerText = ${image.likes}
    //     })
    //     comments.forEach(comment => {
    //         document.querySelector("")
    //     })
    // }


})


// - Click on the heart icon to increase image likes, and still see them when I reload the page
// - Add a comment (no persistance needed)