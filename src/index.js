// write your code here
const BASE_URL = "http://localhost:3000";
const IMAGES_URL = `${BASE_URL}/images`
const COMMENTS_URL = `${BASE_URL}/comments`

const imageElement = document.querySelector(".image");
const commentsList = document.querySelector(".comments");


function getImage() {
  fetch(`${IMAGES_URL}/1`)
    .then(res => res.json())
    .then(json => renderPost(json))
}

function renderPost(image) {
  imageElement.src = image.image
  const comments = Array.from(commentsList.children);
}



getImage()