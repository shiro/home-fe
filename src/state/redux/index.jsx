import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";

import reducers from "state/redux/rootReducer";
import rootSaga from "state/redux/rootSaga";


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
