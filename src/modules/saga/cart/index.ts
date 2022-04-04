import { call, put, putResolve, select, takeLatest } from 'redux-saga/effects';
import { Utils } from '../../../services/utils';
import { addCartItemAC, removeCartItemAC, removeItemTypeAC } from '../../redux/reducers/cart/actions';
import { selectCartItems } from '../../redux/reducers/cart/selectors';
import { IProduct } from '../../redux/reducers/products/types';
import { putItem } from '../../storage';
import { CartSagaActions, ICartPayload } from './types';

export function* watcherCart() {
    yield takeLatest(CartSagaActions.UPDATE_CART_ITEMS, workerCart);
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
            case 'removeItems':
                yield putResolve(removeItemTypeAC(data as IProduct));
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