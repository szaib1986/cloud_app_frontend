
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import App from './containers/App/index';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from "history/createBrowserHistory";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const history = createHistory();

const store = configureStore({}, history);

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);