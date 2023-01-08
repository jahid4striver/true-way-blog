
const deleteBlogFromServer=(id)=>{
    return async (dispatch, getState)=>{
        const res= await fetch(`http://truewayblog.clearsoftwares.xyz/blog/${id}`, {
            method: "DELETE",
        });
        const data= await res.json(); 

        if(data.acknowledged){
            console.log(data);
        }

    }
}

export default deleteBlogFromServer;