import { combineReducers } from "redux";
import addBlogReducer from "./addBlogReducer";
import blogReducer from "./blogReducer";


const rootReducer= combineReducers({
    blogs: blogReducer,
    addblog: addBlogReducer,
})

export default rootReducer;