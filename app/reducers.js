import { combineReducers } from 'redux';
import AppReducer from './containers/App/reducer';
import NavigationReducer from './containers/NavigationContainer/reducer';
import LoginReducer from './containers/LoginContainer/reducer';
const allReducers = combineReducers({
    AppReducer,
    NavigationReducer,
    LoginReducer
});

export default allReducers;