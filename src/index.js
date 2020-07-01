// write your code here
document.addEventListener('DOMContentLoaded',function(){  
let getPictureCard = document.querySelector('.image-card')
let ul = document.querySelector('.comments')
let commentForm = document.querySelector('.comment-form')
const picApi = () => {fetch('http://localhost:3000/images?_embed=comments')
.then(resp => resp.json())
.then(json => json.forEach(pic => showPic(pic)))}

const showPic = (pic) =>{
  getPictureCard.dataset.id = pic.id
  let title = getPictureCard.querySelector('.title')
  let image = getPictureCard.querySelector('.image')
  let like = getPictureCard.querySelector('.likes')
  commentForm.dataset.id = pic.id
  title.textContent = pic.title
  image.src= pic.image
  like.dataset.id = pic.id
  like.innerHTML = `<span>${pic.likes}</span> likes`
 
pic.comments.forEach(function(e){
   let li = document.createElement('li')
   let text = document.createTextNode(e.content)
   li.dataset.id = e.id
   li.appendChild(text);
   ul.appendChild(li)
})}

document.addEventListener('click',function(e){
if(e.target.textContent == '♥'){
  let likeCount = e.target.parentNode.children[0].querySelector('span')
let likies = likeCount.textContent = parseInt(likeCount.textContent)+1
  fetch(`http://localhost:3000/images/${e.target.parentNode.children[0].dataset.id}`,{
method : 'PATCH',
body: JSON.stringify({
  likes : likies
}),
 headers: {
   'content-type': 'application/json'
 }})}})

commentForm.addEventListener('submit',function(e) {
  e.preventDefault()
  let newLi = document.createElement("li")
  newLi.innerHTML = e.target.comment.value
  ul.append(newLi)
  console.log(commentForm.dataset.id)
  fetch('http://localhost:3000/comments',{
    method :"POST",
    body : JSON.stringify({
      imageId : parseInt(commentForm.dataset.id),
      content : newLi.innerHTML = e.target.comment.value
    }),
    headers :{
      'content-type':'application/json'
    }})
  commentForm.reset()})

picApi()
})