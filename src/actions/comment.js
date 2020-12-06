import { getCommentsAPI } from "../utils/api"

export const GET_COMMENTS='GET_COMMENTS'

function receiveComments(comments){
    return{
        type:GET_COMMENTS,
        comments
    }
}


export function receiveCommentsData(postId){
    return (dispatch)=>{
        getCommentsAPI(postId)
        .then((comments)=>{dispatch(receiveComments(comments))})
    }
}