import React from 'react';
import { Outlet } from 'react-router-dom';

import '../design-system/styles/layout.css';
import '../design-system/styles/grid.css';
import { Navbar } from '../shared/components/Navbar/Navbar';

export const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};
