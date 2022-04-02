import { call, delay, put, takeLatest } from "redux-saga/effects";
import { setCategoriesDataAC, setIsLoadingAC, setIsRequestStartedAC } from "src/modules/redux/reducers/categories/actions";
import { ICategory } from "src/modules/redux/reducers/categories/types";
import { getAllCategories, ResponseType } from "src/services/api";
import { CategoriesSagaActions } from "./types";

export function* watcherCategories() {
    yield takeLatest(CategoriesSagaActions.GET_ALL_CATEGORIES, workerCategories);
}

function* workerCategories() {
    yield put(setIsRequestStartedAC(true));
    yield put(setIsLoadingAC(true));
    try {
        const categories: ResponseType<Array<ICategory>> = yield call(getAllCategories);
        yield delay(1000);
        if(categories.data && categories.data.length) {
            yield put(setCategoriesDataAC(categories.data));
        }
        yield put(setIsRequestStartedAC(false));
        yield put(setIsLoadingAC(false));
    } catch (e) {
        yield put(setIsRequestStartedAC(false));
        yield put(setIsLoadingAC(false));
        console.warn('Error workerCategories -> ', e);
    }
}