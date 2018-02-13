import {
    fromJS
} from 'immutable';

const initialState = fromJS({})

export default function navigationReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
            break;
    }
}