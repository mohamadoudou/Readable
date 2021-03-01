import {ADD_POST, CATEGORY_POSTS, DELETE_POST, EDIT_POST, RECEIVE_POSTS, VOTE_POST} from '../actions/post'


export default function posts(state={},action){
    switch(action.type){
        case RECEIVE_POSTS:
            return{
                ...action.posts
            }
        case ADD_POST:
            let index=Object.keys(state).length
            return {
                ...state,
                [index]:{
                    ...action.post
                }
            }
        case VOTE_POST:
            return{
                ...state,
                [action.index]:{
                    ...action.post
                }
            }
        case EDIT_POST:
            return{
                ...state,
                [action.index]:{
                    ...action.post
                }
            }
        case DELETE_POST:
            return{
                ...state,
                [action.index]:{
                    ...action.post,
                    deleted:true,                
                }
            }
        case CATEGORY_POSTS:{
            return{
                ...action.posts
            }
        }
        default:
            return state
            
    }
}