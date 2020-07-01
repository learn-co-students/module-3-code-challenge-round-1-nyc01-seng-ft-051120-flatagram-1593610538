// write your code here
document.addEventListener("DOMContentLoaded", function(e){


    function renderComment(comment){
        const commentsUl = document.querySelector('ul')
        const commentLi = document.createElement('li')
        commentLi.innerText = `${comment.content}`
        commentsUl.append(commentLi)
    }

    function renderComments(comments){
        comments.forEach(comment => renderComment(comment))
    }

    function fetchComments(url){
        fetch(url)
        .then(resp => resp.json())
        .then(commentObjects => renderComments(commentObjects))
    }
    fetchComments("http://localhost:3000/comments")



    function renderImageAndTitle(imageObj){
        const imageCard = document.getElementsByClassName("image-card")[0]
        const title = imageCard.querySelector('h2')
        title.innerText = `${imageObj.title}`
        const image = imageCard.querySelector('img')
        image.src = `${imageObj.image}`
        const likes = 
    }


    function fetchImageDetails(url){

        fetch(url)
    }
    renderImageDetails("http://localhost:3000/images/1")












})
