import { CategoriesActions, ICategory } from "./types";

export const setIsLoadingAC = (payload: boolean) => ({
    type: CategoriesActions.SET_IS_LOADING,
    payload,
});

export const setCategoriesDataAC = (payload: Array<ICategory>) => ({
    type: CategoriesActions.SET_CATEGORIES_DATA,
    payload,
});