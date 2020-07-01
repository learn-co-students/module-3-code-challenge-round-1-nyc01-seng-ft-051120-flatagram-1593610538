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
  likesSection.addEventListener ('click', e => {
    if (e.target.className === 'like-button') {
      fetch('http://localhost:3000/images/1')
      .then(r => r.json())
      .then(data => {
        let likes = data.likes
        return likes
      })
      console.log(likes)
  }
})
}




fetchImage()
increaseLikes()