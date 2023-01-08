import { ADD_TO_HISTORY, DELETE_CONTENT, FIRST_UPLOAD, LAST_UPLOAD, LOAD_CONTENT, READ_CONTENT, UPDATE_CONTENT } from "../actionTypes/actionTypes";

const initialState = {
    blogs: [],
    read: [],
    history: [],
}

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CONTENT:
            return {
                ...state,
                blogs: action.payload
            }
        case READ_CONTENT:
            return {
                ...state,
                read: action.payload
            }
        case DELETE_CONTENT:
            return {
                ...state,
                blogs: state.blogs.filter(blog => blog._id !== action.payload)
            }
        case UPDATE_CONTENT:
            return {
                ...state,
                blogs: [...state, action.payload]
            }
        case FIRST_UPLOAD:
            return {
                ...state,
                blogs: action.payload.sort((a, b) => { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0 })
            }
        case LAST_UPLOAD:
            return {
                ...state,
                blogs: action.payload.sort(function (a, b) {
                    return (a.date > b.date) ? -1 : ((a.date < b.date) ? 1 : 0);
                })
            }
        case ADD_TO_HISTORY:
            return {
                ...state,
                history: [...state.history, action.payload]
            }
        default:
            return state;
    }

}

export default blogReducer;