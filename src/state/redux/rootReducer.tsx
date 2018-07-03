import { RouterState } from "connected-react-router";
import { Action, combineReducers, Reducer } from "redux";

import { IExampleAction } from "state/example/exampleActions";
import { exampleReducer, IExampleState } from "state/example/exampleReducer";


export interface IRootState {
    readonly example?: IExampleState;
    readonly router?: RouterState;
}

export type IRootAction =
    Action
    | IExampleAction;

// the one reducer to bind them...
export const rootReducer: Reducer<IRootState, IRootAction> = combineReducers({
    example: exampleReducer,
});
