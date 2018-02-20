import { fromJS } from 'immutable';

const initialState = fromJS({
    toastr: {
        isOpen: true,
        message: "I am toastr message",
        autoHideDuration: 2000
    }
});

export default function AppReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}