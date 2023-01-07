
const updateBlogToServer=(id, blog)=>{
    return async (dispatch, getState)=>{
        const res= await fetch(`http://localhost:5000/blog/${id}`, {
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