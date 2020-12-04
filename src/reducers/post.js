import {ADD_POST, DELETE_POST, EDIT_POST, RECEIVE_POSTS} from '../actions/post'


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
        case EDIT_POST:
            return{
                ...state,
                [action.index]:{
                    ...action.post
                }
            }
        case DELETE_POST:
            console.log('inside delete post reducer')
            return{
                ...state,
                [action.index]:{
                    ...action.post,
                    deleted:true,                
                }
            }
        default:
            return state
            
    }
}