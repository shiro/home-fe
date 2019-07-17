import { Reducer } from "redux";
import { getType } from "typesafe-actions";
import { exampleActions, IExampleAction } from "state/example/exampleActions";


export interface IExampleState {
    readonly message: string;
}

export const exampleInitialState: IExampleState = {
    message: "hello rabbits",
};

export const exampleReducer: Reducer<IExampleState, IExampleAction> = (state = exampleInitialState, action) => {
    switch (action.type) {
        case getType(exampleActions.editMessage): {
            const message = action.payload;

            return { ...state, message };
        }
        default:
            return state;
    }
};
