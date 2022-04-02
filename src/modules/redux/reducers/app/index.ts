import { AppStateActions } from "./types";

const initialState = {
    isDrawerOpen: false
}

export const appReducer = (state = initialState, action: any) => {
    const { type, payload } = action;
    switch(type) {
        case AppStateActions.SET_DRAWER_STATE:
            return {
                ...state,
                isDrawerOpen: payload,
            }
        default:
            return state;
    }
}