import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useNavigation } from 'react-router-dom';
import { firstUpload, lastUpload } from '../../redux/actions/blogActions';
import Blogs from './Blogs';

const Home = () => {
    // const dispatch = useDispatch();
    // const location= useNavigation();
    // const data = useSelector((state) => state.blogs.blogs)
    // console.log(location);


    
    

    // console.log(sorted1);
    // console.log(sorted2);
    // onClick={() => dispatch(firstUpload(sorted1))}
    // onClick={() => dispatch(lastUpload(sorted2))}
    return (
        <div className='mt-10'>
            <Blogs />
        </div>
    );
};

export default Home;