import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import MainLayout from 'layout/MainLayout';
import AuthGuard from 'common/auth-guard';
import Loadable from 'components/common/Loadable';

const HomePage = Loadable(lazy(() => import('views/dash/HomePage')));
const NotFoundPage = Loadable(lazy(() => import('views/NotFoundPage')));

const MainRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: '/',
            element: <Navigate replace to="/home" />
        },
        {
            path: '/home',
            element: <HomePage title="Home Application" />
        },
        {
            path: '/signin',
            element: <Navigate to="/home" />
        },
        {
            path: '/signup',
            element: <Navigate to="/home" />
        },
        {
            path: '*',
            element: <NotFoundPage title="Page not found | Suite 360" />
        }
    ]
};

export default MainRoutes;
