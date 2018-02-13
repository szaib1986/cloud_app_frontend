//Main reducer
//used to get reducer from every 'container' component
import { combineReducers } from 'redux';
import AppReducer from './containers/App/reducer';
import NavigationReducer from './containers/NavigationContainer/reducer'
import DealSearchFormReducer from './containers/DealSearchContainer/FormContainer/reducer'
import DealSearchResultReducer from './containers/DealSearchContainer/DealSearchResultContainer/reducer'
const allReducers = combineReducers({
    AppReducer,
    NavigationReducer,
    DealSearchFormReducer,
    DealSearchResultReducer
});

export default allReducers;