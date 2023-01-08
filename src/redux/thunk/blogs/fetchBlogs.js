import { loadBlogs } from "../../actions/blogActions";


const loadBlogsData= ()=>{
    return async(dispatch, getState)=>{
        const res= await fetch('http://truewayblog.clearsoftwares.xyz/blog');
        const data= await res.json();

        if(data.data.length){
            dispatch(loadBlogs(data.data))
        }
    }
}


export default loadBlogsData;