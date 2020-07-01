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
        li.id = comment.id
        li.textContent = comment.content
        return li
    }

    const renderCommentLi = li => {
        commentUl = document.querySelector("ul.comments")
        commentUl.append(li)
        
    }



    getImageData("http://localhost:3000/images/1")
})