import 'babel-core/polyfill';
import React from 'react'; 
import { render } from 'react-dom'; 
import { Provider } from 'react-redux'; 
import App from './containers/App/App'; 
import store from './store/Store.js';

render( 
    <Provider store={store}> 
          <App /> 
    </Provider>, 
      document.getElementById('root') 
  );