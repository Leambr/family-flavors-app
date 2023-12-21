import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../../layout/layout';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        // children: [
        //     {
        //         path: '/',
        //         element: <Test />,
        //     },
        // ],
    },
]);
