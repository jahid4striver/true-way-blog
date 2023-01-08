import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addToHistory, firstUpload, lastUpload, readBlogs } from '../../redux/actions/blogActions';
import loadBlogsData from '../../redux/thunk/blogs/fetchBlogs';

const History = () => {
    const navigate= useNavigate();
    const dispatch = useDispatch();
    let history = useSelector((state) => state.blogs.history);
    console.log(history);
    // let blogss= blogs;

    const filterFirstUpload = () => {
        const sorted1 = history.sort((a, b)=>{return a.date < b.date ? -1 : a.date > b.date ? 1 : 0});
        dispatch(firstUpload(sorted1))
        history= sorted1;
    }
    const filterLastUpload = () => {
        const sorted2 = history.sort(function (a, b) {
            return (a.date > b.date) ? -1 : ((a.date < b.date) ? 1 : 0);
        });
        history= sorted2

        
        dispatch(lastUpload(sorted2))
    }

    // const selectedBlogs=(id)=>{
    //     const selectedForRead= history.filter(blog=>blog._id===id);
    //     dispatch(readBlogs(selectedForRead));
    //     dispatch(addToHistory(selectedForRead));
    //     navigate(`/${id}`)

    // }

    useEffect(() => {
        dispatch(loadBlogsData())
    }, [dispatch])



    

    return (
        <div >
            <div className='flex justify-between my-4'>
                <h1 className='text-2xl text-blue-900 font-bold'>Reading Blogs</h1>
                {/* <div>Sort By
                    <button onClick={()=>filterFirstUpload()} className='btn btn-sm bg-dark-purple mr-2'>First Upload</button>
                    <button onClick={()=>filterLastUpload()} className='btn btn-sm bg-dark-purple'>Last Upload</button></div> */}
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 mx-4 gap-4'>
            {
                history.map(blog =>

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

export default History;