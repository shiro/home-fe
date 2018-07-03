import { connectRouter, routerMiddleware as createRouterMiddleware } from "connected-react-router";
import { applyMiddleware, createStore, Store as ReduxStore } from "redux";
import createSagaMiddleware from "redux-saga";
import history from "state/redux/history";

import { IRootAction, IRootState, rootReducer } from "state/redux/rootReducer";
import rootSaga from "state/redux/rootSaga";


// create middleware
export const sagaMiddleware = createSagaMiddleware();

export const routerMiddleware = createRouterMiddleware(history);

let middleware = applyMiddleware(
    sagaMiddleware,
    routerMiddleware,
);

// enable redux-dev-tool extension if in development
if (process.env.NODE_ENV === "development") {
    const composeWithDevTools = require("redux-devtools-extension").composeWithDevTools;
    middleware = composeWithDevTools(middleware);
}


export const Store = (initialState: IRootState = {}) => {
    const store: ReduxStore<IRootState, IRootAction> = createStore(
        connectRouter(history)(rootReducer),
        initialState,
        middleware,
    );

    // run the root saga
    const sagaPromise = sagaMiddleware.run(rootSaga);

    // return store;
    return { store, sagaPromise };
};


export default Store;

// Hot reloading
// if (module.hot) {
//   // Reload components
//   module.hot.accept('./App', () => {
//     render()
//   })
//
//   // Reload reducers
//   module.hot.accept('./reducers', () => {
//     store.replaceReducer(connectRouter(history)(rootReducer))
//   })
// }
