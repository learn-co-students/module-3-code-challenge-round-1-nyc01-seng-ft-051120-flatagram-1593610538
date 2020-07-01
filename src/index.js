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
    json = await (await fetch(`${IMAGES_URL}/1`)).json()
  } catch (error) {
    console.log();
  }
  return json

  // fetch(`${IMAGES_URL}/1`)
  //   .then(res => res.json())
  //   .then(json => {
  //     renderPost(json)
  //   })
}

requestPost = async () => {
  const json = await getImage();
  console.log(json);
  
  renderPost(json);
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
    
  }
})


function patchPost(post) {
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
        image: `https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
        likes: `${post.likes}`,
        title: `${post.title}`,
      })
    }
  )
}


requestPost()