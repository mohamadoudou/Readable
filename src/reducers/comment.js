import { ADD_COMMENT, DELETE_COMMENT, GET_COMMENTS } from "../actions/comment";

export default function comments (state={},action){

    switch(action.type){
        case GET_COMMENTS:
            return{
                ...action.comments
            }
        case ADD_COMMENT:
            let index=Object.keys(state).length
            return{
                ...state,
                [index]:{
                    ...action.comment
                }
                
            }
        case DELETE_COMMENT:
            return{
                ...state,
                [action.index]:{
                    ...action.comment
                }
            }
        default:
            return state
    }

}