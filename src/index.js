// write your code here
const BASE_URL = "http://localhost:3000";
const IMAGES_URL = `${BASE_URL}/images`
const COMMENTS_URL = `${BASE_URL}/comments`

const imageElement = document.querySelector(".image");
const commentsList = document.querySelector(".comments");
const likesSection = document.querySelector(".likes-section");
console.log(likesSection);


function getImage() {
  fetch(`${IMAGES_URL}/1`)
    .then(res => res.json())
    .then(json => {
      renderPost(json)
      console.log(json);
      
    })
}

function renderPost(post) {
  // render image
  imageElement.src = post.image
  renderComments(post)
}

function renderComments(post) {
   const comments = Array.from(commentsList.children);
   for (const i in comments) {
     comments[i].innerText = post.comments[i].content
   } 
}

likesSection.addEventListener('click', e => {
  if (e.target.className.includes("like-button")) {

  }
})


patchPost(post) {
  // fetch(
  //   `${IMAGES_URL}/${post.id}`,
  //   {
  //     method: "POST",
  //     headers: {
  //       "Accept": "json/application",
  //       "Data-Type": "json/application"
  //     },
  //     body: JSON.stringify({
  //       comments: post.comments,
  //       id: post.id,
  //       image: post.image,
  //       likes: post.likes,
  //       title: post.title,
  //     })
  //   }
  // )
}


getImage()