import { spawn } from "redux-saga/effects";
import { watcherCart } from "src/modules/saga/cart";

export function* rootSaga() {
    yield spawn(watcherCart);
}