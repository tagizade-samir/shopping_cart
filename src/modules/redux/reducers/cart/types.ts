import { IProduct } from "../products/types";

export const CartActions = {
    ADD_CART_ITEM: 'ADD_CART_ITEMS',
    DELETE_CART_ITEM: 'DELETE_CART_ITEM',
};

export interface CartState {
    items: Array<IProduct>;
}