// write your code here
// http://localhost:3000
// ENDPOINTS
// GET /images/1
// PATCH /images/1
// POST /comments
// DELETE /comments/:id

// On page load render title, likes, comments

// click on heart increases likes
// use fetch patch to persist the likes

//add comments (dont need to do a POST)

document.addEventListener("DOMContentLoaded", function(e){

    fetch("http://localhost:3000/images/1")
    .then(response => response.json())
    .then(data =>{
        renderPost(data)
    })

    function renderPost(data){
        console.log(data.comments)
        const imageCard = document.querySelector(".image-card")
        const likesSection = document.querySelector(".likes-section")
        const comments = document.querySelector(".comments")
        const createdComments = document.createElement("li")
        imageCard.querySelector(".title").textContent = data.title
        imageCard.querySelector("img").src = data.image
        // likesSection.querySelector(".likes") = `${data.likes} likes`
        
        // renderComments(data)
    }

    // function renderComments(data){
    //     console.log(data)
    // }

    
})