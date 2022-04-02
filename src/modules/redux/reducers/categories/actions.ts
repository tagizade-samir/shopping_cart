import { CategoriesActions } from "./types";

export const setIsLoadingAC = (payload: boolean) => ({
    type: CategoriesActions.SET_IS_LOADING,
    payload,
});