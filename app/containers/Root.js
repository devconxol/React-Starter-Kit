import React, {Component} from 'react';
import App from '../components/App';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class AppContainer extends Component {
    render(){
        return (
            <App {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        user
    }
};

export default connect(mapStateToProps)(AppContainer)
