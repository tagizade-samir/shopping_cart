import { spawn } from "redux-saga/effects";
import { watcherCart } from "src/modules/saga/cart";
import { watcherCategories } from "./categories";

export function* rootSaga() {
    yield spawn(watcherCart);
    yield spawn(watcherCategories);
}