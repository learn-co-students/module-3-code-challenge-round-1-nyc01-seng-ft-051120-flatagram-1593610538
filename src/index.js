// ## Core Deliverables

// As a user, I can:

// - See the image received from the server, including its title, likes and comments when the page loads
// - Click on the heart icon to increase image likes, and still see them when I reload the page
// - Add a comment (no persistance needed)

document.addEventListener("DOMContentLoaded", () => {

///// test3.js /////

    function renderImage(imgObj) {
        // shows image onto browser 
    
            const imageDiv = document.getElementsByClassName('image-card')
            image.innerHTML =   `
                                    <h2 class="title">Title of image goes here</h2>
                                    <div class="likes-section">
    
            
                                `
    
        }



    function fetchImage(url) {
    // gets image data from server 
        .then(response => response.json())
        .then(imageObject => renderImage(imageObject))
    }

    fetchImage("http://localhost:3000/images/1")


})

function updateLike(url, newNumber)
    fetch url, {
        method:     "PATCH",
        headers:    {
            "content-Type": "application/json"
            "Accept": "application/json"
        }
        body: JSON.stringify(
            likes: newNumber
        )
    }

    function updateLike(url, num) {
        fetch(url, {
          method: 'PATCH', 
          headers:
          {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            "likes": num
          })
        })
      }

    body.addEventListener("click", function(e) {
        if (e.target.className === "like-button")
        e.preventDefault() 
        const likesDiv = e.target.parentNode
        const likesText = likesDiv.querySelector('p')

        const likeInt = parseInt(likesText.innerText.split(" ")[0])
        const newLikes = (likeInt + 1)
        likesText.innerText = `${newLikes} Likes`
        updateLike()





























