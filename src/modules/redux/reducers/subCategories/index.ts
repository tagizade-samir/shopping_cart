import { SubCategoriesActions } from "./types";

const initialState = {
    data: [],
    selectedSubCategory: 0,
}

export const subCategoriesReducer = (state = initialState, action: any) => {
    const { type, payload } = action;
    switch(type) {
        case SubCategoriesActions.SET_SUB_CATEGORIES_DATA:
            return {
                ...state,
                data: payload,
                selectedSubCategory: 0,
            }
        case SubCategoriesActions.SET_SELECTED_SUB_CATEGORY:
            return {
                ...state,
                selectedSubCategory: payload,
            }
        default:
            return state;
    }
}