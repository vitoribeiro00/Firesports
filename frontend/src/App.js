import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import Routes from './routes';
import history from './services/history';

import { store, persistor } from './store';

const Root = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <Routes  />
      </Router>
      </PersistGate>
  </Provider>
  
)

export default Root