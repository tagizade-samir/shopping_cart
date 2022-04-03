import { spawn } from "redux-saga/effects";
import { watcherCart } from "./cart";
import { watcherCategories } from "./categories";
import { watcherProducts } from "./products";

export function* rootSaga() {
    yield spawn(watcherCart);
    yield spawn(watcherCategories);
    yield spawn(watcherProducts);
}