// write your code here
const BASE_URL = "http://localhost:3000"
const IMGES_URL = `${BASE_URL}/images/1`
const COMMENTS_URL = `${BASE_URL}/comments`

document.addEventListener("DOMContentLoaded",()=>{
  fetcher(IMGES_URL,displayDog,console.log)
  addClickEvents()
  addSubmitEvent()
})

function fetcher (url,successCallback,errorCallback,data = {},method="GET"){
  fetch(url,createServerData(data,method))
  .then(resp => resp.json())
  .then (data => successCallback(data))
  .catch(err => errorCallback(err))
}

function createServerData(data,method){
  const serverData = {
    method: method,
    headers:{
      'Content-Type' : 'application/json',
      'Accept':'application/json'
    }
  }

  if (!isEmptyObject(data)){
    serverData['body'] = JSON.stringify(data)
  }
  return serverData
}

function isEmptyObject(data){
  return Object.keys(data).length === 0;
}

function displayDog(dog){
  const imageCard =  document.querySelector(".image-card")
  imageCard.dataset.id = dog.id
  imageCard.querySelector(".title").textContent = dog.title
  imageCard.querySelector(".image").src = dog.image
  updateDogLikes(dog)
  imageCard.querySelector(".like-button").dataset.id = dog.id
  imageCard.querySelector(".comments").innerHTML = createDogComments(dog.comments)
}

function createDogComments(comments){
  let commentsHTMLString = ""
  comments.forEach(comment => {
    commentsHTMLString += `<li data-comment-id="${comment.id}">${comment.content}</li>`
  });  
  console.log(comments);
  
  return commentsHTMLString
}

function addClickEvents(){
  document.querySelector("button.like-button").addEventListener("click", e =>{
    id = e.target.dataset.id
    likes = parseInt(e.target.dataset.likes) + 1
    fetcher(IMGES_URL,updateDogLikes,console.log,{likes},"PATCH")
  })
}

function updateDogLikes(dog){
  const imageCard =  document.querySelector(".image-card")
  imageCard.querySelector(".likes").textContent = `${dog.likes} likes`
  imageCard.querySelector(".like-button").dataset.likes = dog.likes
}

function addSubmitEvent(){
  document.querySelector(".comment-form")
  .addEventListener("submit", e => {
    e.preventDefault()
    const content = e.target.comment.value
    const imageId = parseInt(e.target.parentNode.dataset.id)
    fetcher(COMMENTS_URL,addNewComment,console.log,{imageId,content},"POST")     
  })
}

function addNewComment(comment){
 const commentsUl = document.querySelector(`div[data-id="${comment.imageId}"] ul.comments`)
 commentsUl.insertAdjacentHTML("beforeend",`<li data-comment-id="${comment.id}">${comment.content}</li>`)
 clearForm()
}

function clearForm(){
  document.querySelector(".comment-form").reset()
}