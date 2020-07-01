// write your code here
document.addEventListener("DOMContentLoaded", function(e){

    const imagesContainer = document.getElementsByClassName("image-container")

    function renderImage(imageObject){
        const imgDiv = document.getElementsByClassName("image-card")
    }

    function fetchImages(url){
        fetch(url)
        .then(resp.json)
        .then(imagesData => renderImages(imagesData))
    }














})