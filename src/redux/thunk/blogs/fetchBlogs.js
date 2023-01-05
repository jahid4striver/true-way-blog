import { loadBlogs } from "../../actions/blogActions";


const loadBlogsData= ()=>{
    return async(dispatch, getState)=>{
        const res= await fetch('http://localhost:5000/blog');
        const data= await res.json();

        if(data.data.length){
            dispatch(loadBlogs(data.data))
        }
    }
}


export default loadBlogsData;