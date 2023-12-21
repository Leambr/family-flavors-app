import React from 'react';
import { Outlet } from 'react-router-dom';

import '../design-system/styles/layout.css';

export const Layout = () => {
    return (
        <>
            {/* Navbar */}
            <div className="layout-with-centered-content">
                <section className="main-container">
                    <Outlet />
                </section>
            </div>
        </>
    );
};
