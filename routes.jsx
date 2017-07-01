import React from 'react';
import {Switch} from 'react-router';
import {renderRoutes} from 'react-router-config'

import App from './app/components/App';
import HomePage from './app/components/pages/HomePage/index'
//import HomePage from './app/components/pages/HomePage/index'

export const routes = [
    {
        path: '/',
        exact: true,
        component: HomePage
    }
];


const AppRoutes = () => (
    <App>
        <Switch>
            {renderRoutes(routes)}
        </Switch>
    </App>
);

export default AppRoutes;


