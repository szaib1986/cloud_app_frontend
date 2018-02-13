
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from "history/createBrowserHistory";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './theme/index';
import App from './containers/App/index';

const history = createHistory();

//configre the Redux store
const store = configureStore({}, history);

//Initializing the React Applicaton using Redux
// and Material UI theme
render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={theme}>
    <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
