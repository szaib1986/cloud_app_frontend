import {
    TOGGLE_DRAWER
} from './constants';
import {
    fromJS
} from 'immutable';

const initialState = fromJS({
    isDrawerOpen: false
})

export default function navigationReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_DRAWER:
            return state.set('isDrawerOpen', !state.get('isDrawerOpen'));
            break;
        default:
            return state;
            break;
    }
}