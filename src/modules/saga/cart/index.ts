import { call, put, putResolve, select, takeLatest } from 'redux-saga/effects';
import { Utils } from '../../../services/utils';
import { addCartItemAC, removeCartItemAC } from '../../redux/reducers/cart/actions';
import { selectCartItems } from '../../redux/reducers/cart/selectors';
import { IProduct } from '../../redux/reducers/products/types';
import { putItem, readItem } from '../../storage';
import { CartSagaActions, ICartPayload } from './types';

export function* watcherCart() {
    yield takeLatest(CartSagaActions.UPDATE_CART_ITEMS, workerCart);
}

export function* watcherSynchronizeCart() {
    yield takeLatest(CartSagaActions.SYNCHRONIZE_CART, workerSynchronizeCart);
}

export function* workerSynchronizeCart() {
    try {
        const result: string = yield call(readItem, Utils.CONSTANTS.cartItemsKey);
        const products: Array<any> | undefined = JSON.parse(result);
        if (products && products.length) {
            yield put(addCartItemAC(products));
        }
    } catch(e) {
        console.warn('Error workerSynchronizeCart: ', e)
    }
}

export function* workerCart({ payload }: { payload: ICartPayload, type: string }) {
    try {
        const { type, data } = payload;
        switch(type) {
            case 'add':
                yield putResolve(addCartItemAC([data] as Array<IProduct>));
                break;
            case 'delete':
                yield putResolve(removeCartItemAC(data as number));
                break;
            default:
                break;
        }
        const currentItems: Array<IProduct> = yield select(selectCartItems);
        yield call(putItem, Utils.CONSTANTS.cartItemsKey, currentItems);
    } catch(e) {
        console.warn('Error workerCart: ', e);
    }
}