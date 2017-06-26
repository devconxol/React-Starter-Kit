import {fromJS} from 'immutable'

const immutableState = fromJS({

});

export default function(state = immutableState, action) {
    switch (action.type){
        case '':
            return state
    }
}