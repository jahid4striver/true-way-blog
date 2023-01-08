import { addBlogs } from "../../actions/blogActions";

const addBlogToServer=(blog)=>{
    return async (dispatch, getState)=>{
        const res= await fetch('http://truewayblog.clearsoftwares.xyz/blog', {
            method: "POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(blog),
        });
        const data= await res.json(); 

        if(data.acknowedged){
            dispatch(addBlogs(data))
            console.log(data);
        }

    }
}

export default addBlogToServer;