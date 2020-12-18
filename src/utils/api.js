
const api='http://localhost:3001'

let token =localStorage.token

if(!token){
    token=localStorage.token=Math.random().toString(36).substr(-8)
}


const headers={
    headers:{
        'Accept': 'application/json',
        'Authorization':token
    }
}

export const getPosts =()=>fetch(`${api}/posts`,headers)
                    .then(res=>res.json())
                    .then(data=>data)
                    .catch(err=>err)

export const getCategoryAPI=()=>fetch(`${api}/categories`,headers)
                                    .then(res=>res.json())
                                    .then(categories=>categories)
                                    .catch(err=>err)

export const addNewPostAPI=(post)=>fetch(`${api}/posts`,  
    {  method:'POST',
        headers:{
        'Authorization':token,
        'Content-Type': 'application/json'
        },
        body:JSON.stringify(post)
    }
).then(res=>res.json())
 .then(post=>post)
 .catch(err=>alert('Please try again ',err))

 export const editPostAPI=(post)=>fetch(`${api}/posts/${post.id}`,  
 {  method:'PUT',
     headers:{
     'Authorization':token,
     'Content-Type': 'application/json'
     },
     body:JSON.stringify(post)
 }
).then(res=>res.json())
.then(post=>post)
.catch(err=>alert('Please try again ',err))

export const votingAPI=(option,post)=>fetch(`${api}/posts/${post.id}`,  
 {  method:'POST',
     headers:{
     'Authorization':token,
     'Content-Type': 'application/json'
     },
     body:JSON.stringify(option),
 }
).then(res=>res.json())
.then(post=>post)
.catch(err=>alert('Please try again ',err))

 export const deletePostAPI=(postId)=>fetch(`${api}/posts/${postId}`,  
 {  method:'DELETE',
     headers:{
     'Authorization':token,
     'Content-Type': 'application/json'
     },
 }
).then(res=>res.json())
.then(post=>post)
.catch(err=>alert('Please try again ',err))

export const getPostCategoryAPI =(category)=>fetch(`${api}/${category}/posts`,headers)
                    .then(res=>res.json())
                    .then(data=>data)
                    .catch(err=>err)


export const postDetailAPI=(postId)=>fetch(`${api}/posts/${postId}`,headers)
                    .then(res=>res.json())
                    .then(post=>post)
                    .catch(err=>err)

export const getCommentsAPI=(postId)=>fetch(`${api}/posts/${postId}/comments`,headers)
                                .then(res=>res.json())
                                .then(comments=>comments)
                                .catch(err=>err)



export const addNewCommentAPI=(comment)=>fetch(`${api}/comments`,{
    method:'POST',
    headers:{
        'Authorization':token,
        'Content-Type': 'application/json'
    },
    body:JSON.stringify(comment)
}).then(res=>res.json())
  .then(comment=>comment)
  .catch(err=>err)


export const deleteCommentAPI=(commentId)=>fetch(`${api}/comments/${commentId}`,{
    method:'DELETE',
    headers:{
        'Authorization':token,
        'Content-Type': 'application/json'
    },  
}).then(res=>res.json())
  .then(comment=>comment)
  .catch(err=>err)



export const voteCommentAPI=(option,commentId)=>fetch(`${api}/comments/${commentId}`,{
    method:'POST',
    headers:{
        'Authorization':token,
        'Content-Type': 'application/json'
    }, 
    body:JSON.stringify(option) 
}).then(res=>res.json())
  .then(comment=>comment)
  .catch(err=>err)



export const editCommentAPI=(comment,commentId)=>fetch(`${api}/comments/${commentId}`,{
    method:'PUT',
    headers:{
        'Authorization':token,
        'Content-Type': 'application/json'
    }, 
    body:JSON.stringify(comment) 
}).then(res=>res.json())
  .then(comment=>comment)
  .catch(err=>err)
