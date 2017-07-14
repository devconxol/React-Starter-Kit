import React, {Component} from 'react';
import App from '../components/App';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {APP_LOAD_REQUEST} from '../store/actions_types'
import {loadAppRequest} from '../store/actions'


class AppContainer extends Component {
    componentWillMount(){
        this.props.loadAppRequest()
    }

    render(){
        console.log('appProps', this.props);
        if(this.props.appLoaded){
            return (
                <App {...this.props} user={this.props.user} />
            )
        } else return (
            <h1>Loading The APP</h1>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);

    return {
        appLoaded: state.get('common').get('appLoaded'),
        user: state.get('common').get('user')
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({loadAppRequest}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
