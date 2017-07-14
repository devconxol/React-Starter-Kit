import React from 'react'
import PropTypes from 'prop-types';
import {Field} from 'redux-form';

import styled from 'styled-components';

import {ReduxField,Heading, Button} from '../../../../components';

const Form = styled.form`
    width: 100%;
    box-sizing: border-box;
`;

const SignUpForm = ({handleSubmit, submitting}) => {
    return (
        <Form method="POST" onSubmit={handleSubmit}>
            <Heading level={2}> Se Connecter </Heading>
            <Field name="_csrf" type="hidden" component="input"/>
            <Field name="email" type='email' label="Email" component={ReduxField}/>
            <Field name="password" type="password" label="Password" component={ReduxField}/>
            <Button type="submit" disabled={submitting}>Se Connecter</Button>
            <Button to="/enregistrement">Devenir Membre</Button>

        </Form>
    )
};

SignUpForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool
};

export default SignUpForm;