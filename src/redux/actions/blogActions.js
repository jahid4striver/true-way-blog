import { LOAD_CONTENT } from "../actionTypes/actionTypes"


export const loadBlogs= (data)=>{
    return {
        type: LOAD_CONTENT,
        payload: data,
    }
}