import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import SignIn from './Auth/SignIn/index'
import SignUp from './Auth/SignUp/index'
import SignOut from './Auth/SignOut/index'
import Features from '../components/Posts'
import Header from './Header'

import {Link} from 'react-router-dom'
import requireAuth from './RequireAuth'

class Home extends Component {
    render(){
        return (
            <div>
                <h1>Welcome to {this.props.currentUser? this.props.currentUser.email: null}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
      state
  }
};

export default connect(mapStateToProps)(Home)
