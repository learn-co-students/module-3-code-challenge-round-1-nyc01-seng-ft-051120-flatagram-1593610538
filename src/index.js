document.addEventListener("DOMContentLoaded", () => {
    getImage()
    getComments()
    // like()
})
const commentSection = document.querySelector('.comments')
function getImage(){
    fetch('http://localhost:3000/images/1')
    .then(resp => resp.json())
    .then(image => { renderImage(image) 
    })
}

function getComments(){
    fetch('http://localhost:3000/comments')
    .then(resp => resp.json())
    .then(comments =>
    //      {comments.forEach(comment => {
    //     renderComments(comment)

    // });}
    renderComments(comments)
    )
}

function renderImage(image){
    const imageCard = document.querySelector('.image-card')
    imageCard.innerHTML = `
    <h2 class="title">${image.title}</h2>
        <img src="${image.image}" class="image" />
        <div class="likes-section">
          <span class="likes">${image.likes} likes</span>
          <button class="like-button">♥</button>
          </div>
    `
}

function renderComments(comments){
    const imageCard = document.querySelector('.image-card')
    // let commentsUl = document.querySelector('.comments')
    // let commentLi = document.getElementsByTagName('li')
    comments.forEach(comment => {
        imageCard.innerHTML += `
    <ul class="comments">
          <li>${comment.content}</li>
        </ul>`
    });

    //     imageCard.innerHTML =
    //     `<form class="comment-form">
    //       <input
    //         class="comment-input"
    //         type="text"
    //         name="comment"
    //         placeholder="Add a comment..."
    //       />
    //       <button class="comment-button" type="submit">Post</button>
    //     </form>
    // `


}

// function like(){
//     const likeBtn = document.querySelector('.like-button')
//     let likes = parseInt(document.querySelector('.likes').innerText)
//     let likeNum = document.querySelector('.likes').innerText

//     likeBtn.addEventListener('click', function(e){
//         // if(e.target === likeBtn){
//             // e.preventDefault()
//         // likes + 1
//         // likeNum = `${likes} likes`
//         console.log*likes
//         // }
        
        
        
//     })
// }


{/* <ul class="comments">
          <li>${comment.comment}</li>
        </ul>
        <form class="comment-form">
          <input
            class="comment-input"
            type="text"
            name="comment"
            placeholder="Add a comment..."
          />
          <button class="comment-button" type="submit">Post</button>
        </form> */}