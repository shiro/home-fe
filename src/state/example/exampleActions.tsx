import { createAction } from "typesafe-actions";


export const exampleActions = {
    editMessage: createAction("EDIT_MESSAGE", (message: string) =>
        ({
            message,
            type: "EDIT_MESSAGE",
        })),
    editMessageAsync: createAction("EDIT_MESSAGE_ASYNC", (message: string) =>
        ({
            message,
            type: "EDIT_MESSAGE_ASYNC",
        })),
};
