
const deleteBlogFromServer=(id)=>{
    return async (dispatch, getState)=>{
        const res= await fetch(`http://localhost:5000/blog/${id}`, {
            method: "DELETE",
        });
        const data= await res.json(); 

        if(data.acknowledged){
            console.log(data);
        }

    }
}

export default deleteBlogFromServer;