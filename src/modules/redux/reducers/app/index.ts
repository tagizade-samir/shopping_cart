import { AppStateActions } from "./types";

const initialState = {
    isDrawerOpen: false,
    snackbarState: {
        isOpen: false,
        text: '',
        severity: 'info'
    }
}

export const appReducer = (state = initialState, action: any) => {
    const { type, payload } = action;
    switch(type) {
        case AppStateActions.SET_DRAWER_STATE:
            return {
                ...state,
                isDrawerOpen: payload,
            }
        case AppStateActions.SET_SNACKBAR_STATE:
            return {
                ...state,
                snackbarState: {
                    isOpen: payload.isOpen,
                    text: payload.text,
                    severity: payload.severity,
                },
            }
        default:
            return state;
    }
}