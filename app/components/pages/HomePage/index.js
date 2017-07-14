import React from 'react';
import PageTemplate from 'components/templates/PageTemplate'

import Header from 'components/organisms/Header'
import Button from '../../atoms/Button'
import {Link} from 'react-router-dom'


const HomePage = ({history}) => {
    return (
        <PageTemplate header={<Header history={history}/>}  >
            <h1>Welcome to Me</h1>
        </PageTemplate>
    )
};

export default HomePage;

