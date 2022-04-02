import { RootState } from "../..";

export const getIsDrawerOpen = ((state: RootState): boolean => state.app.isDrawerOpen);