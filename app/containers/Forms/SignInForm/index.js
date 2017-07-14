import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {reduxForm} from 'redux-form/immutable';
import {connect} from 'react-redux'

import {signInRequest} from '../../../store/actions'

import {SignInForm} from '../../../components';

const onSubmit = (data, dispatch, props) =>{
    console.log('comProps', props)
    return dispatch(signInRequest(data));
}


const onSubmitWithProps = (values, dispatch, props) => {
    console.log(props) // Object
}


class SignUpFormContainer extends Component {
    render(){
        return <SignInForm onSubmitWithProps={onSubmitWithProps}  {...this.props}/>
    }
}

export const config = {
    form: 'signUpForm',
    onSubmit
};

export default connect(null, null)(reduxForm(config)(SignUpFormContainer));