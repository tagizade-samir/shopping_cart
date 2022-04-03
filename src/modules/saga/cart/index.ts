import { call, putResolve, select, takeLatest } from 'redux-saga/effects';
import { addCartItemAC, removeCartItemAC } from 'src/modules/redux/reducers/cart/actions';
import { selectCartItems } from 'src/modules/redux/reducers/cart/selectors';
import { IProduct } from 'src/modules/redux/reducers/products/types';
import { putItem } from 'src/modules/storage';
import { Utils } from 'src/services/utils';
import { CartSagaActions, ICartPayload } from './types';

export function* watcherCart() {
    yield takeLatest(CartSagaActions.UPDATE_CART_ITEMS, workerCart);
}

export function* workerCart({ payload }: { payload: ICartPayload, type: string }) {
    try{
        const { type, data } = payload;
        switch(type) {
            case 'add':
                yield putResolve(addCartItemAC(data as IProduct));
                break;
            case 'delete':
                yield putResolve(removeCartItemAC(data as number));
                break;
            default:
                break;
        }
        const currentItems: { items: Array<IProduct> } = yield select(selectCartItems);
        yield call(putItem, Utils.CONSTANTS.cartItemsKey, currentItems);
    } catch(e) {
        console.warn('Error workerCart: ', e);
    }
}