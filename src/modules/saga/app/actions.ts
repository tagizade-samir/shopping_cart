import { AppSagaActions } from "./types";

export const synchronizeAppSaga = () => ({
    type: AppSagaActions.SYNCHRONIZE_APP,
});