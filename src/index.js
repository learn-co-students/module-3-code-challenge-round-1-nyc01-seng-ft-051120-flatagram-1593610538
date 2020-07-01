// write your code here
document.addEventListener('DOMContentLoaded',function(){  
let getPictureCard = document.querySelector('.image-card')
let ul = document.querySelector('.comments')
const picApi = () => {fetch('http://localhost:3000/images?_embed=comments')
.then(resp => resp.json())
.then(json => json.forEach(pic => showPic(pic)))}

const showPic = (pic) =>{
  getPictureCard.dataset.id = pic.id
  let title = getPictureCard.querySelector('.title')
  let image = getPictureCard.querySelector('.image')
  let like = getPictureCard.querySelector('.likes')
  title.textContent = pic.title
  image.src= pic.image
  like.dataset.id = pic.id
  like.innerHTML = `<span>${pic.likes}</span> likes`
  let li = document.createElement('li')
pic.comments.forEach(e =>e.content)
}

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
 }

})}})

document.addEventListener('submit',function(e) {
  console.log(e)
})

picApi()
})