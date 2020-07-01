// write your code here


const fetchImage = () => {
  fetch('http://localhost:3000/images/1')
  .then(r => r.json())
  .then(data => {
    console.log(data)
    render(data)
  })
}

const render = (image) => {
  const photo = document.querySelector('.image')
  const title = document.querySelector('.title')
  const likes = document.querySelector('.likes')
  photo.src = image.image
  title.textContent = image.title
  likes.textContent = `${image.likes} likes`
}

fetchImage()