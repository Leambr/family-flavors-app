import { ThemeProvider } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

import '../design-system/styles/layout.css';
import '../design-system/styles/grid.css';
import { theme } from '../mui-design-system/ThemeProvider';
import { Navbar } from '../shared/components/Navbar/Navbar';

export const Layout = () => {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Outlet />
        </ThemeProvider>
    );
};
