//Things I've noted but couldn't debug:
//  - When adding comments to the pic, they display inline instead of block

const baseURL = "http://localhost:3000"
const fetchURL = "http://localhost:3000/images/1"
const commentsURL = "http://localhost:3000/comments"

document.addEventListener("DOMContentLoaded", function(){

fetchDog()
postDog()

})

function fetchDog(){
fetch(fetchURL)
.then(response => response.json())
.then(dog => {
   postDog(dog)
    })
}

function postDog(dog){
    let title = document.querySelector('.title')
    let image = document.querySelector('.image')
    let comments = document.querySelector('.comments')
    let likes =  document.querySelector('span')

    title.innerText = `${dog.title}`
    image.src = `${dog.image}`
    likes.innerText = `${dog.likes}`
    comments = makeComments(dog)
}

function makeComments(dog){
    let commentSection = document.querySelector('.comments')
    let dogComments = dog.comments
    let content = dogComments.map(comment => comment.content)
   
    commentSection.innerHTML = `
    <li>${content[0]}</li>
    <li>${content[1]}</li>
    <li>${content[2]}</li>
    `
}


document.addEventListener('click', function(e){
    if (e.target.className === "like-button"){
        let likes = document.querySelector('span')
        likes.innerText =`${parseInt(likes.innerText) + 1} likes`

        let formObj = {
            "likes": likes.innerText
        }

     fetch(fetchURL, {
         method: "PATCH",
         headers: {
             "content-type": "application/json",
             "accept": "application/json"
         },
         body: JSON.stringify (formObj)
      })

    }
})


document.addEventListener('submit', function(e){
    e.preventDefault()
    if (e.target.className ===  "comment-form"){
        let form = document.querySelector('.comment-form')
        let input = document.querySelector('.comment-input')
        let newComment = input.value
        let li = document.createElement('li')
        li.innerText= newComment
        let ulContainer = document.querySelector('.comments')
        ulContainer.append(newComment)
        form.reset()
    }
})