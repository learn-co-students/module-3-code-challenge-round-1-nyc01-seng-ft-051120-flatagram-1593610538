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
    }
    // const likeBtn = document.querySelector('.like-button')

    document.addEventListener('click', e => {
        const addLikes = parseInt(e.target.previousElementSibling.innerText) + 1
        fetch('http://localhost:3000/images/1',{
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({"likes": addLikes})
        })
        .then(res => res.json())
        .then(likeObj => {
            e.target.previousElementSibling.innerText = `${addLikes} likes`;
        })
    })
    

})





/*
1. fetch the image
2. add title ,likes & comments on DOM
 */

    // fetch('http://localhost:3000/comments')
    // .then(response => response.json())
    // .then(Comments => {
    //     comments.forEach(c => {
    //         renderComment(c)
    //     });
    // })

    // const renderComment =  c => {
    //     let comment = document.querySelector('.comments')
        // comment.innerHTML = addComment(image.comments)

    //     console.log(comment);

    // }