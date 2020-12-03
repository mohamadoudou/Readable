import {getPosts,addNewPostAPI, deletePostAPI} from '../utils/api'
import {postFormat} from '../utils/helpers'
export const RECEIVE_POSTS='RECEIVE_POSTS'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST='DELETE_POST'


function receivePost(posts){
    return{
        type:RECEIVE_POSTS,
        posts
    }
}

function addPost(post){
    return{
        type:ADD_POST,
        post
    }
}

function deletePost(post,index){
    return{
        type:DELETE_POST,
        post,
        index
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

export function addPostData(title,body,author,category){
    return (dispatch)=>{
        addNewPostAPI(postFormat(title,body,author,category))
        .then((post)=>{dispatch(addPost(post))
            console.log('new post inside action post',post)
        })
    }
}

export function deletePostData(postId,index){
    return (dispatch)=>{
        deletePostAPI(postId)
        .then((post)=>{
            dispatch(deletePost(post,index))
        })
    }
}