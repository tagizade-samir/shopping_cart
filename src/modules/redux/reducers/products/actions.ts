import { ProductsActions, IProduct } from "./types";

export const setProductsDataAC = (payload: Array<IProduct>) => ({
    type: ProductsActions.SET_PRODUCTS_DATA,
    payload,
});

export const setIsLoadingProductsDataAC = (payload: boolean) => ({
    type: ProductsActions.SET_IS_LOADING_PRODUCTS,
    payload,
});