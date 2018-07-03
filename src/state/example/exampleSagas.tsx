import { delay } from "redux-saga";
import { all, fork, put, take } from "redux-saga/effects";

import { exampleActions } from "state/example/exampleActions";
import { getType } from "typesafe-actions";


// example saga that gets current date after 1000ms
function* getCurrentDate() {
    while (true) {
        const action = yield take(getType(exampleActions.editMessageAsync));

        yield delay(1000);

        const { message } = action.payload;
        yield put(exampleActions.editMessage(message));
    }
}

export function* exampleSaga() {
    return yield all([
        fork(getCurrentDate),
    ]);
}
