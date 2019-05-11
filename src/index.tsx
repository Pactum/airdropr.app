import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import {Root} from './containers/Root';
import {Routes} from './containers/Routes';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {store} from './store';
import {getHistory} from './history';
import * as serviceWorker from './serviceWorker';
import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={getHistory()}>
            <Root>
                <Routes />
            </Root>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
