import { AppStateActions } from "./types";

export const setDrawerStateAC = (payload: boolean) => ({
    type: AppStateActions.SET_DRAWER_STATE,
    payload,
});