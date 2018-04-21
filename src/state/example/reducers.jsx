import * as exampleActions from "state/example/actions";

export const initialState = {
    message: "hello world"
};

export function exampleReducer(state = initialState, action) {
    switch (action.type) {
        case exampleActions.actions.EDIT_MESSAGE: {
            let message = action.message;
            return { ...state, message };
        }

        default:
            return state;
    }
}