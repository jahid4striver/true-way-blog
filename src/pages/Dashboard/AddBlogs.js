import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import addBlogToServer from '../../redux/thunk/blogs/addBlogToServer';

const AddBlogs = () => {
    const dispatch= useDispatch();

    const addblog=useSelector((state)=> state.addblog)

    const submitForm=(event)=>{
        event.preventDefault();
        const {date, title,imgLink,tag1,tag2,tag3,description}=addblog;
        const blog= {
            date: date,
            title: title,
            img: imgLink,
            tags: [{name:tag1}, {name:tag2}, {name:tag3}],
            description: description,
        }

        dispatch(addBlogToServer(blog))
        event.target.reset();
        
    }



    return (
        <div className='shadow-lg p-5'>
            <h1 className='text-center mb-4 text-2xl'>Add a New Blog</h1>
            <form onSubmit={submitForm} className='grid grid-cols-3 gap-4'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Select Date</span>
                    </label>
                    <input onChange={(e)=>dispatch({type:"ADD_CONTENT", payload:{name:e.target.name, value:e.target.value}})} name='date' type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Blog Title</span>
                    </label>
                    <input onChange={(e)=>dispatch({type:"ADD_CONTENT", payload:{name:e.target.name, value:e.target.value}})} name='title' type="text" placeholder="Enter Blog Title Here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image Link</span>
                    </label>
                    <input onChange={(e)=>dispatch({type:"ADD_CONTENT", payload:{name:e.target.name, value:e.target.value}})} name='imgLink' type="text" placeholder="Enter Image Link Here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Tag 1</span>
                    </label>
                    <input onChange={(e)=>dispatch({type:"ADD_CONTENT", payload:{name:e.target.name, value:e.target.value}})} name='tag1' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Tag 2</span>
                    </label>
                    <input onChange={(e)=>dispatch({type:"ADD_CONTENT", payload:{name:e.target.name, value:e.target.value}})} name='tag2' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Tag 3</span>
                    </label>
                    <input onChange={(e)=>dispatch({type:"ADD_CONTENT", payload:{name:e.target.name, value:e.target.value}})} name='tag3' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Blog Description</span>
                    </label>
                    <textarea onChange={(e)=>dispatch({type:"ADD_CONTENT", payload:{name:e.target.name, value:e.target.value}})} name='description' className="textarea textarea-bordered h-40 w-full" placeholder="Description"></textarea>
                </div>
                <button className='btn bg-dark-purple text-orange-300 mt-36' type='submit'> Submit</button>
            </form>
        </div>
    );
};

export default AddBlogs;