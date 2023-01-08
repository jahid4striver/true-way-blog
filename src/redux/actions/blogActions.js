import { ADD_CONTENT, ADD_TO_HISTORY, DELETE_CONTENT, FIRST_UPLOAD, LAST_UPLOAD, LOAD_CONTENT, READ_CONTENT, UPDATE_CONTENT } from "../actionTypes/actionTypes"


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
export const firstUpload= (data)=>{
    return {
        type: FIRST_UPLOAD,
        payload: data
    }
}
export const lastUpload= (data)=>{
    return {
        type: LAST_UPLOAD,
        payload: data
    }
}
export const addToHistory= (data)=>{
    return {
        type: ADD_TO_HISTORY,
        payload: data
    }
}