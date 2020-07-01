// write your code here
document.addEventListener('DOMContentLoaded', ev=>{
    fetchPost()
    fetchComment()
    document.addEventListener('click', e=>{
        e.preventDefault()
        if(e.target.className==='like-button'){
            
            console.log('i am clicked!')
             likePost(e.target.previousElementSibling)
        } else if(e.target.textContent==='Post'){
            postComment(e.target.closest('form'))
            e.target.closest('form').reset()
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