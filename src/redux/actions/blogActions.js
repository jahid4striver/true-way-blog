import { ADD_CONTENT, DELETE_CONTENT, LOAD_CONTENT, READ_CONTENT, UPDATE_CONTENT } from "../actionTypes/actionTypes"


export const loadBlogs= (data)=>{
    return {
        type: LOAD_CONTENT,
        payload: data,
    }
}
export const readBlogs= (data)=>{
    return {
        type: READ_CONTENT,
        payload: data,
    }
}

export const addBlogs=(data)=>{
    return{
        type: ADD_CONTENT,
        payload: data,
    }
}

export const deleteBlogs= (id)=>{
    return {
        type: DELETE_CONTENT,
        payload: id
    }
}
export const updateBlogs= (id)=>{
    return {
        type: UPDATE_CONTENT,
        payload: id
    }
}