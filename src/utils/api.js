
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

export const getCategoryAPI=()=>fetch(`${api}/categories`,headers)
                                    .then(res=>res.json())
                                    .then(categories=>categories)

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

 export const deletePostAPI=(postId)=>fetch(`${api}/posts/${postId}`,  
 {  method:'DELETE',
     headers:{
     'Authorization':token,
     'Content-Type': 'application/json'
     },
 }
).then(res=>res.json())
.then(post=>post)