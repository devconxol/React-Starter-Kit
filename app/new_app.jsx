import React from 'react'
import {Switch, Route} from 'react-router';
import {routes} from '../new_routes'

const App = ({children}) => (
    <Switch>
        {routes.map(route => (
            <Route key={route} {...route} />
        ))}
    </Switch>
);

export default App;