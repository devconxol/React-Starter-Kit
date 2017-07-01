import React, {Component} from 'react';
import { Fields, reduxForm } from 'redux-form'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {signIn} from '../../../actions'
import {Redirect, withRouter} from 'react-router-dom'
import PageWrapper from '../../../PageWrapper/index'
import submit from "redux-form-submit"

import {
    pageTitle,
    pageMeta
} from '../../../PageWrapper/constants'

import RenderFields from '../../../components/RenderFields'

class SignIn extends Component {
    constructor(){
        super();
        this.renderErrors = this.renderErrors.bind(this)
    }
    signIn({email, password}){
        const {history} = this.props;

        this.props.signIn(email, password, history)
    }

    renderErrors(){
        const errors = this.props.authErrors;
        if(errors === null) return null;
        return errors.map(error => {
            return (
                <div className="alert alert-danger" key={error.message} >
                    <strong>Oops!!</strong>{error.message}
                </div>
            )
        })

    }

    render(){
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.signIn.bind(this))}>
                <h2>Sign In</h2>
                {this.renderErrors()}
                <Fields names={['email', 'password']}
                        fields={[{name:'email', type:'email'},
                            {name:'password', type:'password'}]}
                        component={RenderFields} />
                <button action="submit" className="btn btn-primary">
                    Sign In
                </button>
            </form>
        )
    }
}

SignIn = withRouter(SignIn);

const SignInForm = reduxForm({ form: 'signin' });
SignIn = SignInForm( SignIn );

/*
SignIn =  reduxForm({
    form: 'signin'
})(SignIn);
*/

const mapStateToProps = (state) => {
    return {
        authErrors: state.auth.get("errors")
    }
};

const mapDispatchToProp = (dispatch) => {
    return bindActionCreators({signIn}, dispatch)
};



const PageOptions = {
    ComposedComponent: SignIn,
    title: pageTitle('Login'),
    meta: pageMeta([{name: 'description', content:'HolyNote for URHC'}])
};

const SignInPage = PageWrapper(PageOptions);

export default connect(mapStateToProps, mapDispatchToProp)(SignInPage);