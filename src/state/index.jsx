import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";

import reducers from "state/reducers";
import rootSaga from "state/sagas";

// provide correct history factory for the target
let createHistory;
switch (process.env.TARGET) {
    case "client":
        createHistory = require("history/createBrowserHistory").default;
        break;
    default:
        throw new Error("only client configuration is supported for now");
        // createHistory = require('history/createMemoryHistory').default;
}

// TODO: extract into seperate file
let history = createHistory();
export { history };

// create middleware
const sagaMiddleware = createSagaMiddleware();

// store factory that applies thunk-middleware for async actions
export default function Store(intialState = {}) {
    let store = createStore(
        reducers,
        intialState,
        applyMiddleware(
            sagaMiddleware,
            routerMiddleware(history)
        )
    );
    sagaMiddleware.run(rootSaga);
    return store;
}
