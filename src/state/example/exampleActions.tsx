import { ActionType, createAction } from "typesafe-actions";


export const exampleActions = {
    editMessage: createAction("EDIT_MESSAGE", (resolve) =>
        (message: string) =>
            resolve({
                message,
            }),
    ),
    editMessageAsync: createAction("EDIT_MESSAGE_ASYNC", (resolve) =>
        (message: string) =>
            resolve({
                message,
            }),
    ),
};

export type IExampleAction = ActionType<typeof exampleActions>;
