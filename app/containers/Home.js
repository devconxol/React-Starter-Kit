import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { getEvents } from '../actions'

import SignIn from '../../app/containers/Auth/SignIn'
import SignOut from '../../app/containers/Auth/SignOut'
import SignUp from './Auth/SignUp/oldindex'
import Posts from '../../app/components/Posts'


import Audience from '../../app/containers/LiveSession/Audience'
import Speaker from '../../app/containers/LiveSession/Speaker'
import Board from '../../app/containers/LiveSession/Board'

import requireAuth from '../../app/containers/RequireAuth'
import {Route, Switch} from 'react-router'

import Header from './Header'
import io from 'socket.io-client'
import {onLoad} from '../actions'

import Helmet from 'react-helmet'

class Home extends Component {
    constructor(){
        super();
        this.connect = this.connect.bind(this);
        this.disconnect = this.disconnect.bind(this);
        this.welcome = this.welcome.bind(this);
        this.state = {
            status: 'disconnected',
            title: ''
        }
    }

    componentDidMount(){
        this.socket = io('http://localhost:3090');
        this.socket.on('connect', this.connect);
        this.socket.on('disconnect', this.disconnect);
        this.socket.on('welcome', this.welcome);
        let token;


        if(typeof window !== 'undefined'){
             token = localStorage.getItem('token');
        }
        this.props.onLoad(token)
    }

    welcome(serverState){
        this.setState({
            title: serverState.title
        })
    }

    disconnect(){
        this.setState({
            status: 'disconnected'
        })
    }

    connect(){
        this.setState({
            status: 'connected'
        });
    }


    render(){
        return (
            <div>
                <Helmet>
                    <title>Holy Notes</title>
                    <meta name="description" content="URHC Website" />

                </Helmet>
                <Header/>
                {this.props.getEvents()}
                <h1>Welcome to {this.props.currentUser? this.props.currentUser.email: null}</h1>
                <Switch>
                <Route  path='/signin' children={({match}) => match && <SignIn/>} />
                <Route  path='/signup' children={({match}) => match && <SignUp/>} />
                <Route  path='/signout' component={SignOut} />
                <Route  path='/speaker' component={Speaker} />
                <Route  path='/board' component={Board} />
                <Route  path='/audience' component={Audience} />
                <Route  path='/signout' component={SignOut} />
                <Route  path='/features' component={requireAuth(Posts)} />
                </Switch>

            </div>

    )
    }
}

const mapStateToProps = (state) => {
  return {
      state
  }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getEvents, onLoad}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
