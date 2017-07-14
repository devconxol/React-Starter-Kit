import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {injectGlobal, ThemeProvider} from 'styled-components'

import theme from 'components/themes/default'

const App = ({children, user}) => {
    return (
        <div>
            <Helmet title="THe Holy Notes" />
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </div>
        )
};

export default App;

App.propTypes = {
    children: PropTypes.any
};
