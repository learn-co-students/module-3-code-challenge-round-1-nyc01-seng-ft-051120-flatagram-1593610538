// write your code here
document.addEventListener('DOMContentLoaded', () => {
const renderImage = data =>{
 const imageFrame = document.getElementsByClassName('images')
.log(imageFrame)
}
const getImage = () => {
  fetch("http://localhost:3000/images/1")
  .then(response => response.json())
       .then(data => {
         console.log('Success:', data);

             // renderImage(data)
         })
       .catch((error) => {
         console.error('Error:', error);
       })
    }
   getImage()
//DOMContentLoaded
})
