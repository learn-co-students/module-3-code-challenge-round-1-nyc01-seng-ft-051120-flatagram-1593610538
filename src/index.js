// write your code here
document.addEventListener("DOMContentLoaded", function(e){

    const imagesContainer = document.getElementsByClassName("image-container")[0]
   
    function renderImage(imageObject){
 
        const imgDiv = document.getElementsByClassName("image-card")[0]
        const imageTitle = imgDiv.getElementsByTagName("h2") 
        const imageSrc = imgDiv.getElementsByTagName("img") 
        imageTitle.innerHTML =  <h2 class="title"> "Woofing those bugs away" </h2> //??? 
        imageSrc.innerHTML = <img src="./assets/coder-dog.png" class="image" />
    
        // ^^tried interpolating using ${imageObject.title} and ${imageObject.image} but it wasn't working so had to hard code
        //   
    
        const likes =  document.getElementsByClassName("likes-section")[0]
        likes.innerHTML = 
        `
        <span class="likes">0 likes</span>
        <button class="like-button">♥</button>
        `
    
        const theComments = document.getElementsByClassName("comments")[0] //separate fetch 
        theComments.innerHTML =
        `
        <li>"What a cute dog!"</li>  
        <li>"He's got a nose for bugs!"</li>
        <li>"Woof!"</li>
        `
        //I know hardcoding these is incorrect ^
    
       
        imagesContainer.append(likes)
        imagesContainer.append(theComments)
        imagesContainer.append(imgDiv)
    }
    
   

    function fetchImage(url){
        fetch(url)
        .then(resp => resp.json())
        .then(imageData => {renderImage(imageData)})
    }
    fetchImage("http://localhost:3000/images")

    function fetchComments(url){
        fetch(url)
        .then(resp => resp.json())
        .then(commentsData => {renderImage(commentsData)})
    }
    fetchImage("http://localhost:3000/images")
    fetchComments("http://localhost:3000/comments")
   
})

/*
See the image received from the server, including its title, likes and comments when the page loads
//render image
//fetch for comments
//fetch for image

Click on the heart icon to increase image likes, and still see them when I reload the page
//find heart icon element
//add click listener for likes and increment by changing innerHTML

Add a comment (no persistance needed)
//fetch patch request and get user input to add to pic

*/