// write your code here
document.addEventListener('DOMContentLoaded', () => {
    // when the page loads, fetch comments
    fetchComments()

})


function fetchComments(){
    fetch('http://localhost:3000/comments')
    .then (resp => resp.json())
    .then(comments_obj => renderComments(comments_obj))
}

function renderComments(comments_obj){
    const commmentContainer = document.getElementsByClassName('.comments')
    
}
