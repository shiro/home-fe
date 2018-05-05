import { exampleSaga } from "state/example/sagas";
import { all } from "redux-saga/effects";


export default function* rootSaga() {
    return yield all([
        exampleSaga(),
    ]);
}
