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
  const comments = document.querySelector('.comments')
  const likes = document.querySelector('.likes-section')
  likes.dataset.likes = image.likes
  comments.innerHTML = ''
  photo.src = image.image
  title.textContent = image.title
  likes.innerHTML = `
  <span class="likes">${image.likes} likes</span>
  <button class="like-button">♥</button>
  `

  const renderComment = (comment) => {
      const li = document.createElement('li')
      li.textContent = comment.content 
      comments.appendChild(li)
  }

  image.comments.forEach(comment => renderComment(comment))
}

const increaseLikes = () => {
  const likesSection = document.querySelector('.likes-section')
  likesSection.addEventListener('click', e => {
    if (e.target.classname = 'like-button') {
      const likes = document.querySelector('.likes-section')
      const likeCount = parseInt(likes.dataset.likes)
      const likeObj = {
        likes: likeCount
      }
      console.log(likeObj)
    }
  })
}


const postComment = () => {
  const comment = document.querySelector('.comment-form')
  comment.addEventListener('submit', e => {
    e.preventDefault()
    const input = document.querySelector(".comment-input")
    const commList = document.querySelector('.comments')
    const newComm = document.createElement('li')
    newComm.innerText = input.value
    commList.append(newComm)
  })
}

fetchImage()
postComment()
increaseLikes()