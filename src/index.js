// write your code here
document.addEventListener("DOMContentLoaded", function(e){


    // function renderComment(comment){
    //     const commentsUl = document.querySelector('ul')
    //     const commentLi = document.createElement('li')
    //     commentLi.innerHTML = 
    //         `<p>${comment.content}</p>
    //         <button value=""`
    //     commentsUl.append(commentLi)
    // }

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



    function renderImageDeets(imageObj){
        const imageCard = document.getElementsByClassName("image-card")[0]
        const title = imageCard.querySelector('h2')
        title.innerText = `${imageObj.title}`
        const image = imageCard.querySelector('img')
        image.src = `${imageObj.image}`
        const likes = imageCard.querySelector('div').querySelector('span')
        likes.innerText = `${imageObj.likes} likes`
    }

    function fetchImageDetails(url){
        fetch(url)
        .then(resp => resp.json())
        .then(imgObject => renderImageDeets(imgObject))
        .catch (error => console.log(error))
    }
    fetchImageDetails("http://localhost:3000/images/1")




    function updateLikesWithPatch(url, num){
        fetch(url, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                likes: num
            })
        })
        .then(resp => resp.json())
        .then(console.log)
        .catch (error => console.log(error))
    }

    document.addEventListener("click", function(e){
        if (e.target.className === 'like-button'){

            const likesText = e.target.parentNode.querySelector('span')
            const currentNum = parseInt(likesText.innerText.split(" ")[0])
            const newNum = currentNum +1

            likesText.innerText = `${newNum} likes`

            updateLikesWithPatch("http://localhost:3000/images/1", newNum)
        }
    })



    function persistNewComment (url, newCommentObj){
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newCommentObj)
        })
        .then(resp => resp.json())
        .then(comment=> renderComment(comment))
        .catch (error => console.log(error))
    }
    
    document.addEventListener("submit", function(e){
        e.preventDefault()

        const form = e.target
        const newCommentObj = 
            {
            imageId: 1,
            content: form.comment.value
            }

        // renderComment(newCommentObj)
        persistNewComment ("http://localhost:3000/comments", newCommentObj)
        form.reset()
    })



    
})
