import { Reducer } from "redux";
import { exampleActions } from "state/example/exampleActions";
import { getType } from "typesafe-actions";


export interface IExampleState {
    readonly message: string;
}

export const exampleInitialState: IExampleState = {
    message: "hello rabbits",
};

export const exampleReducer: Reducer<IExampleState> = (state = exampleInitialState, action) => {
    switch (action.type) {
        case getType(exampleActions.editMessage): {
            const message = action.message;

            return { ...state, message };
        }
        default:
            return state;
    }
};