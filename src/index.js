// write your code here
// fetch PATCH for likes
// click event listener

// See the image received from the server, including its title, likes and comments when the page loads
//  fetch GET for image, title, likes, comment
//  insert data into existing HTML
// Click on the heart icon to increase image likes, and still see them when I reload the page
//  fetch PATCH for likes
//  update DOM with new like count
// Add a comment (no persistance needed)
//   submit event listener on form
//   render li with the value of the value input 
//   add li to comment Ul
//   reset form


document.addEventListener("DOMContentLoaded", function(e){
    const container = document.querySelector("div.image-container")
    const getImageData = url => {
        return fetch(url)
        .then(resp => resp.json())
        .then(imgObj => renderObj(imgObj))
    }

    const renderObj = imageObj => {
        addIdToCard(imageObj.id)
        renderImg(imageObj.image)
        renderTitle(imageObj.title)
        renderLikes(imageObj.likes)
        renderComments(imageObj.comments)
    }

    const addIdToCard = imgId => {
        const card = document.querySelector("div.image-card")
        card.id = imgId
        const likeButton = document.querySelector(".like-button")
        likeButton.id = imgId       
    }

    const renderImg = image => {
        const imgTag = container.querySelector("img")
        imgTag.src = image
    }

    const renderTitle = imgTitle => {
        const titleTag = document.querySelector(".title")
        titleTag.textContent = imgTitle
    }

    const renderLikes = imgLikes => {
        const likesSpan = document.querySelector("span.likes")
        likesSpan.textContent = `${imgLikes} Likes`
    }

    const renderComments = imgComments => {
        imgComments.forEach(comment => {
            const li = createCommentLi(comment)
            renderCommentLi(li)
        })
    }

    const createCommentLi = comment => {
        const li = document.createElement("li")
        // li.id = comment.id
        li.textContent = comment.content
        return li
    }

    const renderCommentLi = li => {
        const commentUl = document.querySelector("ul.comments")
        commentUl.append(li)
    }

    const clickHandler = () => {
        document.addEventListener("click", function(e){
            if (e.target.className === "like-button") {
                const button = e.target
                const likeSpan = document.querySelector("span.likes")
                const likeSpanContent = likeSpan.textContent
                const currentLikes = likeSpanContent.split(' ')[0]
                const imgId = button.id
                const newLikes = updateLikes(currentLikes, imgId)                
            }
        })
    }

    const submitHandler = () => {
        const form = document.querySelector(".comment-form")
        form.addEventListener("submit", function(e){
            e.preventDefault()
            const input = form.querySelector('input').value
            const li = document.createElement("li")
            li.textContent = input
            const commentUl = document.querySelector("ul.comments")
            commentUl.append(li)
            form.reset()
                    
        
        })
    }

    const updateLikes = (currentLikes, imgId) => {
        const newLikes = parseInt(currentLikes) + 1
        const url = `http://localhost:3000/images/${imgId}`
        return fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                likes: `${newLikes}`
            })
        })
        .then(resp => resp.json())
        .then(obj => {
                renderLikes(obj.likes)
        })
        
    }




    getImageData("http://localhost:3000/images/1")
    clickHandler()
    submitHandler()
})