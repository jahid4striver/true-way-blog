
const updateBlogToServer=(id, blog)=>{
    return async (dispatch, getState)=>{
        const res= await fetch(`http://truewayblog.clearsoftwares.xyz/blog/${id}`, {
            method: "PUT",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(blog),
        });
        const data= await res.json(); 

        if(data.acknowedged){
            // dispatch(addBlogs(data))
            console.log(data);
        }

    }
}

export default updateBlogToServer;