import { IProduct } from "../products/types";
import { CartActions } from "./types";

const initialState = {
    items: []
}

export const cartReducer = (state = initialState, action: any) => {
    const { type, payload } = action;
    switch(type) {
        case CartActions.ADD_CART_ITEM:
            return {
                ...state,
                items: [...state.items, payload],
            }
        case CartActions.DELETE_CART_ITEM:
            return {
                ...state,
                items: state.items.filter((item: IProduct) => item.id !== payload),
            }
        default:
            return state;
    }
}