import { call, delay, put, takeLatest } from "redux-saga/effects";

import { ProductsSagaActions } from "./types";
import { ResponseType } from "src/services/api";
import { getAllSubCategories } from "src/services/api/subCategories";
import { IProduct } from "src/modules/redux/reducers/products/types";
import { ISubCategory } from "src/modules/redux/reducers/subCategories/types";
import { setSubCategoriesDataAC } from "src/modules/redux/reducers/subCategories/actions";
import { setIsLoadingProductsDataAC, setProductsDataAC } from "src/modules/redux/reducers/products/actions";

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