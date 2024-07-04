import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '../../layout/layout';
import { Homepage } from '../../page/Homepage/Homepage';
import { Recipe } from '../../page/Recipe/Recipe';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Homepage />,
            },
            {
                path: 'recipe',
                element: <Recipe />,
            },
        ],
    },
]);
