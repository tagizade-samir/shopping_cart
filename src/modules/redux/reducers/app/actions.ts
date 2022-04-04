import { AppStateActions } from "./types";

export const setDrawerStateAC = (payload: boolean) => ({
    type: AppStateActions.SET_DRAWER_STATE,
    payload,
});

export const setSnackbarStateAC = (payload: any) => ({
    type: AppStateActions.SET_SNACKBAR_STATE,
    payload,
});