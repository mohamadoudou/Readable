import {POST_DETAIL} from '../actions/postDetail'

export default function postDetail(state={},action){
    switch(action.type){
        case POST_DETAIL:
            return{
                ...action.post
            }
        default:
            return state
    }
}