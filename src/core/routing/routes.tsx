import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '../../layout/layout';
import { Homepage } from '../../page/Homepage/Homepage';
import { RecipeList } from '../../page/RecipeList/RecipeList';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Homepage />,
            },
        ],
    },
]);
