import { CategoriesActions } from "./types";

const initialState = {
    isLoading: false,
    isRequestStarted: false,
    data: [],
}

export const categoriesReducer = (state = initialState, action: any) => {
    const { type, payload } = action;
    switch(type) {
        case CategoriesActions.SET_IS_LOADING:
            return {
                ...state,
                isLoading: payload,
            }
        case CategoriesActions.SET_IS_REQUEST_STARTED:
            return {
                ...state,
                isRequestStarted: payload,
            }
        case CategoriesActions.SET_CATEGORIES_DATA:
            return {
                ...state,
                data: payload,
            }
        default:
            return state;
    }
}