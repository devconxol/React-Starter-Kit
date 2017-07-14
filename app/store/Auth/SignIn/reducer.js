import {SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE} from '../../actions_types'
import {fromJS} from 'immutable'


const initialState = fromJS(
    {
        user: null
    }
);

export default (state = initialState, action) => {
    switch (action.type){
        case SIGN_IN_SUCCESS:
            return state
                .set('user', action.user);
        default:
            return state
    }
}