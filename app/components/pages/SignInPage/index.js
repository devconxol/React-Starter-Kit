import React from 'react';
import Helmet from 'react-helmet';

import {PageTemplate, Header}  from '../../../components'
import {SignInForm} from '../../../containers'
import {AuthRedirect} from '../../../containers'

const SignInPage = ({history}) => {
    return (
        <PageTemplate header={<Header history={history} />}>
            <Helmet title="Connection"/>
            <SignInForm/>
        </PageTemplate>
    )
};

export default AuthRedirect(SignInPage);