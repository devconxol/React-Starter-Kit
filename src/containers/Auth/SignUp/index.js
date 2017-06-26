import React, {Component} from 'react';
import {reduxForm, Fields} from 'redux-form';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'

import {signUp} from '../../../actions'
import RenderFields from '../../../components/RenderFields'

class SignUp extends Component {


    signUp({email, password}){
        const {history} = this.props;
        this.props.signUp(email, password, history)
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
        const { handleSubmit, valid } = this.props;
        return (
            <form onSubmit={handleSubmit(this.signUp.bind(this))}>
                <h2>Sign Up</h2>
                {this.renderErrors()}
                <Fields names={['email', 'password', 'passwordConfirm']}
                        fields={[{name:'email', type:'email'},
                            {name:'password', type:'password'}, {name:'passwordConfirm', type:'password'}]}
                        component={RenderFields}/>

                <button disabled={!valid} className="btn btn-primary">
                    Sign Up
                </button>
            </form>
        )
    }
}

const validate = (formData) => {
    const errors = {};


    if(!formData.email){
        errors.email = 'Please enter an email'
    }
    if(!formData.password){
        errors.password = 'Please enter a password'
    }
    if(!formData.passwordConfirm){
        errors.passwordConfirm = 'Please enter a password confirmation'
    }
    if(formData.password && formData.password.length < 8){
        errors.password = 'Password must be 8 characters long'
    }

    if(formData.password !== formData.passwordConfirm){
        errors.password = 'Password Must Match';
        errors.passwordConfirm = 'Password Must Match'
    }
    return errors;
};
SignUp = withRouter(SignUp);


SignUp = reduxForm({
    form: 'signup',
    validate
})(SignUp);


const mapStateToProps = (state) => {
    return {
        authErrors: state.auth.get("errors")
    }
}

const mapDispatchToProp = (dispatch) => {
    return bindActionCreators({signUp}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProp)(SignUp)
