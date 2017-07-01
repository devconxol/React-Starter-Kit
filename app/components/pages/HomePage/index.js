import React from 'react';
import PageTemplate from 'components/templates/PageTemplate'

import Header from 'components/organisms/Header'

const HomePage = () => {
    return (
        <PageTemplate header={<Header/>}  >
            <h1>Welcome</h1>
        </PageTemplate>
    )
};

export default HomePage;