export const exampleActions = {
    EDIT_MESSAGE: "EDIT_MESSAGE",
    EDIT_MESSAGE_ASYNC: "EDIT_MESSAGE_ASYNC",
};

export const editMessage = (message = "undefined") =>{
    return {
        type: exampleActions.EDIT_MESSAGE,
        message,
    };
};

export const editMessageAsync = (message = "undefined") =>{
    return {
        type: exampleActions.EDIT_MESSAGE_ASYNC,
        message,
    };
};
