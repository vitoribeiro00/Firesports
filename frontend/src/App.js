import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import history from './services/history';

import configureStore from './store/configureStore';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <Routes  />
    </Router>
  </Provider>
  
)

export default Root