// write your code here
const url = 'http://localhost:3000/images/1'
const commentsUrl = 'http://localhost:3000/comments'

document.addEventListener('DOMContentLoaded', function(e){

    function getImage() {
        fetch(url)
        .then(resp => resp.json())
        .then(renderImage)
    }

    function renderImage(data) {
        const divCard = document.querySelector("body > div > div")
        const title = document.querySelector('h2')
        const imgContainer = document.querySelector("body > div > div > img")
        const likes = document.querySelector('span')
        const comments = document.querySelector('ul')
        
        divCard.dataset.id = data.id
        title.innerHTML = data.title
        imgContainer.src = data.image 
        likes.innerHTML = `${data.likes} Likes`
        comments.innerHTML = ""

        data.comments.forEach(comment => {
            const commentLi = document.createElement('li')
            commentLi.innerHTML = `${comment.content}`
            comments.append(commentLi)
        })
    }

    document.addEventListener('click', function(e){
        if(e.target.className === "like-button") {
            const likeButton = e.target
            const likes = likeButton.parentNode.querySelector('span')
            const newlikes = parseInt(likes.textContent) + 1
            // const id = likeButton.parentNode.parentNode.dataset.id
            
            fetch(url, {
                method : "PATCH",
                headers : {
                    "Content-Type": "Application/json",
                    "Accept": "Application/json"
                },
                body : JSON.stringify({ likes: newlikes })
            })
            .then(resp => resp.json())
            .then(likes.textContent = newlikes)

        }
    })

    function appendComment(newComment){
        const ul = document.querySelector('ul')
        const li = document.createElement('li')
        li.innerHTML = `${newComment}`
        ul.append(li)
    }

    document.addEventListener('submit', function(e){
        e.preventDefault()
        const form = e.target

        const newComment = form.comment.value
        const comment = {
            imageId : 1,
            content : newComment
        }

        fetch(commentsUrl, {
            method : "POST",
            headers : {
                "Content-Type": "Application/json",
                "Accept": "Application/json"
            },
            body : JSON.stringify(comment)
        })
        .then(resp => resp.json)
        .then(appendComment(newComment))
        
    })

    getImage()
})