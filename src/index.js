


const url = 'http://localhost:3000/comments'


// write your code here
document.addEventListener('DOMContentLoaded', () => {
    // when the page loads, fetch comments
    fetchComments()

})


function fetchComments(){
    fetch(url)
    .then (resp => resp.json())
    .then(data => {

        const values = Object.values(data)
        for(const value of values){
            const ul = document.getElementsByClassName('comments')
          const li = document.createElement('li')
          li.dataset.id = value.id
          ul.Append(li)
          console.log(li)
        }   
    })
}