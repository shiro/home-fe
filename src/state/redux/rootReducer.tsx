import { connectRouter, RouterState } from "connected-react-router";
import { Action, combineReducers, Reducer } from "redux";

import { IExampleAction } from "state/example/exampleActions";
import { exampleInitialState, exampleReducer, IExampleState } from "state/example/exampleReducer";
import history from "state/redux/history";


export interface IRootState {
    readonly example?: IExampleState;
    readonly router?: RouterState;
}

export const rootIntialState: IRootState = {
    example: exampleInitialState,
};

export type IRootAction =
    Action
    | IExampleAction;

// the one reducer to bind them...
export const rootReducer: Reducer<IRootState, IRootAction> = combineReducers({
    example: exampleReducer,
    router: connectRouter(history),
});
