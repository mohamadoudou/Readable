import categories from "../../api-server/categories"

const api='http://localhost:3001'

let token =localStorage.token

if(!token){
    token=localStorage.token=Math.random().toString(36).substr(-8)
}


const headers={
    headers:{
    'Authorization':token
    }
}

export const getPosts =()=>fetch(`${api}/posts`,headers)
                    .then(res=>res.json())
                    .then(data=>data)

export const getCategoryAPI=()=>fetch(`${api}/categories`,headers)
                                    .then(res=res.json())
                                    .then(categories=>categories)