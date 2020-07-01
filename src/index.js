// write your code here
// - See the image received from the server, including its title, likes and comments when the page loads
document.addEventListener('DOMContentLoaded', () => {
 const BASE_IMG = `http://localhost:3000/images`
 const BASE_COMM = `http://localhost:3000/comments`
 fetchImages()
 fetchComments()
 addLike()




    function fetchImages(){
        fetch(BASE_IMG)
        .then(resp => resp.json())
        .then(images => getImages(images))

    }  
    
    function fetchComments(){
        fetch(BASE_COMM)
        .then(resp => resp.json())
        .then(comments => getComments(comments))
    }
   
    function getImages(images) {
        console.log(images)
        const imageCard = document.querySelector(".image-card")
        images.forEach(image => {
            let picture = document.querySelector(".image")
            picture.innerHTML = `<img src="${image.image}" />`
            let title = document.querySelector(".title")
            title.innerText = `${image.title}`
            let likes = document.querySelector(".likes")
            likes.textContent = `${image.likes}`
        })
    }

    function getComments(comments) {
        console.log(comments)

        const commentsLi = Array.from(document.getElementsByTagName("li"))

        comments.forEach(comment => {
            let allComments = document.querySelector(".comments")
            allComments.innerText = `${comment.content}`
        })
    }
        

 // - Click on the heart icon to increase image likes, and still see them when I reload the page

  function addLike() {
    document.addEventListener("click", (e) => {
        e.target.matches("like-button")
            const button = e.target
            const likeSpan = button.parentNode.querySelector("span")
            likeSpan.textContent = parseInt(likeSpan.textContent) + 1
        })
  }
})
// - Add a comment (no persistance needed)