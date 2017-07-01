/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';

import { configure, addDecorator } from '@storybook/react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import createHistory from 'history/createBrowserHistory';
import {ConnectedRouter} from 'react-router-redux';

import configureStore from '../app/store/configureStore';
import theme from '../app/components/themes/default';
const history = createHistory();
const store  = configureStore({}, history);


function loadStories() {
  require('../stories');
}

addDecorator(story => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <ConnectedRouter history={history}>
                {story()}
            </ConnectedRouter>
        </ThemeProvider>
    </Provider>
));

configure(loadStories, module);
