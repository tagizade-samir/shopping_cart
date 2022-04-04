import { spawn } from "redux-saga/effects";

import { watcherUser } from "./user";
import { watcherCart } from "./cart";
import { watcherProducts } from "./products";
import { watcherSynchronizeApp } from "./app";
import { watcherCategories } from "./categories";

export function* rootSaga() {
    yield spawn(watcherCart);
    yield spawn(watcherCategories);
    yield spawn(watcherProducts);
    yield spawn(watcherSynchronizeApp);
    yield spawn(watcherUser);
}