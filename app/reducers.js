import { combineReducers } from 'redux';
import AppReducer from './containers/App/reducer';
import NavigationReducer from './containers/NavigationContainer/reducer'
const allReducers = combineReducers({
    AppReducer,
    NavigationReducer
});

export default allReducers;