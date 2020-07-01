// write your code here
document.addEventListener('DOMContentLoaded',function(){  
let getPictureCard = document.querySelector('.image-card')

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
  like.textContent = `${pic.likes} likes`

}

picApi()
})