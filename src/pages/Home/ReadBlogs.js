import React from 'react';
import { useSelector } from 'react-redux';

const ReadBlogs = () => {
    const readBlog= useSelector((state)=> state.blogs.read);

    return (
        <div>
            <h1>Blog Reading</h1>
            <div className='mx-4 gap-4'>
            {
                readBlog.map(blog =>

                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{blog.title}</h2>
                            <p>{blog.description}</p>
                            <p>Created: {blog.date}</p>
                            <div className='flex w-10'>
                                {
                                    blog.tags.map(tag => <p className='btn btn-xs bg-blue-900 text-orange-300 mr-2'>#{tag.name}</p>)
                                }
                            </div>
                            
                        </div>
                    </div>)}
        </div>
        </div>
    );
};

export default ReadBlogs;