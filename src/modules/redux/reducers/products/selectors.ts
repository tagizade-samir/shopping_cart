import { RootState } from "../..";
import { IProduct } from "./types";

export const selectProducts = ((state: RootState): Array<IProduct> => state.products.data);

export const selectIsLoadingProducts = ((state: RootState): boolean => state.products.isLoading);

export const selectProductsModalState = ((state: RootState): any => state.products.modalState);