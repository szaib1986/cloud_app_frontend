import {
    LOGIN_ACTION
} from './constants';
import {
    fromJS
} from 'immutable';

const initialState = fromJS({
    username: '',
    password: ''
})

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_ACTION:
            return state;
            break;
        default:
            return state;
            break;
    }
}