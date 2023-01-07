import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import updateBlogToServer from '../../redux/thunk/blogs/updateBlogToServer';

const EditBlogs = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {editId}= useParams();
    const dispatch= useDispatch();

    const blogs=useSelector((state)=> state.blogs.blogs);
    const addblog=useSelector((state)=> state.blogs.addblog);

// Updaing Default Value Getting Start
    const editingBlog= blogs.filter(blog=> blog._id===editId);
    const editDate=editingBlog[0].date;
    const edittitle=editingBlog[0].title;
    const editimgLink=editingBlog[0].img;
    const edittags=editingBlog[0].tags;
    const editdescription=editingBlog[0].description;

    const tag1= edittags[0].name;
    const tag2= edittags[1].name;
    const tag3= edittags[2]?.name;

// Updaing Default Value Getting End


    const submitForm=(data)=>{
        const {date, title,imgLink,tag1,tag2,tag3,description}=data;

        const blog= {
            date: date,
            title: title,
            img: imgLink,
            tags: [{name:tag1}, {name:tag2}, {name:tag3}],
            description: description,
        }

        dispatch(updateBlogToServer(editId,blog))
        console.log(date);
        
    }



    return (
        <div className='shadow-lg p-5'>
            <h1 className='text-center mb-4 text-2xl'>Add a New Blog</h1>
            <form onSubmit={handleSubmit(submitForm)} className='grid grid-cols-3 gap-4'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Select Date</span>
                    </label>
                    <input onBlur={(e)=>dispatch({type:"ADD_CONTENT", payload:{name:e.target.name, value:e.target.value}})} defaultValue={editDate} {...register("date")} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Blog Title</span>
                    </label>
                    <input onBlur={(e)=>dispatch({type:"ADD_CONTENT", payload:{name:e.target.name, value:e.target.value}})} defaultValue={edittitle} {...register("title")}  type="text" placeholder="Enter Blog Title Here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image Link</span>
                    </label>
                    <input onChange={(e)=>dispatch({type:"ADD_CONTENT", payload:{name:e.target.name, value:e.target.value}})} defaultValue={editimgLink} {...register("imgLink")} type="text" placeholder="Enter Image Link Here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Tag 1</span>
                    </label>
                    <input onChange={(e)=>dispatch({type:"ADD_CONTENT", payload:{name:e.target.name, value:e.target.value}})} defaultValue={tag1} {...register("tag1")} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Tag 2</span>
                    </label>
                    <input onChange={(e)=>dispatch({type:"ADD_CONTENT", payload:{name:e.target.name, value:e.target.value}})} defaultValue={tag2} {...register("tag2")} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Tag 3</span>
                    </label>
                    <input onChange={(e)=>dispatch({type:"ADD_CONTENT", payload:{name:e.target.name, value:e.target.value}})} defaultValue={tag3} {...register("tag3")} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Blog Description</span>
                    </label>
                    <textarea onChange={(e)=>dispatch({type:"ADD_CONTENT", payload:{name:e.target.name, value:e.target.value}})} defaultValue={editdescription} {...register("description")} className="textarea textarea-bordered h-40 w-full" placeholder="Description"></textarea>
                </div>
                <button className='btn bg-dark-purple text-orange-300 mt-36' type='submit'> Submit</button>
            </form>
        </div>
    );
};

export default EditBlogs;