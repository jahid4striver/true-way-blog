import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadBlogsData from '../../redux/thunk/blogs/fetchBlogs';

const Blogs = () => {
    const dispatch= useDispatch();
    const blogs= useSelector((state)=> state.blogs);
    const {tags}= blogs;

    console.log(tags);

    useEffect(()=>{
        dispatch(loadBlogsData())
    },[dispatch])
   
    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                blogs.map(blog=> <div class="card card-side bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{blog.title}</h2>
                    <p>{blog.description.slice(0-100)}</p>
                    <div className='flex flex-start'>
                    {
                        blog.tags.map(tag=><p className='btn btn-xs mr-2'>#{tag.name}</p>)
                    }
                    </div>
                    <div class="card-actions justify-end">
                        <button class="btn bg-blue-900 text-orange-300 hover:bg-blue-800">Read More</button>
                    </div>
                </div>
            </div>)
            }
        </div>
    );
};

export default Blogs;