import { RootState } from "../..";

export const selectProducts = ((state: RootState): Array<any> => state.products.data);

export const selectIsLoadingProducts = ((state: RootState): boolean => state.products.isLoading);

export const selectProductsModalState = ((state: RootState): any => state.products.modalState);