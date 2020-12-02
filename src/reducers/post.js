import {ADD_POST, RECEIVE_POSTS} from '../actions/post'


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
        default:
            return state
            
    }
}