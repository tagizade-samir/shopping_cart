import { IUser, UserActions } from "./types";

export const setUserDataAC = (payload: IUser) => ({
    type: UserActions.SET_USER,
    payload,
});