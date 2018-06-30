import { RouterState } from "connected-react-router";
import { combineReducers, Reducer } from "redux";

import { exampleReducer, IExampleState } from "state/example/exampleReducer";


export interface IRootState {
    readonly example?: IExampleState;
    readonly router?: RouterState;
}

// the one reducer to bind them...
export const rootReducer: Reducer<IRootState> = combineReducers({
    example: exampleReducer,
});
