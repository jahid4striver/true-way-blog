import { DELETE_CONTENT, LOAD_CONTENT, READ_CONTENT } from "../actionTypes/actionTypes";

const initialState={
    blogs:[],
    read:[],
}

const blogReducer=(state= initialState, action)=>{
    switch(action.type){
        case LOAD_CONTENT:
            return{
                ...state,
                blogs: action.payload
            }
        case READ_CONTENT:
            return{
                ...state,
                read:action.payload
            }
        case DELETE_CONTENT:
            return {
                ...state,
                blogs: state.blogs.filter(blog=> blog._id !== action.payload)
            }
         default:
        return state;
    }

}

export default blogReducer;