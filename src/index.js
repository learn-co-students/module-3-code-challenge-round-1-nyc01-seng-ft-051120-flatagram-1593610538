// write your code here
document.addEventListener('DOMContentLoaded', ev=>{
    fetchPost()
    fetchComment()
    document.addEventListener('click', e=>{
        e.preventDefault()
        if(e.target.id==='upVote'){
            
            console.log('i am clicked!')
             likePost(e.target.previousElementSibling)
        } else if(e.target.textContent==='Post'){
            postComment(e.target.closest('form'))
            e.target.closest('form').reset()
        }
        else if(e.target.id==='downVote'){
            
            console.log('i am clicked!')
             unlikePost(document.querySelector('.likes'))
        } else if(e.target.innerText==='X'){
            deleteComment(e.target.closest('LI'))
        }
    })
})

const fetchPost=()=>{
    fetch('http://localhost:3000/images')
    .then(res=>res.json())
    .then(posts=>{
        posts.forEach(post => {
            renderPost(post)
        });
    })
}

const renderPost=post=>{
    const card=document.querySelector('.image-card')
   const title=document.querySelector('.title')
   const image=document.querySelector('.image')
   const likes=document.querySelector('.likes')
   title.textContent=post.title
   image['src']=`${post.image}`
   likes.innerText=post.likes
   card.id=post.id
   console.log(likes)
}

 const fetchComment=()=>{
     fetch('http://localhost:3000/comments')
     .then(res=>res.json())
     .then(comments=>{
         comments.forEach(comment=>{
             renderComment(comment)
         })
     })
 }
  const renderComment=comment=>{
      const ul=document.querySelector('.comments')
      const li=document.createElement('li')
      li.innerText=comment.content

      const delButton=document.createElement('button')
      delButton.className='like-button'
      delButton.style.color='red'
      delButton.innerText='X'

      li.id=comment.id
      li.appendChild(delButton)
      ul.appendChild(li)

  }
   const likePost=(likeSpan)=>{
       const like= parseInt(likeSpan.textContent)+1
    const card=document.querySelector('.image-card')
    fetch(`http://localhost:3000/images/${card.id}`,{
        method: "PATCH",
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify({
            likes: like
        })
    })
    .then(res=>res.json())
    .then(updatedPost=>{
        likeSpan.textContent=updatedPost.likes
    })
   }

   const postComment=form=>{
       const card=document.querySelector(".image-card")
     let  commentObj={
         imageId: parseInt(card.id),
         content: form.comment.value
       }

       fetch('http://localhost:3000/comments',{
           method: "POST",
           headers: {
               "content-type": "application/json",
               "accept": "application/json"             
           },
           body: JSON.stringify(commentObj)
       })
       .then(res=>res.json())
       .then(postedComment=>{
           renderComment(postedComment)
       })
   }

   const unlikePost=(unlikeSpan)=>{
    const like= parseInt(unlikeSpan.textContent)-1
 const card=document.querySelector('.image-card')
 fetch(`http://localhost:3000/images/${card.id}`,{
     method: "PATCH",
     headers: {
         "content-type": "application/json",
         "accept": "application/json"
     },
     body: JSON.stringify({
         likes: like
     })
 })
 .then(res=>res.json())
 .then(updatedPost=>{
     unlikeSpan.textContent=updatedPost.likes
 })
}
 const deleteComment=li=>{
     fetch(`http://localhost:3000/comments/${li.id}`,{
         method: "DELETE"
     }).then(res=>res.json())
     .then(result=>{
         if(result){
             li.remove()
         }    
         
     })
 }