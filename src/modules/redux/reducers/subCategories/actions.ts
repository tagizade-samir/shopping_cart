import { SubCategoriesActions, ISubCategory } from "./types";

export const setSubCategoriesDataAC = (payload: Array<ISubCategory>) => ({
    type: SubCategoriesActions.SET_SUB_CATEGORIES_DATA,
    payload,
});

export const setSelectedSubCategoryDataAC = (payload: number) => ({
    type: SubCategoriesActions.SET_SELECTED_SUB_CATEGORY,
    payload,
});