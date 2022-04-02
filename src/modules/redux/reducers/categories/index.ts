import { CategoriesActions } from "./types";

const initialState = {
    isLoading: false
}

export const categoriesReducer = (state = initialState, action: any) => {
    const { type, payload } = action;
    switch(type) {
        case CategoriesActions.SET_IS_LOADING:
            return {
                ...state,
                isLoading: payload,
            }
        default:
            return state;
    }
}