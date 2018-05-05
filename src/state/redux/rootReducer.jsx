import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";

import { exampleReducer } from "state/example/reducers";


// the one reducer to bind them...
export default combineReducers({
    router: routerReducer,
    example: exampleReducer,
});
