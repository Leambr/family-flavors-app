import { QueryClientProvider } from '@tanstack/react-query';

import * as React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';

import { queryClient } from './api/resources/utils/react-query';

import { router } from './configurations/router';

import './design-system/styles/variables/typography.css';
import './design-system/styles/variables/colors.css';
import './design-system/styles/variables/spaces.css';
import './design-system/styles/reset.global.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
);
