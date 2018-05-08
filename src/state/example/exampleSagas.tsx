import { delay } from "redux-saga";
import { all, fork, put, takeEvery } from "redux-saga/effects";

import { exampleActionCreators, exampleActions } from "state/example/exampleActions";


// example saga that gets current date after 1000ms
function* getCurrentDate(action) {
    yield delay(1000);
    const { message } = action;
    yield put(exampleActionCreators.editMessage(message));
}

export function* watchEditMessageAsync() {
    const action = exampleActions.EDIT_MESSAGE_ASYNC;
    yield takeEvery(action, getCurrentDate);
}

export function* exampleSaga() {
    return yield all([
        fork(watchEditMessageAsync),
    ]);
}
