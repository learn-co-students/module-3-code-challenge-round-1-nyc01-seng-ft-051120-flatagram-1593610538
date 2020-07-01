// write your code here
document.addEventListener('DOMContentLoaded', () => {
const commentHandler = () => {
  const postButton = document.getElementsByClassName('comment-button')[0]
  const formInputs = document.getElementsByClassName("comment-input")[0]
  console.log(postButton)
}

const increaselikes = () => {
  let likesElement =  document.getElementsByClassName("likes")[0]
  likesString = likesElement.innerText.split(" ")[0]
   likes = parseInt(likesString)
    likes += 1

    dogObj =     {
          "id": 1,
          "title": "Woofing those bugs away",
          "likes": `${likes}`,
          "image": "./assets/coder-dog.png"
        }

  fetch("http://localhost:3000/images/1",{
        method: "PATCH",
        headers: {
        'Content-Type' : 'application/json'
          },
        body: JSON.stringify(dogObj)
      })
       .then(response => response.json())
       .then(data => {
         console.log('Success:', data);
          likesElement.innerText = `${likes} likes`
 
         })
       .catch((error) => {
         console.error('Error:', error);
       })
     }

const likeHandler = () => {
  const likeButton = document.getElementsByClassName("like-button")[0]

   likeButton.addEventListener("click", function(e){
          increaselikes()
   })
}

const renderImage = data =>{
 const title = document.getElementsByClassName("title")[0]
 const imageFrame = document.images[1]
 const likes =  document.getElementsByClassName("likes")
 const ul = document.getElementsByClassName("comments")[0]
 const comments = data.comments
  title.innerText = data.title
  ul.innerHTML = ""
 comments.forEach((comment) => {
   const ul = document.getElementsByClassName("comments")[0]
    const li = document.createElement("li")
    li.innerText = comment.content
    ul.appendChild(li)

    });

 likes[0].innerText = `${data.likes} likes`
   console.log( data.likes)
   imageFrame.src = data.image
}

const getImage = () => {
  fetch("http://localhost:3000/images/1")
  .then(response => response.json())
       .then(data => {
         console.log('Success:', data);

            renderImage(data)
         })
       .catch((error) => {
         console.error('Error:', error);
       })
    }



   getImage()
   likeHandler()
   commentHandler()
//DOMContentLoaded
})
