import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {signOut} from '../../../actions'

class SignOut extends Component {

    componentWillMount(){
        this.props.signOut();
    }

    render(){
        return (
            <div>
                <h2>Sorry to see you go....</h2>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)  => {
    return bindActionCreators({signOut}, dispatch)
};

export default connect(null, mapDispatchToProps)(SignOut)