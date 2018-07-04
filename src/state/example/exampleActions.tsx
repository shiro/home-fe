import { ActionType, createAction, createStandardAction } from "typesafe-actions";


export const exampleActions = {
    editMessage: createStandardAction("EDIT_MESSAGE")<string>(),
    editMessageAsync: createAction("EDIT_MESSAGE_ASYNC", (resolve) =>
        (message: string) =>
            resolve({
                message,
            }),
    ),
};

export type IExampleAction = ActionType<typeof exampleActions>;
