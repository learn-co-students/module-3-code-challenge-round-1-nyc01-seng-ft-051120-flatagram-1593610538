// ## Core Deliverables

// As a user, I can:

// - See the image received from the server, including its title, likes and comments when the page loads
// - Click on the heart icon to increase image likes, and still see them when I reload the page
// - Add a comment (no persistance needed)

document.addEventListener("DOMContentLoaded", () => {



    function renderImage(imgObj) {
    // shows image onto browser 

    }



    function fetchImage(url) {
    // gets image data from server 
        .then(response => response.json())
        .then(imageObject => renderImage(imageObject))
    }







    

})

http://localhost:3000