// write your code here


const fetchImage = () => {
  fetch('http://localhost:3000/images/1')
  .then(r => r.json())
  .then(data => {
    // console.log(data)
    render(data)
  })
}

const render = (image) => {
  const photo = document.querySelector('.image')
  const title = document.querySelector('.title')
  const comments = document.querySelector('.comments')
  comments.innerHTML = ''
  photo.src = image.image
  title.textContent = image.title

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
      const likeCounter = document.querySelector()
    }
  })
}


const postComment = () => {
  const comment = document.querySelector('.comment-form')
  comment.addEventListener('submit', e => {
    e.preventDefault()
    const commList = document.querySelector('.comments')
    const newComm = document.createElement('li')
    newComm.textContent = comment.firstChild.value
    console.log(newComm.textContent)
  })
}

fetchImage()
postComment()
increaseLikes()