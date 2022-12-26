import React from 'react';
import Blogs from './Blogs';

const Home = () => {
    return (
        <div className='mt-10'>
            <div>
                
            </div>
            <div className='flex justify-between my-4'>
                <h1 className='text-3xl'>Recent Blogs</h1>
                <select className="select select-info w-40 max-w-xs">
                    <option disabled selected>Sort By</option>
                    <option>Sort by last upload</option>
                    <option>Sort by last upload</option>
                </select>
            </div>
            <Blogs />
        </div>
    );
};

export default Home;