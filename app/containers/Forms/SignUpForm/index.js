import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {reduxForm} from 'redux-form/immutable';
import {connect} from 'react-redux'
import {signUpRequest} from '../../../store/actions'

import {SignUpForm} from '../../../components';

const onSubmit = (data, dispatch) =>
    dispatch(signUpRequest(data));

class SignUpFormContainer extends Component {
    render(){
        return <SignUpForm {...this.props}/>
    }
}

export const config = {
    form: 'signUpForm',
    onSubmit
};

export default connect(null, null)(reduxForm(config)(SignUpFormContainer));