import { toJS, fromJS } from 'immutable';
import { OPEN_TOASTR, CLOSE_TOASTR } from './constants';

const initialState = fromJS({
    toastr: {
        isOpen: false,
        message: "",
        autoHideDuration: 2000
    }
});

export default function AppReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_TOASTR:
            let toastrState = state.get('toastr').toJS();
            toastrState.isOpen = true;
            toastrState.message = aciton.toastr.message;
            return state.set('toastr', fromJS(toastrState));
            break;
        case CLOSE_TOASTR:
            let toastr = state.get('toastr').toJS();
            toastr.isOpen = false;
            toastr.message = '';
            return state.set('toastr', fromJS(toastr));
            break;
        default:
            return state;
    }
}