// write your code here
document.addEventListener("DOMContentLoaded", function(e){

    const imagesContainer = document.getElementsByClassName("image-container")[0]
   
    function renderImage(imageObject){
 
        const imgDiv = document.getElementsByClassName("image-card")[0]
        const imageTitle = imgDiv.getElementsByTagName("h2") 
        const imageSrc = imgDiv.getElementsByTagName("img") 
        imageTitle.innerHTML = ` <h2 class="title">"Woofing those bugs away"</h2> `
        imageSrc.innerHTML = `<img src="./assets/coder-dog.png" class="image" />`
    
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
        <li>${imageObject.content}</li>  //"What a cute dog!"
        <li>"He's got a nose for bugs!"</li>
        <li>"Woof!"</li>
        `
        //I know hardcoding these is incorrect ^
    
        // imagesContainer.append(imgDiv)
        // imagesContainer.append(likes)
        // imagesContainer.append(theComments)
    }
    
   

    function fetchImage(url){
        fetch(url)
        .then(resp => resp.json())
        .then(imageData => {renderImage(imageData)})
    }
    fetchImage("http://localhost:3000/images")

   
})

