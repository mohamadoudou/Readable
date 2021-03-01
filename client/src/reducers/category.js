import {GET_CATEGORY} from '../actions/category'


 export default function categories(state={},action){
    switch(action.type){
        case GET_CATEGORY:
            return{
                ...action.categories
            }
        default:
            return state
    }
}