// write your code here
const BASE_URL = "http://localhost:3000";
const IMAGES_URL = `${BASE_URL}/images`
const COMMENTS_URL = `${BASE_URL}/comments`

const imageElement = document.querySelector(".image");
const commentsList = document.querySelector(".comments");
const likesSection = document.querySelector(".likes-section");



getImage = async () => {
  let json = {}
  try {
    res = await fetch(`${IMAGES_URL}/1`)
    json = await res.json()
    console.log(json);
  } catch (error) {
    console.log(error);
  }
  return json
  // fetch(`${IMAGES_URL}/1`)
  //   .then(res => res.json())
  //   .then(json => {
  //     renderPost(json)
  //   })
}

reqPost = async () => {
    let json = await getImage()
    renderPost(json)
}

function renderPost(post) {
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

  likePost()
    
  }
})

likePost = async () => {
  let json = await getImage();
  json.likes = await (parseInt(json.likes) + 1).toString()
  console.log("likes",json);
  patchPost(json)
}


patchPost = post => {

  fetch(
    `${IMAGES_URL}/1`,
    {
      method: "PATCH",
      headers: {
        "Accept": "json/application",
        "Data-Type": "json/application",
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        image: `${post.image}`,
        likes: `${post.likes}`,
        title: `${post.title}`,
      })
    }
  )
}


reqPost()