import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getAllCategories, ResponseType } from "../../../services/api";
import { setCategoriesDataAC, setIsLoadingAC } from "../../redux/reducers/categories/actions";
import { ICategory } from "../../redux/reducers/categories/types";
import { CategoriesSagaActions } from "./types";

export function* watcherCategories() {
    yield takeLatest(CategoriesSagaActions.GET_ALL_CATEGORIES, workerCategories);
}

function* workerCategories() {
    yield put(setIsLoadingAC(true));
    try {
        const categories: ResponseType<Array<ICategory>> = yield call(getAllCategories);
        yield delay(1000);
        if(categories.data && categories.data.length) {
            yield put(setCategoriesDataAC(categories.data));
        }
        yield put(setIsLoadingAC(false));
    } catch (e) {
        yield put(setIsLoadingAC(false));
        console.warn('Error workerCategories -> ', e);
    }
}