const baseURL = "http://localhost:3000"
const fetchURL = "http://localhost:3000/images/1"
const commentsURL = "http://localhost:3000/comments"

document.addEventListener("DOMContentLoaded", function(){

postDog()

})


fetch(fetchURL)
.then(response => response.json())
.then(dog => {
   postDog(dog)
    })



function postDog(dog){
    let imageContainer = document.querySelector('.image-container')
    let title = document.querySelector('.title')
    let image = document.querySelector('.image')
    let comments = document.querySelector('.comments')

    title.innerText = `${dog.title}`
    image.src = `${dog.image}`
    comments = makeComments(dog)
}


function makeComments(dog){
    let commentSection = document.querySelector('.comments')
    let dogComments = dog.comments
    let content = dogComments.forEach(comment => {
        comment.content
    })
    commentSection.innerHTML = `
    <li>${content[0]}</li>
    <li>${content[1]}</li>
    <li>${content[2]}</li>
    `
}