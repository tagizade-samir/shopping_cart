import { IProduct } from "../products/types";
import { CartActions } from "./types";

export const addCartItemAC = (payload: Array<IProduct>) => ({
    type: CartActions.ADD_CART_ITEM,
    payload,
});

export const removeCartItemAC = (payload: number) => ({
    type: CartActions.DELETE_CART_ITEM,
    payload,
});