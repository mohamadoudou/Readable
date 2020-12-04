import {getPosts,
        addNewPostAPI, 
        deletePostAPI, 
        editPostAPI,
        votingAPI,
        getPostCategoryAPI} from '../utils/api'
import {postFormat} from '../utils/helpers'
export const RECEIVE_POSTS='RECEIVE_POSTS'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST='DELETE_POST'
export const EDIT_POST='EDIT_POST'
export const VOTE_POST='VOTE_POST'
export const CATEGORY_POSTS='CATEGORY_POSTS'


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

function editPost(post,index){
    return{
        type:EDIT_POST,
        index,
        post
    }
}

function votePost(index,option,post){
    return{
        type:EDIT_POST,
        index,
        option,
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

function categoryPosts(posts){
    return{
        type:CATEGORY_POSTS,
        posts
    }
}


export function receivePostData(){
    return (dispatch)=>{
        getPosts()
        .then((posts)=>{ dispatch(receivePost(posts))
        })
    }
}

export function addPostData(title,body,author,category){
    return (dispatch)=>{
        addNewPostAPI(postFormat(title,body,author,category))
        .then((post)=>{dispatch(addPost(post))
        })
    }
}

export function editPostData(post,index){
    return (dispatch)=>{
        editPostAPI(post)
        .then((post)=>{ dispatch(editPost(post,index))
        })
    }
}

export function votePostData(index,option,post){
    return (dispatch)=>{
        votingAPI(option,post)
        .then((post)=>{
            dispatch(votePost(index,option,post))
        })
    }
}

export function deletePostData(postId,index){
    return (dispatch)=>{
        deletePostAPI(postId)
        .then((post)=>{ dispatch(deletePost(post,index))
        })
    }
}

export function categoryPostsData(category){
    return (dispatch)=>{
        getPostCategoryAPI(category)
        .then((posts)=>{
            dispatch(categoryPosts(posts))
        })
    }
}