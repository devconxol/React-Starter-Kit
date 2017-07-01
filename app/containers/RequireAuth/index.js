import React, {Component} from 'react';
import {connect} from 'react-redux'

export default (ComposedComponent) => {
    class Authentication extends Component {

       // static contextTypes = {
         //   router: React.PropTypes.object
        //};

        componentWillMount(){
            if(!this.props.authenticated){
                //this.props.history.push('/')
             //   this.context.router.history.push('/')
            }
        }

        componentWillUpdate(nextProps){
            if(!nextProps.authenticated){
                this.context.router.history.push('/')
            }
        }

        render(){

            return (
                <ComposedComponent {...this.props}/>
            )
        }
    }
    const mapStateToProps = (state) => {


        return {
            authenticated: state.auth.get("authenticated")
        }
    };

    Authentication = connect(mapStateToProps)(Authentication);
    return Authentication;
}


//In some other location... Not in this file...,
// We want to user this HOC