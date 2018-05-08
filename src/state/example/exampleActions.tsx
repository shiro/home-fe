export const exampleActions = {
    EDIT_MESSAGE: "EDIT_MESSAGE",
    EDIT_MESSAGE_ASYNC: "EDIT_MESSAGE_ASYNC",
};

export const exampleActionCreators = {
    editMessage: (message = "undefined") =>
        ({
            message,
            type: exampleActions.EDIT_MESSAGE,
        }),

    editMessageAsync: (message = "undefined") =>
        ({
            message,
            type: exampleActions.EDIT_MESSAGE_ASYNC,
        }),
};
