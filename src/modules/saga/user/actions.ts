import { UserSagaActions } from "./types";

export const setUserSaga = (payload: boolean) => ({
    type: UserSagaActions.SET_USER_SAGA,
    payload
});