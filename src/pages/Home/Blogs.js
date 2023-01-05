import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { readBlogs } from '../../redux/actions/blogActions';
import loadBlogsData from '../../redux/thunk/blogs/fetchBlogs';

const Blogs = () => {
    const navigate= useNavigate();
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blogs.blogs);
    const { tags } = blogs;

    console.log(blogs);

    const selectedBlogs=(id)=>{
        const selectedForRead= blogs.filter(blog=>blog._id===id);
        dispatch(readBlogs(selectedForRead));
        navigate(`/${id}`)

    }

    useEffect(() => {
        dispatch(loadBlogsData())
    }, [dispatch])

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 mx-4 gap-4'>
            {
                blogs.map(blog =>

                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{blog.title}</h2>
                            <p>{blog.description.slice(0 - 100)}</p>
                            <p>Created: {blog.date}</p>
                            <div className="card-actions justify-end">
                                <button onClick={()=>selectedBlogs(blog._id)} className="btn bg-blue-900 text-orange-300 hover:bg-blue-800">Read More</button>
                            </div>
                            <div className='flex w-10'>
                                {
                                    blog.tags.map(tag => <p className='btn btn-xs bg-blue-900 text-orange-300 mr-2'>#{tag.name}</p>)
                                }
                            </div>
                            
                        </div>
                    </div>)}
        </div>
    );
};

export default Blogs;