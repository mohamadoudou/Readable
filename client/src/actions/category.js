import {getCategoryAPI} from '../utils/api'
export const GET_CATEGORY='GET_CATEGORY'



function getCategory(categories){
    return{
        type:GET_CATEGORY,
        categories
    }
}


export function getCategoryData(){
    return (dispatch)=>{
           getCategoryAPI()
           .then(categories=>{dispatch(getCategory(categories))})
    }
}