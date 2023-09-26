import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import Error from '@js/pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Navigate to="/users" />
      },
      {
        path: '/users',
        lazy: () => import('@js/features/Users')
      },
      {
        path: '/posts',
        lazy: () => import('@js/features/Posts')
      },
      {
        path: '/comments',
        lazy: () => import('@js/features/Comments')
      }
    ]
  },
  {
    path: '*',
    lazy: () => import('@js/pages/NotFound')
  }
]);

export default router;
