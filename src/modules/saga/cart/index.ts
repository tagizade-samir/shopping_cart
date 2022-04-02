import { takeLatest } from 'redux-saga/effects';

export function* watcherCart() {
    yield takeLatest('WATCH_CART', workerCart);
}

export function* workerCart() {
    console.log('RUNNED');
}