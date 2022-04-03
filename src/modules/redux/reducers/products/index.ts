import { ProductsActions } from "./types";

const initialState = {
    data: [],
    isLoading: false,
}

export const productsReducer = (state = initialState, action: any) => {
    const { type, payload } = action;
    switch(type) {
        case ProductsActions.SET_PRODUCTS_DATA:
            return {
                ...state,
                data: payload,
            }
        case ProductsActions.SET_IS_LOADING_PRODUCTS:
            return {
                ...state,
                isLoading: payload,
            }
        default:
            return state;
    }
}