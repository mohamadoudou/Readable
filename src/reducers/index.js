import { combineReducers } from 'redux'

import posts from './post'
import categories from './category'



export default combineReducers({
    posts,
    categories
})