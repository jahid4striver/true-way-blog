import { ADD_CONTENT } from "../actionTypes/actionTypes"


const initialState= {
            date: '',
            title: '',
            imgLink:'',
            tags:[],
            description:'',
}


const addBlogReducer=(state= initialState, action)=>{
        switch(action.type){
            case ADD_CONTENT:
            return {
                ...state,
                [action.payload.name]:action.payload.value
            }

            default:
                return state
        }
}


export default addBlogReducer;