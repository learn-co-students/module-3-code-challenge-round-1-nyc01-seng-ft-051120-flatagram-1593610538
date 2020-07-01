// write your code here
// √See the image received from the server, including its title, likes and comments when the page loads
// √Click on the heart icon to increase image likes, and still see them when I reload the page
// Add a comment (no persistance needed)


document.addEventListener("DOMContentLoaded", () => {
    const baseUrl = 'http://localhost:3000'
    const imageCard = document.querySelector(".image-card")
    const likeSpan = document.querySelector(".likes")
    const likeBtn = document.querySelector(".like-button")

    
// need an event listener for clicks
    // that click event target will be the heart
    // that click event will make a patch request to increase the inner text of the likes span + 1
document.addEventListener("click", e => {
    if (e.target.innerText === "♥"){
        patchLikes(e)
    }
})

 const patchLikes = (e) => {
     let likeId = e.target.dataset.id
     let newLikes = parseInt(likeSpan.innerText) + 1
     console.log(likeId)
     fetch(baseUrl+`/images/${likeId}`, {
         method: 'PATCH',
         headers: {"content-type":"application/json"},
         body: JSON.stringify({
             likes: newLikes
         })
     })
     .then(r => r.json())
     .then(likes => {
        //  likeSpan.innerText = likes
     })
     
 }



const renderImages = (images) => {
    images.forEach(image => {
        imageCard.children[0].innerText = `${image.title}` 
        imageCard.children[1].src = `${image.image}`
        
        likeSpan.innerText = `${image.likes} likes`
        likeBtn.dataset.id = `${image.id}`
    })
}    

const fetchImage = () => {
    fetch(baseUrl+'/images')
    .then(r => r.json())
    .then(images => renderImages(images))
}

    
fetchImage()
})