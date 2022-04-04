import { call, delay, put, takeLatest } from "redux-saga/effects";

import { UserSagaActions } from "./types";
import { Utils } from "../../../services/utils";
import { putItem, removeItem } from "../../storage";
import { setUserDataAC } from "../../redux/reducers/user/actions";

export function* watcherUser() {
    yield takeLatest(UserSagaActions.SET_USER_SAGA, workerUser);
}

function* workerUser({ payload }: any) {
    try {
        const { CONSTANTS: { userItemKey }, HELPERS: { getEmptyUser, getUser } } = Utils;
        if (payload) {
            const user = getUser();
            yield put(setUserDataAC(user));
            yield call(putItem, userItemKey, user);
        } else {
            const emptyUser = getEmptyUser();
            yield put(setUserDataAC(emptyUser));
            yield call(removeItem, userItemKey);
        }
    } catch (e) {
        console.warn('Error workerUser -> ', e);
    }
}