import { RootState } from "../..";

export const selectIsDrawerOpen = ((state: RootState): boolean => state.app.isDrawerOpen);