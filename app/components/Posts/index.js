import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCurrentUser} from '../../actions'

class Posts extends Component {
    componentWillMount(){}


    render(){
        return (
            <div>
                <h2>Posts</h2>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({}, dispatch)
};

export default connect(null, null)(Posts);