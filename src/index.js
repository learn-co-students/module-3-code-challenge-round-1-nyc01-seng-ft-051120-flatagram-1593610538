// ## Core Deliverables

// As a user, I can:

// - See the image received from the server, including its title, likes and comments when the page loads
// - Click on the heart icon to increase image likes, and still see them when I reload the page
// - Add a comment (no persistance needed)

document.addEventListener("DOMContentLoaded", () => {



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







    

})

http://localhost:3000