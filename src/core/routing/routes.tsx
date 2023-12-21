import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../../layout/layout';
import { RecipeList } from '../../page/recipeList';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <RecipeList />,
            },
        ],
    },
]);
