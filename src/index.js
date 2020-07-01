document.addEventListener("DOMContentLoaded", () => {
    getImage()
    like()
})

function getImage(){
    fetch('http://localhost:3000/images/1')
    .then(resp => resp.json())
    .then(image => { render(image) 
    })
}

function render(image){
    const imageCard = document.querySelector('.image-card')
    imageCard.innerHTML = `
    <h2 class="title">${image.title}</h2>
        <img src="${image.image}" class="image" />
        <div class="likes-section">
          <span class="likes">${image.likes} likes</span>
          <button class="like-button">♥</button>
    `
}

function like(){
    const likeBtn = document.querySelector('.like-button')
    const likes = document.querySelector('.likes')
    console.log(likes)
    // let likeNum = parseInt(likes)
    // console.log(likeNum)

    likeBtn.addEventListener('click', function(e){
        e.preventDefault()
        
        
    })
}
