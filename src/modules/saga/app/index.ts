import { call, put, putResolve, select, takeLatest } from 'redux-saga/effects';
import { Utils } from '../../../services/utils';
import { addCartItemAC } from '../../redux/reducers/cart/actions';
import { setUserDataAC } from '../../redux/reducers/user/actions';
import { IUser } from '../../redux/reducers/user/types';
import { readItem } from '../../storage';
import { AppSagaActions } from './types';

export function* watcherSynchronizeApp() {
    yield takeLatest(AppSagaActions.SYNCHRONIZE_APP, workerSynchronizeApp);
}

export function* workerSynchronizeApp() {
    try {
        const productsData: string = yield call(readItem, Utils.CONSTANTS.cartItemsKey);
        const products: Array<any> | undefined = JSON.parse(productsData);
        const userData: string = yield call(readItem, Utils.CONSTANTS.userItemKey);
        const user: IUser = JSON.parse(userData);
        if (products && products.length) {
            yield put(addCartItemAC(products));
        }

        if (user) {
            yield put(setUserDataAC(user));
        }
    } catch(e) {
        console.warn('Error workerSynchronizeCart: ', e)
    }
}