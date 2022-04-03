import { ProductsActions } from "./types";

const initialState = {
    data: [],
    isLoading: false,
    modalState: {
        isProductsModalOpen: false,
        selectedProduct: null,
    }
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
        case ProductsActions.SET_PRODUCTS_MODAL_STATE:
            return {
                ...state,
                modalState: {
                    isProductsModalOpen: payload.isProductsModalOpen,
                    selectedProduct: payload.selectedProduct,
                }
            }
        default:
            return state;
    }
}