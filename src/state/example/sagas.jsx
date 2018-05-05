import { delay } from "redux-saga";
import { all, put, takeEvery } from "redux-saga/effects";

import * as exampleActions from "state/example/actions";


// example saga that gets current date after 1000ms
function* getCurrentDate(action) {
    yield delay(1000);
    let { message } = action;
    yield put(exampleActions.editMessage(message));
}

export function* watchEditMessageAsync() {
    const action = exampleActions.actions.EDIT_MESSAGE_ASYNC;
    yield takeEvery(action, getCurrentDate);
}

export function* exampleSaga() {
    return yield all([
        watchEditMessageAsync(),
    ]);
}
