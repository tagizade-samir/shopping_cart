import { RootState } from "../..";

export const selectIsUserAuthorized = ((state: RootState): boolean => state.user.isAuthorized);