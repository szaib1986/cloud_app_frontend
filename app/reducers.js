import { combineReducers } from 'redux';
import AppReducer from './containers/App/reducer';
import NavigationReducer from './containers/NavigationContainer/reducer'
import GalleryReducer from './containers/GalleryContainer/reducer'
const allReducers = combineReducers({
    AppReducer,
    NavigationReducer,
    GalleryReducer
});

export default allReducers;