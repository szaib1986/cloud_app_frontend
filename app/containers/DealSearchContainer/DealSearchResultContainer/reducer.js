import {
    SEARCH_DEAL
} from './constants';
import {
    fromJS,
    toJS
} from 'immutable';

const initialState = fromJS({
    searchResult: {
        currency: '',
        path: [],
        totalCost: 0,
        mode: '',
        totalTime: '',
        from: '',
        to: ''
    }
})


export default function dealSearchResultReducer(state = initialState, action) {
    switch(action.type){
        case SEARCH_DEAL:
            return state.set('searchResult', fromJS(action.searchResult));
        break;
        default:
        return state;
    }
}