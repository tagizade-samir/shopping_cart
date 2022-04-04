import { IProduct } from "../products/types";

export const CartActions = {
    ADD_CART_ITEM: 'ADD_CART_ITEMS',
    DELETE_CART_ITEM: 'DELETE_CART_ITEM',
    DELETE_ITEM_TYPE: 'DELETE_ITEM_TYPE',
    CLEAR_CART: 'CLEAR_CART',
};

export interface CartState {
    items: Array<IProduct>;
}