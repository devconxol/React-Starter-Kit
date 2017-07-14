/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';

import { configure, addDecorator, setAddon } from '@storybook/react';
import chaptersAddon from 'react-storybook-addon-chapters';

import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import createHistory from 'history/createBrowserHistory';
import {ConnectedRouter} from 'react-router-redux';

import configureStore from '../app/store/configureStore';
import theme from '../app/components/themes/default';
const history = createHistory();
const store  = configureStore({}, history);

const req = require.context('components', true, /.stories.js$/)


function loadStories() {
    req.keys().forEach(filename => req(filename))
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

setAddon(chaptersAddon);

configure(loadStories, module);
