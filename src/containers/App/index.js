import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from '../Home'
import Header from '../Header'
import SignIn from '../Auth/SignIn'
import SignOut from '../Auth/SignOut'
import SignUp from '../Auth/SignUp'
import Features from '../../components/Posts'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import agent from '../../agent'

import requireAuth from '../RequireAuth'

import {onLoad} from '../../actions'

class App extends Component {

    componentWillMount(){
        const token = localStorage.getItem('token');
        this.props.onLoad(token)
    }

    render() {
            return (
                <Router>
                    <div className="app">
                        <Header appLoaded={this.props.appLoaded} />
                        <Route exact path='/' render={({}) => (<Home currentUser={this.props.currentUser}/>)}/>
                        <Route  path='/signin' children={({match}) => match && <SignIn/>} />
                        <Route  path='/signup' children={({match}) => match && <SignUp/>} />
                        <Route  path='/signout' component={SignOut} />
                        <Route  path='/features' component={requireAuth(Features)} />
                    </div>
                </Router>
            )
        }
}

const mapStateToProps = (state) => {
    return {
        appName: state.commons.get('appName'),
        appLoaded:state.commons.get('appLoaded'),
        currentUser:state.commons.get('currentUser')
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({onLoad}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)