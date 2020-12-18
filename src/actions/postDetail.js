import { postDetailAPI } from "../utils/api"

export const POST_DETAIL='POST_DETAIL'



function postDetail(post){
    return{
        type:POST_DETAIL,
        post
    }
}

export function postDetailData(postId){
    return (dispatch)=>{
        postDetailAPI(postId)
        .then((post)=>{dispatch(postDetail(post))})
        .catch(err=>err)
    }
}