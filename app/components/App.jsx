import React, {PropTypes}from 'react';
import Helmet from 'react-helmet';
import {injectGlobal, ThemeProvider} from 'styled-components'

import theme from 'components/themes/default'

const App = ({children}) => {
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
