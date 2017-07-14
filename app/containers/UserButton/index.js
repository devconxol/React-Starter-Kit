import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import UserButton from '../../components/organisms/UserButton';
import {getLoginPage} from '../../store/Auth/SignUp/actions'
import {signOutRequest} from '../../store/Common/actions'



const mapStateToProps = (state) => {
    return {
        user: state.get('common').get('user')
    }
};



const mapDispatchToProps = (dispatch, props) => (bindActionCreators({
    onLogout: () =>  dispatch(signOutRequest())
}, dispatch));



class UserButtonContainer extends Component {
    constructor(props){
        super()
    }

    getLoginPage(){
        this.props.history.push('/connecter')
    }

    render(){
        //console.log('props', this.props);
        return (
            <UserButton getLoginPage={this.getLoginPage.bind(this)}  {...this.props} />
        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(UserButtonContainer)