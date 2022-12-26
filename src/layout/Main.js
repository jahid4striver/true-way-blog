import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Header/Navbar/Navbar';

const Main = () => {
    return (
        <div className='lg:px-10'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;