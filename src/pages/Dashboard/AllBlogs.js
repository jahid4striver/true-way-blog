import React from 'react';
import { useSelector } from 'react-redux';
import { AiFillEdit,AiFillDelete } from "react-icons/ai";


const AllBlogs = () => {
    const blogs = useSelector((state => state.blogs))
    console.log(blogs);

    return (
        <div className='w-full text-center mx-auto'>
            <h1 className='text-2xl inline-block'>All Blogs</h1>
            <div className="overflow-x-auto">
                <table className="table w-full mx-auto">
                    <thead>
                        <tr>
                            <th>#SL</th>
                            <th>Image</th>
                            <th>Date</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            blogs.map((blog, index) => <tr>
                                <th>{index+1}</th>
                                <th>{blog?.img}</th>
                                <td>{blog.date}</td>
                                <td>{blog.title}</td>
                                <td>{blog.description.slice(0,40)}</td>
                                <td><button className='text-2xl'><AiFillEdit/></button></td>
                                <td><button className='text-2xl'><AiFillDelete/></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBlogs;