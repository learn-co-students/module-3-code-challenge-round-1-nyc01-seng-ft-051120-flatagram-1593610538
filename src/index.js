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
    const commentLi = document.createElement('li')
    commentLi.className = "comments-list"
    commentLi.dataset.id = comments_obj.id
    commentLi.innerHTML =  "<li>${comments_obj.content}</li>"
    return commentLi
}