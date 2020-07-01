document.addEventListener('DOMContentLoaded', () =>{
    // const baseURL = 'http://localhost:3000'
    fetch('http://localhost:3000/images/1')
    .then(response => response.json())
    .then(image => {
        renderImage(image)
    })

    const renderImage = image => {
        let title = document.querySelector('.title')
        title.innerText = image.title

        let img = document.querySelector('.image')
        img.src = image.image

        let likes = document.querySelector('.likes')
        likes.innerText = `${image.likes} likes`

        // comment.innerHTML = addComment(image.comments)
        
    }

    fetch('http://localhost:3000/comments')
    .then(response => response.json())
    .then(Comments => {
        comments.forEach(c => {
            renderComment(c)
        });
    })

    const renderComment =  c => {
        let comment = document.querySelector('.comments')
        console.log(comment);

    }

})





/*
1. fetch the image
2. add title ,likes & comments on DOM
 */