import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../../layout/layout';
import { RecipeList } from '../../page/RecipeList/RecipeList';
import { Homepage } from '../../page/Homepage/Homepage';

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
