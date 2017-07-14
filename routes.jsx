import React from 'react';
import {Switch} from 'react-router';
import {renderRoutes} from 'react-router-config'

import App from './app/containers/App';
import HomePage from './app/components/pages/HomePage'
import SignUpPage from './app/components/pages/SignUpPage'
import SignInPage from './app/components/pages/SignInPage'
//import HomePage from './app/components/pages/HomePage/index'

export const routes = [
    {
        path: '/',
        exact: true,
        component: HomePage,
    },
    {
        path: '/enregistrement',
        component: SignUpPage,
    },
    {
        path: '/connecter',
        component: SignInPage,
    },
];


const AppRoutes = () => (
    <App>
        <Switch>
            {renderRoutes(routes)}
        </Switch>
    </App>
);

export default AppRoutes;


