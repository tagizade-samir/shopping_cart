import { RootState } from "../..";

export const selectIsDrawerOpen = ((state: RootState): boolean => state.app.isDrawerOpen);

export const selectSnackbarState = ((state: RootState): any => state.app.snackbarState);