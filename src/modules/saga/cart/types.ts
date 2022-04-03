import { IProduct } from "src/modules/redux/reducers/products/types";

export const CartSagaActions = {
    UPDATE_CART_ITEMS: 'UPDATE_CART_ITEMS',
};

export interface ICartPayload {
    type: 'add' | 'delete';
    data: number | IProduct ;
}