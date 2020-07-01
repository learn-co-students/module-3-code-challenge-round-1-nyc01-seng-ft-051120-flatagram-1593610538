// write your code here
// http://localhost:3000
// ENDPOINTS
// GET /images/1
// PATCH /images/1
// POST /comments
// DELETE /comments/:id

// ++ On page load render title, likes, comments

// ++ click on heart increases likes
// ++ use fetch patch to persist the likes

// ++ add comments (dont need to do a POST)

// ++ add a downvote



document.addEventListener("DOMContentLoaded", function(e){

    const commentsUl = document.querySelector(".comments")

    fetch("http://localhost:3000/images/1")
    .then(response => response.json())
    .then(data =>{
        renderPost(data)
    })

    function renderPost(data){
        // console.log(data.comments)
        const pictComments = data.comments
        const imageCard = document.querySelector(".image-card")
        const likesSection = document.querySelector(".likes-section")
        imageCard.querySelector(".title").textContent = data.title
        imageCard.querySelector("img").src = data.image
        likesSection.querySelector(".likes").textContent = `${data.likes} likes`
        pictComments.forEach(comment =>{
            renderComments(comment)
        })
    }

    function renderComments(data){
        // console.log(data)
        const createdComments = document.createElement("li")
        createdComments.textContent = data.content
        commentsUl.append(createdComments)
    }

    document.addEventListener("click", function(e){
        if (e.target.className === "like-button"){
            // console.log(e.target.parentNode.querySelector(".likes"))
            const addLike = e.target.parentNode.querySelector(".likes")
            addLike.textContent = `${parseInt(addLike.textContent) + 1} likes`

            fetch("http://localhost:3000/images/1", {
                method: "PATCH",
                body: JSON.stringify({
                    "likes": parseInt(addLike.textContent)
                }),
                headers: {
                    "Content-type": "application/json",
                    "Accept": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => console.log(data))
        } else if (e.target.className === "unlike-button"){
            // console.log(e.target.parentNode.querySelector(".likes"))
            const addLike = e.target.parentNode.querySelector(".likes")
            addLike.textContent = `${parseInt(addLike.textContent) - 1} likes`

            fetch("http://localhost:3000/images/1", {
                method: "PATCH",
                body: JSON.stringify({
                    "likes": parseInt(addLike.textContent)
                }),
                headers: {
                    "Content-type": "application/json",
                    "Accept": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => console.log(data))
        }

    document.addEventListener("submit", function(e){
        e.preventDefault()
        // console.log(e.target)
        const newComment = e.target.comment.value
        const createNewComment = document.createElement("li")
        createNewComment.textContent = newComment
        commentsUl.append(createNewComment)
        e.target.reset()

        fetch("http://localhost:3000/images/1/comments", {
            method: "POST",
            body: JSON.stringify({
                "imageId": 1,
                "content": newComment
            }),
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => console.log(data))

    })

    
    
    })
    
})