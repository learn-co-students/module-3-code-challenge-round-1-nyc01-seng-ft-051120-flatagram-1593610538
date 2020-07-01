// write your code here
const BASE_URL = "http://localhost:3000"
const IMGES_URL = `${BASE_URL}/images/1`
const COMMENTS_URL = `${BASE_URL}/comments`

document.addEventListener("DOMContentLoaded",()=>{
  fetcher(IMGES_URL,displayDog,console.log)
  addClickEvents()
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
  imageCard.querySelector(".title").textContent = dog.title
  imageCard.querySelector(".image").src = dog.image
  imageCard.querySelector(".likes").textContent = `${dog.likes} likes`
  imageCard.querySelector(".like-button").dataset.id = dog.id
  imageCard.querySelector(".comments").innerHTML = createDogComments(dog.comments)
}

function createDogComments(comments){
  let commentsHTMLString = ""
  comments.forEach(comment => {
    commentsHTMLString += `<li data-comment-id="${comment.id}">${comment.content}</li>`
  });  
  return commentsHTMLString
}

function addClickEvents(){
  document.querySelector("button.like-button").addEventListener("click", e =>{
    id = e.target.dataset.id
    
  })
}
