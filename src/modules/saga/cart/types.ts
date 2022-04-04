import { IProduct } from "../../redux/reducers/products/types";

export const CartSagaActions = {
    UPDATE_CART_ITEMS: 'UPDATE_CART_ITEMS',
    SYNCHRONIZE_CART: 'SYNCHRONIZE_CART',
};

export interface ICartPayload {
    type: 'add' | 'delete';
    data: number | IProduct ;
}