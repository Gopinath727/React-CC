// Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet /> {/* This will render the matched child route */}
        </div>
    );
};

export default Layout;
