/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
            {/* <Footer/> */}
        </div>
    );
};

export default Main;