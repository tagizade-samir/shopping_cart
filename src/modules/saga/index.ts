import { spawn } from "redux-saga/effects";
import { watcherSynchronizeApp } from "./app";
import { watcherCart } from "./cart";
import { watcherCategories } from "./categories";
import { watcherProducts } from "./products";
import { watcherUser } from "./user";

export function* rootSaga() {
    yield spawn(watcherCart);
    yield spawn(watcherCategories);
    yield spawn(watcherProducts);
    yield spawn(watcherSynchronizeApp);
    yield spawn(watcherUser);
}