import {createStore as createReduxStore, applyMiddleware, compose, Middleware, Store} from 'redux';
import {StateType} from 'typesafe-actions';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import {rootReducer} from './root.reducer';
import {rootSaga} from './root.saga';
// import Raven from 'raven-js';
// import createRavenMiddleware from 'raven-for-redux';

export type RootState = StateType<typeof rootReducer>;

const getComposer = () => {
    if (window !== undefined && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
    return compose;
};

const getMiddlewareEnhancer = (...middleware: Middleware[]) => {
    if (process.env.NODE_ENV !== 'production') {
        return applyMiddleware(...middleware, createLogger({collapsed: true}));
    }
    // return applyMiddleware(...middleware, createRavenMiddleware(Raven, {}));
    return applyMiddleware(...middleware);
};

const onError = (exception: any) => {
    // Raven.captureException(exception);
};

const composeEnhancers = getComposer();
const sagaMiddleware = createSagaMiddleware({onError});
const middlewareEnhancer = getMiddlewareEnhancer(sagaMiddleware);

const store: Store<RootState> = createReduxStore(rootReducer, composeEnhancers(middlewareEnhancer));

sagaMiddleware.run(rootSaga);

// if (module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept('./root.reducer', () => {
//         store.replaceReducer(rootReducer);
//     });
// }

export {store};
