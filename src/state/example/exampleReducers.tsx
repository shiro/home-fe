import * as exampleActions from "state/example/exampleActions";


export const initialState = {
    message: "hello rabbits",
};

export const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case exampleActions.exampleActions.EDIT_MESSAGE: {
            const message = action.message;

            return { ...state, message };
        }
        default:
            return state;
    }
};