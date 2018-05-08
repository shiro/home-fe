import { createStore, applyMiddleware } from "redux";
import { routerMiddleware as createRouterMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";

import history from "state/redux/history";

import reducers from "state/redux/rootReducer";
import rootSaga from "state/redux/rootSaga";


// create middleware
export const sagaMiddleware = createSagaMiddleware();

export const routerMiddleware = createRouterMiddleware(history);

let middleware = applyMiddleware(
    sagaMiddleware,
    routerMiddleware
);

// enable redux-dev-tool extension if in development
if(process.env.NODE_ENV === "development") {
    const composeWithDevTools = require("redux-devtools-extension").composeWithDevTools;
    middleware = composeWithDevTools(middleware);
}

export default function Store(intialState = {}) {
    let store = createStore(
        reducers,
        intialState,
        middleware
    );
    
    // run the root saga
    let sagaPromise = sagaMiddleware.run(rootSaga);
    
    return { store, sagaPromise };
}
