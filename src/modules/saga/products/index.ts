import { call, delay, put, takeLatest } from "redux-saga/effects";
import { ResponseType } from "../../../services/api";
import { getAllSubCategories } from "../../../services/api/subCategories";
import { setIsLoadingProductsDataAC, setProductsDataAC } from "../../redux/reducers/products/actions";
import { IProduct } from "../../redux/reducers/products/types";
import { setSubCategoriesDataAC } from "../../redux/reducers/subCategories/actions";
import { ISubCategory } from "../../redux/reducers/subCategories/types";

import { ProductsSagaActions } from "./types";

export function* watcherProducts() {
    yield takeLatest(ProductsSagaActions.GET_ALL_PRODUCTS, workerProducts);
}

function* workerProducts({ payload }: any) {
    try {
        yield put(setIsLoadingProductsDataAC(true));
        if (payload) {
            const result: ResponseType<{ sub_categories: Array<ISubCategory>, products: Array<IProduct> }> = yield call(getAllSubCategories, payload);
            const { data } = result;
            yield delay(1000);
            if (data && data.sub_categories && data.products) {
                yield put(setSubCategoriesDataAC(data.sub_categories));
                yield put(setProductsDataAC(data.products));
            }
        }
        yield put(setIsLoadingProductsDataAC(false));
    } catch (e) {
        yield put(setIsLoadingProductsDataAC(false));
        console.warn('Error workerProducts -> ', e);
    }
}