import { ProductsSagaActions } from "./types";

export const getAllProductsSaga = (payload: string) => ({
    type: ProductsSagaActions.GET_ALL_PRODUCTS,
    payload,
});