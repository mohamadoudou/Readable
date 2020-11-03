import {getPosts} from '../utils/api'
export const RECEIVE_POSTS='RECEIVE_POSTS'
export const ADD_POST = 'ADD_POST'


function receivePost(posts){
    return{
        type:RECEIVE_POSTS,
        posts
    }
}


export function receivePostData(){
    return (dispatch)=>{
        getPosts()
        .then((posts)=>{
            dispatch(receivePost(posts))
        })
    }
}