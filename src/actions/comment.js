import { addNewCommentAPI, deleteCommentAPI, getCommentsAPI } from "../utils/api"
import { commentFormat } from "../utils/helpers"

export const GET_COMMENTS='GET_COMMENTS'
export const ADD_COMMENT='ADD_COMMENT'
export const DELETE_COMMENT='DELETE_COMMENT'

function receiveComments(comments){
    return{
        type:GET_COMMENTS,
        comments
    }
}

function addComment(comment){
    return{
        type:ADD_COMMENT,
        comment
    }
}

function deleteComment(index,comment){
    return{
        type:DELETE_COMMENT,
        index,
        comment
    }

}

export function receiveCommentsData(postId){
    return (dispatch)=>{
        getCommentsAPI(postId)
        .then((comments)=>{dispatch(receiveComments(comments))})
    }
}

export function addCommentData(body,author,parentId){
    return (dispatch)=>{
        addNewCommentAPI(commentFormat(body,author,parentId))
        .then((comment)=>{dispatch(addComment(comment))})
    }
}

export function deleteCommentData(index,commentId){
    return (dispatch)=>{
        deleteCommentAPI(commentId)
        .then((comment)=>{dispatch(deleteComment(index,comment))})
    }
}