// ## Core Deliverables

// As a user, I can:

// - See the image received from the server, including its title, likes and comments when the page loads
// - Click on the heart icon to increase image likes, and still see them when I reload the page
// - Add a comment (no persistance needed)

    ///// test.js ///// 

document.addEventListener("DOMContentLoaded", () => {



    function renderImage(imgObj) {
    // shows image onto browser 

        const imageContainer = document.getElementsByClassName('image-container')
        const imageDiv = document.getElementsByClassName('image-card') 
        imageDiv.innerHTML =   `
        <h2 class="title">${immgObject.title}</h2>
        <img src="./assets/image-placeholder.jpg" class="image" />
        <div class="likes-section">
            <span class="likes">0 likes</span>
            <button class="like-button">♥</button>
        </div>
                                ${imgObject.id}
                                
                                ${imgObject.likes}
                                ${imgObject.image}
        
                            `

    }

    function fetchImage(url) {
    // gets image data from server 
        .then(response => response.json())
        .then(imageObject => renderImage(imageObject))
    }

// test.js







    

})

http://localhost:3000