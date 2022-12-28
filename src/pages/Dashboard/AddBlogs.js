import React from 'react';

const AddBlogs = () => {
    return (
        <div className='shadow-lg p-5'>
            <h1 className='text-center mb-4 text-2xl'>Add a New Blog</h1>
            <form className='grid grid-cols-3 gap-4' action="">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Select Date</span>
                    </label>
                    <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Blog Title</span>
                    </label>
                    <input type="text" placeholder="Enter Blog Title Here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image Link</span>
                    </label>
                    <input type="text" placeholder="Enter Image Link Here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Tag 1</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Tag 2</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Tag 3</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Blog Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-40 w-full" placeholder="Description"></textarea>
                </div>
                <button className='btn bg-dark-purple text-orange-300 mt-36' type='submit'> Submit</button>
            </form>
        </div>
    );
};

export default AddBlogs;