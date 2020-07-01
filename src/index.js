
const createNode = (elem) => {
    return document.createElement(elem)
}

const appendNode = (parent, elem) => {
    parent.appendChild(elem)
}

const ul = document.getElementsByClassName('comments')
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
           let li = createNode('li')
           appendNode(ul, li)
        }   
    })
}