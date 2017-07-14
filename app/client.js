import 'react-hot-loader/patch';
import React, {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Router} from 'react-router-dom'
import { fromJS } from 'immutable';
import { AppContainer } from 'react-hot-loader';
import App from './App';

//console.log('init', initialState);


//const routes = createRoutes(store);
const  root = document.getElementById('app');


const renderApp = () => (
    <AppContainer>
       <App/>
    </AppContainer>
);

render(renderApp(), root);

if (module.hot) {
    module.hot.accept('../routes', () => {
        require('../routes');
        render(renderApp(), root)
    })
}
