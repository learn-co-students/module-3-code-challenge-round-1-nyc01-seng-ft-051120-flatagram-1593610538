// write your code here
document.addEventListener("DOMContentLoaded", function(e){

    const imagesContainer = document.getElementsByClassName("image-container")[0]
   

    function renderImage(imageObject){
        const imgDiv = document.getElementsByClassName("image-card")[0]
        console.log(imgDiv)
        imgDiv.innerHTML = 
        `
        <h2 class="title">${imageObject.title}</h2>
        <img src="${imageObject.image}" class="image" />
        `
        imagesContainer.append(imgDiv)
    }

    function fetchImage(url){
        fetch(url)
        .then(resp => resp.json())
        .then(imageData => renderImage(imageData))
    }
    fetchImage("http://localhost:3000/images")














})