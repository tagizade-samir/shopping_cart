import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { Utils } from "../../../services/utils";
import { setUserDataAC } from "../../redux/reducers/user/actions";
import { putItem, removeItem } from "../../storage";
import { UserSagaActions } from "./types";

export function* watcherUser() {
    yield takeLatest(UserSagaActions.SET_USER_SAGA, workerUser);
}

function* workerUser({ payload }: any) {
    try {
        yield delay(1000);
        if (payload) {
            const user = {
                isAuthorized: true,
                name: 'Samir',
                gender: 'male',
                id: '1',
            };
            yield put(setUserDataAC(user));
            yield call(putItem, Utils.CONSTANTS.userItemKey, user);
        } else {
            const emptyUser = {
                isAuthorized: false,
                name: '',
                gender: '',
                id: '',
            };
            yield put(setUserDataAC(emptyUser));
            yield call(removeItem, Utils.CONSTANTS.userItemKey);
        }
    } catch (e) {
        console.warn('Error workerUser -> ', e);
    }
}