import { all, fork } from "redux-saga/effects";

import { exampleSaga } from "state/example/exampleSagas";


export default function* rootSaga() {
    return yield all([
        fork(exampleSaga),
    ]);
}
