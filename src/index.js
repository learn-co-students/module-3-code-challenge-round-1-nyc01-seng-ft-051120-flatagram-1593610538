

const imageCard = document.querySelector(`.image-container`)
const imageUrlContainer = document.querySelector(`.image`)
const likesSpan = document.querySelector(`.likes`)
const commentsUl = document.querySelector(`.comments`)
const titleH1 = document.querySelector(`.title`)
const likeButton = document.querySelector(`.like-button`)
const commentForm = document.querySelector(`.comment-form`)
const commentButton = document.querySelector(`.comment-button`)

imageUrl = "http://localhost:3000/images/1"
commentsUrl = "http://localhost:3000/comments"
commentUrl = "http://localhost:3000/comments/:id"

document.addEventListener(`DOMContentLoaded`, e => {

getImage(e)

})

const getImage = () => {

    fetch(imageUrl)
    .then(response => response.json())
    .then(image => renderImage(image))  
}


const renderImage = (image) => {
    
    titleH1.innerText = `${image.title}`
    imageUrlContainer.src = `${image.image}`
    likesSpan.innerText = `${image.likes} likes`
    commentsUl.innerText = ``
    console.log(image.comments)
        image.comments.forEach(comment => {
        commentLi = document.createElement(`li`)
        commentLi.innerText = `${comment.content}`
        commentsUl.append(commentLi)
        })
}


// - See the image received from the server, including its title, likes and comments when the page loads



// dom content loaded with render image function
//getImage function
//fetch to imageUrl 
//renderimage function called

// 1.
//renderImage function (image)
// take image url title likes and comments
//set each as info from image 
// set likes and id in dataset

//2. click event listener on like button
// inside event listener a function addLikes
// else if target is form, submit listener

//add likes:
// takes currentLikes and adds a like
//current likes comes from dataset on likes 
// patch request updates likes
// note: you can increase likes without reloading the page, but it makes a post each click

// 3. addComment
// define form as form
// create commentObj with comment text
// post request with comment obj
// renderpage function







// - Click on the heart icon to increase image likes, and still see them when I reload the page
// - Add a comment (no persistance needed)
