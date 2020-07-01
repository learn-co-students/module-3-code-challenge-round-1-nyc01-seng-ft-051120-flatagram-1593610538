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
    const comments = document.getElementsByClassName('.comments')
    comments_obj.forEach(comment_obj => {
        let content = document.createElement('li')
        content.id = comment_obj.id
        content.innerText = comment_obj.content

    
        comments.append(content)
        return content

    });

}
