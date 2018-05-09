import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";

import { exampleReducer } from "state/example/exampleReducers";


// the one reducer to bind them...
export default combineReducers({
    example: exampleReducer,
    router: routerReducer,
});
