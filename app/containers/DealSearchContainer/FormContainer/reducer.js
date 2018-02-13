import {
    LOAD_TRIPS_SUCCEEDED,
    SET_UNIQUE_LOCATIONS,
    SET_SEARCHDEAL_FORM,
    GET_SEARCH_FORM
} from './constants';
import {
    fromJS,
    toJS
} from 'immutable';


const initialState = fromJS({
    allTrips: {
        currency: '',
        deals: []
    },
    locations: [],
    searchDealForm: {
        To: '-1',
        From: '-1',
        DealMode: 'Cheapest'
    }
})


export default function dealSearchReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_TRIPS_SUCCEEDED:
            return state.set('allTrips', fromJS(action.allTrips));
            break;
        case SET_UNIQUE_LOCATIONS:
            return state.set('locations', fromJS(action.uniqueLocs));
            break;
        case GET_SEARCH_FORM:
            action.cb(state.get('allTrips').toJS(), state.get('searchDealForm').toJS())
            return state;
            break;
        case SET_SEARCHDEAL_FORM:

            let searchDealState = state.get('searchDealForm');

            let searchDealForm = searchDealState;

            if (searchDealState.hasOwnProperty("size"))
                searchDealForm = searchDealState.toJS();

            searchDealForm[action.payLoad.valueKey] = action.payLoad.value;

            searchDealForm = fromJS(searchDealForm);

            return state.set('searchDealForm', searchDealForm);
            break;
        default:
            return state;
            break;
    }
}