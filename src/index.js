// test1.js
// test2.js

document.addEventListener("DOMContentLoaded", () => {

// GET `/images/1`:

    function renderImage(imgObj) {
    // I couldn't get some of the following (e.g. 'imgDiv') to work, so just had to hard-code it for now 

        const imgContainer          = document.getElementsByClassName('image-container')
        const imgCard               = document.getElementsByClassName('image-card')
        const imgTitle              = document.getElementsByClassName('title')
            imgTitle.innerHTML      = `${imgObj.title}`
        const imgImage              = document.getElementsByClassName('image') 
            imgDiv                  = `<img src="./assets/coder-dog.png" class="image" />`               
        const likesDiv              = document.getquerySelectorByClassName('likes-section')
            likesDiv[0].innerHTML   =`<span class="likes">0 likes</span>`
            likesDiv[1].innerHTML   = `<button class="like-button">♥</button>`
    }

    function fetchImages(url) {
    // gets images data from server 
        fetch(url)
            .then(response => response.json())
            .then(imagesObject => renderImages(imagesObject))
    }

    fetchImages("http://localhost:3000/images")

    imgContainer.append(imgDiv)

 // PATCH `/images/1`: 
        // I was able to get to only one of the buttons :/

    function updateImageLikes(url, number)
        fetch(url, configObj) {
        configObject = {
            method:                 'PATCH',
            headers: {
                                    "Content-Type": "application/json",
                                    "Accept": "application/json"
            },
            body: JSON.stringify({
                likes:              number
            })
        }
            .then(resp => resp.json())
            .then(console.log)
            .catch (error => console.log(error))
        }

    document.addEventListener("click", function (e) {

        if (e.target.className === 'like-button') {
            const likesText = e.target.parentNode.querySelector('span')
            const currentNum = parseInt(likesText.innerText.split(" ")[0])
            const newNumber = startingNumber + 1
                likesText.innerText = `${newNumber} likes`
                updateImageLikes("http://localhost:3000/images/1", newNumber)
        }

    // 
    // I would have included here as 'else if', the other button.. 
    // 

    }

// POST `/comments`:

        // function renderComments(comments) {
        //     comments.forEach(comment => renderComment(comment))
        // }
    
        function fetchComments(url) {
            fetch(url)
                .then(response => response.json())
                .then(commentObj => renderComments(commentObj))
        }

        fetchComments("http://localhost:3000/comments")

        // Helper functions! 

)}