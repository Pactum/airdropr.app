import React from 'react';
import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

export default ({ children, initialState = {} }) => {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)),
  );

  return  (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
