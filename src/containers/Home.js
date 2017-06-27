import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { getEvents } from '../actions'

class Home extends Component {


    render(){
        this.props.getEvents();
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

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getEvents}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
