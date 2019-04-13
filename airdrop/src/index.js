import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/root';
import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import AppRoot from './AppRoot';

ReactDOM.render(
      <AppRoot>
          <BrowserRouter>
              <Route path='/' component={Root} />
          </BrowserRouter>
      </AppRoot>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
