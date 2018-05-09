import { routerMiddleware as createRouterMiddleware } from "react-router-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import history from "state/redux/history";

import reducers from "state/redux/rootReducer";
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

const Store = (initialState = {}) => {
    const store = createStore(
        reducers,
        initialState,
        middleware,
    );

    // run the root saga
    const sagaPromise = sagaMiddleware.run(rootSaga);

    return { store, sagaPromise };
};


export default Store;
